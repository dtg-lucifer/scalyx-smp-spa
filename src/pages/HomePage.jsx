import React, { useState } from 'react';
import ServerIPBadge from '../components/ServerIPBadge';
import CraftingGrid, { MYTHIC_RECIPES } from '../components/CraftingGrid';
import { 
  Sword, Shield, Flame, Compass, Skull, Coins, Zap, Users, 
  Trophy, ChevronRight, Award, AlertTriangle, Target, Radio, Scroll, 
  Crown, Moon, Gift 
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function HomePage({ setActiveTab }) {
  const [featuredArtifact, setFeaturedArtifact] = useState('lifestealer');

  const pillars = [
    {
      icon: Skull,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10 border-red-500/30',
      title: 'KeepInventory is OFF',
      tagline: 'High-Stakes Semi-Anarchy',
      desc: 'No safety nets. Every rank, donator, and player drops their full inventory upon death. High-stakes PvP where true strategy, skill, and nerve dictate survival.'
    },
    {
      icon: Sword,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10 border-yellow-500/30',
      title: '5 Server-Unique Mythic Artifacts',
      tagline: 'Only 1 of Each Exists! (/artifacts)',
      desc: 'Singular legendary weapons: Lifestealer, Worldbreaker Mace, Gungnir Spear, Poseidon\'s Tempest, and Doomherald Crossbow. Emergency server alarms, 30m broadcast hunt, and guaranteed severed player head trophies!'
    },
    {
      icon: Zap,
      color: 'text-[#00ffff]',
      bgColor: 'bg-cyan-500/10 border-cyan-500/30',
      title: '4 Elemental Mythic Swords',
      tagline: 'Sonic, Flame, Decay & Void',
      desc: 'Charged 5s ultimates (hold right-click) and brutal 10% on-hit combat passives: Sculk sonic bursts, unquenchable flame, wither necrosis, and anti-gravity levitation with a strict 4-heart balance cap.'
    },
    {
      icon: Compass,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      title: 'Revamped Dimensions',
      tagline: 'Terralith, Incendium & Stellarity',
      desc: 'Exploration reinvented. Over 85 custom Overworld biomes, towering volcanic nether citadels, and a terrifying multi-phase Ender Dragon arena without client mods.'
    },
    {
      icon: Coins,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      title: 'Scam-Proof Economy',
      tagline: 'DonutAH, Server Shop & /trade',
      desc: 'Thriving player-driven marketplace with secure dual-lock trading GUI, 54-slot portable Ender Chests (/ec), and DonutSMP-style 3x3x1 Super Pickaxes.'
    },
    {
      icon: Trophy,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/30',
      title: 'Hierarchical Ranks',
      tagline: 'Earnable & Downward Kits',
      desc: 'Higher ranks automatically claim all lower rank kits! Scale your health pool dynamically up to 20 full hearts (40 HP) with full god armor sets.'
    }
  ];

  const artifactDetails = {
    lifestealer: {
      name: '⚔ Lifestealer ⚔',
      type: 'Netherite Sword (1.6 Speed)',
      highlight: 'Steals up to 4 Hearts on-hit, Wither II decay, and 10-block Siphon Nova (+10 Hearts for 5m).',
      lore: 'Crafted via the solitary Dragon Egg, 4 Netherite Blocks, and 4 God Apples. The apex relic of Scalyx SMP.'
    },
    mace: {
      name: '⚡ Worldbreaker Mace ⚡',
      type: 'Heavy Mace (1.6 Sword Speed)',
      highlight: '100% Lightning Stun (5s freeze), mid-air Double Jump, and 10-block Seismic Cataclysm explosion.',
      lore: 'Crafted with a Heavy Core, Breeze Rods, Netherite Blocks, and God Apples. Catastrophic aerial slam attack.'
    },
    spear: {
      name: '🌿 Gungnir, Sovereign Spear 🌿',
      type: 'Netherite Spear (1.6 Speed)',
      highlight: 'Zero Hunger Cost, 100% fall damage negation, shield-breaker, and 35-block Verdant Harpoon beam.',
      lore: 'Crafted with a Nether Star, Netherite Blocks, Echo Shards, and Heart of the Sea. Ancient sovereign spear.'
    },
    trident: {
      name: '🔱 Poseidon\'s Abyssal Tempest 🔱',
      type: 'Legendary Trident (1.6 Speed)',
      highlight: 'Permanent water buffs, Anywhere Riptide on right-click, whirlpool trap, and 25-block Tsunami Cataclysm.',
      lore: 'Crafted with Heart of the Sea, 2 Tridents, Netherite Blocks, God Apples, and Conduit. Master of the seas.'
    },
    crossbow: {
      name: '💥 Doomherald, Oblivion Ballista 💥',
      type: 'Heavy Crossbow (Quick Charge V)',
      highlight: '2 Hearts pure true damage bypassing all armor, 30% Rapid Barrage burst, and 10-block Calamity Nuke.',
      lore: 'Crafted with Nether Star, Crossbow, Dragon\'s Breath, Netherite Blocks, and God Apple. Pure siege destruction.'
    }
  };

  const currentArtifactInfo = artifactDetails[featuredArtifact] || artifactDetails.lifestealer;

  return (
    <div className="space-y-16 sm:space-y-20">
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-14 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-b from-[#00ffff]/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171822] border border-[#36384d] rounded-full text-[11px] font-minecraft text-[#00ffff] uppercase tracking-wider shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            MINECRAFT JAVA 1.21.4 (PAPER 26.3) • ACTIVE REALM
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-minecraft font-bold tracking-wide text-white mc-shadow leading-tight">
            SURVIVE. HUNT. <span className="text-[#00ffff]">CONQUER.</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            Scalyx SMP is a premier semi-anarchy Minecraft realm engineered for true competitors. No keep-inventory crutches. Unrestricted player wars, 5 singular mythical artifacts, DonutSMP tools, and custom world generation.
          </p>

          {/* Large IP Box */}
          <div className="pt-2 max-w-md mx-auto flex justify-center">
            <ServerIPBadge size="large" />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <button
              onClick={() => { setActiveTab('weapons'); playClickSound(); }}
              className="mc-button mc-button-gold flex items-center gap-1.5"
            >
              <Sword className="w-4 h-4" />
              <span>THE 5 MYTHIC ARTIFACTS</span>
            </button>

            <button
              onClick={() => { setActiveTab('events'); playClickSound(); }}
              className="mc-button mc-button-red flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 text-orange-400" />
              <span>SERVER EVENTS &amp; PRIZES</span>
            </button>

            <button
              onClick={() => { setActiveTab('world'); playClickSound(); }}
              className="mc-button flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-[#00ffff]" />
              <span>EXPLORE CUSTOM WORLDS</span>
            </button>

            <button
              onClick={() => { setActiveTab('ranks'); playClickSound(); }}
              className="mc-button mc-button-green flex items-center gap-1.5"
            >
              <Trophy className="w-4 h-4" />
              <span>VIEW RANKS &amp; KITS</span>
            </button>

            <button
              onClick={() => { setActiveTab('rules'); playClickSound(); }}
              className="mc-button flex items-center gap-1.5"
            >
              <Scroll className="w-4 h-4 text-red-400" />
              <span>SERVER RULES &amp; CODE</span>
            </button>
          </div>

        </div>
      </section>

      {/* Warning Banner: KeepInventory Disabled & Rules */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-950/60 via-[#181216] to-red-950/60 border-2 border-red-700/60 p-5 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-red-900/40 border border-red-500 rounded text-red-400 shrink-0">
              <AlertTriangle className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h3 className="font-minecraft text-sm sm:text-base text-red-400 font-bold tracking-wider">
                RULE #1: KEEPINVENTORY IS PERMANENTLY DISABLED
              </h3>
              <p className="text-xs text-zinc-300 font-sans mt-0.5">
                Zero exceptions. Donators, staff, and top ranks drop everything upon death. Check our strict loadout and combat flight rules before engaging!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => { setActiveTab('rules'); playClickSound(); }}
              className="mc-button mc-button-red whitespace-nowrap"
            >
              VIEW SERVER RULES
            </button>
            <button
              onClick={() => { setActiveTab('survival'); playClickSound(); }}
              className="mc-button whitespace-nowrap"
            >
              SURVIVAL GUIDE
            </button>
          </div>
        </div>
      </section>

      {/* Server Pillars */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-minecraft text-xl sm:text-2xl text-white font-bold tracking-wider mc-shadow">
            WHY PLAY ON <span className="text-[#00ffff]">SCALYX SMP</span>?
          </h2>
          <p className="text-zinc-400 font-sans text-xs mt-1 max-w-xl mx-auto">
            Every feature on Scalyx is hand-tuned to elevate player conflict, economic freedom, and rewarding exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="mc-panel p-5 rounded-lg transition-transform hover:-translate-y-0.5 hover:border-[#4d4e63] shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded border ${pillar.bgColor} ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-minecraft text-zinc-400 uppercase tracking-wider">{pillar.tagline}</span>
                  </div>
                  <h3 className="font-minecraft text-sm sm:text-base text-white font-bold tracking-wide mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Showcase: The 5 Server-Unique Mythic Artifacts */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#12131c] border-2 border-[#2d2e40] p-6 sm:p-8 rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-red-950/80 border border-red-600 text-red-300 text-[10px] font-minecraft rounded">
                <Skull className="w-3.5 h-3.5" />
                <span>SERVER ARTIFACTS • STRICT LIMIT: 1 IN EXISTENCE</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-minecraft text-yellow-400 font-bold tracking-wider mc-shadow">
                {currentArtifactInfo.name}
              </h2>

              <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                {currentArtifactInfo.lore}
              </p>

              <div className="p-3 bg-[#171825] border border-[#2c2d40] rounded text-xs font-sans text-zinc-200">
                <strong className="text-yellow-400 font-minecraft block mb-1">KEY ABILITIES &amp; PASSIVES:</strong>
                {currentArtifactInfo.highlight}
              </div>

              <div className="space-y-1.5 font-sans text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  <span><strong>Event Awakened:</strong> Forging is locked until staff trigger <code className="text-[#00ffff]">/mythics start</code> with a global dragon roar!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span><strong>30-Minute Global Hunt:</strong> Server alarm triggers and broadcasts live coordinates every 60s!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span><strong>☠️ Severed Head Trophies:</strong> Mythic kills guarantee dropping the victim's authentic player head!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff]"></span>
                  <span><strong>Always Drops on Death:</strong> Never soulbound. Slay the carrier to claim their weapon!</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => { setActiveTab('weapons'); playClickSound(); }}
                  className="mc-button mc-button-gold flex items-center gap-1.5"
                >
                  <Sword className="w-4 h-4" />
                  <span>VIEW ALL 5 WEAPONS &amp; STATS</span>
                </button>
              </div>
            </div>

            {/* Interactive Crafting Preview Altar */}
            <div className="flex flex-col items-center">
              <CraftingGrid
                activeWeaponId={featuredArtifact}
                onSelectWeapon={(id) => setFeaturedArtifact(id)}
                showSelector={true}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Server Events Teaser */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mc-panel p-6 sm:p-8 rounded-xl border-2 border-yellow-500/50 bg-[#12131d] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-[#2d2e40]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-yellow-950/80 border border-yellow-600 text-yellow-300 text-[10px] font-minecraft rounded mb-1">
                <Trophy className="w-3.5 h-3.5" />
                <span>SERVER-WIDE EVENTS &amp; PODIUM PRIZES</span>
              </div>
              <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
                DYNAMIC EVENTS: COMPETE &amp; WIN REWARDS
              </h2>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Join Assassin hunts, race for the Warlord Crown, harvest Blood Moon essence, hunt bounties, and conquer dynamic Scavenger Hunts!
              </p>
            </div>
            <button
              onClick={() => { setActiveTab('events'); playClickSound(); }}
              className="mc-button mc-button-gold flex items-center gap-1.5 shrink-0"
            >
              <span>EXPLORE ALL 5 EVENTS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-[#171827] rounded-lg border border-red-900/60 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-red-400 font-minecraft font-bold text-sm">
                <Target className="w-4 h-4 text-red-400" />
                <span>The Assassin's Event</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                Circular target ring with live distance radar HUD. Execute your mark to inherit their target!
              </p>
              <span className="text-[10px] font-minecraft text-[#00ffff] bg-black/50 px-2 py-0.5 rounded border border-[#2b2c3d]">
                /asse stats
              </span>
            </div>

            <div className="p-4 bg-[#171827] rounded-lg border border-amber-900/60 hover:border-amber-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-amber-400 font-minecraft font-bold text-sm">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>Crown of the Warlord</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                Celestial crown drops ~5000 blocks away. Wield it for +4 hearts and resistance while enduring the flight curse.
              </p>
              <span className="text-[10px] font-minecraft text-[#00ffff] bg-black/50 px-2 py-0.5 rounded border border-[#2b2c3d]">
                /warlord stats
              </span>
            </div>

            <div className="p-4 bg-[#171827] rounded-lg border border-purple-900/60 hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-purple-400 font-minecraft font-bold text-sm">
                <Moon className="w-4 h-4 text-purple-400" />
                <span>The Blood Moon</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                Midnight sky &amp; thunderous eclipse. Elite nightmare horrors drop rare Blood Essence.
              </p>
              <span className="text-[10px] font-minecraft text-[#00ffff] bg-black/50 px-2 py-0.5 rounded border border-[#2b2c3d]">
                /bloodmoon stats
              </span>
            </div>

            <div className="p-4 bg-[#171827] rounded-lg border border-yellow-900/60 hover:border-yellow-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-yellow-400 font-minecraft font-bold text-sm">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span>The High Bounty</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                Most Wanted Outlaw manhunt with real-time compass pings. Execute the outlaw for diamonds &amp; head!
              </p>
              <span className="text-[10px] font-minecraft text-[#00ffff] bg-black/50 px-2 py-0.5 rounded border border-[#2b2c3d]">
                /bounty stats
              </span>
            </div>

            <div className="p-4 bg-[#171827] rounded-lg border border-emerald-900/60 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-minecraft font-bold text-sm">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Scavenger Hunt</span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                Dynamic 10-item inventory race with Action Bar HUD. Win rotating pieces of All-Prot-IV God Armor!
              </p>
              <span className="text-[10px] font-minecraft text-[#00ffff] bg-black/50 px-2 py-0.5 rounded border border-[#2b2c3d]">
                /scavenger stats
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-black/50 border border-yellow-900/50 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans">
            <div className="flex items-center gap-2.5 text-yellow-300">
              <Gift className="w-5 h-5 text-yellow-400 shrink-0" />
              <span>
                <strong>Event Winners Receive:</strong> Full All-Prot-IV God Armor sets (Dune trim emerald), Mythic weapon crafting items (Dragon Eggs, Heavy Cores, Nether Stars), $50,000+ economy money, and rank rewards!
              </span>
            </div>
            <button
              onClick={() => { setActiveTab('events'); playClickSound(); }}
              className="text-[#00ffff] font-minecraft hover:underline whitespace-nowrap"
            >
              View Full Prize Vault &gt;
            </button>
          </div>
        </div>
      </section>

      {/* World Dimensions Gallery Teaser */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
          <div>
            <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
              CUSTOM GENERATION &amp; DUNGEONS
            </h2>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Powered by Terralith, Incendium, Nullscape, Stellarity, and Dungeons &amp; Taverns.
            </p>
          </div>
          <button
            onClick={() => { setActiveTab('world'); playClickSound(); }}
            className="mc-button flex items-center gap-1.5 shrink-0"
          >
            <span>VIEW ALL DIMENSIONS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Terralith */}
          <div className="mc-panel overflow-hidden group rounded-lg">
            <div className="relative h-44 overflow-hidden bg-zinc-900">
              <img
                src="/assets/images/gallery/hero_landscape.jpg"
                alt="Terralith Overworld"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded bg-black/70 border border-emerald-500/50 p-1">
                <img src="/assets/images/datapacks/terralith.png" alt="Icon" className="w-full h-full object-contain pixelated" />
              </div>
              <span className="absolute bottom-2 left-3 font-minecraft text-sm sm:text-base text-emerald-300 font-bold">
                Terralith 2.5
              </span>
            </div>
            <div className="p-3.5 text-xs text-zinc-400 font-sans">
              85+ bespoke Overworld biomes, dramatic glacial canyons, and lush alpine valleys without client mods.
            </div>
          </div>

          {/* Incendium */}
          <div className="mc-panel overflow-hidden group rounded-lg">
            <div className="relative h-44 overflow-hidden bg-zinc-900">
              <img
                src="/assets/images/nether/nether_quartz_cathedral.png"
                alt="Incendium Nether Cathedral"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded bg-black/70 border border-red-500/50 p-1">
                <img src="/assets/images/datapacks/incendium.png" alt="Icon" className="w-full h-full object-contain pixelated" />
              </div>
              <span className="absolute bottom-2 left-3 font-minecraft text-sm sm:text-base text-red-400 font-bold">
                Incendium Nether
              </span>
            </div>
            <div className="p-3.5 text-xs text-zinc-400 font-sans">
              Floating Quartz Cathedrals, Ash Barrens citadels, custom fortress bastions, and fiery hazards.
            </div>
          </div>

          {/* Nullscape & Stellarity */}
          <div className="mc-panel overflow-hidden group rounded-lg">
            <div className="relative h-44 overflow-hidden bg-zinc-900">
              <img
                src="/assets/images/end/end_the_hallow.png"
                alt="The End Revamp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded bg-black/70 border border-purple-500/50 p-1">
                <img src="/assets/images/datapacks/stellarity.png" alt="Icon" className="w-full h-full object-contain pixelated" />
              </div>
              <span className="absolute bottom-2 left-3 font-minecraft text-sm sm:text-base text-purple-300 font-bold">
                The End Revamp
              </span>
            </div>
            <div className="p-3.5 text-xs text-zinc-400 font-sans">
              The Hallow rainbow forests, Amethyst Forest amphitheaters, and 500-block Dragon arena.
            </div>
          </div>

          {/* Dungeons & Taverns */}
          <div className="mc-panel overflow-hidden group rounded-lg">
            <div className="relative h-44 overflow-hidden bg-zinc-900">
              <img
                src="/assets/images/nether/nether_ash_citadel.png"
                alt="Dungeons and Taverns"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded bg-black/70 border border-amber-500/50 p-1">
                <img src="/assets/images/datapacks/dungeons_taverns.png" alt="Icon" className="w-full h-full object-contain pixelated" />
              </div>
              <span className="absolute bottom-2 left-3 font-minecraft text-sm sm:text-base text-amber-300 font-bold">
                Dungeons &amp; Taverns
              </span>
            </div>
            <div className="p-3.5 text-xs text-zinc-400 font-sans">
              Loot-filled procedural keeps, sprawling underground strongholds, and volcanic clocktowers.
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="mc-panel p-6 sm:p-8 rounded-xl shadow-xl">
          <div className="text-center mb-6">
            <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
              HOW TO JOIN SCALYX SMP
            </h2>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Supports vanilla Minecraft Java edition. No mod loaders or client downloads required!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-6">
            <div className="bg-[#181924] p-4 rounded border border-[#2d2e40] text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-[#242538] text-[#00ffff] font-minecraft text-base font-bold flex items-center justify-center rounded">
                1
              </div>
              <h4 className="font-minecraft text-sm sm:text-base text-white mb-1">Launch 1.21.4</h4>
              <p className="text-xs text-zinc-400 font-sans">
                Open your Minecraft launcher and select Java Version 1.21.4.
              </p>
            </div>

            <div className="bg-[#181924] p-4 rounded border border-[#2d2e40] text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-[#242538] text-[#00ffff] font-minecraft text-base font-bold flex items-center justify-center rounded">
                2
              </div>
              <h4 className="font-minecraft text-sm sm:text-base text-white mb-1">Add Server</h4>
              <p className="text-xs text-zinc-400 font-sans">
                Navigate to <strong>Multiplayer</strong> &gt; <strong>Add Server</strong>.
              </p>
            </div>

            <div className="bg-[#181924] p-4 rounded border border-[#2d2e40] text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-[#242538] text-[#00ffff] font-minecraft text-base font-bold flex items-center justify-center rounded">
                3
              </div>
              <h4 className="font-minecraft text-sm sm:text-base text-white mb-1">Connect</h4>
              <p className="text-xs text-zinc-400 font-sans">
                Type <code className="text-[#00ffff]">smp.scalyx.in</code> and hit Join Server!
              </p>
            </div>
          </div>

          <div className="text-center">
            <ServerIPBadge size="large" className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

    </div>
  );
}
