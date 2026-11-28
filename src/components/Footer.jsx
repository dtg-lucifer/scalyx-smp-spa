import React from 'react';
import ServerIPBadge from './ServerIPBadge';
import { Shield, Sparkles, ExternalLink, Terminal, Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#09090e] border-t-2 border-[#1f202b] text-zinc-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#141520] border border-[#2b2d3d] rounded flex items-center justify-center shadow-md">
                <img src="/assets/items/totem_of_undying.png" alt="Totem" className="w-4 h-4 pixelated filter drop-shadow-[0_1px_4px_rgba(255,170,0,0.6)]" />
              </div>
              <div className="flex items-center font-minecraft tracking-wider text-lg font-bold">
                <span className="text-[#55FFFF] mc-shadow-cyan">SCALYX</span>
                <span className="text-[#FFAA00] mc-shadow-gold ml-1.5">SMP</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              The ultimate Minecraft Java 26.3 (Latest) Semi-Anarchy experience. High-stakes PvP, 5 server-unique mythic artifacts, custom world generation, and true player-driven economy.
            </p>
            <div className="pt-1">
              <ServerIPBadge size="normal" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5 font-minecraft">
            <h4 className="text-white text-xs sm:text-sm tracking-wider border-b border-[#222330] pb-1 uppercase">SMP Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; Server Overview &amp; IP
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('events'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; Dynamic Server Events &amp; Prizes
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('rules'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; Server Rules &amp; Combat Code
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('survival'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; Survival Rules &amp; Heads
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('weapons'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; The 5 Mythic Artifacts &amp; Recipes
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('world'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; Terralith &amp; End Revamp
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('ranks'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00ffff] transition-colors">
                  &gt; 8 Ranks &amp; Kit Claims
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Server Specs */}
          <div className="space-y-3 font-minecraft">
            <h4 className="text-white text-base tracking-wider border-b border-[#222330] pb-1 uppercase">Specifications</h4>
            <div className="space-y-2 text-xs font-sans">
              <div className="flex justify-between py-1 border-b border-[#1b1c26]">
                <span className="text-zinc-500">Edition:</span>
                <span className="text-emerald-400 font-minecraft">Minecraft Java</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1b1c26]">
                <span className="text-zinc-500">Version:</span>
                <span className="text-yellow-400 font-minecraft">26.3 (Latest)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1b1c26]">
                <span className="text-zinc-500">KeepInventory:</span>
                <span className="text-red-400 font-minecraft font-bold">DISABLED (ALL RANKS)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1b1c26]">
                <span className="text-zinc-500">Target TPS:</span>
                <span className="text-emerald-400 font-minecraft">20.0 TPS (Dedicated Paper)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Mythic Singularity:</span>
                <span className="text-[#00ffff] font-minecraft">Strictly 1 of Each (5 Mythics)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Community & Support */}
          <div className="space-y-3 font-minecraft">
            <h4 className="text-white text-base tracking-wider border-b border-[#222330] pb-1 uppercase">Connect &amp; Play</h4>
            <p className="text-xs text-zinc-400 font-sans">
              Join hundreds of players forging alliances, waging wars, and hunting down the 5 singular mythic artifacts.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <div className="p-3 bg-[#13141d] border border-[#2b2c3d] rounded text-xs font-minecraft text-center text-zinc-300">
                Direct Connect: <span className="text-[#00ffff] font-bold">smp.scalyx.in</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-4 border-t border-[#1b1c26] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-sans gap-2">
          <div>
            &copy; {new Date().getFullYear()} Scalyx SMP. All rights reserved. Not an official Minecraft product.
          </div>
          <div className="flex items-center gap-1 font-minecraft">
            <span>Server IP:</span>
            <span className="text-emerald-400">smp.scalyx.in</span>
            <span className="mx-1">•</span>
            <span>Discord:</span>
            <span className="text-[#00ffff]">discord.gg/scalyx</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
