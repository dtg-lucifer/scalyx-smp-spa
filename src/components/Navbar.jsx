import React, { useState } from 'react';
import { Shield, Sparkles, Sword, Globe, ShoppingBag, Trophy, Menu, X, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import ServerIPBadge from './ServerIPBadge';
import { playClickSound } from '../utils/audio';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Shield },
    { id: 'survival', label: 'Survival', icon: Sparkles },
    { id: 'weapons', label: 'Weapons', icon: Sword },
    { id: 'world', label: 'World', icon: Globe },
    { id: 'economy', label: 'Economy', icon: ShoppingBag },
    { id: 'ranks', label: 'Ranks', icon: Trophy },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (soundEnabled) playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d0e14]/95 backdrop-blur-md border-b-2 border-[#252530] shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1b1c2b] via-[#12131d] to-[#0d0e16] border border-[#3d405a] rounded flex items-center justify-center shadow-[inset_1px_1px_0px_rgba(255,255,255,0.15),inset_-1px_-1px_0px_rgba(0,0,0,0.8),0_2px_8px_rgba(0,0,0,0.5)] group-hover:border-[#55FFFF] group-hover:shadow-[0_0_15px_rgba(85,255,255,0.35)] transition-all duration-200">
              <img
                src="/assets/items/totem_of_undying.png"
                alt="Scalyx Totem"
                className="w-6 h-6 sm:w-7 sm:h-7 pixelated group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 filter drop-shadow-[0_1px_6px_rgba(255,170,0,0.7)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center font-minecraft tracking-wider text-lg sm:text-xl font-bold leading-none">
                <span className="text-[#55FFFF] mc-shadow-cyan drop-shadow-[0_0_8px_rgba(85,255,255,0.35)] group-hover:brightness-110 transition-all">
                  SCALYX
                </span>
                <span className="text-[#FFAA00] mc-shadow-gold drop-shadow-[0_0_8px_rgba(255,170,0,0.35)] ml-1.5 group-hover:brightness-110 transition-all">
                  SMP
                </span>
              </div>
              <div className="flex items-center gap-1 mt-0.5 font-minecraft text-[9px] sm:text-[10px] tracking-wider uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#55FF55] animate-pulse shadow-[0_0_4px_#55FF55]"></span>
                <span className="text-[#55FF55] font-semibold mc-shadow">SEMI-ANARCHY</span>
                <span className="text-zinc-600 font-bold">•</span>
                <span className="text-[#FFFF55] font-semibold mc-shadow">1.21.4</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#141520] p-1 rounded-lg border border-[#262738]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-minecraft text-xs transition-all ${
                    isActive
                      ? 'bg-[#222336] text-[#00ffff] border-t-2 border-[#00ffff] shadow-[0_2px_8px_rgba(0,255,255,0.2)] font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-[#1a1b29]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00ffff]' : 'text-zinc-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Server IP & Audio */}
          <div className="hidden sm:flex items-center gap-2">
            <ServerIPBadge size="normal" />

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
              className="p-1.5 bg-[#161722] hover:bg-[#222334] border border-[#2f3044] rounded text-zinc-400 hover:text-white transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-500" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <div className="sm:hidden">
              <ServerIPBadge size="normal" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#161722] border border-[#2b2c3e] rounded text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#10111a] border-b-2 border-[#2b2c3f] px-4 pt-3 pb-5 space-y-3">
          <div className="hidden sm:block pb-2 border-b border-[#232433]">
            <ServerIPBadge size="normal" className="w-full justify-center" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 p-2.5 rounded font-minecraft text-xs transition-all ${
                    isActive
                      ? 'bg-[#232436] text-[#00ffff] border-l-4 border-[#00ffff] font-bold'
                      : 'bg-[#151622] text-zinc-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
