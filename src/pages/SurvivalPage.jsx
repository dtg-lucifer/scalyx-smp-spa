import React from 'react';
import { 
  Skull, Shield, Box, Home, Compass, Trash2, User, Send, 
  CheckCircle2, AlertOctagon, Award, Sword, Radio, Scroll, Gavel 
} from 'lucide-react';
import ServerIPBadge from '../components/ServerIPBadge';
import { playClickSound } from '../utils/audio';

export default function SurvivalPage({ setActiveTab }) {
  const survivalFeatures = [
    {
      icon: Box,
      title: '6-Row Portable Ender Chest',
      command: '/ec',
      badge: '54 SLOTS',
      badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-500/50',
      desc: 'Access your fully unlocked 54-slot deluxe Ender Chest from anywhere in the world. Perfect for securing your god sets and ancient debris away from looters.'
    },
    {
      icon: Home,
      title: 'Interactive Home Manager',
      command: '/homes',
      badge: 'UP TO 15 HOMES',
      badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/50',
      desc: 'Intuitive graphical GUI to set, manage, rename, and teleport to up to 15 personal warp waypoints across Overworld, Nether, and End.'
    },
    {
      icon: Award,
      title: 'Mythic Showcase & 3x3 Altar',
      command: '/artifacts or /mythics',
      badge: 'INTERACTIVE GUI',
      badgeColor: 'bg-yellow-900/60 text-yellow-300 border-yellow-500/50',
      desc: 'Inspect real-time crafted statuses, live carrier identities, coordinates, complete ability breakdowns, and interactive 3x3 crafting tables in-game.'
    },
    {
      icon: Skull,
      title: 'Severed Player Head Trophies',
      command: 'Combat Passive',
      badge: 'GUARANTEED DROPS',
      badgeColor: 'bg-red-900/60 text-red-300 border-red-500/50',
      desc: 'Slaying any player with a Mythic Weapon guarantees their authentic severed player head drops as a trophy of war, recording victim, killer, weapon, and timestamp!'
    },
    {
      icon: Compass,
      title: 'Safety-Checked RTP',
      command: '/rtp',
      badge: '15,000 BLOCK RADIUS',
      badgeColor: 'bg-cyan-900/60 text-cyan-300 border-cyan-500/50',
      desc: 'Instantly warp into uncharted wilderness. Our intelligent safety algorithm guarantees you never spawn in lava, mid-air, oceans, or suffocating blocks.'
    },
    {
      icon: Trash2,
      title: 'Incinerator Trash Can',
      command: '/trash',
      badge: 'INSTANT DISPOSAL',
      badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-600',
      desc: 'Opened on-demand to safely incinerate unwanted mob drops, diorite, seeds, or clutter while strip-mining without littering the ground.'
    },
    {
      icon: User,
      title: 'Dynamic Skin Wardrobe',
      command: '/skin <name>',
      badge: 'LIVE MOJANG SYNC',
      badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-500/50',
      desc: 'Swap your character skin dynamically in real-time without logging off. Fetch any registered Mojang username or custom URL.'
    },
    {
      icon: Send,
      title: 'Teleportation System',
      command: '/tpa & /tpahere',
      badge: 'SECURE PROMPTS',
      badgeColor: 'bg-blue-900/60 text-blue-300 border-blue-500/50',
      desc: 'Request teleportation to comrades with prompt accept/deny actions. Includes a 3-second combat movement cancel to prevent PvP combat logging.'
    }
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-minecraft rounded-full">
          <Skull className="w-4 h-4" />
          <span>TRUE SEMI-ANARCHY SURVIVAL</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          SURVIVAL &amp; SERVER MECHANICS
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Scalyx SMP balances brutal high-stakes PvP with elite quality-of-life tools designed to make every expedition, war, and bunker build smooth and exhilarating.
        </p>
      </div>

      {/* The Core Law: KeepInventory OFF */}
      <div className="mc-panel p-5 sm:p-6 rounded-xl shadow-xl border-l-4 border-l-red-600 bg-gradient-to-r from-red-950/30 to-[#1b1c26]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <AlertOctagon className="w-6 h-6 text-red-500 animate-pulse shrink-0" />
              <h2 className="font-minecraft text-lg sm:text-xl text-red-400 font-bold tracking-wider">
                NO KEEPINVENTORY. EVER.
              </h2>
            </div>
            <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed max-w-3xl">
              We believe true Minecraft tension exists only when death carries genuine consequences. On Scalyx SMP, <strong className="text-white">KeepInventory is strictly disabled for all ranks, including donators and server administrators</strong>. Mythic weapons always drop upon combat death!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-minecraft text-zinc-300">
              <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-red-900/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>Full Inventory Drop</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-red-900/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>Mythic Weapons Drop</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-black/40 rounded border border-red-900/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>Zero Bypass Permissions</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-3.5 bg-black/50 border border-red-900/60 rounded text-center w-full lg:w-56 shrink-0">
            <Skull className="w-8 h-8 text-red-500 mb-1" />
            <span className="font-minecraft text-sm sm:text-base text-white font-bold">DEATH = LOOT</span>
            <span className="text-[11px] text-zinc-400 font-sans mt-0.5">Slay your rivals to seize their mythical weapons.</span>
          </div>
        </div>
      </div>

      {/* Rules Notice Banner */}
      <div className="mc-panel p-4 sm:p-5 rounded-xl border border-red-900/60 bg-[#161217] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-950 border border-red-600 rounded text-red-400 shrink-0">
            <Gavel className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-minecraft text-sm sm:text-base text-yellow-300 font-bold">
              STRICT COMBAT &amp; ELYTRA RULES IN EFFECT
            </h3>
            <p className="text-xs text-zinc-300 font-sans mt-0.5">
              Players cannot use Kit Armor and Mythic Swords simultaneously. No Elytra fleeing in combat. Violations lead to rank demotion and item confiscation.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            if (setActiveTab) setActiveTab('rules');
            playClickSound();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mc-button mc-button-red flex items-center gap-1.5 shrink-0 whitespace-nowrap"
        >
          <Scroll className="w-4 h-4" />
          <span>VIEW SERVER RULES</span>
        </button>
      </div>

      {/* Feature Grid */}
      <div className="space-y-4">
        <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
          SURVIVAL COMMAND SUITE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {survivalFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="mc-panel p-5 rounded-lg flex flex-col justify-between hover:border-[#4b4c62] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-[#1d1e2b] border border-[#37384e] text-[#00ffff] rounded">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-minecraft px-2 py-0.5 rounded border ${feat.badgeColor}`}>
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-minecraft text-base sm:text-lg text-white font-bold tracking-wide mb-1">
                    {feat.title}
                  </h3>
                  
                  <div className="inline-block bg-black/40 border border-[#2b2c3d] px-2 py-0.5 rounded text-xs font-minecraft text-yellow-300 mb-2">
                    {feat.command}
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
