# ============================================================
# Script Upload — Push project Portfolio Next.js ke GitHub
# ============================================================
#
# CARA PAKAI:
# 1. Pastikan GitHub CLI (gh) sudah terinstall & login:
#      gh auth login
# 2. Sesuaikan $path dan $repoName di bawah kalau perlu.
# 3. Jalankan dari PowerShell:
#      powershell -ExecutionPolicy Bypass -File upload-portfolio.ps1
#
# CATATAN:
# - Repo dibuat PUBLIC secara default.
#   Ganti "--public" jadi "--private" di bawah kalau mau privat.
# - Kalau folder belum ada .git, script otomatis git init dulu.
# - Kalau folder SUDAH ada .git (misal sudah pernah push), script
#   akan skip init dan langsung coba push ulang.
# ============================================================

$path     = "D:\xampp\htdocs\portfolio-nextjs"
$repoName = "portfolio-nextjs"
$visibility = "--public"   # ganti ke "--private" kalau perlu

Write-Host ""
Write-Host "=== Upload project: $repoName ===" -ForegroundColor Cyan
Write-Host "Folder: $path"
Write-Host ""

if (-not (Test-Path $path)) {
    Write-Host "[GAGAL] Folder tidak ditemukan: $path" -ForegroundColor Red
    exit 1
}

Push-Location $path

try {
    $hasGit = Test-Path ".git"

    if (-not $hasGit) {
        Write-Host "-> git init"
        git init | Out-Null
    } else {
        Write-Host "-> .git sudah ada, skip init"
    }

    # Pastikan identitas git sudah di-set, kalau belum, git commit akan gagal senyap
    $gitUserName = git config user.name 2>&1
    $gitUserEmail = git config user.email 2>&1
    if ([string]::IsNullOrWhiteSpace($gitUserName) -or [string]::IsNullOrWhiteSpace($gitUserEmail)) {
        Write-Host "-> Identitas git belum di-set, mengambil dari akun GitHub CLI..."
        $ghUser = gh api user --jq ".login" 2>&1
        $ghEmail = gh api user --jq ".email" 2>&1
        if ([string]::IsNullOrWhiteSpace($ghEmail) -or $ghEmail -eq "null") {
            $ghEmail = "$ghUser@users.noreply.github.com"
        }
        git config user.name "$ghUser"
        git config user.email "$ghEmail"
        Write-Host "-> git identity di-set: $ghUser <$ghEmail>"
    }

    # .gitignore khusus Next.js — dibuat kalau belum ada
    if (-not (Test-Path ".gitignore")) {
        Write-Host "-> .gitignore belum ada, membuat default Next.js .gitignore"
        @"
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
"@ | Out-File -Encoding utf8 ".gitignore"
    } else {
        Write-Host "-> .gitignore sudah ada, tidak diubah"
    }

    git add .
    $commitResult = git commit -m "Initial commit - portfolio dengan SEO metadata, sitemap, robots, OG image" 2>&1
    $commitExitCode = $LASTEXITCODE

    if ($commitExitCode -ne 0) {
        if ($commitResult -match "nothing to commit") {
            Write-Host "-> Tidak ada perubahan baru untuk di-commit, lanjut ke push."
        } else {
            Write-Host "[ERROR COMMIT] Commit gagal, pesan asli:" -ForegroundColor Red
            Write-Host "$commitResult" -ForegroundColor Red
            Pop-Location
            exit 1
        }
    }

    $remoteExists = git remote 2>&1 | Select-String "origin"

    if ($remoteExists) {
        Write-Host "-> Remote 'origin' sudah ada, push langsung."
        git branch -M main
        git push -u origin main
    } else {
        Write-Host "-> Membuat repo GitHub baru: $repoName ($visibility)"
        gh repo create $repoName $visibility --source=. --remote=origin --push
    }

    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "[OK] Berhasil di-push ke GitHub." -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "[GAGAL] Ada error saat push. Cek pesan di atas." -ForegroundColor Red
    }
}
catch {
    Write-Host "[ERROR] $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    Pop-Location
}

Write-Host ""
