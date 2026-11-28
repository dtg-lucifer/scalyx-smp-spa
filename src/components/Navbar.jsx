import React, { useState, useEffect } from 'react';
import { 
  Shield, Sparkles, Sword, Globe, ShoppingBag, Trophy, 
  Volume2, VolumeX, Scroll, Flame, MessageCircle, Menu, X,
  ExternalLink
} from 'lucide-react';
import ServerIPBadge from './ServerIPBadge';
import { playClickSound } from '../utils/audio';

export default function Navbar({ activeTab, setActiveTab }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Shield, color: 'text-cyan-400' },
    { id: 'events', label: 'Events', icon: Flame, color: 'text-orange-400' },
    { id: 'rules', label: 'Rules', icon: Scroll, color: 'text-red-400' },
    { id: 'survival', label: 'Survival', icon: Sparkles, color: 'text-emerald-400' },
    { id: 'weapons', label: 'Weapons', icon: Sword, color: 'text-yellow-400' },
    { id: 'world', label: 'World', icon: Globe, color: 'text-blue-400' },
    { id: 'economy', label: 'Economy', icon: ShoppingBag, color: 'text-amber-400' },
    { id: 'ranks', label: 'Ranks', icon: Trophy, color: 'text-purple-400' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (soundEnabled) playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c13]/95 backdrop-blur-md border-b border-[#1c1d28] shadow-md">
      
      {/* TIER 1: BRAND LOGO & ACTION CONTROLS */}
      <div className="border-b border-[#161722]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Brand Logo */}
            <div
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-2 cursor-pointer group select-none shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#141520] border border-[#2b2d3d] rounded flex items-center justify-center shrink-0">
                <img
                  src="/assets/items/totem_of_undying.png"
                  alt="Scalyx Totem"
                  className="w-5 h-5 sm:w-6 sm:h-6 pixelated"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center font-minecraft tracking-wider text-sm sm:text-lg font-bold leading-none">
                  <span className="text-[#55FFFF]">SCALYX</span>
                  <span className="text-[#FFAA00] ml-1">SMP</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 mt-0.5 font-minecraft text-[9px] text-zinc-400 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Semi-Anarchy</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-300">26.3 (Latest)</span>
                </div>
              </div>
            </div>

            {/* Standardized Action Buttons (Exact matching h-9 height) */}
            <div className="flex items-center gap-2 shrink-0">
              <ServerIPBadge size="normal" />

              <a
                href="https://discord.gg/scalyx"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord Community"
                className="hidden md:inline-flex h-9 items-center gap-1.5 px-3 bg-[#141520] hover:bg-[#1a1b28] border border-[#262838] hover:border-[#5865F2]/50 text-zinc-300 hover:text-white rounded-md text-xs font-minecraft transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#5865F2]" />
                <span className="hidden lg:inline">Discord</span>
              </a>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Mute audio' : 'Enable audio'}
                className="h-9 w-9 inline-flex items-center justify-center bg-[#141520] hover:bg-[#1a1b28] border border-[#262838] hover:border-zinc-500 rounded-md text-zinc-400 hover:text-white transition-colors"
              >
                {soundEnabled ? (
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                )}
              </button>

              {/* Mobile Menu Button (h-9 w-9) */}
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (soundEnabled) playClickSound();
                }}
                aria-label="Navigation menu"
                className={`md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border transition-colors ${
                  mobileMenuOpen 
                    ? 'bg-[#221518] border-red-500/50 text-red-400' 
                    : 'bg-[#141520] border-[#262838] text-zinc-300 hover:text-white hover:border-cyan-500/50'
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4 text-cyan-400" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* TIER 2: DESKTOP NAVIGATION BAR (Layout 1 - Standardized h-9 Buttons) */}
      <div className="hidden md:block bg-[#0e0f17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-1.5 py-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`h-9 inline-flex items-center gap-2 px-3.5 rounded-md font-minecraft text-xs select-none transition-colors ${
                    isActive
                      ? 'bg-[#181a26] text-cyan-400 border border-cyan-500/40 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#141520] border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-zinc-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER (Layout 2 - Standardized h-[46px] Grid Buttons) */}
      {mobileMenuOpen && (
        <>
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 top-[57px] bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          />

          <div className="md:hidden fixed top-[57px] left-0 right-0 max-h-[calc(100vh-57px)] overflow-y-auto bg-[#0d0e16] border-b border-[#202230] shadow-xl z-50 p-3.5 space-y-3">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#1b1c26] text-[11px] font-minecraft text-zinc-400">
              <span>Navigation</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Java 26.3
              </span>
            </div>

            {/* Standardized 2-Column Grid (All buttons exact equal h-[46px]) */}
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`h-[46px] w-full flex items-center gap-2.5 px-3 rounded-md text-left transition-colors select-none ${
                      isActive
                        ? 'bg-[#181a26] border border-cyan-500/40 text-cyan-400'
                        : 'bg-[#11121c] border border-[#202230] text-zinc-300 hover:bg-[#161724] hover:text-white'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded flex items-center justify-center bg-black/30 border border-white/5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-zinc-400'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-minecraft text-xs truncate">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="pt-2 border-t border-[#1b1c26] space-y-2">
              <a
                href="https://discord.gg/scalyx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 w-full flex items-center justify-center gap-2 bg-[#171926] hover:bg-[#202334] border border-[#2b2e44] text-zinc-200 hover:text-white rounded-md text-xs font-minecraft transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#5865F2]" />
                <span>Discord Community</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <div className="flex items-center justify-between px-1 text-[10px] font-minecraft text-zinc-500">
                <span>Scalyx SMP</span>
                <span>KeepInventory Disabled</span>
              </div>
            </div>

          </div>
        </>
      )}

    </header>
  );
}
