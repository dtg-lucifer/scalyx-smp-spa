import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldAlert, Award } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export const MYTHIC_RECIPES = {
  lifestealer: {
    id: 'lifestealer',
    name: '⚔ Lifestealer ⚔',
    shortName: 'Lifestealer',
    itemType: 'Netherite Sword',
    themeColor: 'text-red-500',
    borderColor: 'border-red-600',
    bgGlow: 'shadow-[0_0_20px_rgba(255,0,0,0.35)]',
    badgeBg: 'bg-red-950/80 text-red-300 border-red-700',
    icon: '/assets/items/netherite_sword.png',
    iconRotate: '-rotate-45',
    desc: 'Server Unique Artifact. Drops 100% on death. Steals up to 4 hearts on-hit, Wither II decay, and 10-block Siphon Nova ultimate.',
    ingredients: [
      { id: 1, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 2, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 3, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 4, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 5, name: 'The Dragon Egg', count: '1', icon: '/assets/items/dragon_egg.png', desc: 'The singular heart of the End. Only ONE exists on the entire server!', highlight: true },
      { id: 6, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 7, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 8, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 9, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' }
    ]
  },
  mace: {
    id: 'mace',
    name: '⚡ Worldbreaker Mace ⚡',
    shortName: 'Worldbreaker Mace',
    itemType: 'Heavy Mace (1.6 Speed)',
    themeColor: 'text-amber-400',
    borderColor: 'border-amber-500',
    bgGlow: 'shadow-[0_0_20px_rgba(255,170,0,0.35)]',
    badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-600',
    icon: '/assets/items/mace.png',
    iconRotate: '',
    desc: 'Server Unique Mythic. 1.6 sword attack cadence, 100% Lightning Stun (5s freeze), Double Jump wind burst, and 10-block Seismic Cataclysm explosion.',
    ingredients: [
      { id: 1, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 2, name: 'Breeze Rod', count: '1', icon: '/assets/items/breeze_rod.png', desc: 'Condensed swirling wind rod from the trial chambers.' },
      { id: 3, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 4, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 5, name: 'Heavy Core', count: '1', icon: '/assets/items/heavy_core.png', desc: 'Ultra-dense trial core. Rare drop from ominous trial vaults!', highlight: true },
      { id: 6, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 7, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 8, name: 'Breeze Rod', count: '1', icon: '/assets/items/breeze_rod.png', desc: 'Condensed swirling wind rod from the trial chambers.' },
      { id: 9, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' }
    ]
  },
  spear: {
    id: 'spear',
    name: '🌿 Gungnir, Sovereign Spear 🌿',
    shortName: 'Gungnir Spear',
    itemType: 'Netherite Spear (1.6 Speed)',
    themeColor: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    bgGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.35)]',
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-600',
    icon: '/assets/items/netherite_spear.png',
    iconRotate: '',
    desc: 'Server Unique Mythic. Zero hunger cost while carrying, 100% fall damage negation, shield-shattering strikes, 5s lightning stun, and 35-block Verdant Harpoon.',
    ingredients: [
      { id: 1, name: 'Echo Shard', count: '1', icon: '/assets/items/echo_shard.png', desc: 'Resonant sculk shard vibrating with deep dark echoes.' },
      { id: 2, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 3, name: 'Echo Shard', count: '1', icon: '/assets/items/echo_shard.png', desc: 'Resonant sculk shard vibrating with deep dark echoes.' },
      { id: 4, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 5, name: 'Nether Star', count: '1', icon: '/assets/items/nether_star.png', desc: 'Radiant core harvested from defeating the Wither.', highlight: true },
      { id: 6, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 7, name: 'Echo Shard', count: '1', icon: '/assets/items/echo_shard.png', desc: 'Resonant sculk shard vibrating with deep dark echoes.' },
      { id: 8, name: 'Heart of the Sea', count: '1', icon: '/assets/items/heart_of_the_sea.png', desc: 'Pulsing oceanic core extracted from buried ocean treasure.' },
      { id: 9, name: 'Echo Shard', count: '1', icon: '/assets/items/echo_shard.png', desc: 'Resonant sculk shard vibrating with deep dark echoes.' }
    ]
  },
  trident: {
    id: 'trident',
    name: '🔱 Poseidon\'s Abyssal Tempest 🔱',
    shortName: 'Poseidon\'s Trident',
    itemType: 'Legendary Trident (1.6 Speed)',
    themeColor: 'text-[#00ffff]',
    borderColor: 'border-[#00ffff]',
    bgGlow: 'shadow-[0_0_20px_rgba(0,255,255,0.35)]',
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-600',
    icon: '/assets/items/trident.png',
    iconRotate: '',
    desc: 'Server Unique Mythic. Permanent Ocean Sovereign buffs, Anywhere Riptide dash on right-click, Slowness IV whirlpool vortex, and 25-block Tsunami Cataclysm.',
    ingredients: [
      { id: 1, name: 'Trident', count: '1', icon: '/assets/items/trident.png', desc: 'Pristine oceanic weapon forged by elder guardians.' },
      { id: 2, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 3, name: 'Trident', count: '1', icon: '/assets/items/trident.png', desc: 'Pristine oceanic weapon forged by elder guardians.' },
      { id: 4, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 5, name: 'Heart of the Sea', count: '1', icon: '/assets/items/heart_of_the_sea.png', desc: 'Conduit heart radiating boundless abyssal energy.', highlight: true },
      { id: 6, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 7, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 8, name: 'Conduit', count: '1', icon: '/assets/items/conduit.png', desc: 'Constructed beacon of oceanic mastery.' },
      { id: 9, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' }
    ]
  },
  crossbow: {
    id: 'crossbow',
    name: '💥 Doomherald, Oblivion Ballista 💥',
    shortName: 'Doomherald Crossbow',
    itemType: 'Heavy Crossbow',
    themeColor: 'text-rose-400',
    borderColor: 'border-rose-500',
    bgGlow: 'shadow-[0_0_20px_rgba(244,63,94,0.35)]',
    badgeBg: 'bg-rose-950/80 text-rose-300 border-rose-700',
    icon: '/assets/items/crossbow.png',
    iconRotate: '',
    desc: 'Server Unique Mythic. 2 Hearts pure true damage bypassing all armor on every shot, 30% Rapid Barrage 10-shot burst, and 10-block Calamity Nuke explosion.',
    ingredients: [
      { id: 1, name: 'Dragon\'s Breath', count: '1', icon: '/assets/items/dragon_breath.png', desc: 'Vial of concentrated void fumes from the Ender Dragon.' },
      { id: 2, name: 'Crossbow', count: '1', icon: '/assets/items/crossbow.png', desc: 'Precision siege crossbow primed for oblivion bolts.' },
      { id: 3, name: 'Dragon\'s Breath', count: '1', icon: '/assets/items/dragon_breath.png', desc: 'Vial of concentrated void fumes from the Ender Dragon.' },
      { id: 4, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 5, name: 'Nether Star', count: '1', icon: '/assets/items/nether_star.png', desc: 'Condensed nether boss core empowering oblivion detonation.', highlight: true },
      { id: 6, name: 'Netherite Block', count: '1', icon: '/assets/items/netherite_block.png', desc: 'Dense compressed netherite foundation.' },
      { id: 7, name: 'Dragon\'s Breath', count: '1', icon: '/assets/items/dragon_breath.png', desc: 'Vial of concentrated void fumes from the Ender Dragon.' },
      { id: 8, name: 'Enchanted Golden Apple', count: '1', icon: '/assets/items/golden_apple.png', desc: 'Notch Apple brimming with divine vitality.' },
      { id: 9, name: 'Dragon\'s Breath', count: '1', icon: '/assets/items/dragon_breath.png', desc: 'Vial of concentrated void fumes from the Ender Dragon.' }
    ]
  }
};

export default function CraftingGrid({ activeWeaponId, onSelectWeapon, showSelector = true }) {
  const [internalWeapon, setInternalWeapon] = useState('lifestealer');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const currentId = activeWeaponId || internalWeapon;
  const currentRecipe = MYTHIC_RECIPES[currentId] || MYTHIC_RECIPES.lifestealer;

  const handleWeaponChange = (id) => {
    if (onSelectWeapon) {
      onSelectWeapon(id);
    } else {
      setInternalWeapon(id);
    }
    playClickSound();
  };

  return (
    <div className="mc-panel p-4 max-w-xl mx-auto rounded-lg shadow-xl relative w-full">
      {/* Selector Tabs if enabled */}
      {showSelector && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 pb-3 mb-3 border-b border-[#3b3b45]">
          {Object.values(MYTHIC_RECIPES).map((rec) => {
            const isSelected = rec.id === currentId;
            return (
              <button
                key={rec.id}
                onClick={() => handleWeaponChange(rec.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-minecraft transition-all ${
                  isSelected
                    ? `${rec.badgeBg} font-bold shadow-md scale-105 border`
                    : 'bg-[#151620] text-zinc-400 hover:text-white border border-[#2b2c3d]'
                }`}
              >
                <img
                  src={rec.icon}
                  alt={rec.shortName}
                  className={`w-4 h-4 pixelated ${rec.iconRotate}`}
                />
                <span>{rec.shortName}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#3b3b45]">
        <div className="flex items-center gap-2">
          <img src="/assets/items/crafting_table_front.png" alt="Crafting" className="w-5 h-5 pixelated" />
          <h3 className="font-minecraft text-xs sm:text-sm text-yellow-300 font-bold tracking-wider">
            3x3 CRAFTING ALTAR (/artifacts)
          </h3>
        </div>
        <span className="text-[10px] font-minecraft text-[#00ffff] bg-[#00ffff]/10 px-2 py-0.5 rounded border border-[#00ffff]/30">
          LIMIT: 1 IN UNIVERSE
        </span>
      </div>

      {/* Grid and Result Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-1">
        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#c6c6c6] border-2 border-[#373737] shadow-[inset_-2px_-2px_0px_#ffffff,inset_2px_2px_0px_#8b8b8b] rounded">
          {currentRecipe.ingredients.map((slot) => (
            <div
              key={slot.id}
              onMouseEnter={() => { setActiveTooltip(slot); playClickSound(); }}
              onMouseLeave={() => setActiveTooltip(null)}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-[#8b8b8b] border-2 border-[#373737] shadow-[inset_2px_2px_0px_#373737,inset_-2px_-2px_0px_#ffffff] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${
                slot.highlight ? 'ring-2 ring-yellow-400 animate-pulse' : ''
              }`}
            >
              <img
                src={slot.icon}
                alt={slot.name}
                className={`w-8 h-8 sm:w-9 sm:h-9 pixelated ${
                  slot.name.includes('Apple') ? 'filter drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]' : ''
                }`}
              />
              <span className="absolute bottom-0.5 right-1 text-[10px] font-minecraft font-bold text-white drop-shadow-[1px_1px_0px_#000]">
                {slot.count}
              </span>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center justify-center text-zinc-400">
          <ArrowRight className="w-6 h-6 text-[#ffaa00] animate-pulse hidden sm:block" />
          <span className="text-[10px] font-minecraft text-zinc-400 mt-0.5 uppercase tracking-wider">
            Forges Into
          </span>
        </div>

        {/* Result Slot */}
        <div className="flex flex-col items-center">
          <div
            onMouseEnter={() => setActiveTooltip({
              name: currentRecipe.name,
              icon: currentRecipe.icon,
              desc: currentRecipe.desc,
              isArtifact: true
            })}
            onMouseLeave={() => setActiveTooltip(null)}
            className={`relative w-18 h-18 sm:w-20 sm:h-20 bg-[#8b8b8b] border-2 border-[#373737] shadow-[inset_2px_2px_0px_#373737,inset_-2px_-2px_0px_#ffffff] ${currentRecipe.bgGlow} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}
          >
            <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
            <img
              src={currentRecipe.icon}
              alt={currentRecipe.name}
              className={`w-12 h-12 sm:w-14 sm:h-14 pixelated filter drop-shadow-[0_0_10px_rgba(255,215,0,0.7)] ${currentRecipe.iconRotate}`}
            />
            <span className="absolute top-1 right-1 text-[8px] font-minecraft text-red-300 font-bold bg-black/70 px-1 rounded border border-red-500/50">
              MYTHIC
            </span>
          </div>
          <span className={`mt-2 font-minecraft font-bold text-sm sm:text-base mc-shadow text-center ${currentRecipe.themeColor}`}>
            {currentRecipe.name}
          </span>
          <span className="text-[10px] font-minecraft text-zinc-400 mt-0.5">
            {currentRecipe.itemType}
          </span>
        </div>
      </div>

      {/* Tooltip display */}
      <div className="mt-4 p-3 bg-[#101015] border border-[#2c2c36] rounded text-left min-h-[72px]">
        {activeTooltip ? (
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-minecraft text-xs sm:text-sm font-bold ${activeTooltip.isArtifact ? 'text-red-400' : 'text-yellow-400'}`}>
                {activeTooltip.name}
              </span>
              {activeTooltip.highlight && (
                <span className="text-[10px] bg-purple-900/60 text-purple-200 border border-purple-500/50 px-1.5 py-0.5 rounded font-minecraft">
                  CATALYST CORE
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-300 font-sans mt-1 leading-relaxed">
              {activeTooltip.desc}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-500 text-xs font-sans italic pt-3">
            Hover over any ingredient or output slot to inspect custom lore &amp; stats.
          </div>
        )}
      </div>
    </div>
  );
}
