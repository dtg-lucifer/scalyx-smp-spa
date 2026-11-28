import React from 'react';
import ServerIPBadge from './ServerIPBadge';
import { Shield, Sparkles, ChevronRight } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#090a10] border-t border-[#1a1b26] text-zinc-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#141520] border border-[#262838] rounded flex items-center justify-center">
                <img src="/assets/items/totem_of_undying.png" alt="Totem" className="w-5 h-5 pixelated" />
              </div>
              <div className="flex items-center font-minecraft tracking-wider text-base font-bold">
                <span className="text-[#55FFFF]">SCALYX</span>
                <span className="text-[#FFAA00] ml-1">SMP</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              The premier Minecraft Java 26.3 Semi-Anarchy realm. High-stakes PvP, 5 singular mythic relics, custom terrain, and a player-driven economy.
            </p>
            <div className="pt-1">
              <ServerIPBadge size="normal" />
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-minecraft text-xs text-white uppercase tracking-wider border-b border-[#1f202e] pb-1.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-minecraft">
              {[
                { id: 'home', label: 'Server Overview' },
                { id: 'events', label: 'Events & Prizes' },
                { id: 'rules', label: 'Rules & Combat Code' },
                { id: 'survival', label: 'Survival Mechanics' },
                { id: 'weapons', label: '5 Mythic Artifacts' },
                { id: 'world', label: 'Custom Biomes' },
                { id: 'economy', label: 'Economy & Trading' },
                { id: 'ranks', label: 'Ranks & Kits' },
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => { setActiveTab(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-cyan-400 text-zinc-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-zinc-600" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specifications (Clean space-between key-value pairs) */}
          <div className="space-y-3">
            <h4 className="font-minecraft text-xs text-white uppercase tracking-wider border-b border-[#1f202e] pb-1.5">
              Specifications
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-[#171824]">
                <span className="text-zinc-400 font-sans">Edition</span>
                <span className="text-zinc-200 font-minecraft text-right">Minecraft Java</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#171824]">
                <span className="text-zinc-400 font-sans">Version</span>
                <span className="text-zinc-200 font-minecraft text-right">26.3 (Latest)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#171824]">
                <span className="text-zinc-400 font-sans">KeepInventory</span>
                <span className="text-red-400 font-minecraft font-semibold text-right">Disabled</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#171824]">
                <span className="text-zinc-400 font-sans">Target TPS</span>
                <span className="text-emerald-400 font-minecraft text-right">20.0 (Paper)</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-zinc-400 font-sans">Mythics Limit</span>
                <span className="text-cyan-400 font-minecraft text-right">1 of Each</span>
              </div>
            </div>
          </div>

          {/* Col 4: Connect & Play */}
          <div className="space-y-3">
            <h4 className="font-minecraft text-xs text-white uppercase tracking-wider border-b border-[#1f202e] pb-1.5">
              Connect &amp; Play
            </h4>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Join active players waging wars, building empires, and hunting the server's singular mythic weapons.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <div className="p-2.5 bg-[#12131d] border border-[#222332] rounded-md text-xs font-minecraft flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Direct Connect</span>
                <span className="text-cyan-400 font-bold">smp.scalyx.in</span>
              </div>
              <div className="p-2.5 bg-[#12131d] border border-[#222332] rounded-md text-xs font-minecraft flex items-center justify-between text-zinc-300">
                <span className="text-zinc-400">Discord</span>
                <a 
                  href="https://discord.gg/scalyx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#5865F2] hover:underline font-bold"
                >
                  discord.gg/scalyx
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: space-between */}
        <div className="pt-6 border-t border-[#171824] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-sans gap-3">
          <div>
            &copy; {new Date().getFullYear()} Scalyx SMP. All rights reserved. Not an official Minecraft product.
          </div>
          <div className="flex items-center gap-3 font-minecraft text-[11px]">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              smp.scalyx.in
            </span>
            <span className="text-zinc-700">•</span>
            <a 
              href="https://discord.gg/scalyx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-[#5865F2] transition-colors"
            >
              discord.gg/scalyx
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
