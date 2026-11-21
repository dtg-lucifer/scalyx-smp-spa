import React, { useState } from 'react';
import HeartDisplay from '../components/HeartDisplay';
import { Trophy, Shield, Zap, Sparkles, Check, ChevronDown, Award, AlertTriangle, ArrowDown } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function RanksPage() {
  const [activeRank, setActiveRank] = useState('ender');

  const ranks = [
    {
      id: 'coal',
      name: 'Coal Rank',
      tag: 'COAL (TIER I)',
      color: 'text-zinc-400',
      border: 'border-zinc-600',
      badgeBg: 'bg-zinc-800 text-zinc-300',
      hearts: 10,
      kitSummary: 'Full Iron Gear, Food Rations, 3 Homes, 1x Daily Coal Kit',
      setPerks: 'Speed I with complete Coal armor set.',
      perks: [
        'Access to /kit coal (Tier I Kit)',
        '3 Set Homes (/sethome, /homes)',
        'Access to /hat, /workbench, /trash, /rtp',
        'Basic player Auction House slots'
      ]
    },
    {
      id: 'iron',
      name: 'Iron Rank',
      tag: 'IRON (TIER II)',
      color: 'text-slate-300',
      border: 'border-slate-500',
      badgeBg: 'bg-slate-700 text-slate-200',
      hearts: 10,
      kitSummary: 'Diamond Sword, Iron Armor, Golden Apples, Claims Iron + Coal Kits',
      setPerks: 'Speed I & Resistance I with complete Iron armor set.',
      perks: [
        'Access to /kit iron and /kit coal downward',
        '4 Set Homes (/sethome)',
        'Access to /ec (Portable 54-Slot Deluxe Ender Chest)',
        'Increased Auction House marketplace listings'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Rank',
      tag: 'GOLD (TIER III)',
      color: 'text-amber-300',
      border: 'border-amber-500',
      badgeBg: 'bg-amber-900/60 text-amber-200 border-amber-600',
      hearts: 10,
      kitSummary: 'Full Diamond Armor, Enchanted Golden Apples, Claims Gold + Iron + Coal Kits',
      setPerks: 'Resistance I & Haste I with complete Gold armor set.',
      perks: [
        'Access to /kit gold, /kit iron, /kit coal',
        '5 Set Homes (/sethome)',
        'Access to /anvil portable repair station',
        'Access to /skin dynamic wardrobe customizer'
      ]
    },
    {
      id: 'blaze',
      name: 'Blaze Rank',
      tag: 'BLAZE (TIER IV)',
      color: 'text-orange-400',
      border: 'border-orange-500',
      badgeBg: 'bg-orange-900/60 text-orange-200 border-orange-600',
      hearts: 10,
      kitSummary: 'Protection III Diamond Armor, Fire Resistance, Claims Blaze & lower kits',
      setPerks: 'Permanent Fire Resistance & Speed I (Auto-extinguishes fire/lava).',
      perks: [
        'Access to /kit blaze and all subordinate kits',
        'Permanent Fire Resistance & Speed I armor set buff',
        '6 Set Homes (/sethome)',
        'Access to /feed and /smithing portable workbench'
      ]
    },
    {
      id: 'warden',
      name: 'Warden Rank',
      tag: 'WARDEN (TIER V)',
      color: 'text-[#00ffff]',
      border: 'border-[#00ffff]',
      badgeBg: 'bg-cyan-950 text-[#00ffff] border-[#00ffff]',
      hearts: 12,
      kitSummary: 'Netherite Protection IV Set, Sculk Annihilator Sword, 3x3x1 Super Pickaxe, Claims Warden & lower kits',
      setPerks: '12 Hearts (24 HP Max), Night Vision, Resistance I, Blindness & Darkness Immunity.',
      perks: [
        'Access to the Mythic Sculk Annihilator Sword (/swords)',
        'DonutSMP 3x3x1 Super Pickaxe (/pickaxe)',
        'Health Scales to 12 HEARTS (24 HP) with full Warden set',
        'Immunity to Wardens & Sonic Booms (Wardens never aggro)',
        '8 Set Homes and downward claim on Warden, Blaze, Gold, Iron & Coal kits'
      ]
    },
    {
      id: 'eternal',
      name: 'Eternal Rank',
      tag: 'ETERNAL (TIER VI)',
      color: 'text-yellow-400',
      border: 'border-yellow-400',
      badgeBg: 'bg-yellow-950 text-yellow-300 border-yellow-500',
      hearts: 14,
      kitSummary: 'Protection IV Netherite Set, Eternal Zenith Blade, 3x3x1 Super Pickaxe, Claims Eternal & lower kits',
      setPerks: '14 Hearts (28 HP Max), Speed I, Strength I, Resistance I, Absorption I & No Fall Damage.',
      perks: [
        'Access to the Mythic Eternal Zenith Blade (/swords)',
        'DonutSMP 3x3x1 Super Pickaxe (/pickaxe)',
        'Health Scales to 14 HEARTS (28 HP) with full Eternal set',
        'Permanent Fire & Lava immunity at all times',
        '10 Set Homes and downward claim on Eternal and all lower kits'
      ]
    },
    {
      id: 'wither',
      name: 'Wither Rank',
      tag: 'WITHER (TIER VII)',
      color: 'text-purple-400',
      border: 'border-purple-400',
      badgeBg: 'bg-purple-950 text-purple-300 border-purple-500',
      hearts: 16,
      kitSummary: 'Protection IV Netherite Set, Wither Reaper Blade, 3x3x1 Super Pickaxe, Claims Wither & lower kits',
      setPerks: '16 Hearts (32 HP Max), Speed II, Strength II, Resistance II, Absorption I, Wither Immunity & No Fall Damage.',
      perks: [
        'Access to the Mythic Wither Reaper Blade (/swords)',
        'DonutSMP 3x3x1 Super Pickaxe (/pickaxe)',
        'Health Scales to 16 HEARTS (32 HP) with full Wither set',
        'Total immunity to Wither effects and decay damage',
        '12 Set Homes and downward claim on Wither and all lower kits'
      ]
    },
    {
      id: 'ender',
      name: 'Ender Rank',
      tag: 'ENDER (APEX TIER VIII)',
      color: 'text-emerald-400',
      border: 'border-emerald-400',
      badgeBg: 'bg-emerald-950 text-emerald-300 border-emerald-400',
      hearts: 20,
      kitSummary: 'Apex God Armor, Void Sovereign World-Ender Blade, 3x3x1 Super Pickaxe, Claims ALL 8 KITS',
      setPerks: '20 Hearts (40 HP Max), Speed III, Strength II, Fire Resistance, No Fall Damage & Absorption II (+4 Absorption Hearts).',
      perks: [
        'Access to the Mythic Void Sovereign World-Ender Blade (/swords)',
        'DonutSMP 3x3x1 Super Pickaxe (/pickaxe)',
        'MAX HP SCALING: 20 FULL HEARTS (40 HP) with full Ender Set!',
        'Immunity to Poison, Darkness & Blindness; Endermen never aggro on you',
        '15 Set Homes and downward claim on ALL 8 RANK KITS in the server!'
      ]
    }
  ];

  const currentRank = ranks.find((r) => r.id === activeRank) || ranks[ranks.length - 1];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/60 border border-purple-500/50 text-purple-300 text-xs font-minecraft rounded-full">
          <Trophy className="w-4 h-4" />
          <span>HIERARCHY OF CHAMPIONS • 8 TIERS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          RANKS &amp; KIT PROGRESSION
        </h1>
        <p className="max-w-3xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Scalyx SMP features an innovative downward kit claim hierarchy: higher ranks automatically unlock and claim all subordinate rank kits below them. Health scales dynamically up to 20 full hearts (40 HP)!
        </p>
      </div>

      {/* Downward Hierarchy Explainer */}
      <div className="mc-panel p-5 sm:p-6 rounded-xl border-2 border-emerald-500/50 bg-[#12141c] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-emerald-400 font-minecraft text-base sm:text-lg font-bold">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <span>DOWNWARD KIT CLAIM GUARANTEE</span>
          </div>
          <p className="text-xs text-zinc-300 font-sans leading-relaxed max-w-2xl">
            Never lose value. Holding the <strong>Ender Rank</strong> allows you to claim the Ender Kit, Wither Kit, Eternal Kit, Warden Kit, Blaze Kit, Gold Kit, Iron Kit, and Coal Kit simultaneously from <code className="text-yellow-300">/kits</code>! Each kit is packed in color-coded shulker boxes.
          </p>
        </div>
        <div className="p-2.5 bg-black/50 border border-[#2b2c3d] rounded text-center font-minecraft text-xs text-zinc-400 shrink-0">
          <div className="text-emerald-400 text-sm font-bold">100% FAIR COMBAT</div>
          <div className="text-red-400 text-[10px] mt-0.5">KeepInventory: OFF For All Ranks</div>
        </div>
      </div>

      {/* Interactive Rank Selector */}
      <div className="space-y-5">
        <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider mc-shadow">
          SELECT A RANK TO INSPECT
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {ranks.map((r) => (
            <button
              key={r.id}
              onClick={() => { setActiveRank(r.id); playClickSound(); }}
              className={`p-2.5 rounded border flex flex-col items-center justify-center transition-all ${
                activeRank === r.id
                  ? `${r.border} bg-[#232436] shadow-lg scale-105 font-bold`
                  : 'border-[#2d2e3f] bg-[#141520] hover:bg-[#1c1d2c] text-zinc-400'
              }`}
            >
              <span className={`font-minecraft text-xs ${activeRank === r.id ? r.color : 'text-zinc-300'}`}>
                {r.tag.split(' ')[0]}
              </span>
              <span className="text-[10px] text-zinc-500 font-sans mt-0.5">
                {r.hearts} Hearts
              </span>
            </button>
          ))}
        </div>

        {/* Selected Rank Detail Panel */}
        <div className={`mc-panel p-6 sm:p-7 rounded-xl border-2 ${currentRank.border} shadow-xl space-y-5 bg-[#13141f]`}>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3.5 border-b border-[#2d2e40] gap-4">
            <div>
              <span className={`text-[10px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider ${currentRank.badgeBg}`}>
                TIER: {currentRank.tag}
              </span>
              <h2 className={`text-xl sm:text-2xl font-minecraft font-bold tracking-wider ${currentRank.color} mc-shadow mt-0.5`}>
                {currentRank.name}
              </h2>
            </div>

            {/* Health Bar Display */}
            <div className="w-full sm:w-auto">
              <HeartDisplay
                hearts={currentRank.hearts}
                maxHearts={20}
                label={`${currentRank.name} Vitality (${currentRank.hearts} Hearts / ${currentRank.hearts * 2} HP)`}
                type={currentRank.hearts >= 16 ? 'hardcore' : 'normal'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Perks */}
            <div className="space-y-3">
              <h4 className="font-minecraft text-lg text-yellow-300 font-bold tracking-wider">
                RANK PRIVILEGES &amp; PERKS
              </h4>
              <ul className="space-y-2">
                {currentRank.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 font-sans">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kit Package & Set Bonus */}
            <div className="space-y-3">
              <div className="p-4 bg-[#181926] border border-[#2c2d40] rounded-lg space-y-2">
                <h4 className="font-minecraft text-sm sm:text-base text-white font-bold tracking-wider">
                  ARMOR SET PASSIVES &amp; SCALING
                </h4>
                <p className="text-xs text-emerald-300 font-sans leading-relaxed">
                  {currentRank.setPerks}
                </p>
                <div className="text-[10px] text-zinc-400 font-sans italic">
                  *Health seamlessly resets to 10 hearts (20 HP) the moment armor is unequipped.
                </div>
              </div>

              <div className="p-4 bg-[#181926] border border-[#2c2d40] rounded-lg space-y-2">
                <h4 className="font-minecraft text-sm sm:text-base text-white font-bold tracking-wider">
                  INCLUDED KIT REWARDS
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  {currentRank.kitSummary}
                </p>
                <div className="p-2.5 bg-black/40 rounded border border-[#262738] text-xs font-minecraft text-zinc-400">
                  Redemption Command: <span className="text-[#00ffff]">/kit {currentRank.id}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
