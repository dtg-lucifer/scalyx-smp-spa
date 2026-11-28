import React, { useState } from 'react';
import CraftingGrid, { MYTHIC_RECIPES } from '../components/CraftingGrid';
import HeartDisplay from '../components/HeartDisplay';
import { 
  Sword, Sparkles, Skull, Flame, Eye, Shield, Zap, Pickaxe, 
  Radio, Clock, Heart, Award, Crosshair, Wind, Anchor, 
  ChevronRight, AlertTriangle, Target, CheckCircle2, Camera, ZoomIn, X
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function WeaponsPage() {
  const [selectedMythic, setSelectedMythic] = useState('lifestealer');
  const [previewModal, setPreviewModal] = useState(null);

  const mythicWeapons = [
    {
      id: 'lifestealer',
      name: 'Lifestealer',
      fullName: '⚔ Lifestealer ⚔',
      type: 'Netherite Sword',
      attackSpeed: '1.6 Attack Speed (Classic)',
      enchantments: 'Sharpness V, Sweeping Edge III, Looting III, Fire Aspect II, Unbreaking III, Mending I',
      badge: 'SERVER RELIC • LIMIT: 1 ONLY',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-700',
      themeColor: 'text-red-500',
      borderColor: 'border-red-600',
      bgGlow: 'shadow-[0_0_25px_rgba(239,68,68,0.25)]',
      icon: '/assets/items/netherite_sword.png',
      iconRotate: '-rotate-45',
      command: '/lifestealer status',
      loreSnippet: 'Forged from the singular Dragon Egg. The wielder siphons the life force of fallen foes.',
      passives: [
        {
          title: 'Heart Theft (On-Hit)',
          icon: Heart,
          color: 'text-red-400',
          desc: 'Each melee blow permanently steals 1 Heart (up to +4 Max Hearts) from victims, animals, or mobs. Stolen vitality returns after 60s.'
        },
        {
          title: 'Wither II Decay (10% Proc)',
          icon: Skull,
          color: 'text-purple-400',
          desc: '10% chance on strike to inflict debilitating Wither II decay, rapidly draining health and bypassing standard defenses.'
        }
      ],
      ultimate: {
        name: 'Heart Siphon Nova',
        cooldown: '5m Cooldown',
        trigger: 'Hold Right-Click for 5 Seconds',
        icon: Zap,
        color: 'text-yellow-400',
        desc: 'Hold Right-Click for 5s to rip 1 Heart from up to 10 entities in a 10-block radius! Grants the wielder up to +10 Max Hearts for 5 full minutes.'
      },
      hasHeartDisplay: true,
      recipeSummary: '1x Dragon Egg (center) + 4x Netherite Blocks (corners) + 4x Enchanted Golden Apples (sides)'
    },
    {
      id: 'mace',
      name: 'Worldbreaker Mace',
      fullName: '⚡ Worldbreaker Mace ⚡',
      type: 'Heavy Mace',
      attackSpeed: 'Fast 1.6 Sword Speed (No Sluggish Cooldown)',
      enchantments: 'Density V, Breach IV, Wind Burst III, Sharpness V, Fire Aspect II, Knockback II, Unbreaking III, Mending I',
      badge: 'SERVER UNIQUE • LIMIT: 1 ONLY',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-600',
      themeColor: 'text-amber-400',
      borderColor: 'border-amber-500',
      bgGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      icon: '/assets/items/mace.png',
      iconRotate: '',
      command: '/artifacts',
      loreSnippet: 'Forged with a Heavy Core and Breeze Rods. Smashes the earth with catastrophic seismic fury.',
      passives: [
        {
          title: '100% Lightning Stun (On-Hit)',
          icon: Zap,
          color: 'text-yellow-400',
          desc: '100% chance on-hit against players and mobs to strike them with lightning and paralyze them for 5s (AI disabled for mobs; walk speed 0 and jump locked for players).'
        },
        {
          title: 'Double Jump (Mid-Air)',
          icon: Wind,
          color: 'text-[#00ffff]',
          desc: 'Press Jump twice in mid-air to launch 15 blocks into the sky with an explosive wind burst for rapid repositioning or aerial assaults.'
        }
      ],
      ultimate: {
        name: 'Seismic Cataclysm',
        cooldown: '2m Cooldown',
        trigger: 'Crouch + Jump',
        icon: Flame,
        color: 'text-amber-400',
        desc: 'Crouch and Jump to launch 20 blocks skyward! Negates 100% fall damage upon landing and detonates a devastating 10-block ground explosion dealing uncapped area damage.'
      },
      hasHeartDisplay: false,
      recipeSummary: '1x Heavy Core (center) + 4x Netherite Blocks (corners) + 2x Breeze Rods (top/bottom) + 2x Enchanted Golden Apples (sides)'
    },
    {
      id: 'spear',
      name: 'Gungnir, Sovereign Spear',
      fullName: '🌿 Gungnir, Sovereign Spear 🌿',
      type: 'Netherite Spear',
      attackSpeed: 'Fast 1.6 Sword Speed (Lunge Animation)',
      enchantments: 'Sharpness V, Lunge III, Fire Aspect II, Knockback II, Unbreaking III, Mending I',
      badge: 'SERVER UNIQUE • LIMIT: 1 ONLY',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-600',
      themeColor: 'text-emerald-400',
      borderColor: 'border-emerald-500',
      bgGlow: 'shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      icon: '/assets/items/netherite_spear.png',
      iconRotate: '',
      command: '/artifacts',
      loreSnippet: 'Piercing spear of ancient sovereigns. Pulls targets violently into melee range and negates fall impact.',
      passives: [
        {
          title: 'Infinite Stamina & Light Foot',
          icon: Shield,
          color: 'text-emerald-400',
          desc: 'Zero Hunger Cost while carrying or wielding! Furthermore, negates 100% of all fall damage from any height.'
        },
        {
          title: 'Breaker of Chains & 100% Stun',
          icon: Zap,
          color: 'text-yellow-400',
          desc: 'Always shatters and disables enemy shields on-hit with audio feedback, while striking with lightning and paralyzing foes for 5 seconds.'
        }
      ],
      ultimate: {
        name: 'Verdant Harpoon',
        cooldown: '1m Cooldown',
        trigger: 'Sneak + Right-Click',
        icon: Target,
        color: 'text-emerald-400',
        desc: 'Fires a 35-block grasping vine beam. Hooking an enemy violently yanks them directly into melee combat; hitting blocks or ledges instantly hoists you up!'
      },
      hasHeartDisplay: false,
      recipeSummary: '1x Nether Star (center) + 4x Netherite Blocks (sides) + 4x Echo Shards (corners) + 1x Heart of the Sea (bottom)'
    },
    {
      id: 'trident',
      name: "Poseidon's Abyssal Tempest",
      fullName: "🔱 Poseidon's Abyssal Tempest 🔱",
      type: 'Legendary Trident',
      attackSpeed: 'Fast 1.6 Sword Speed (Melee & Anywhere Riptide)',
      enchantments: 'Impaling V, Sharpness V, Loyalty III, Channeling I, Unbreaking III, Mending I',
      badge: 'SERVER UNIQUE • LIMIT: 1 ONLY',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-600',
      themeColor: 'text-[#00ffff]',
      borderColor: 'border-[#00ffff]',
      bgGlow: 'shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      icon: '/assets/items/trident.png',
      iconRotate: '',
      command: '/artifacts',
      loreSnippet: 'Embodied fury of the ocean depths. Grants unrestricted Anywhere Riptide and crushes foes in whirlpools.',
      passives: [
        {
          title: 'Ocean Sovereign & Anywhere Riptide',
          icon: Anchor,
          color: 'text-[#00ffff]',
          desc: 'Permanent Water Breathing, Dolphin Grace & Conduit Power. Right-Click dashes with Anywhere Riptide (on land or in air) with action bar ready indicator.'
        },
        {
          title: 'Abyssal Drown (30% Chance On-Hit)',
          icon: Wind,
          color: 'text-blue-400',
          desc: '30% chance on every hit to inflict true drowning damage for 5 seconds (1 heart/s) and paralyze victims with Slowness IV for 10 seconds!'
        }
      ],
      ultimate: {
        name: 'Tsunami Cataclysm',
        cooldown: '2m Cooldown',
        trigger: 'Sneak + Right-Click',
        icon: Sparkles,
        color: 'text-[#00ffff]',
        desc: 'Summons a crushing 25-block surging tidal wave accompanied by lightning strikes, sweeping enemies up and inflicting heavy water damage and Slowness III.'
      },
      hasHeartDisplay: false,
      recipeSummary: '1x Heart of the Sea (center) + 2x Tridents (top corners) + 4x Netherite Blocks + 2x Enchanted Golden Apples (sides) + 1x Conduit (bottom)'
    },
    {
      id: 'crossbow',
      name: 'Doomherald, Oblivion Ballista',
      fullName: '💥 Doomherald, Oblivion Ballista 💥',
      type: 'Heavy Crossbow',
      attackSpeed: 'Quick Charge III Heavy Artillery',
      enchantments: 'Quick Charge III, Piercing IV, Infinity I, Unbreaking III, Mending I',
      badge: 'SERVER UNIQUE • LIMIT: 1 ONLY',
      badgeColor: 'bg-rose-950/80 text-rose-300 border-rose-700',
      themeColor: 'text-rose-400',
      borderColor: 'border-rose-500',
      bgGlow: 'shadow-[0_0_25px_rgba(244,63,94,0.25)]',
      icon: '/assets/items/crossbow.png',
      iconRotate: '',
      command: '/artifacts',
      loreSnippet: 'Ancient void siege weapon. Fires true-damage bolts and detonates tactical oblivion nukes.',
      passives: [
        {
          title: 'True Oblivion Pierce (Every Shot)',
          icon: Target,
          color: 'text-rose-400',
          desc: 'Every single hit directly deals 2 Hearts (4 HP) of pure true damage, completely ignoring armor, Protection IV, and enchantments!'
        },
        {
          title: '30% Rapid Barrage & Void Toxin',
          icon: Zap,
          color: 'text-purple-400',
          desc: '30% chance on shoot to grant 10 free instant rapid-fire shots without reloading! 30% chance on hit to inflict Darkness and Poison for 15s.'
        }
      ],
      ultimate: {
        name: 'Calamity Nuke',
        cooldown: '1m Cooldown',
        trigger: 'Sneak + Shoot',
        icon: Flame,
        color: 'text-rose-500',
        desc: 'Fires a primed oblivion warhead that detonates a massive 10-block explosion upon impact, dealing devastating uncapped area damage, knockback, and fire!'
      },
      hasHeartDisplay: false,
      recipeSummary: '1x Nether Star (center) + 1x Crossbow (top) + 4x Netherite Blocks (sides) + 4x Dragon\'s Breath (corners) + 1x Enchanted Golden Apple (bottom)'
    }
  ];

  const currentWeapon = mythicWeapons.find((w) => w.id === selectedMythic) || mythicWeapons[0];

  const rankSwords = [
    {
      id: 'warden',
      name: 'Sculk Annihilator',
      rank: 'WARDEN RANK',
      color: 'text-[#00ffff]',
      borderColor: 'border-[#00ffff]/60',
      bgGlow: 'shadow-[0_0_20px_rgba(0,255,255,0.2)]',
      icon: '/assets/items/diamond_sword.png',
      tint: 'filter hue-rotate-180 drop-shadow-[0_0_8px_#00ffff]',
      wielderPerk: 'Complete immunity to Wardens & Sonic Booms; Wardens never aggro; auto-cleanses Darkness and Blindness.',
      onHitPassive: '10% chance to unleash a sonic shockwave burst dealing +4 Hearts True Sculk Damage.',
      ultimate: 'Sonic Shockwave: 25-block piercing sonic blast dealing up to 4 hearts + darkness and slowness.',
      cooldown: '60s Cooldown (Hold Right-Click for 5s)'
    },
    {
      id: 'eternal',
      name: 'Eternal Zenith Blade',
      rank: 'ETERNAL RANK',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/60',
      bgGlow: 'shadow-[0_0_20px_rgba(255,170,0,0.2)]',
      icon: '/assets/items/diamond_sword.png',
      tint: 'filter sepia(1) saturate(5) hue-rotate(330deg) drop-shadow-[0_0_8px_#ffaa00]',
      wielderPerk: 'Permanent Fire & Lava immunity; instantly extinguishes all fire ticks.',
      onHitPassive: '10% chance to strip enemy Fire Resistance potions and ignite targets in infernal flames for 12 seconds.',
      ultimate: 'Solar Flame Laser: 30-block searing laser beam dealing up to 4 hearts damage and setting targets ablaze.',
      cooldown: '60s Cooldown (Hold Right-Click for 5s)'
    },
    {
      id: 'wither',
      name: 'Wither Reaper Blade',
      rank: 'WITHER RANK',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/60',
      bgGlow: 'shadow-[0_0_20px_rgba(180,50,255,0.2)]',
      icon: '/assets/items/netherite_sword.png',
      tint: 'filter hue-rotate(270deg) brightness(0.9) drop-shadow-[0_0_8px_#a855f7]',
      wielderPerk: 'Total immunity to Wither effects and damage; auto-cleanses wither decay ticks.',
      onHitPassive: '10% chance on strike to inflict debilitating Wither II decay for 5 seconds with dark smoke particles.',
      ultimate: 'Wither Skull Strike: Launches a homing Wither Skull dealing up to 4 hearts damage and Wither II.',
      cooldown: '60s Cooldown (Hold Right-Click for 5s)'
    },
    {
      id: 'ender',
      name: 'Void Sovereign World-Ender',
      rank: 'ENDER RANK',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/60',
      bgGlow: 'shadow-[0_0_20px_rgba(85,255,85,0.2)]',
      icon: '/assets/items/netherite_sword.png',
      tint: 'filter hue-rotate(90deg) drop-shadow-[0_0_8px_#55ff55]',
      wielderPerk: 'Poison, Darkness & Blindness immunity; Endermen never aggro on eye contact (and attacking Endermen are eradicated).',
      onHitPassive: '10% chance to inflict Poison II (15s) and Darkness/Blindness (15s).',
      ultimate: 'Void Rupture: 5-block radial blast + dragon breath cloud (12s) + Darkness & Blindness (60s) dealing up to 4 hearts.',
      cooldown: '60s Cooldown (Hold Right-Click for 5s)'
    }
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/60 border border-amber-500/50 text-amber-300 text-xs font-minecraft rounded-full">
          <Sword className="w-4 h-4" />
          <span>ARSENAL OF THE CONQUERORS • SERVER ARTIFACTS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          THE 5 SERVER-UNIQUE MYTHIC ARTIFACTS
        </h1>
        <p className="max-w-3xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Across the entire universe of Scalyx SMP, each Mythic Weapon can only ever be forged <strong className="text-white">ONCE</strong>. Unobtainable via pay-to-win, donor ranks, or staff kits. Independent cooldowns allow players to loot fallen enemies' weapons and unleash their full power.
        </p>
      </div>

      {/* 5 Pillars of Mythic Combat & Event Rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="mc-panel p-3.5 rounded-lg border border-amber-900/60 bg-[#171512]">
          <div className="flex items-center gap-2 text-yellow-400 font-minecraft mb-1 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Event Awakened</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Crafting is <strong>locked by default</strong>. Administrators awaken crafting via <code className="text-[#00ffff]">/mythics start</code> with a global dragon growl!
          </p>
        </div>

        <div className="mc-panel p-3.5 rounded-lg border border-red-900/60 bg-[#161218]">
          <div className="flex items-center gap-2 text-red-400 font-minecraft mb-1 text-xs sm:text-sm font-bold">
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            <span>30m Global Hunt</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Carrier glows and coords <code className="text-yellow-400">[X, Y, Z]</code> broadcast every 60s. Slaying the wielder passes the weapon; timer <strong>never resets</strong>!
          </p>
        </div>

        <div className="mc-panel p-3.5 rounded-lg border border-purple-900/60 bg-[#15121a]">
          <div className="flex items-center gap-2 text-purple-400 font-minecraft mb-1 text-xs sm:text-sm font-bold">
            <Skull className="w-4 h-4 text-purple-400" />
            <span>Head Trophies</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Every mythic execution <strong>guarantees a severed player head drop</strong> featuring the victim's authentic player skin, killer, weapon &amp; timestamp lore!
          </p>
        </div>

        <div className="mc-panel p-3.5 rounded-lg border border-cyan-900/60 bg-[#11161a]">
          <div className="flex items-center gap-2 text-[#00ffff] font-minecraft mb-1 text-xs sm:text-sm font-bold">
            <Shield className="w-4 h-4 text-[#00ffff]" />
            <span>Drops on Death</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Mythics are never soulbound—they always drop upon death. KeepInventory is false across the realm, so weapons can be lost and stolen in combat.
          </p>
        </div>

        <div className="mc-panel p-3.5 rounded-lg border border-emerald-900/60 bg-[#111714]">
          <div className="flex items-center gap-2 text-emerald-400 font-minecraft mb-1 text-xs sm:text-sm font-bold">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>30s Stun Cooldown</span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            Paralyzing stuns on Mace &amp; Spear carry an enforced 30-second cooldown per player. Weapons never exceed 2x vanilla damage for fair PvP.
          </p>
        </div>
      </div>

      {/* SECTION 1: THE 5 MYTHIC ARTIFACTS SHOWCASE */}
      <div className="space-y-6">
        
        {/* Weapon Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-[#12131d] border border-[#2b2c3d] rounded-xl">
          {mythicWeapons.map((weapon) => {
            const isSelected = weapon.id === selectedMythic;
            return (
              <button
                key={weapon.id}
                onClick={() => {
                  setSelectedMythic(weapon.id);
                  playClickSound();
                }}
                className={`flex items-center gap-2.5 px-3 sm:px-4 py-2 rounded-lg font-minecraft text-xs sm:text-sm transition-all ${
                  isSelected
                    ? `${weapon.badgeColor} font-bold shadow-lg scale-105 border-2`
                    : 'bg-[#181926] text-zinc-400 hover:text-white hover:bg-[#202234] border border-[#2e3046]'
                }`}
              >
                <img
                  src={weapon.icon}
                  alt={weapon.name}
                  className={`w-5 h-5 pixelated ${weapon.iconRotate}`}
                />
                <span>{weapon.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Mythic Weapon Card */}
        <div className={`mc-panel p-6 sm:p-8 rounded-xl shadow-2xl border-2 ${currentWeapon.borderColor} ${currentWeapon.bgGlow} bg-gradient-to-b from-[#151622] via-[#12131c] to-[#151622] space-y-6`}>
          
          {/* Card Top Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-[#303146] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1a1b2b] border-2 border-[#3d405a] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                <img
                  src={currentWeapon.icon}
                  alt={currentWeapon.name}
                  className={`w-10 h-10 sm:w-11 sm:h-11 pixelated filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] ${currentWeapon.iconRotate}`}
                />
              </div>
              <div>
                <span className={`text-[10px] font-minecraft uppercase tracking-wider px-2 py-0.5 rounded border ${currentWeapon.badgeColor}`}>
                  {currentWeapon.badge}
                </span>
                <h2 className={`text-xl sm:text-2xl md:text-3xl font-minecraft font-bold tracking-wider mc-shadow mt-1 ${currentWeapon.themeColor}`}>
                  {currentWeapon.fullName}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-zinc-400 mt-0.5">
                  <span className="text-zinc-200 font-minecraft">{currentWeapon.type}</span>
                  <span>•</span>
                  <span className="text-yellow-400 font-minecraft">{currentWeapon.attackSpeed}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-[#111118] px-3.5 py-2 rounded border border-[#2b2b3d] shrink-0">
              <Radio className="w-4 h-4 text-red-500 animate-pulse" />
              <div className="text-left font-minecraft">
                <div className="text-[10px] text-zinc-400">IN-GAME COMMAND</div>
                <div className="text-[#00ffff] text-xs font-bold">{currentWeapon.command}</div>
              </div>
            </div>
          </div>

          {/* Lore and Enchantments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0e0f16] p-4 rounded-lg border border-[#252636]">
            <div>
              <span className="text-[10px] font-minecraft text-zinc-400 uppercase tracking-wider block mb-1">
                ANCIENT WEAPON LORE
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans italic">
                "{currentWeapon.loreSnippet}"
              </p>
            </div>
            <div>
              <span className="text-[10px] font-minecraft text-zinc-400 uppercase tracking-wider block mb-1">
                VANILLA MAX ENCHANTMENTS PRE-APPLIED
              </span>
              <p className="text-xs text-yellow-300 font-minecraft leading-relaxed">
                {currentWeapon.enchantments}
              </p>
            </div>
          </div>

          {/* Mechanics & Abilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Passive 1 */}
            <div className="mc-panel p-4 rounded-lg border border-[#303146] bg-[#141520]">
              <div className="flex items-center gap-2 mb-2 font-minecraft text-sm font-bold">
                {React.createElement(currentWeapon.passives[0].icon, {
                  className: `w-4 h-4 ${currentWeapon.passives[0].color}`
                })}
                <span className={currentWeapon.passives[0].color}>
                  {currentWeapon.passives[0].title}
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {currentWeapon.passives[0].desc}
              </p>
            </div>

            {/* Passive 2 */}
            <div className="mc-panel p-4 rounded-lg border border-[#303146] bg-[#141520]">
              <div className="flex items-center gap-2 mb-2 font-minecraft text-sm font-bold">
                {React.createElement(currentWeapon.passives[1].icon, {
                  className: `w-4 h-4 ${currentWeapon.passives[1].color}`
                })}
                <span className={currentWeapon.passives[1].color}>
                  {currentWeapon.passives[1].title}
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {currentWeapon.passives[1].desc}
              </p>
            </div>

            {/* Ultimate Ability */}
            <div className="mc-panel p-4 rounded-lg border-2 border-yellow-500/50 bg-[#1a1710]">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 font-minecraft text-sm font-bold text-yellow-400">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>{currentWeapon.ultimate.name}</span>
                </div>
                <span className="text-[10px] font-minecraft bg-yellow-950/80 border border-yellow-600 text-yellow-300 px-1.5 py-0.5 rounded">
                  {currentWeapon.ultimate.cooldown}
                </span>
              </div>
              <div className="text-[10px] font-minecraft text-zinc-400 mb-2">
                Trigger: <strong className="text-white">{currentWeapon.ultimate.trigger}</strong>
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {currentWeapon.ultimate.desc}
              </p>
            </div>

          </div>

          {/* Lifestealer Vitality Demo if applicable */}
          {currentWeapon.hasHeartDisplay && (
            <div className="p-4 bg-[#101016] border border-[#2d2e40] rounded-lg">
              <HeartDisplay
                hearts={14}
                maxHearts={20}
                label="Lifestealer Vitality Pool: Base 10 + 4 Stolen Hearts (Expands to 24 with Siphon Nova!)"
                type="hardcore"
              />
            </div>
          )}

        </div>

        {/* SECTION: 3X3 CRAFTING ALTAR (SYNCED TO SELECTION) */}
        <div className="space-y-4 pt-4">
          <div className="text-center space-y-1">
            <h3 className="font-minecraft text-xl sm:text-2xl text-yellow-300 font-bold tracking-wider">
              3x3 CRAFTING RECIPE ALTAR (/artifacts)
            </h3>
            <p className="text-zinc-400 text-xs font-sans max-w-xl mx-auto">
              Inspect the exact crafting pattern for <strong className="text-white">{currentWeapon.name}</strong> or switch recipes using the tabs below. Once crafted, no other copy can ever be forged!
            </p>
          </div>

          <CraftingGrid
            activeWeaponId={selectedMythic}
            onSelectWeapon={(id) => setSelectedMythic(id)}
            showSelector={true}
          />
        </div>

      </div>

      {/* SECTION 2: THE 4 MYTHIC RANK SWORDS */}
      <div className="space-y-6 pt-6 border-t border-[#252636]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-purple-950/80 border border-purple-500/50 text-purple-300 text-[10px] font-minecraft rounded mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>EARNED VIA HIGH-TIER RANKS (/swords)</span>
            </div>
            <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
              THE 4 MYTHIC RANK SWORDS
            </h2>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Featuring independent cooldowns and a strict <strong className="text-yellow-400">4 Hearts (8 HP) combat hard cap</strong> for fair, competitive PvP.
            </p>
          </div>
          <span className="text-[11px] font-minecraft bg-[#1d1e2c] border border-[#3b3c54] text-zinc-300 px-3 py-1.5 rounded shrink-0">
            HOLD RIGHT-CLICK FOR 5s TO UNLEASH ULTIMATE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rankSwords.map((sword) => (
            <div
              key={sword.id}
              className={`mc-panel p-5 rounded-xl border-2 ${sword.borderColor} ${sword.bgGlow} transition-all hover:-translate-y-0.5`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#303142] mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#171824] border border-[#323348] rounded flex items-center justify-center shrink-0">
                    <img
                      src={sword.icon}
                      alt={sword.name}
                      className={`w-7 h-7 pixelated ${sword.tint} transform -rotate-45`}
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-minecraft uppercase tracking-wider text-zinc-400">
                      {sword.rank}
                    </span>
                    <h3 className={`font-minecraft text-base sm:text-lg font-bold tracking-wider ${sword.color} mc-shadow`}>
                      {sword.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div className="space-y-2.5 font-sans text-xs">
                
                <div className="p-3 bg-[#13141f] rounded border border-[#2b2c3d]">
                  <div className="flex items-center gap-2 font-minecraft text-xs text-yellow-300 mb-1">
                    <Shield className="w-3.5 h-3.5 text-yellow-400" />
                    <span>PERMANENT WIELDER PERK</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{sword.wielderPerk}</p>
                </div>

                <div className="p-3 bg-[#13141f] rounded border border-[#2b2c3d]">
                  <div className="flex items-center gap-2 font-minecraft text-xs text-red-400 mb-1">
                    <Zap className="w-3.5 h-3.5 text-red-400" />
                    <span>10% ON-HIT COMBAT PASSIVE</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{sword.onHitPassive}</p>
                </div>

                <div className="p-3 bg-[#13141f] rounded border border-[#2b2c3d]">
                  <div className="flex items-center gap-2 font-minecraft text-xs text-[#00ffff] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#00ffff]" />
                    <span>CHARGED ULTIMATE ({sword.cooldown})</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{sword.ultimate}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: DONUTSMP 3x3x1 DUAL SUPER PICKAXES */}
      <div className="mc-panel p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-emerald-600/50 bg-[#12141c] space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-500 rounded flex items-center justify-center">
              <Pickaxe className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-minecraft text-emerald-400 uppercase tracking-widest">
                DONUTSMP STYLE TOOL (/pickaxe toggle)
              </span>
              <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider mc-shadow">
                3x3x1 DUAL SUPER PICKAXES (FORTUNE &amp; SILK TOUCH)
              </h3>
            </div>
          </div>
          <span className="text-xs font-minecraft bg-black/50 border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded">
            TOGGLE: RIGHT-CLICK WHILE WIELDING (3x3x1 ⇄ 1x1)
          </span>
        </div>

        <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed max-w-3xl">
          Equipped in all 4 high-tier rank kits (<strong className="text-cyan-400">Warden</strong>, <strong className="text-yellow-400">Eternal</strong>, <strong className="text-purple-400">Wither</strong>, and <strong className="text-emerald-400">Ender</strong>). Every eligible kit provides <strong className="text-white">TWO dedicated 3x3x1 Super Pickaxes</strong>—one for maximum ore yield (Fortune III) and one for extracting pristine blocks (Silk Touch I). Full protection prevents breaking Bedrock, End Portal Frames, Spawners, and storage chests!
        </p>

        {/* 4 Rank Dual Pickaxe Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          {/* Warden Tier */}
          <div className="p-4 bg-[#161824] rounded-lg border border-cyan-800/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-minecraft px-2 py-0.5 rounded bg-cyan-950 text-[#00ffff] border border-cyan-700">
                WARDEN (TIER V)
              </span>
              <span className="text-[10px] text-zinc-400 font-minecraft">DUAL SET</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-minecraft text-yellow-300 font-bold">
                ⛏ Sculk Resonator
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Fortune III • 3x3x1 Area Mining</div>
              <div className="text-xs font-minecraft text-[#00ffff] font-bold pt-1">
                ⛏ Sculk Silk Resonator
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Silk Touch I • 3x3x1 Clean Harvest</div>
            </div>
          </div>

          {/* Eternal Tier */}
          <div className="p-4 bg-[#161824] rounded-lg border border-yellow-800/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-minecraft px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-700">
                ETERNAL (TIER VI)
              </span>
              <span className="text-[10px] text-zinc-400 font-minecraft">DUAL SET</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-minecraft text-yellow-300 font-bold">
                ⛏ Eternal Nebula Pickaxe
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Fortune III • 3x3x1 Area Mining</div>
              <div className="text-xs font-minecraft text-[#00ffff] font-bold pt-1">
                ⛏ Eternal Silk Nebula Pickaxe
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Silk Touch I • 3x3x1 Clean Harvest</div>
            </div>
          </div>

          {/* Wither Tier */}
          <div className="p-4 bg-[#161824] rounded-lg border border-purple-800/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-minecraft px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-700">
                WITHER (TIER VII)
              </span>
              <span className="text-[10px] text-zinc-400 font-minecraft">DUAL SET</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-minecraft text-yellow-300 font-bold">
                ⛏ Wither Core Obliterator
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Fortune III • 3x3x1 Area Mining</div>
              <div className="text-xs font-minecraft text-[#00ffff] font-bold pt-1">
                ⛏ Wither Silk Core Obliterator
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Silk Touch I • 3x3x1 Clean Harvest</div>
            </div>
          </div>

          {/* Ender Tier */}
          <div className="p-4 bg-[#161824] rounded-lg border border-emerald-800/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-minecraft px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                ENDER (APEX TIER VIII)
              </span>
              <span className="text-[10px] text-zinc-400 font-minecraft">DUAL SET</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-minecraft text-yellow-300 font-bold">
                ⛏ Void Sovereign World-Shaper
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Fortune III • 3x3x1 Area Mining</div>
              <div className="text-xs font-minecraft text-[#00ffff] font-bold pt-1">
                ⛏ Void Sovereign Silk Shaper
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">Silk Touch I • 3x3x1 Clean Harvest</div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 4: AUTHENTIC IN-GAME ARSENAL & GUI SHOWCASE */}
      <div className="space-y-6 pt-6 border-t border-[#252636]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-yellow-950/80 border border-yellow-500/50 text-yellow-300 text-[10px] font-minecraft rounded mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>LIVE SERVER SCREENSHOTS</span>
            </div>
            <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
              IN-GAME ARSENAL &amp; CRAFTING INSPECTION
            </h2>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Live in-game captures of the 3x3 Mythic Crafting GUI, Tier IV Ender God Armor with 20 Hearts, and custom combat animations.
            </p>
          </div>
          <span className="text-[11px] font-minecraft bg-[#1d1e2c] border border-[#3b3c54] text-zinc-300 px-3 py-1.5 rounded shrink-0">
            CLICK ANY PREVIEW TO ZOOM
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Live Mythic GUI */}
          <div 
            onClick={() => {
              setPreviewModal({
                title: 'In-Game 3x3 Mythic Crafting GUI & Mace Tooltip',
                image: '/assets/images/gui/gui_mythic_crafting.png',
                tag: 'Crafting Altar Preview',
                desc: 'Real server capture of the Worldbreaker Mace recipe in the 3x3 crafting grid. Shows the custom Heavy Core + 4x Netherite Blocks + 2x Breeze Rods + 2x God Apples layout, recipe validation, and glowing item lore tooltip.'
              });
              playClickSound();
            }}
            className="mc-panel overflow-hidden group rounded-lg cursor-pointer hover:border-amber-500/80 transition-all duration-300 hover:-translate-y-1 shadow-lg bg-[#141522]"
          >
            <div className="relative h-44 overflow-hidden bg-black">
              <img 
                src="/assets/images/gui/gui_mythic_crafting.png" 
                alt="Mythic Crafting GUI" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute top-2 left-2 text-[10px] font-minecraft px-2 py-0.5 bg-amber-950/80 border border-amber-600 text-amber-300 rounded">
                GUI &amp; RECIPE
              </span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-2.5 py-1 bg-black/80 text-white text-[11px] font-minecraft rounded flex items-center gap-1 border border-white/20">
                  <ZoomIn className="w-3.5 h-3.5 text-[#00ffff]" /> Inspect
                </span>
              </div>
            </div>
            <div className="p-3.5">
              <h4 className="font-minecraft text-sm text-yellow-300 font-bold mb-1">
                In-Game 3x3 Mythic Crafting GUI
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                Live in-game capture of the Worldbreaker Mace recipe and custom tooltip.
              </p>
            </div>
          </div>

          {/* Card 2: Ender God Armor & 20 Hearts */}
          <div 
            onClick={() => {
              setPreviewModal({
                title: 'Ender God Armor Set & Void Sovereign (20 Full Hearts)',
                image: '/assets/images/gear/gear_ender_armor_sword.png',
                tag: 'Tier IV Endgame Gear',
                desc: 'Player clad in the glowing purple Ender God Armor set wielding the Void Sovereign blade. Notice the double-layered HUD displaying 20 Full Hearts (40 HP) — representing the peak of Scalyx survival progression.'
              });
              playClickSound();
            }}
            className="mc-panel overflow-hidden group rounded-lg cursor-pointer hover:border-purple-500/80 transition-all duration-300 hover:-translate-y-1 shadow-lg bg-[#141522]"
          >
            <div className="relative h-44 overflow-hidden bg-black">
              <img 
                src="/assets/images/gear/gear_ender_armor_sword.png" 
                alt="Ender God Armor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute top-2 left-2 text-[10px] font-minecraft px-2 py-0.5 bg-purple-950/80 border border-purple-600 text-purple-300 rounded">
                20 FULL HEARTS
              </span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-2.5 py-1 bg-black/80 text-white text-[11px] font-minecraft rounded flex items-center gap-1 border border-white/20">
                  <ZoomIn className="w-3.5 h-3.5 text-[#00ffff]" /> Inspect
                </span>
              </div>
            </div>
            <div className="p-3.5">
              <h4 className="font-minecraft text-sm text-purple-300 font-bold mb-1">
                Ender God Armor &amp; 20 Hearts
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                Double health bar with 40 HP, purple glowing armor, and Void Sovereign.
              </p>
            </div>
          </div>

          {/* Card 3: Inventory & Active Buffs HUD */}
          <div 
            onClick={() => {
              setPreviewModal({
                title: 'Custom Armor Progression & Active Potion Effects HUD',
                image: '/assets/images/gui/gui_inventory_loadout.png',
                tag: 'Inventory & Perks HUD',
                desc: 'Server inventory inspection highlighting all 4 custom gear tiers, mythic weapon storage, and active permanent status buffs: Speed III, Fire Resistance, Strength II, and Night Vision.'
              });
              playClickSound();
            }}
            className="mc-panel overflow-hidden group rounded-lg cursor-pointer hover:border-emerald-500/80 transition-all duration-300 hover:-translate-y-1 shadow-lg bg-[#141522]"
          >
            <div className="relative h-44 overflow-hidden bg-black">
              <img 
                src="/assets/images/gui/gui_inventory_loadout.png" 
                alt="Inventory Loadout" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute top-2 left-2 text-[10px] font-minecraft px-2 py-0.5 bg-emerald-950/80 border border-emerald-600 text-emerald-300 rounded">
                INVENTORY &amp; BUFFS
              </span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-2.5 py-1 bg-black/80 text-white text-[11px] font-minecraft rounded flex items-center gap-1 border border-white/20">
                  <ZoomIn className="w-3.5 h-3.5 text-[#00ffff]" /> Inspect
                </span>
              </div>
            </div>
            <div className="p-3.5">
              <h4 className="font-minecraft text-sm text-emerald-300 font-bold mb-1">
                Gear Tiers &amp; Active Buffs
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                4-tier custom armor sets with Speed III, Strength II, and Night Vision HUD.
              </p>
            </div>
          </div>

          {/* Card 4: Starless Scythe */}
          <div 
            onClick={() => {
              setPreviewModal({
                title: 'The Starless Scythe in The End',
                image: '/assets/images/gear/gear_starless_scythe.png',
                tag: 'Custom Relic Weapon',
                desc: '3rd-person stance holding the custom Starless Scythe blade against the backdrop of Nullscape obsidian monoliths. Handcrafted vanilla-compatible textures.'
              });
              playClickSound();
            }}
            className="mc-panel overflow-hidden group rounded-lg cursor-pointer hover:border-fuchsia-500/80 transition-all duration-300 hover:-translate-y-1 shadow-lg bg-[#141522]"
          >
            <div className="relative h-44 overflow-hidden bg-black">
              <img 
                src="/assets/images/gear/gear_starless_scythe.png" 
                alt="Starless Scythe" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute top-2 left-2 text-[10px] font-minecraft px-2 py-0.5 bg-fuchsia-950/80 border border-fuchsia-600 text-fuchsia-300 rounded">
                RELIC SCYTHE
              </span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-2.5 py-1 bg-black/80 text-white text-[11px] font-minecraft rounded flex items-center gap-1 border border-white/20">
                  <ZoomIn className="w-3.5 h-3.5 text-[#00ffff]" /> Inspect
                </span>
              </div>
            </div>
            <div className="p-3.5">
              <h4 className="font-minecraft text-sm text-fuchsia-300 font-bold mb-1">
                Starless Scythe Showcase
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                Scythe relic wielded in combat amid End dimension void pillars.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Server-Unique Mythic Armors Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#2d2f45] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-xs font-minecraft rounded-full mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>SINGULAR DEFENSE • SERVER RELICS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-minecraft text-white font-bold tracking-wide">
              THE 4 SERVER-UNIQUE MYTHIC ARMORS
            </h2>
          </div>
          <span className="text-xs font-minecraft text-zinc-400">
            Command: <code className="text-[#00ffff]">/artifacts</code> or <code className="text-[#00ffff]">/artifact give</code>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Armor 1: Stormbreaker Aegis */}
          <div className="mc-panel p-5 rounded-xl border border-yellow-500/40 bg-[#16141a] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-yellow-950/80 border border-yellow-600 rounded-lg text-yellow-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-minecraft text-base text-yellow-300 font-bold">⚡ Stormbreaker Aegis</h3>
                  <span className="text-[11px] text-zinc-400 font-sans">Netherite Chestplate • Prot V, Unb V, Mending</span>
                </div>
              </div>
              <span className="text-[10px] font-minecraft px-2 py-0.5 bg-yellow-950/80 border border-yellow-600 text-yellow-300 rounded">
                CHESTPLATE
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-sans italic border-l-2 border-yellow-500/50 pl-2">
              "Forged in the heart of the eternal tempest."
            </p>
            <div className="p-2.5 bg-black/40 rounded border border-yellow-900/40 text-xs text-zinc-300 font-sans leading-relaxed">
              <strong className="text-yellow-400 font-minecraft text-[11px] block mb-1">⚡ Storm Surge Aura (7-Hit Combo)</strong>
              Landing 7 melee hits triggers an electrifying lightning storm around the wearer, striking all nearby hostiles within 8 blocks and granting <span className="text-white font-bold">Resistance I for 10s</span>.
            </div>
          </div>

          {/* Armor 2: All-Seeing Crown */}
          <div className="mc-panel p-5 rounded-xl border border-purple-500/40 bg-[#16121f] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-purple-950/80 border border-purple-600 rounded-lg text-purple-400">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-minecraft text-base text-purple-300 font-bold">👁 All-Seeing Crown</h3>
                  <span className="text-[11px] text-zinc-400 font-sans">Netherite Helmet • Prot V, Resp III, Aqua Aff</span>
                </div>
              </div>
              <span className="text-[10px] font-minecraft px-2 py-0.5 bg-purple-950/80 border border-purple-600 text-purple-300 rounded">
                HELMET
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-sans italic border-l-2 border-purple-500/50 pl-2">
              "The gaze of the ancient watchers pierces through all realms."
            </p>
            <div className="p-2.5 bg-black/40 rounded border border-purple-900/40 text-xs text-zinc-300 font-sans leading-relaxed">
              <strong className="text-purple-400 font-minecraft text-[11px] block mb-1">👁 Hunter's Vision (10s Crouch • 3m CD)</strong>
              Crouching for 10s unleashes psychic radar, giving all online players within <span className="text-white font-bold">100 blocks a Glowing outline for 30s</span> and broadcasting coordinates to the wearer.
            </div>
          </div>

          {/* Armor 3: Mirrorwalk Greaves */}
          <div className="mc-panel p-5 rounded-xl border border-cyan-500/40 bg-[#11171d] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-cyan-950/80 border border-cyan-600 rounded-lg text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-minecraft text-base text-cyan-300 font-bold">🛡 Mirrorwalk Greaves</h3>
                  <span className="text-[11px] text-zinc-400 font-sans">Netherite Leggings • Prot V, Swift Sneak III</span>
                </div>
              </div>
              <span className="text-[10px] font-minecraft px-2 py-0.5 bg-cyan-950/80 border border-cyan-600 text-cyan-300 rounded">
                LEGGINGS
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-sans italic border-l-2 border-cyan-500/50 pl-2">
              "Walk the threshold between realities; mirror all strikes."
            </p>
            <div className="p-2.5 bg-black/40 rounded border border-cyan-900/40 text-xs text-zinc-300 font-sans leading-relaxed">
              <strong className="text-[#00ffff] font-minecraft text-[11px] block mb-1">🛡 Mirror Barrier (&lt;5 Hearts • 2m CD)</strong>
              Falling below 5 hearts (10 HP) activates an iridescent barrier for 30s, reflecting <span className="text-white font-bold">50% incoming damage directly back</span> (capped at 10 hearts deflected).
            </div>
          </div>

          {/* Armor 4: Titanfall Boots */}
          <div className="mc-panel p-5 rounded-xl border border-emerald-500/40 bg-[#111915] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-950/80 border border-emerald-600 rounded-lg text-emerald-400">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-minecraft text-base text-emerald-300 font-bold">☄ Titanfall Boots</h3>
                  <span className="text-[11px] text-zinc-400 font-sans">Netherite Boots • Prot V, Feather Fall IV, Depth Strider</span>
                </div>
              </div>
              <span className="text-[10px] font-minecraft px-2 py-0.5 bg-emerald-950/80 border border-emerald-600 text-emerald-300 rounded">
                BOOTS
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-sans italic border-l-2 border-emerald-500/50 pl-2">
              "Drop from the heavens and crush the earth."
            </p>
            <div className="p-2.5 bg-black/40 rounded border border-emerald-900/40 text-xs text-zinc-300 font-sans leading-relaxed">
              <strong className="text-emerald-400 font-minecraft text-[11px] block mb-1">☄ Seismic Titanfall (5+ Block Fall)</strong>
              Falling from 5+ blocks negates 100% fall damage and triggers a <span className="text-white font-bold">Density V Mace ground smash</span> in a 5-block radius, launching enemies into the air.
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {previewModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => { setPreviewModal(null); playClickSound(); }}
        >
          <div 
            className="mc-panel max-w-4xl w-full max-h-[95vh] overflow-y-auto rounded-xl border-2 border-[#454763] relative flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#141521] border-b border-[#2b2c3d] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider bg-yellow-950/80 text-yellow-300 border-yellow-600">
                  {previewModal.tag}
                </span>
                <h3 className="text-base sm:text-lg font-minecraft text-white font-bold truncate">
                  {previewModal.title}
                </h3>
              </div>
              <button
                onClick={() => { setPreviewModal(null); playClickSound(); }}
                className="p-1.5 bg-red-950/60 hover:bg-red-900 border border-red-700/60 rounded text-red-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
              <img
                src={previewModal.image}
                alt={previewModal.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-4 bg-[#12131d] border-t border-[#2b2c3d]">
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {previewModal.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
