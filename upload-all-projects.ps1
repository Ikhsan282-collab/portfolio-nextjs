# ============================================================
# Script Upload Batch — Push banyak folder project ke GitHub
# sekaligus, masing-masing jadi repo terpisah.
# ============================================================
#
# CARA PAKAI:
# 1. Pastikan GitHub CLI (gh) sudah terinstall & login:
#      gh auth login
# 2. Edit daftar $projects di bawah ini kalau ada path/nama yang
#    perlu disesuaikan lagi.
# 3. Jalankan script ini dari PowerShell:
#      powershell -ExecutionPolicy Bypass -File upload-all-projects.ps1
#
# CATATAN:
# - Repo dibuat PUBLIC secara default (sesuai permintaan).
#   Ganti "--public" jadi "--private" di bawah kalau berubah pikiran.
# - Kalau folder belum ada .git, script otomatis git init dulu.
# - Kalau folder SUDAH ada .git (misal sudah pernah push), script
#   akan skip init dan langsung coba push ulang.
# ============================================================

$projects = @(
    @{ Path = "D:\xampp\htdocs\arcomnet";              RepoName = "arcomnet-wifi-admin" },
    @{ Path = "D:\xampp\htdocs\Konveksi";               RepoName = "daily-konveksi-admin" },
    @{ Path = "D:\xampp\htdocs\Manajemen_arcomnet";     RepoName = "manajemen-arcomnet" },
    @{ Path = "D:\xampp\htdocs\Jaspindo_Movers";        RepoName = "jaspindo-movers-landing" },
    @{ Path = "D:\xampp\htdocs\Sisteminformasikost";    RepoName = "sistem-informasi-kos" }
    # Tambah baris baru di sini kalau ada folder project lain:
    # @{ Path = "D:\path\ke\folder"; RepoName = "nama-repo-di-github" },
)

# ============================================================
# Jangan edit di bawah ini kecuali kamu tahu apa yang diubah.
# ============================================================

$visibility = "--public"   # ganti ke "--private" kalau perlu

Write-Host ""
Write-Host "=== Mulai proses upload $($projects.Count) project ===" -ForegroundColor Cyan
Write-Host ""

$successList = @()
$failList = @()

foreach ($project in $projects) {
    $path = $project.Path
    $repoName = $project.RepoName

    Write-Host "----------------------------------------" -ForegroundColor DarkGray
    Write-Host "Memproses: $repoName" -ForegroundColor Yellow
    Write-Host "Folder   : $path"

    if (-not (Test-Path $path)) {
        Write-Host "  [SKIP] Folder tidak ditemukan, dilewati." -ForegroundColor Red
        $failList += "$repoName (folder tidak ditemukan: $path)"
        continue
    }

    Push-Location $path

    try {
        $hasGit = Test-Path ".git"

        if (-not $hasGit) {
            Write-Host "  -> git init"
            git init | Out-Null
        } else {
            Write-Host "  -> .git sudah ada, skip init"
        }

        # Pastikan identitas git sudah di-set, kalau belum, git commit akan gagal senyap
        $gitUserName = git config user.name 2>&1
        $gitUserEmail = git config user.email 2>&1
        if ([string]::IsNullOrWhiteSpace($gitUserName) -or [string]::IsNullOrWhiteSpace($gitUserEmail)) {
            Write-Host "  -> Identitas git belum di-set, mengambil dari akun GitHub CLI..."
            $ghUser = gh api user --jq ".login" 2>&1
            $ghEmail = gh api user --jq ".email" 2>&1
            if ([string]::IsNullOrWhiteSpace($ghEmail) -or $ghEmail -eq "null") {
                $ghEmail = "$ghUser@users.noreply.github.com"
            }
            git config user.name "$ghUser"
            git config user.email "$ghEmail"
            Write-Host "  -> git identity di-set: $ghUser <$ghEmail>"
        }

        if (-not (Test-Path ".gitignore")) {
            @"
# Auto-generated
.env
*.log
/vendor/*.tmp
node_modules/
"@ | Out-File -Encoding utf8 ".gitignore"
        }

        git add .
        $commitResult = git commit -m "Initial commit" 2>&1
        $commitExitCode = $LASTEXITCODE

        if ($commitExitCode -ne 0) {
            if ($commitResult -match "nothing to commit") {
                Write-Host "  -> Tidak ada perubahan baru untuk di-commit, lanjut ke push."
            } else {
                Write-Host "  [ERROR COMMIT] Commit gagal, pesan asli:" -ForegroundColor Red
                Write-Host "  $commitResult" -ForegroundColor Red
                Write-Host "  -> Skip project ini, lanjut ke project berikutnya." -ForegroundColor Red
                $failList += "$repoName (commit gagal: $commitResult)"
                Pop-Location
                continue
            }
        }

        $remoteExists = git remote 2>&1 | Select-String "origin"

        if ($remoteExists) {
            Write-Host "  -> Remote 'origin' sudah ada, push langsung."
            git branch -M main
            git push -u origin main
        } else {
            Write-Host "  -> Membuat repo GitHub baru: $repoName ($visibility)"
            gh repo create $repoName $visibility --source=. --remote=origin --push
        }

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  [OK] Berhasil di-push." -ForegroundColor Green
            $successList += $repoName
        } else {
            Write-Host "  [GAGAL] Ada error saat push. Cek pesan di atas." -ForegroundColor Red
            $failList += "$repoName (error saat git/gh command)"
        }
    }
    catch {
        Write-Host "  [ERROR] $($_.Exception.Message)" -ForegroundColor Red
        $failList += "$repoName (exception: $($_.Exception.Message))"
    }
    finally {
        Pop-Location
    }

    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "SELESAI" -ForegroundColor Cyan
Write-Host ""
Write-Host "Berhasil ($($successList.Count)):" -ForegroundColor Green
$successList | ForEach-Object { Write-Host "  - $_" }
Write-Host ""
if ($failList.Count -gt 0) {
    Write-Host "Gagal/dilewati ($($failList.Count)):" -ForegroundColor Red
    $failList | ForEach-Object { Write-Host "  - $_" }
} else {
    Write-Host "Tidak ada yang gagal." -ForegroundColor Green
}
Write-Host ""
