"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

type TerminalLine = {
  id: number;
  type: "input" | "output";
  text: string;
};

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami       tampilkan identitas",
    "  role         posisi & pendidikan",
    "  skills       daftar kemampuan teknis",
    "  stack        tech stack yang dipakai",
    "  experience   pengalaman kerja",
    "  projects     lihat project",
    "  contact      cara menghubungi saya",
    "  clear        bersihkan layar",
  ],
  whoami: ["muhammad-nur-ikhsan", "Web Developer â€” Laravel & Modern Frontend"],
  role: ["Fresh Graduate â€” Teknik Informatika", "STMIK Mardira Indonesia"],
  skills: [
    "Web Development",
    "Front-End Development",
    "UI/UX Design",
    "Software Architecture",
  ],
  stack: [
    "Laravel Â· PHP Â· MySQL",
    "JavaScript Â· HTML Â· CSS",
    "React Â· Next.js Â· Tailwind CSS",
  ],
  experience: [
    "Programmer @ PT Dcistem Cyber Internasional",
    "â†’ Company profile, landing page, sistem pemesanan WiFi",
  ],
  projects: ["Membuka daftar project...", "â†’ ketik: open projects"],
  contact: ["Form kontak tersedia di bagian bawah halaman.", "â†’ ketik: open contact"],
};

const EASTER_EGGS: Record<string, string[]> = {
  "sudo hire-me": ["Permission granted. âœ…", "Redirecting recruiter to #contact..."],
  "rm -rf bugs": ["Nice try. Bugs are permanent, like this joke."],
};

const BOOT_SEQUENCE = [
  "$ whoami",
  "muhammad-nur-ikhsan",
  "$ echo $ROLE",
  "Web Developer â€” Laravel & Modern Frontend",
  "",
  "Ketik 'help' untuk melihat daftar perintah.",
];

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return idCounter;
}

export function HeroTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Boot sequence: ketik otomatis baris demi baris saat pertama kali render.
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setLines(BOOT_SEQUENCE.map((text) => ({ id: nextId(), type: "output", text })));
      setBooted(true);
      return;
    }

    let cancelled = false;
    async function boot() {
      for (const line of BOOT_SEQUENCE) {
        if (cancelled) return;
        await new Promise((resolve) => setTimeout(resolve, 150));
        setLines((prev) => [...prev, { id: nextId(), type: "output", text: line }]);
      }
      if (!cancelled) setBooted(true);
    }
    boot();
    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-scroll ke bawah tiap ada baris baru.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  function runCommand(raw: string) {
    const command = raw.trim().toLowerCase();
    if (!command) return;

    setLines((prev) => [...prev, { id: nextId(), type: "input", text: raw }]);
    setHistory((prev) => [...prev, raw]);
    setHistoryIndex(null);

    if (command === "clear") {
      setLines([]);
      return;
    }
    if (command === "open projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      setLines((prev) => [...prev, { id: nextId(), type: "output", text: "â†’ scrolling to #projects" }]);
      return;
    }
    if (command === "open contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setLines((prev) => [...prev, { id: nextId(), type: "output", text: "â†’ scrolling to #contact" }]);
      return;
    }

    const output =
      EASTER_EGGS[command] ??
      COMMANDS[command] ??
      [`command not found: ${command}`, "ketik 'help' untuk daftar perintah"];

    setLines((prev) => [
      ...prev,
      ...output.map((text) => ({ id: nextId(), type: "output" as const, text })),
    ]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  }

  return (
    <div
      className="w-full max-w-md border border-hairline bg-surface-card font-mono text-sm overflow-hidden"
      onClick={() => inputRef.current?.focus()}
      role="group"
      aria-label="Terminal interaktif â€” ketik 'help' untuk daftar perintah"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline">
        <span className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
        <span className="ml-2 text-xs text-body/60">guest@portfolio: ~</span>
      </div>

      <div ref={bodyRef} className="h-72 overflow-y-auto px-4 py-4 space-y-1">
        {lines.map((line) => (
          <div key={line.id} className={line.type === "input" ? "text-on-dark" : "text-body"}>
            {line.type === "input" ? `$ ${line.text}` : line.text}
          </div>
        ))}

        {booted && (
          <div className="flex items-center gap-2">
            <span className="text-m-blue-dark">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              aria-label="Ketik perintah terminal"
              className="flex-1 bg-transparent outline-none text-on-dark caret-m-blue-dark"
            />
          </div>
        )}
      </div>
    </div>
  );
}
