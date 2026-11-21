import React, { useState } from 'react';
import { Copy, Check, Server } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function ServerIPBadge({ size = 'normal', className = '' }) {
  const [copied, setCopied] = useState(false);
  const ip = "smp.scalyx.in";

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    playSuccessSound();

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00ffff', '#ffaa00', '#55ff55']
      });
    } catch (e) {}

    setTimeout(() => setCopied(false), 2500);
  };

  if (size === 'large') {
    return (
      <div className={`relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-2 bg-[#181822] border-2 border-[#3c3f41] rounded-lg shadow-xl w-full max-w-md mx-auto ${className}`}>
        {/* Left: Server IP Pill */}
        <div className="flex-1 flex items-center gap-3 px-3.5 py-2 bg-[#101017] border border-[#2b2b38] rounded-md min-w-0">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[10px] text-zinc-400 font-minecraft uppercase tracking-wider leading-none mb-1">
              SERVER IP
            </span>
            <span className="text-base sm:text-lg font-minecraft text-[#55FFFF] font-bold tracking-wider select-all leading-none mc-shadow-cyan">
              {ip}
            </span>
          </div>
        </div>

        {/* Right: Copy Button */}
        <button
          onClick={handleCopy}
          className="mc-button mc-button-green shrink-0 flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs whitespace-nowrap"
          title="Click to copy server IP"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-200" />
              <span>COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>COPY IP</span>
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        onClick={handleCopy}
        className="group relative flex items-center gap-2 px-2.5 py-1 bg-[#141520] hover:bg-[#1f202e] border border-[#323348] hover:border-[#00ffff] transition-all rounded shadow-sm text-xs"
        title="Click to copy IP"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-minecraft text-xs text-zinc-300 group-hover:text-[#00ffff] transition-colors">{ip}</span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
        )}
      </button>
    </div>
  );
}
