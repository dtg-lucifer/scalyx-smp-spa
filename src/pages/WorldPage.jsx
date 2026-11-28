import React, { useState } from 'react';
import { 
  Globe, Mountain, Flame, Sparkles, Castle, Compass, Eye, ShieldAlert, 
  ChevronRight, ChevronLeft, X, ZoomIn, MapPin, Layers, Sword, Shield, Camera
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function WorldPage() {
  const [activeTab, setActiveTab] = useState('nether');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState(null);

  // Gallery items containing authentic in-game screenshots
  const galleryItems = [
    // Nether Dimension
    {
      id: 'nether-quartz-cathedral',
      title: 'Floating Quartz Cathedral',
      category: 'nether',
      location: 'Incendium: Quartz Flats',
      coords: 'X: 1076, Y: 64, Z: -12',
      image: '/assets/images/nether/nether_quartz_cathedral.png',
      badge: 'Incendium Sanctum',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-700',
      description: 'A colossal gleaming white Quartz Cathedral suspended above an infinite ocean of lava. Guarded by elite Wither Skeletons and Piglin Brutes, holding high-tier ancient debris caches.'
    },
    {
      id: 'nether-ash-citadel',
      title: 'Ash Barrens Clocktower Citadel',
      category: 'nether',
      location: 'Incendium: Ash Barrens',
      coords: 'X: -995, Y: 110, Z: 1392',
      image: '/assets/images/nether/nether_ash_citadel.png',
      badge: 'Volcanic Fortress',
      badgeColor: 'bg-orange-950/80 text-orange-300 border-orange-700',
      description: 'A towering fortified clocktower citadel looming over the volcanic Ash Barrens. Volcanic ash drifts through the sky while fiery geysers rocket players across the crags.'
    },
    {
      id: 'nether-basalt-fortress',
      title: 'Basalt Delta Fortress Bridge',
      category: 'nether',
      location: 'Incendium: Basalt Deltas',
      coords: 'Nether Deep Core',
      image: '/assets/images/nether/nether_basalt_fortress.png',
      badge: 'Sprawling Fortress',
      badgeColor: 'bg-zinc-800 text-zinc-200 border-zinc-600',
      description: 'Massive multi-tiered Nether Fortress spanning rugged basalt columns and smoking magma vents. Redesigned with vertical battlements and blaze spawner chambers.'
    },
    {
      id: 'nether-quartz-flats',
      title: 'Hellish Paradise & Quartz Plains',
      category: 'nether',
      location: 'Incendium: Quartz Flats',
      coords: 'Advancement: Hellish Paradise',
      image: '/assets/images/nether/nether_quartz_flats.png',
      badge: 'Crystalline Terrain',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-700',
      description: 'Expansive Nether plateau covered in jagged quartz clusters and netherrack spires overlooking a vast sea of fire, unlocking the custom Hellish Paradise advancement.'
    },
    {
      id: 'nether-piglin-bastion',
      title: 'Multi-Tiered Nether Bastion Ramparts',
      category: 'nether',
      location: 'Incendium: Nether Wastes',
      coords: 'Nether Fortress & Bastion Overhaul',
      image: '/assets/images/nether/nether_piglin_bastion.png',
      badge: 'Procedural Bastion',
      badgeColor: 'bg-red-900/80 text-red-200 border-red-600',
      description: 'Colossal fortified bridges and hanging cage walkways suspended above bubbling lava falls, where piglin hordes guard custom netherite templates.'
    },
    {
      id: 'nether-quartz-sanctum-alt',
      title: 'Sanctum Spire & Magma Cascade',
      category: 'nether',
      location: 'Incendium: Floating Ruins',
      coords: 'Nether Dimension',
      image: '/assets/images/nether/nether_quartz_sanctum.png',
      badge: 'Sanctum Ruins',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-700',
      description: 'Alternate vista of the Quartz Sanctum displaying the intricate gothic quartz buttresses and glowing fire braziers hovering in the nether ceiling.'
    },

    // The End Dimension
    {
      id: 'end-the-hallow',
      title: 'The Hallow Prismatic Forest',
      category: 'end',
      location: 'Stellarity: The Hallow',
      coords: 'X: 2518, Y: 58, Z: -70',
      image: '/assets/images/end/end_the_hallow.png',
      badge: 'Stellarity Prismatic',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-600',
      description: 'Breathtaking pastel rainbow canopy with prismatic chorus flora and floating void islands. An ethereal paradise deep within the outer End islands.'
    },
    {
      id: 'end-amethyst-forest',
      title: 'Amethyst Forest & Amphitheater',
      category: 'end',
      location: 'Stellarity: Amethyst Forest',
      coords: 'X: 2840, Y: 72, Z: -150',
      image: '/assets/images/end/end_amethyst_forest.png',
      badge: 'Custom Arena Ruin',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      description: 'A circular stone amphitheater ringed with glowing cyan portal sigils and towering purple amethyst spires. A premier hotspot for late-game void duels.'
    },
    {
      id: 'end-amethyst-canopy',
      title: 'Deep Amethyst Crystal Canopy',
      category: 'end',
      location: 'Stellarity: Amethyst Forest',
      coords: 'Under-Canopy View',
      image: '/assets/images/end/end_amethyst_canopy.png',
      badge: 'Geode Forest',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      description: 'Lush ground perspective beneath giant hanging amethyst geodes, luminescent purple leaves, and ambient void particle clouds.'
    },
    {
      id: 'end-frosted-valley',
      title: 'Frosted Valley & Celestial Glyphs',
      category: 'end',
      location: 'Stellarity: Frosted Valley',
      coords: 'X: 3100, Y: 60, Z: 450',
      image: '/assets/images/end/end_frosted_valley.png',
      badge: 'Glacial End Biome',
      badgeColor: 'bg-blue-950/80 text-blue-300 border-blue-600',
      description: 'Sub-zero frozen End wastes with giant ice spires, floating celestial islands, and ancient glowing golden glyphs carved into frozen end stone.'
    },
    {
      id: 'end-dragon-arena',
      title: 'Overhauled Dragon Arena & Void Pit',
      category: 'end',
      location: 'Nullscape & Stellarity Main Island',
      coords: 'X: 0, Y: 65, Z: 0',
      image: '/assets/images/end/end_dragon_arena.png',
      badge: 'Boss Arena',
      badgeColor: 'bg-purple-900/80 text-purple-200 border-purple-500',
      description: '500-block tall crying obsidian pillars, custom particle rings, and the bottomless central void pit where the multi-phase Ender Dragon boss fight takes place.'
    },
    {
      id: 'end-dragon-altar',
      title: 'The Dragon Egg Pedestal Altar',
      category: 'end',
      location: 'Central End Podium',
      coords: 'X: 0, Y: 64, Z: 0',
      image: '/assets/images/end/end_dragon_altar.png',
      badge: 'Dragon Egg Spawn',
      badgeColor: 'bg-yellow-950/80 text-yellow-300 border-yellow-600',
      description: 'The ancient bedrock pedestal where the ONE and ONLY server Dragon Egg manifests after slaying the dragon. The primary catalyst to forge the Lifestealer!'
    },
    {
      id: 'end-void-monoliths',
      title: 'Nullscape Void Monoliths',
      category: 'end',
      location: 'Nullscape: Void Crags',
      coords: 'End Horizon',
      image: '/assets/images/end/end_void_monoliths.png',
      badge: 'Nullscape Terrain',
      badgeColor: 'bg-zinc-900 text-zinc-300 border-zinc-700',
      description: 'Sheer obsidian needles piercing the void with shattered bridging arches connecting the central battlegrounds to the outer abyss.'
    },
    {
      id: 'end-chorus-ruins',
      title: 'Chorus Ruins & Enderman Swarms',
      category: 'end',
      location: 'End Barrens',
      coords: 'End Island Outer Rim',
      image: '/assets/images/end/end_chorus_ruins.png',
      badge: 'Hostile Swarm',
      badgeColor: 'bg-indigo-950/80 text-indigo-300 border-indigo-600',
      description: 'Dense colonies of endermen around ruined stone pedestals bathed in swirling potion auras and mature chorus fruit stalks.'
    },

    // Custom Gear, Armor & Weapons
    {
      id: 'gear-ender-armor-sword',
      title: 'Ender God Armor Set & Void Sovereign',
      category: 'gear',
      location: 'Player Combat Loadout',
      coords: '20 Full Hearts (40 HP)',
      image: '/assets/images/gear/gear_ender_armor_sword.png',
      badge: 'Tier IV Endgame Gear',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      description: 'Full custom glowing purple Ender Armor set equipped alongside the Void Sovereign broadsword. Note the double health bar displaying 20 Full Hearts (40 HP)!'
    },
    {
      id: 'gear-starless-scythe',
      title: 'The Starless Scythe in Action',
      category: 'gear',
      location: 'The End Dimension',
      coords: 'Custom Relic Weapon',
      image: '/assets/images/gear/gear_starless_scythe.png',
      badge: 'Custom Weapon',
      badgeColor: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-600',
      description: 'Third-person inspection of the curved Starless Scythe blade ready for combat amidst the obsidian monoliths of the End.'
    },
    {
      id: 'gear-custom-weapon-flash',
      title: 'Custom Relic Sword Stance',
      category: 'gear',
      location: 'End Battlegrounds',
      coords: 'Combat Stance',
      image: '/assets/images/gear/gear_custom_weapon_flash.png',
      badge: 'Custom Blade',
      badgeColor: 'bg-pink-950/80 text-pink-300 border-pink-600',
      description: 'Wielding a custom relic blade while navigating hostile End terrain, showing customized item rendering without requiring any client mods.'
    },
    {
      id: 'gear-ender-armor-front',
      title: 'Ender Armor 3rd-Person Frontal View',
      category: 'gear',
      location: 'Player Inspection',
      coords: 'Full Set Bonus Active',
      image: '/assets/images/gear/gear_ender_armor_front.png',
      badge: 'Custom Model',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      description: 'Frontal perspective highlighting the custom textured armor helmet, chestplate, leggings, and boots infused with void energy.'
    },

    // In-Game GUIs & Systems
    {
      id: 'gui-mythic-crafting',
      title: 'In-Game 3x3 Mythic Crafting GUI',
      category: 'gui',
      location: 'Server Custom GUI',
      coords: '/artifacts & /craft',
      image: '/assets/images/gui/gui_mythic_crafting.png',
      badge: 'Authentic Server GUI',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-600',
      description: 'Live in-game screenshot of the custom 3x3 crafting grid showing the Worldbreaker Mace recipe (Heavy Core + 4x Netherite Blocks + 2x Breeze Rods + 2x God Apples) and full item tooltip.'
    },
    {
      id: 'gui-inventory-loadout',
      title: 'Player Inventory & 4 Armor Tiers Preview',
      category: 'gui',
      location: 'Player GUI',
      coords: 'Active Potion Effects HUD',
      image: '/assets/images/gui/gui_inventory_loadout.png',
      badge: 'Active Buffs HUD',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-600',
      description: 'Full player inventory showcase featuring 4 tiers of custom armors, mythic weapons in hotbar, and active permanent potion buffs: Speed III, Fire Resistance, Strength II, Absorption II, and Night Vision.'
    }
  ];

  const dimensions = {
    nether: {
      name: 'The Nether (Incendium)',
      badge: 'HELL REBORN • IN-GAME SNAPSHOTS',
      badgeColor: 'bg-red-900/60 text-red-300 border-red-500/50',
      heroImage: '/assets/images/nether/nether_quartz_cathedral.png',
      packIcon: '/assets/images/datapacks/incendium.png',
      desc: 'Incendium completely revitalizes the Nether into a brutally hostile, high-reward inferno. Featuring monumental floating Quartz Cathedrals, Ash Barrens clocktowers, and multi-tier piglin bastions spanning lava oceans.',
      screenshots: [
        { title: 'Quartz Cathedral', img: '/assets/images/nether/nether_quartz_cathedral.png', tag: 'Quartz Flats' },
        { title: 'Ash Barrens Citadel', img: '/assets/images/nether/nether_ash_citadel.png', tag: 'Ash Barrens' },
        { title: 'Basalt Delta Fortress', img: '/assets/images/nether/nether_basalt_fortress.png', tag: 'Basalt Deltas' },
        { title: 'Hellish Paradise', img: '/assets/images/nether/nether_quartz_flats.png', tag: 'Quartz Terrain' },
        { title: 'Piglin Ramparts', img: '/assets/images/nether/nether_piglin_bastion.png', tag: 'Bastion Citadel' }
      ],
      features: [
        { title: 'Floating Quartz Sanctum', desc: 'Gargantuan white quartz cathedrals hovering over lava lakes with elite wither guardians.' },
        { title: 'Ash Barrens Clocktower', desc: 'Desolate volcanic citadels with fiery geysers propelling players across mountain crags.' },
        { title: 'Overhauled Bastion Bridges', desc: 'Sprawling multi-level piglin fortifications loaded with Netherite Upgrade Templates.' },
        { title: 'Basalt Lava Spans', desc: 'Intricate basalt delta bridges connecting ancient nether fortresses and blaze spawners.' }
      ]
    },
    end: {
      name: 'The End (Nullscape & Stellarity)',
      badge: 'CUSTOM BIOMES & DRAGON FIGHT',
      badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-500/50',
      heroImage: '/assets/images/end/end_amethyst_forest.png',
      packIcon: '/assets/images/datapacks/stellarity.png',
      desc: 'The End dimension is reimagined from the bedrock up. Journey through prismatic rainbow forests in The Hallow, crystal amphitheaters in the Amethyst Forest, sub-zero glacial spires in the Frosted Valley, and the redesigned 500-block Dragon arena.',
      screenshots: [
        { title: 'The Hallow Forest', img: '/assets/images/end/end_the_hallow.png', tag: 'Prismatic Biome' },
        { title: 'Amethyst Arena', img: '/assets/images/end/end_amethyst_forest.png', tag: 'Amethyst Ruins' },
        { title: 'Frosted Valley', img: '/assets/images/end/end_frosted_valley.png', tag: 'Glacial Spires' },
        { title: 'Dragon Arena & Void Pit', img: '/assets/images/end/end_dragon_arena.png', tag: 'Boss Arena' },
        { title: 'Dragon Egg Altar', img: '/assets/images/end/end_dragon_altar.png', tag: 'Egg Pedestal' }
      ],
      features: [
        { title: 'The Hallow Rainbow Biome', desc: 'Surreal pastel rainbow trees, glowing celestial clouds, and prismatic chorus fruit.' },
        { title: 'Amethyst Forest Amphitheater', desc: 'Circular stone ruins with glowing cyan swirl sigils beneath colossal amethyst geodes.' },
        { title: 'Frosted Valley Glacial Spires', desc: 'Towering icicle crags, snow plains, and floating sky islands with ancient glyphs.' },
        { title: 'Redesigned Dragon Fight', desc: 'Multi-phase boss battle around crying obsidian needles and the Dragon Egg altar.' }
      ]
    },
    overworld: {
      name: 'The Overworld (Terralith 2.5)',
      badge: '85+ BESPOKE BIOMES',
      badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/50',
      heroImage: '/assets/images/gallery/hero_landscape.jpg',
      packIcon: '/assets/images/datapacks/terralith.png',
      desc: 'Terralith 2.5 completely overhauls the Overworld terrain generation without requiring any client mods. From sheer volcanic calderas to painted canyons and soaring alpine peaks, every step of your exploration is awe-inspiring.',
      screenshots: [
        { title: 'Alpine Wilderness', img: '/assets/images/gallery/hero_landscape.jpg', tag: 'Alpine Peaks' },
        { title: 'Epic Mountain Ranges', img: '/assets/images/gallery/epic_mountains.jpg', tag: 'High Altitudes' }
      ],
      features: [
        { title: 'Painted Canyons', desc: 'Vibrant terracotta mesas stratified with veins of raw gold and lapis lazuli.' },
        { title: 'Moonlight Valley', desc: 'Ethereal glowing spruce forests draped in twilight mist and lush moss.' },
        { title: 'Subterranean Calderas', desc: 'Colossal underground cavern chambers with subterranean lava waterfalls.' },
        { title: 'Mirage Isles & Tropics', desc: 'Lush archipelagos perfect for offshore ocean fortress construction.' }
      ]
    },
    structures: {
      name: 'Dungeons & Explorify',
      badge: 'PROCEDURAL RUINS & KEEP TOWERS',
      badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-500/50',
      heroImage: '/assets/images/gallery/dungeon_cave.jpg',
      packIcon: '/assets/images/datapacks/dungeons_taverns.png',
      desc: 'The world is filled with handcrafted procedural structures courtesy of Dungeons & Taverns, Explorify, Structory, and Structory Towers. Explore underground catacombs, roadside taverns, and fortified keeps.',
      screenshots: [
        { title: 'Underground Catacombs', img: '/assets/images/gallery/dungeon_cave.jpg', tag: 'Deepslate Dungeon' },
        { title: 'Ash Barrens Keep', img: '/assets/images/nether/nether_ash_citadel.png', tag: 'Nether Keep' }
      ],
      features: [
        { title: 'Dungeons & Taverns', desc: 'Roadside taverns, bandit outposts, and sprawling deepslate strongholds.' },
        { title: 'Structory Towers', desc: 'Towering stone keeps with watchtowers, hidden loot rooms, and trapdoors.' },
        { title: 'Explorify Ruins', desc: 'Ancient overgrown shrines, lost temples, and pirate coves waiting to be raided.' },
        { title: 'Bespoke Strongholds', desc: 'Fully redesigned End Portal strongholds that feel like true subterranean labyrinths.' }
      ]
    }
  };

  const current = dimensions[activeTab];

  const filteredGallery = selectedGalleryCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedGalleryCategory);

  const openModal = (item) => {
    setActiveModalImage(item);
    playClickSound();
  };

  const closeModal = () => {
    setActiveModalImage(null);
    playClickSound();
  };

  const nextModalImage = () => {
    if (!activeModalImage) return;
    const currentIndex = galleryItems.findIndex(i => i.id === activeModalImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveModalImage(galleryItems[nextIndex]);
    playClickSound();
  };

  const prevModalImage = () => {
    if (!activeModalImage) return;
    const currentIndex = galleryItems.findIndex(i => i.id === activeModalImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveModalImage(galleryItems[prevIndex]);
    playClickSound();
  };

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-xs font-minecraft rounded-full">
          <Globe className="w-4 h-4" />
          <span>AUTHENTIC SERVER SCREENSHOTS &amp; GENERATION</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          CUSTOM WORLD GENERATION &amp; GALLERY
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Explore real in-game screenshots captured directly on Scalyx SMP. Featuring custom Nether fortresses, celestial End biomes, bespoke structures, and endgame mythic loadouts. Zero client mods required.
        </p>
      </div>

      {/* Dimension Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
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
          onClick={() => { setActiveTab('overworld'); playClickSound(); }}
          className={`mc-button flex items-center gap-1.5 ${activeTab === 'overworld' ? 'mc-button-green' : ''}`}
        >
          <Mountain className="w-4 h-4 text-emerald-400" />
          <span>OVERWORLD (TERRALITH)</span>
        </button>

        <button
          onClick={() => { setActiveTab('structures'); playClickSound(); }}
          className={`mc-button flex items-center gap-1.5 ${activeTab === 'structures' ? 'bg-[#3d334d] border-t-[#594d6e]' : ''}`}
        >
          <Castle className="w-4 h-4 text-amber-300" />
          <span>DUNGEONS &amp; STRUCTURES</span>
        </button>
      </div>

      {/* Dimension Spotlight Card */}
      <div className="mc-panel p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden space-y-8">
        
        {/* Banner with real hero screenshot */}
        <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border-2 border-[#3d3e52] group">
          <img
            src={current.heroImage}
            alt={current.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101118] via-[#101118]/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black/80 border-2 border-[#555] rounded p-1 shadow-xl shrink-0">
                <img src={current.packIcon} alt="Icon" className="w-full h-full object-contain pixelated" />
              </div>
              <div>
                <span className={`text-[11px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-minecraft text-white font-bold tracking-wider mc-shadow mt-1">
                  {current.name}
                </h2>
              </div>
            </div>

            <button
              onClick={() => openModal({
                title: current.name,
                image: current.heroImage,
                badge: current.badge,
                badgeColor: current.badgeColor,
                location: current.name,
                coords: 'Live In-Game Capture',
                description: current.desc
              })}
              className="px-3 py-1.5 bg-black/70 hover:bg-black/90 border border-zinc-500 rounded text-xs font-minecraft text-white flex items-center gap-1.5 transition-colors shadow-lg"
            >
              <ZoomIn className="w-4 h-4 text-[#00ffff]" />
              <span>EXPAND PHOTO</span>
            </button>
          </div>
        </div>

        {/* Thumbnail Photo Strip for the current dimension */}
        {current.screenshots && current.screenshots.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-minecraft text-sm sm:text-base text-yellow-300 font-bold flex items-center gap-2">
                <Camera className="w-4 h-4 text-yellow-400" />
                <span>IN-GAME EXPLORATION SNAPSHOTS ({current.screenshots.length})</span>
              </h3>
              <span className="text-xs text-zinc-400 font-sans">Click to inspect in high resolution</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {current.screenshots.map((snap, idx) => (
                <div
                  key={idx}
                  onClick={() => openModal({
                    title: snap.title,
                    image: snap.img,
                    badge: snap.tag,
                    badgeColor: current.badgeColor,
                    location: current.name,
                    coords: snap.tag,
                    description: `Authentic server screenshot of ${snap.title} captured in ${current.name} on Scalyx SMP.`
                  })}
                  className="group relative h-28 rounded-lg overflow-hidden border border-[#2e3047] hover:border-[#00ffff] cursor-pointer transition-all hover:scale-105 shadow-md bg-black/40"
                >
                  <img
                    src={snap.img}
                    alt={snap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-1.5 left-2 right-2">
                    <span className="block text-[11px] font-minecraft text-white font-bold truncate">
                      {snap.title}
                    </span>
                    <span className="text-[9px] text-[#00ffff] font-sans block truncate">
                      {snap.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
          {current.desc}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.features.map((item, idx) => (
            <div key={idx} className="p-4 bg-[#161724] border border-[#2c2d3f] rounded-lg">
              <h4 className="font-minecraft text-sm sm:text-base text-yellow-300 font-bold mb-1">
                &gt; {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Comprehensive Photo Gallery / Screenshot Explorer */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-minecraft text-yellow-400 mb-1">
              <Camera className="w-4 h-4" />
              <span>SERVER ARCHIVES</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-minecraft text-white font-bold tracking-wider mc-shadow">
              COMPLETE IN-GAME PHOTO GALLERY ({galleryItems.length} SNAPSHOTS)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-0.5">
              Browse in-game terrain, citadel structures, god armor sets, and server GUIs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#12131d] p-1.5 rounded-lg border border-[#2b2c3d]">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'nether', label: 'Nether (6)' },
              { id: 'end', label: 'The End (8)' },
              { id: 'gear', label: 'Weapons & Armor (4)' },
              { id: 'gui', label: 'Server GUIs (2)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => { setSelectedGalleryCategory(cat.id); playClickSound(); }}
                className={`px-3 py-1 text-xs font-minecraft rounded transition-colors ${
                  selectedGalleryCategory === cat.id
                    ? 'bg-[#00ffff] text-black font-bold shadow'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="mc-panel overflow-hidden group rounded-lg cursor-pointer flex flex-col justify-between hover:border-[#00ffff]/80 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`text-[10px] font-minecraft px-2 py-0.5 rounded border uppercase tracking-wider backdrop-blur-sm ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 bg-black/80 text-white text-xs font-minecraft border border-white/30 rounded flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#00ffff]" />
                    <span>INSPECT FULL RES</span>
                  </span>
                </div>

                {/* Location / Coords */}
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-zinc-300 font-sans">
                  <span className="font-minecraft text-white font-bold truncate">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#262738] flex items-center justify-between text-[11px] text-zinc-400 font-sans">
                  <div className="flex items-center gap-1 text-cyan-400 font-minecraft text-[10px] truncate max-w-[180px]">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{item.coords}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-minecraft uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Datapack Technology Suite */}
      <div className="space-y-4 pt-6">
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
              <div className="text-[11px] text-zinc-400 font-sans">Boss fight &amp; End biomes</div>
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

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div 
            className="mc-panel max-w-5xl w-full max-h-[95vh] overflow-y-auto rounded-xl border-2 border-[#454763] relative flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 bg-[#141521] border-b border-[#2b2c3d] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`text-[11px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider ${activeModalImage.badgeColor || 'bg-cyan-950/80 text-cyan-300 border-cyan-600'}`}>
                  {activeModalImage.badge}
                </span>
                <h3 className="text-base sm:text-lg font-minecraft text-white font-bold truncate">
                  {activeModalImage.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevModalImage}
                  className="p-1.5 bg-[#202231] hover:bg-[#2f3247] rounded text-zinc-300 hover:text-white transition-colors"
                  title="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextModalImage}
                  className="p-1.5 bg-[#202231] hover:bg-[#2f3247] rounded text-zinc-300 hover:text-white transition-colors"
                  title="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-1.5 bg-red-950/60 hover:bg-red-900 border border-red-700/60 rounded text-red-200 transition-colors ml-1"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Res Image Display */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Image Details Bar */}
            <div className="p-4 sm:p-5 bg-[#12131d] border-t border-[#2b2c3d] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-[#00ffff] font-minecraft">
                  <MapPin className="w-4 h-4" />
                  <span>{activeModalImage.location || 'Scalyx SMP Live World'}</span>
                  {activeModalImage.coords && (
                    <span className="text-zinc-400 font-sans">({activeModalImage.coords})</span>
                  )}
                </div>
                <div className="text-[11px] font-minecraft text-zinc-500 uppercase">
                  CAPTURED ON SCALYX SMP 26.3 (LATEST)
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {activeModalImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
