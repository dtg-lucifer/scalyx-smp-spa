import React, { useState } from 'react';
import HeartDisplay from '../components/HeartDisplay';
import { 
  Trophy, Shield, Zap, Sparkles, Check, ChevronDown, 
  Award, AlertTriangle, ArrowDown, Pickaxe, Flame, 
  ShieldCheck, Package
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function RanksPage() {
  const [activeRank, setActiveRank] = useState('ender');

  const ranks = [
    {
      id: 'coal',
      name: 'Coal Rank',
      tag: 'COAL (TIER I)',
      color: 'text-zinc-400',
      border: 'border-zinc-700',
      badgeBg: 'bg-zinc-800 text-zinc-300 border-zinc-600',
      hearts: 10,
      kitSummary: 'Full Iron Gear (No Thorns), Iron Sword, Food, 3 Homes',
      setPerks: 'Speed I passive with complete Coal armor set.',
      perks: [
        '/kit coal (Tier I Kit Shulker)',
        '3 Set Homes (/sethome, /homes)',
        'Convenience utilities: /hat, /workbench, /trash, /rtp',
        'Standard player Auction House market slots'
      ]
    },
    {
      id: 'iron',
      name: 'Iron Rank',
      tag: 'IRON (TIER II)',
      color: 'text-slate-300',
      border: 'border-slate-500',
      badgeBg: 'bg-slate-800 text-slate-200 border-slate-600',
      hearts: 10,
      kitSummary: 'Diamond Sword, Iron Armor (No Thorns), G-Apples, Claims Iron + Coal',
      setPerks: 'Speed I & Resistance I with complete Iron armor set.',
      perks: [
        'Claim rights to both /kit iron and /kit coal downward',
        '4 Set Homes (/sethome)',
        'Deluxe 54-Slot portable Ender Chest (/ec)',
        'Expanded Auction House market listings'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Rank',
      tag: 'GOLD (TIER III)',
      color: 'text-amber-300',
      border: 'border-amber-500',
      badgeBg: 'bg-amber-950/80 text-amber-200 border-amber-600',
      hearts: 10,
      kitSummary: 'Full Diamond Armor (No Thorns), God Apples, Claims Gold + Iron + Coal',
      setPerks: 'Resistance I & Haste I with complete Gold armor set.',
      perks: [
        'Claim rights to /kit gold, /kit iron, and /kit coal',
        '5 Set Homes (/sethome)',
        'Portable anvil repair station (/anvil)',
        'Dynamic player wardrobe customizer (/skin)'
      ]
    },
    {
      id: 'blaze',
      name: 'Blaze Rank',
      tag: 'BLAZE (TIER IV)',
      color: 'text-orange-400',
      border: 'border-orange-500',
      badgeBg: 'bg-orange-950/80 text-orange-200 border-orange-600',
      hearts: 10,
      kitSummary: 'Protection III Diamond Set (No Thorns), Fire Res, Claims Blaze & lower',
      setPerks: 'Permanent Fire Resistance & Speed I (Auto-extinguishes fire/lava).',
      perks: [
        'Claim rights to /kit blaze and all subordinate tier kits',
        'Permanent Fire & Lava immunity armor set perk',
        '6 Set Homes (/sethome)',
        'Instant hunger restore (/feed) and portable smithing table'
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
      kitSummary: 'Protection IV Netherite Set (No Thorns), Sculk Annihilator Sword, Dual 3x3 Super Pickaxes, 64x XP Bottles',
      setPerks: '12 Hearts (24 HP Max), Night Vision, Resistance I, Blindness & Darkness Immunity.',
      perks: [
        'Sculk Annihilator Rank Sword (/swords) with 25-block Sonic Shockwave',
        'Dual 3x3x1 Super Pickaxes: Sculk Resonator (Fortune III) & Sculk Silk Resonator (Silk Touch I)',
        'Health scales up to 12 Full Hearts (24 HP) with full Warden set',
        'Complete immunity to Wardens & Sonic Booms (Wardens never aggro)',
        '64x Experience Bottles & downward claim on all 5 subordinate kits'
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
      kitSummary: 'Protection IV Netherite Set (No Thorns), Eternal Zenith Blade, Dual 3x3 Super Pickaxes, 64x XP Bottles',
      setPerks: '14 Hearts (28 HP Max), Speed I, Strength I, Resistance I & No Fall Damage.',
      perks: [
        'Eternal Zenith Blade (/swords) with 30-block Solar Flame Laser',
        'Dual 3x3x1 Super Pickaxes: Eternal Nebula (Fortune III) & Eternal Silk Nebula (Silk Touch I)',
        'Health scales up to 14 Full Hearts (28 HP) with full Eternal set',
        'Permanent Fire & Lava immunity plus zero fall damage',
        '10 Set Homes & downward claim on Eternal and all lower tier kits'
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
      kitSummary: 'Protection IV Netherite Set (No Thorns), Wither Reaper Blade, Dual 3x3 Super Pickaxes, 64x XP Bottles',
      setPerks: '16 Hearts (32 HP Max), Speed II, Strength II, Resistance II, Wither Effect Immunity & No Fall Damage.',
      perks: [
        'Wither Reaper Blade (/swords) with homing Wither Skull Strike',
        'Dual 3x3x1 Super Pickaxes: Wither Core (Fortune III) & Wither Silk Core (Silk Touch I)',
        'Health scales up to 16 Full Hearts (32 HP) with full Wither set',
        'Total immunity to Wither effects, wither decay ticks, and fall damage',
        '12 Set Homes & downward claim on Wither and all lower tier kits'
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
      kitSummary: 'Quartz-Trimmed Netherite Set (Protection IV, No Thorns), Void Sovereign Blade, Dual 3x3 Super Pickaxes, 64x XP, 64x Logs',
      setPerks: '20 Hearts (40 HP Max), Speed III, Strength II, Permanent Fire Resistance & No Fall Damage.',
      perks: [
        'Void Sovereign World-Ender Blade (/swords) with radial Void Rupture',
        'Dual 3x3x1 Super Pickaxes: Void Sovereign (Fortune III) & Void Silk Shaper (Silk Touch I)',
        'Quartz Armor Trims: Flow (Helmet & Boots), Eye (Chestplate), Bolt (Leggings)',
        'PEAK HEALTH: 20 Full Hearts (40 HP Max) with complete Ender set',
        'Immunity to Poison, Darkness & Blindness; Endermen never aggro',
        '15 Set Homes, 64x Logs, 64x XP, and claim on ALL 8 KITS'
      ]
    }
  ];

  const currentRank = ranks.find((r) => r.id === activeRank) || ranks[ranks.length - 1];

  return (
    <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-minecraft rounded-full shadow-sm">
          <Trophy className="w-3.5 h-3.5" />
          <span>8-TIER RANK PROGRESSION</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          RANKS &amp; KIT PROGRESSION
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Scalyx SMP features an automatic downward kit claim hierarchy. Higher ranks claim all subordinate kits below them with dynamic health scaling up to 20 hearts.
        </p>
      </div>

      {/* Downward Hierarchy Banner */}
      <div className="mc-panel p-5 sm:p-6 rounded-xl border border-emerald-500/50 bg-[#12141c] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 font-minecraft text-sm sm:text-base font-bold">
            <ArrowDown className="w-4 h-4 text-emerald-400" />
            <span>DOWNWARD KIT CLAIM GUARANTEE</span>
          </div>
          <p className="text-xs text-zinc-300 font-sans leading-relaxed max-w-xl">
            Holding the <strong className="text-white">Ender Rank</strong> lets you claim all 8 kits simultaneously from <code className="text-yellow-300 font-minecraft">/kits</code>. Never lose value when upgrading!
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-zinc-700 rounded text-xs font-minecraft text-zinc-300 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>KeepInventory: <strong className="text-red-400">Off (All Ranks)</strong></span>
        </div>
      </div>

      {/* Fair Play & Vanilla Cap Standards */}
      <div className="mc-panel p-5 sm:p-6 rounded-xl border border-yellow-700/50 bg-[#15141d] space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#2d2e40]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
            <h3 className="font-minecraft text-sm sm:text-base text-white font-bold tracking-wider">
              Fair Play Balancing (Vanilla Limits)
            </h3>
          </div>
          <span className="text-[10px] font-minecraft bg-black/50 border border-yellow-600/40 text-yellow-300 px-2.5 py-0.5 rounded">
            Vanilla Limits Enforced
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
          <div className="p-3 bg-[#1a1b28] rounded border border-[#2b2d42] space-y-1">
            <div className="font-minecraft text-red-400 font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> No Thorns Allowed
            </div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              Thorns is 100% removed from all kit armors for clean, skill-based melee duels.
            </p>
          </div>

          <div className="p-3 bg-[#1a1b28] rounded border border-[#2b2d42] space-y-1">
            <div className="font-minecraft text-yellow-400 font-bold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Max Protection IV
            </div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              All armor strictly capped at vanilla Protection IV. Zero pay-to-win armor advantages.
            </p>
          </div>

          <div className="p-3 bg-[#1a1b28] rounded border border-[#2b2d42] space-y-1">
            <div className="font-minecraft text-[#00ffff] font-bold flex items-center gap-1.5">
              <Pickaxe className="w-3.5 h-3.5" /> Dual 3x3 Pickaxes
            </div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              High kits include two 3x3 tools: 1x Fortune III and 1x Silk Touch I.
            </p>
          </div>

          <div className="p-3 bg-[#1a1b28] rounded border border-[#2b2d42] space-y-1">
            <div className="font-minecraft text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Quartz Trims &amp; XP
            </div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              Ender features Quartz trims. Higher kits include 64x XP Bottles; Ender includes 64x Logs.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Rank Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-minecraft text-base sm:text-lg text-white font-bold tracking-wider">
            Select a Rank to Inspect
          </h3>
          <span className="text-xs text-zinc-400 font-sans hidden sm:inline">
            Click any tier to view perks
          </span>
        </div>

        {/* Responsive Grid for 8 Ranks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {ranks.map((r) => (
            <button
              key={r.id}
              onClick={() => { setActiveRank(r.id); playClickSound(); }}
              className={`p-2.5 rounded-lg border text-center transition-all ${
                activeRank === r.id
                  ? `${r.border} bg-[#232436] shadow-md scale-105 font-bold border-2`
                  : 'border-[#2d2e3f] bg-[#141520] hover:bg-[#1c1d2c] text-zinc-400'
              }`}
            >
              <div className={`font-minecraft text-xs truncate ${activeRank === r.id ? r.color : 'text-zinc-300'}`}>
                {r.name.replace(' Rank', '')}
              </div>
              <div className="text-[10px] text-zinc-400 font-sans mt-0.5">
                {r.hearts} Hearts
              </div>
            </button>
          ))}
        </div>

        {/* Selected Rank Detail Panel */}
        <div className={`mc-panel p-5 sm:p-7 rounded-xl border-2 ${currentRank.border} shadow-2xl space-y-5 bg-[#13141f]`}>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3.5 border-b border-[#2d2e40] gap-4">
            <div>
              <span className={`text-[10px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider ${currentRank.badgeBg}`}>
                TIER: {currentRank.tag}
              </span>
              <h2 className={`text-xl sm:text-2xl font-minecraft font-bold tracking-wider ${currentRank.color} mc-shadow mt-1`}>
                {currentRank.name}
              </h2>
            </div>

            {/* Health Bar Display */}
            <div className="w-full sm:w-auto">
              <HeartDisplay
                hearts={currentRank.hearts}
                maxHearts={20}
                label={`${currentRank.name} Health: ${currentRank.hearts} Hearts (${currentRank.hearts * 2} HP)`}
                type={currentRank.hearts >= 16 ? 'hardcore' : 'normal'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Rank Perks */}
            <div className="p-4 bg-[#181926] border border-[#2c2d40] rounded-lg space-y-3">
              <h4 className="font-minecraft text-xs sm:text-sm text-yellow-300 font-bold uppercase tracking-wider">
                Rank Privileges &amp; Perks
              </h4>
              <ul className="space-y-2">
                {currentRank.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Armor Passives & Kit Package */}
            <div className="space-y-3">
              <div className="p-3.5 bg-[#181926] border border-[#2c2d40] rounded-lg space-y-1">
                <h4 className="font-minecraft text-xs text-white font-bold tracking-wider">
                  Armor Set Passives &amp; Health
                </h4>
                <p className="text-xs text-emerald-300 font-sans leading-relaxed">
                  {currentRank.setPerks}
                </p>
                <div className="text-[10px] text-zinc-500 font-sans italic pt-0.5">
                  *Health resets to 10 hearts (20 HP) if armor is unequipped.
                </div>
              </div>

              <div className="p-3.5 bg-[#181926] border border-[#2c2d40] rounded-lg space-y-2">
                <h4 className="font-minecraft text-xs text-white font-bold tracking-wider">
                  Included Kit Shulker Rewards
                </h4>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {currentRank.kitSummary}
                </p>
                <div className="p-2 bg-black/40 rounded border border-[#262738] text-[11px] font-minecraft text-zinc-400 flex items-center justify-between">
                  <span>Redemption:</span>
                  <span className="text-[#00ffff]">/kit {currentRank.id}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
