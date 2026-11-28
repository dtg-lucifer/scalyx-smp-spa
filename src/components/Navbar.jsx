import React, { useState } from 'react';
import { 
  Shield, Sparkles, Sword, Globe, ShoppingBag, Trophy, 
  Volume2, VolumeX, Scroll, Flame, ExternalLink, MessageCircle 
} from 'lucide-react';
import ServerIPBadge from './ServerIPBadge';
import { playClickSound } from '../utils/audio';

export default function Navbar({ activeTab, setActiveTab }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Shield, color: 'text-cyan-400' },
    { id: 'events', label: 'Events', icon: Flame, color: 'text-orange-400', badge: 'HOT' },
    { id: 'rules', label: 'Rules', icon: Scroll, color: 'text-red-400' },
    { id: 'survival', label: 'Survival', icon: Sparkles, color: 'text-emerald-400' },
    { id: 'weapons', label: 'Weapons', icon: Sword, color: 'text-yellow-400' },
    { id: 'world', label: 'World', icon: Globe, color: 'text-blue-400' },
    { id: 'economy', label: 'Economy', icon: ShoppingBag, color: 'text-amber-400' },
    { id: 'ranks', label: 'Ranks', icon: Trophy, color: 'text-purple-400' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (soundEnabled) playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d14]/95 backdrop-blur-md border-b-2 border-[#20212e] shadow-2xl">
      
      {/* TIER 1: BRAND LOGO & SERVER UTILITIES */}
      <div className="border-b border-[#1b1c28]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-14">
            
            {/* Brand Logo */}
            <div
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#1b1c2b] via-[#12131d] to-[#0d0e16] border border-[#3d405a] rounded flex items-center justify-center shadow-[inset_1px_1px_0px_rgba(255,255,255,0.15),inset_-1px_-1px_0px_rgba(0,0,0,0.8),0_2px_8px_rgba(0,0,0,0.5)] group-hover:border-[#55FFFF] group-hover:shadow-[0_0_15px_rgba(85,255,255,0.35)] transition-all duration-200">
                <img
                  src="/assets/items/totem_of_undying.png"
                  alt="Scalyx Totem"
                  className="w-5 h-5 sm:w-6 sm:h-6 pixelated group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 filter drop-shadow-[0_1px_6px_rgba(255,170,0,0.7)]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center font-minecraft tracking-wider text-base sm:text-lg font-bold leading-none">
                  <span className="text-[#55FFFF] mc-shadow-cyan drop-shadow-[0_0_8px_rgba(85,255,255,0.35)] group-hover:brightness-110 transition-all">
                    SCALYX
                  </span>
                  <span className="text-[#FFAA00] mc-shadow-gold drop-shadow-[0_0_8px_rgba(255,170,0,0.35)] ml-1.5 group-hover:brightness-110 transition-all">
                    SMP
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-0.5 font-minecraft text-[8px] sm:text-[9px] tracking-wider uppercase">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#55FF55] animate-pulse shadow-[0_0_4px_#55FF55]"></span>
                  <span className="text-[#55FF55] font-semibold mc-shadow">SEMI-ANARCHY</span>
                  <span className="text-zinc-600 font-bold">•</span>
                  <span className="text-[#FFFF55] font-semibold mc-shadow">26.3 (Latest)</span>
                </div>
              </div>
            </div>

            {/* Right Side: Server IP Copy + Discord + Audio Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <ServerIPBadge size="normal" />

              <a
                href="https://discord.gg/scalyx"
                target="_blank"
                rel="noopener noreferrer"
                title="Join Discord Community"
                className="hidden md:flex items-center gap-1 px-2.5 py-1 bg-[#141520] hover:bg-[#1e1f30] border border-[#2b2c3e] hover:border-[#5865F2] text-[#5865F2] hover:text-white rounded text-xs font-minecraft transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">DISCORD</span>
              </a>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
                className="p-1.5 bg-[#141520] hover:bg-[#1f202e] border border-[#2b2c3e] hover:border-zinc-500 rounded text-zinc-400 hover:text-white transition-colors"
              >
                {soundEnabled ? (
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* TIER 2: UNIFIED FIRSTHAND NAVIGATION BAR */}
      <div className="bg-[#10111a]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-start md:justify-center gap-1 sm:gap-1.5 py-1.5 overflow-x-auto no-scrollbar scroll-smooth">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md font-minecraft text-xs whitespace-nowrap transition-all duration-150 select-none ${
                    isActive
                      ? 'bg-[#1e2032] text-[#00ffff] font-bold shadow-[0_2px_10px_rgba(0,255,255,0.2)] border-b-2 border-[#00ffff]'
                      : 'text-zinc-300 hover:text-white hover:bg-[#161724]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#00ffff]' : item.color}`} />
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="hidden sm:inline-block text-[8px] font-minecraft font-bold px-1 py-0.2 rounded bg-orange-950 text-orange-400 border border-orange-600/50 leading-none">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

    </header>
  );
}
