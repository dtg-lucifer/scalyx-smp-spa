import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
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
        particleCount: 35,
        spread: 55,
        origin: { y: 0.8 },
        colors: ['#00ffff', '#ffaa00', '#55ff55']
      });
    } catch (e) {}

    setTimeout(() => setCopied(false), 2200);
  };

  if (size === 'large') {
    return (
      <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 p-1.5 bg-[#141520] border border-[#2b2d3d] rounded-lg shadow-lg w-full max-w-md mx-auto ${className}`}>
        <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-[#0e0f17] border border-[#202230] rounded-md min-w-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[10px] text-zinc-400 font-minecraft uppercase tracking-wider leading-none mb-1">
              Server IP
            </span>
            <span className="text-base font-minecraft text-cyan-300 font-bold select-all leading-none">
              {ip}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="mc-button mc-button-green h-10 shrink-0 flex items-center justify-center gap-1.5 px-4 text-xs"
          title="Click to copy server IP"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy IP</span>
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <button
        onClick={handleCopy}
        className="group relative h-9 inline-flex items-center gap-2 px-3 bg-[#141520] hover:bg-[#1a1b28] border border-[#262838] hover:border-cyan-500/50 transition-colors rounded-md text-xs select-none"
        title="Click to copy server IP"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <span className="font-minecraft text-xs text-zinc-300 group-hover:text-cyan-300 transition-colors">
          <span className="hidden sm:inline">{ip}</span>
          <span className="sm:hidden">{copied ? 'Copied' : 'Copy IP'}</span>
        </span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 shrink-0 transition-colors" />
        )}
      </button>
    </div>
  );
}
