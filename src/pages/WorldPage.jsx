import React, { useState } from 'react';
import { Globe, Mountain, Flame, Sparkles, Castle, Compass, Eye, ShieldAlert, ChevronRight } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function WorldPage() {
  const [activeTab, setActiveTab] = useState('overworld');

  const dimensions = {
    overworld: {
      name: 'The Overworld (Terralith 2.5)',
      badge: '85+ BESPOKE BIOMES',
      badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/50',
      heroImage: '/assets/images/gallery/hero_landscape.jpg',
      packIcon: '/assets/images/datapacks/terralith.png',
      desc: 'Terralith 2.5 completely overhauls the Overworld terrain generation without requiring any client mods. From sheer volcanic calderas to painted canyons and soaring alpine peaks, every step of your exploration is awe-inspiring.',
      features: [
        { title: 'Painted Canyons', desc: 'Vibrant terracotta mesas stratified with veins of raw gold and lapis lazuli.' },
        { title: 'Moonlight Valley', desc: 'Ethereal glowing spruce forests draped in twilight mist and lush moss.' },
        { title: 'Subterranean Calderas', desc: 'Colossal underground cavern chambers with subterranean lava waterfalls.' },
        { title: 'Mirage Isles & Tropics', desc: 'Lush archipelagos perfect for offshore ocean fortress construction.' }
      ]
    },
    nether: {
      name: 'The Nether (Incendium)',
      badge: 'HELL REBORN',
      badgeColor: 'bg-red-900/60 text-red-300 border-red-500/50',
      heroImage: '/assets/images/gallery/nether_fortress.jpg',
      packIcon: '/assets/images/datapacks/incendium.png',
      desc: 'Incendium transforms the Nether into a brutally hostile, high-reward inferno. Towering nether sanctums, volcanic geysers, and ash barrens will test the limits of even netherite-armored veterans.',
      features: [
        { title: 'Infernal Sanctum', desc: 'Multi-level nether strongholds guarded by elite piglin brutes and wither sentinels.' },
        { title: 'Ash Barrens', desc: 'Desolate volcanic wastelands where fiery geysers can propel players into the air.' },
        { title: 'Quartz Flats & Nether Seas', desc: 'Vast lava oceans dotted with custom bastions and netherite scrap caches.' },
        { title: 'Toxic Mire', desc: 'Poisonous subterranean caverns brimming with dangerous fungal spores.' }
      ]
    },
    end: {
      name: 'The End (Nullscape & Stellarity)',
      badge: 'CUSTOM DRAGON FIGHT',
      badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-500/50',
      heroImage: '/assets/images/gallery/end_dimension.jpg',
      packIcon: '/assets/images/datapacks/stellarity.png',
      desc: 'The End dimension is reimagined from the bedrock up. 500-block tall obsidian pillars, crystalline citadels, and an intense multi-phase Ender Dragon boss fight await those brave enough to open the portal.',
      features: [
        { title: 'Revamped Ender Dragon', desc: 'Multi-phase boss encounters with summoning totems, void lasers, and wing blasts.' },
        { title: 'The Dragon Egg Altar', desc: 'Defeating the Dragon drops the ONE and ONLY Dragon Egg used to forge the Lifestealer!' },
        { title: 'Null Void Islands', desc: 'Towering crystalline peaks and shattered dimensional bridges stretching into eternity.' },
        { title: 'Stellar Citadels', desc: 'Custom End Cities housing elytras, shulker shells, and mythic weapon catalysts.' }
      ]
    },
    structures: {
      name: 'Dungeons & Explorify',
      badge: 'PROCEDURAL RUINS',
      badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-500/50',
      heroImage: '/assets/images/gallery/dungeon_cave.jpg',
      packIcon: '/assets/images/datapacks/dungeons_taverns.png',
      desc: 'The world is filled with handcrafted procedural structures courtesy of Dungeons & Taverns, Explorify, Structory, and Structory Towers. Never explore an empty forest again.',
      features: [
        { title: 'Dungeons & Taverns', desc: 'Roadside taverns, bandit outposts, and sprawling deepslate strongholds.' },
        { title: 'Structory Towers', desc: 'Towering stone keeps with watchtowers, hidden loot rooms, and trapdoors.' },
        { title: 'Explorify Ruins', desc: 'Ancient overgrown shrines, lost temples, and pirate coves waiting to be raided.' },
        { title: 'Bespoke Strongholds', desc: 'Fully redesigned End Portal strongholds that feel like true subterranean labyrinths.' }
      ]
    }
  };

  const current = dimensions[activeTab];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-xs font-minecraft rounded-full">
          <Globe className="w-4 h-4" />
          <span>IMMERSIVE CUSTOM GENERATION</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          CUSTOM WORLD GENERATION
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Powered by world-class generation datapacks integrated directly into Paper 1.21.4. Zero client mods needed — just jump in and explore.
        </p>
      </div>

      {/* Dimension Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => { setActiveTab('overworld'); playClickSound(); }}
          className={`mc-button flex items-center gap-1.5 ${activeTab === 'overworld' ? 'mc-button-green' : ''}`}
        >
          <Mountain className="w-4 h-4 text-emerald-400" />
          <span>OVERWORLD (TERRALITH)</span>
        </button>

        <button
          onClick={() => { setActiveTab('nether'); playClickSound(); }}
          className={`mc-button flex items-center gap-1.5 ${activeTab === 'nether' ? 'mc-button-red' : ''}`}
        >
          <Flame className="w-4 h-4 text-red-400" />
          <span>NETHER (INCENDIUM)</span>
        </button>

        <button
          onClick={() => { setActiveTab('end'); playClickSound(); }}
          className={`mc-button flex items-center gap-1.5 ${activeTab === 'end' ? 'mc-button-gold' : ''}`}
        >
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span>THE END (STELLARITY)</span>
        </button>

        <button
          onClick={() => { setActiveTab('structures'); playClickSound(); }}
          className={`mc-button flex items-center gap-1.5 ${activeTab === 'structures' ? 'bg-[#3d334d] border-t-[#594d6e]' : ''}`}
        >
          <Castle className="w-4 h-4 text-amber-300" />
          <span>DUNGEONS &amp; STRUCTURES</span>
        </button>
      </div>

      {/* Spotlight Card */}
      <div className="mc-panel p-8 rounded-xl shadow-2xl relative overflow-hidden space-y-8">
        
        {/* Banner with pack icon & badge */}
        <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden border-2 border-[#3d3e52]">
          <img
            src={current.heroImage}
            alt={current.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101118] via-[#101118]/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black/70 border-2 border-[#555] rounded p-1 shadow-xl">
                <img src={current.packIcon} alt="Icon" className="w-full h-full object-contain pixelated" />
              </div>
              <div>
                <span className={`text-[11px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-minecraft text-white font-bold tracking-wider mc-shadow mt-0.5">
                  {current.name}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
          {current.desc}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.features.map((item, idx) => (
            <div key={idx} className="p-4 bg-[#161724] border border-[#2c2d3f] rounded-lg">
              <h4 className="font-minecraft text-base text-yellow-300 font-bold mb-1">
                &gt; {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Datapack Technology Gallery Grid */}
      <div className="space-y-4">
        <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider mc-shadow">
          DATAPACK SUITE INTEGRATION
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/terralith.png" alt="Terralith" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Terralith</div>
              <div className="text-[11px] text-zinc-400 font-sans">Overworld 85+ biomes</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/incendium.png" alt="Incendium" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Incendium</div>
              <div className="text-[11px] text-zinc-400 font-sans">Nether expansion &amp; castles</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/nullscape.png" alt="Nullscape" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Nullscape</div>
              <div className="text-[11px] text-zinc-400 font-sans">Void spires &amp; islands</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/stellarity.png" alt="Stellarity" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Stellarity</div>
              <div className="text-[11px] text-zinc-400 font-sans">Boss fight overhaul</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/dungeons_taverns.png" alt="Dungeons" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Dungeons &amp; Taverns</div>
              <div className="text-[11px] text-zinc-400 font-sans">Procedural keeps &amp; towers</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/explorify.png" alt="Explorify" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Explorify</div>
              <div className="text-[11px] text-zinc-400 font-sans">Temples &amp; hidden ruins</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/structory.png" alt="Structory" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Structory</div>
              <div className="text-[11px] text-zinc-400 font-sans">Atmospheric waypoints</div>
            </div>
          </div>

          <div className="mc-panel p-4 rounded flex items-center gap-3">
            <img src="/assets/images/datapacks/structory_towers.png" alt="Structory Towers" className="w-12 h-12 pixelated rounded" />
            <div>
              <div className="font-minecraft text-white text-base">Structory Towers</div>
              <div className="text-[11px] text-zinc-400 font-sans">Tower defense bastions</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
