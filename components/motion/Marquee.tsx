"use client";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

export function Marquee({ children, speed = 25 }: MarqueeProps) {
  return (
    <div className="relative flex overflow-hidden border-y border-hairline py-6">
      <div
        className="flex shrink-0 gap-10 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 gap-10 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}