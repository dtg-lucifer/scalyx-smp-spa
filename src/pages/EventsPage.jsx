import React, { useState } from 'react';
import { 
  Trophy, Target, Crown, Moon, Coins, Radio, Clock, 
  Sparkles, Shield, Sword, Skull, Gift, ChevronRight, 
  Zap, Compass, Award, AlertTriangle, Flame, ArrowRight, 
  CheckCircle2, Lock, Unlock, Eye, Crosshair, Users, HelpCircle
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function EventsPage({ setActiveTab }) {
  const [selectedEvent, setSelectedEvent] = useState('mythic-hunt');
  const [activeMythicPhase, setActiveMythicPhase] = useState('forged');

  const events = [
    {
      id: 'mythic-hunt',
      name: 'The Mythic Awakening & 30m Hunt',
      command: '/artifacts & /mythics status',
      adminCommand: '/mythics <weapon|all> start / stop',
      type: 'Server Singularity Awakening & Manhunt',
      badge: 'SERVER RELIC EVENT',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-600',
      icon: Sparkles,
      iconColor: 'text-[#00ffff]',
      accentColor: 'text-[#00ffff]',
      borderColor: 'border-[#00ffff]',
      bgGlow: 'shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      logFile: 'SERVER RELIC REGISTRY',
      tagline: 'Locked by default. When awakened by staff, only 1 of each mythic weapon can ever be forged, igniting a 30-minute global manhunt!',
      hudSimulation: {
        title: 'GLOBAL BROADCAST ALERT (EVERY 60s)',
        content: '☠ [MYTHIC CARRIER]: X: 1,842, Y: 68, Z: -720 (Nether) │ 18m 42s Left │ Carrier: GLOWING',
        theme: 'border-cyan-500/70 bg-black/80 text-[#00ffff]'
      },
      flow: {
        start: {
          title: '1. Ancient Awakening (/mythics start)',
          desc: 'Crafting is locked by default. When administrators unleash the event via /mythics start, an ancient dragon roar echoes globally and the 3x3 crafting altar unlocks for all players!'
        },
        gameplay: {
          title: '2. The 30-Minute Global Hunt',
          desc: 'The moment any player forges a mythic in a crafting table, an emergency siren triggers! The carrier is crowned with permanent Glowing, and their coordinates [X, Y, Z] broadcast every 60 seconds.'
        },
        ending: {
          title: '3. Inheritance & Severed Head Trophies',
          desc: 'Mythics ALWAYS drop on death! If the carrier dies, the slayer inherits the target and remaining timer (clock never resets!). Any player slain by a mythic drops their authentic severed player head!'
        }
      },
      rewards: [
        '💎 Ownership of the 1-of-a-Kind Mythic Relic in the universe',
        '☠️ Guaranteed Severed Player Head Trophy of any slain victim',
        '👑 Permanent Server Prestige, Dominance & Wielder Perks',
        '💰 Loot all gear, armor, and inventory dropped by fallen rivals'
      ]
    },
    {
      id: 'assassin',
      name: "The Assassin's Event",
      command: '/asse stats',
      adminCommand: '/asse start / stop',
      type: 'Circular Bounty Deathmatch',
      badge: 'PVP WARFARE',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-600',
      icon: Target,
      iconColor: 'text-red-400',
      accentColor: 'text-red-400',
      borderColor: 'border-red-600',
      bgGlow: 'shadow-[0_0_25px_rgba(239,68,68,0.25)]',
      logFile: 'ASSASSINS_EVENT.md',
      tagline: 'A circular bounty ring where every player is hunted while hunting their own secret target.',
      hudSimulation: {
        title: 'ACTION BAR RADAR (UPDATES EVERY 2s)',
        content: '🎯 TARGET: ShadowReaper │ 142 blocks away │ Kills: 3 │ [Overworld]',
        theme: 'border-red-600/70 bg-black/80 text-red-400'
      },
      flow: {
        start: {
          title: '1. The Circular Shuffle',
          desc: 'When staff trigger /asse start, all online participants are randomized into an unbroken circular loop (P1 ➔ P2 ➔ P3 ➔ P1). No player ever receives themselves as a target!'
        },
        gameplay: {
          title: '2. Stalk & Target Inheritance',
          desc: 'Your Action Bar displays live proximity data and dimension status. When you execute your target, you claim +1 event kill and instantly inherit your victim\'s target in the chain!'
        },
        ending: {
          title: '3. Climax & Podium Archive',
          desc: 'When concluded via /asse stop, a terrifying Wither roar echoes across the server. The Top 3 Assassins are broadcasted on the global podium and archived permanently in ASSASSINS_EVENT.md!'
        }
      },
      rewards: [
        '💎 Mythic Crafting Catalysts (Nether Stars, Echo Shards)',
        '💰 Massive Server Economy Cash ($50,000+ Pool)',
        '👑 Custom Rank Promotions & Downward Kits',
        '⚔️ Exclusive Mythic Rank Sword Claims'
      ]
    },
    {
      id: 'warlord',
      name: 'Crown of the Warlord',
      command: '/warlord stats',
      adminCommand: '/warlord start / stop',
      type: 'King-of-the-Hill Escort War',
      badge: '5000-BLOCK RACE',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-600',
      icon: Crown,
      iconColor: 'text-amber-400',
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-500',
      bgGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      logFile: 'WARLORD_EVENT.md',
      tagline: 'The celestial crown strikes ~5,000 blocks out. Seize the crown, endure the curse, and rule the realm.',
      hudSimulation: {
        title: 'ACTION BAR CROWN TRACKER (EVERY 3s)',
        content: '👑 WARLORD: AlexCraft [3,420m away] │ Points: 64 │ [BEARING: NW]',
        theme: 'border-amber-500/70 bg-black/80 text-amber-300'
      },
      flow: {
        start: {
          title: '1. The Celestial Drop',
          desc: 'Lightning strikes at a randomized location ~5,000 blocks away from world spawn! Coordinates are broadcasted to chat, sparking an all-out sprint to reach the crown first.'
        },
        gameplay: {
          title: '2. Transformation & The Curse',
          desc: 'Picking up the Crown crowns you as the Warlord with +4 Extra Hearts, Strength I, Resistance I, and permanent Glowing. But the Curse of Burden strictly forbids teleportation, pearls, and Elytra flight! You score 1 point every 3 seconds held.'
        },
        ending: {
          title: '3. Climax & Podium Archive',
          desc: 'The Crown always drops on death or disconnect—slay the Warlord to take it! On /warlord stop, the Top 3 point holders are heralded with a wither roar and recorded in WARLORD_EVENT.md.'
        }
      },
      rewards: [
        '💎 Heavy Core & Netherite Blocks (Mace Catalyst)',
        '💰 $75,000 Server Treasury Jackpot',
        '👑 Eternal / Wither Donor Rank Vouchers',
        '⚔️ Dual 3x3x1 Super Pickaxe & God Armor Sets'
      ]
    },
    {
      id: 'bloodmoon',
      name: 'The Blood Moon: Eclipse of the Abyss',
      command: '/bloodmoon stats',
      adminCommand: '/bloodmoon start / stop',
      type: 'Server-Wide Nightmare Incursion',
      badge: 'PVE NIGHTMARE',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      icon: Moon,
      iconColor: 'text-purple-400',
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500',
      bgGlow: 'shadow-[0_0_25px_rgba(168,85,247,0.25)]',
      logFile: 'BLOOD_MOON_EVENT.md',
      tagline: 'Midnight skies erupt with thunder and demonic horrors. Harvest Blood Essence or perish.',
      hudSimulation: {
        title: 'ECLIPSE HARVEST COUNTER',
        content: '🩸 BLOOD MOON ACTIVE │ Essence: 38 │ Wave: Void Dreadnoughts │ Threat: LETHAL',
        theme: 'border-purple-600/70 bg-black/80 text-purple-300'
      },
      flow: {
        start: {
          title: '1. The Abyssal Descent',
          desc: 'The sky plunges into pitch-black midnight with torrential thunder and ominous goat horn war blasts. All safe daylight vanishes across the realm.'
        },
        gameplay: {
          title: '2. Elite Nightmare Horrors',
          desc: 'Hostile mobs have a 40% chance to evolve into nightmares: Abyssal Crawlers (Poison II + Darkness), Storm Skeletons (lightning arrows), and Void Dreadnoughts (40 HP Netherite juggernauts). Slaying them yields Blood Essence, but dying forfeits 20% of your essence!'
        },
        ending: {
          title: '3. Dawn & Slayer Podium',
          desc: 'On /bloodmoon stop, serene daylight and clear skies return. The Top 3 Blood Essence gatherers are announced with wither sound effects and archived in BLOOD_MOON_EVENT.md.'
        }
      },
      rewards: [
        '💎 Dragon\'s Breath & Hearts of the Sea (Weapon Catalysts)',
        '💰 Top Slayer Cash Bounty & Rare Ore Caches',
        '👑 Warden & Blaze Rank Shulker Kits',
        '⚔️ Custom Netherite Swords with True Damage'
      ]
    },
    {
      id: 'bounty',
      name: 'The High Bounty: Most Wanted Manhunt',
      command: '/bounty stats',
      adminCommand: '/bounty start / stop',
      type: 'High-Stakes Outlaw Manhunt',
      badge: 'MOST WANTED',
      badgeColor: 'bg-yellow-950/80 text-yellow-300 border-yellow-600',
      icon: Coins,
      iconColor: 'text-yellow-400',
      accentColor: 'text-yellow-400',
      borderColor: 'border-yellow-500',
      bgGlow: 'shadow-[0_0_25px_rgba(234,179,8,0.25)]',
      logFile: 'BOUNTY_EVENT.md',
      tagline: 'One outlaw is marked for server-wide execution. Hunt down the target or survive the mob.',
      hudSimulation: {
        title: 'HUNTER ACTION BAR COMPASS (EVERY SECOND)',
        content: '💰 MOST WANTED: ViciousOutlaw [248m] │ Reward: $35,000 │ Compass: ▶▶▶',
        theme: 'border-yellow-500/70 bg-black/80 text-yellow-300'
      },
      flow: {
        start: {
          title: '1. Outlaw Proclamation',
          desc: 'Staff designate or randomize a player as the server\'s Most Wanted Outlaw, cloaking them in a glowing aura with Speed I and +4 Extra Hearts.'
        },
        gameplay: {
          title: '2. Real-Time Radar Tracking',
          desc: 'The Outlaw\'s exact coordinates broadcast every 60 seconds, while hunters receive real-time action bar radar pointing straight to them. The Outlaw scores +3 survival points per hunter slain in self-defense!'
        },
        ending: {
          title: '3. Execution & Podium Archive',
          desc: 'Executing the Outlaw rewards +10 Bounty Points, 5 Diamonds, and the Outlaw\'s authentic severed head trophy! On /bounty stop, the top hunters and surviving outlaws are logged to BOUNTY_EVENT.md.'
        }
      },
      rewards: [
        '💎 Nether Stars & God Apples',
        '💰 Claim the Full Accumulated Bounty Pot',
        '👑 Custom Rank Kits & Deluxe Shulker Boxes',
        '☠️ Outlaw\'s Authentic Severed Player Head Trophy'
      ]
    },
    {
      id: 'scavenger-hunt',
      name: 'The Scavenger Hunt Event',
      command: '/scavenger',
      adminCommand: '/scavenger start / stop / reloaditems',
      type: 'Sequential Target Race & God Armor Rotation',
      badge: 'PROGRESSIVE HUNT EVENT',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-600',
      icon: Compass,
      iconColor: 'text-[#ffaa00]',
      accentColor: 'text-[#ffaa00]',
      borderColor: 'border-[#ffaa00]',
      bgGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      logFile: 'SCAVENGER_HUNT.md',
      tagline: '10 sequential items dynamically loaded from SCAVENGER_ITEMS.csv. First to collect all 10 wins rotating God Armor with Dune Emerald Trim and all 4 Protection IVs!',
      hudSimulation: {
        title: 'ACTION BAR HUD TRACKER (ABOVE LOCATOR BAR)',
        content: '🔍 #1 -> Oak Log │ Items Found: 0/10 │ Next: Raw Iron',
        theme: 'border-amber-500/70 bg-black/80 text-[#ffaa00]'
      },
      flow: {
        start: {
          title: '1. Dynamic CSV Loading (/scavenger start)',
          desc: 'Loads the 10 target items dynamically from SCAVENGER_ITEMS.csv at runtime. Enlists all online players and broadcasts Item #1 with celebratory audio.'
        },
        gameplay: {
          title: '2. Action Bar Tracking & Pickup Progression',
          desc: 'The current target item is displayed in real-time above the hotbar as #serial -> item name. Picking the required item up into your inventory promotes you to the next target.'
        },
        ending: {
          title: '3. God Armor Rotation & Inventory Full Claim',
          desc: 'The first player to 10 items wins! Awards 4 rotating pieces of God Armor (Chestplate -> Leggings -> Boots -> Helmet) with every Protection IV and Dune Emerald Trim. If inventory is full, players run /scavenger claim to collect!'
        }
      },
      rewards: [
        '🏆 Rotating Server God Armor (Dune Trim Emerald, All 4 Prot IVs)',
        '💰 $10,000 Server Economy Cash',
        '🍎 16x Enchanted Golden Apples & 64x Diamonds',
        '🪙 4x Netherite Ingots'
      ]
    }
  ];

  const currentEvent = events.find((e) => e.id === selectedEvent) || events[0];

  // Detailed lifecycle breakdown for the Mythics Event
  const mythicLifecyclePhases = {
    locked: {
      badge: 'STAGE 0: DEFAULT STATE',
      badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-600',
      title: 'Crafting Locked & Sealed by Default',
      command: '/artifacts & /mythics status',
      statusTag: 'STATUS: LOCKED 🔒',
      statusColor: 'text-red-400 bg-red-950/80 border-red-700',
      screenPreview: '⛔ [CRAFTING CANCELLED]: Crafting Locked! The Mythic Event for Worldbreaker Mace is not active yet.',
      desc: 'To maintain server integrity and prevent early-game exploitation, mythic weapon crafting is completely disabled by default. If a player places ingredients into a Crafting Table while an event is locked, the craft is immediately cancelled and an alert sounds.',
      keyPoints: [
        'Crafting is 100% disabled until an Administrator awakens the event.',
        'Ingredients placed in crafting tables are safely returned to your inventory.',
        '/artifacts GUI displays status as LOCKED 🔒 with ability previews.',
        'Zero pay-to-win bypasses: ranks cannot buy or spawn mythic items.'
      ]
    },
    awakened: {
      badge: 'STAGE 1: EVENT RELEASE',
      badgeColor: 'bg-yellow-950/80 text-yellow-300 border-yellow-600',
      title: 'Ancient Awakening Broadcast (/mythics start)',
      command: '/mythics <weapon|all> start',
      statusTag: 'STATUS: EVENT ACTIVE ⚡',
      statusColor: 'text-yellow-300 bg-yellow-950/80 border-yellow-600',
      screenPreview: '⚡ [GLOBAL BROADCAST]: An ancient relic stirs... The Mythic Awakening for ⚡ Worldbreaker Mace ⚡ is now ACTIVE! Forging is UNLOCKED!',
      desc: 'Administrators trigger the event release manually via /mythics <weapon|all> start. The awakening triggers a terrifying Ender Dragon roar across the entire server, title banners across all screens, and unlocks the 3x3 recipe altar in crafting tables.',
      keyPoints: [
        'Server-wide dragon growl audio cue and cinematic title banner.',
        'The 3x3 crafting recipe is officially unlocked for all players.',
        'First player to forge the weapon claims it—only 1 can ever be crafted!',
        'Administrators can pause or seal crafting at any time with /mythics stop.'
      ]
    },
    forged: {
      badge: 'STAGE 2: THE 30-MINUTE HUNT',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-600',
      title: 'Emergency Siren & 30-Minute Global Carrier Hunt',
      command: '/mythicadmin status',
      statusTag: 'STATUS: FORGED / HUNT ACTIVE ⚔️',
      statusColor: 'text-red-400 bg-red-950/80 border-red-700',
      screenPreview: '☠ [GLOBAL EMERGENCY]: Player1 has forged ⚡ Worldbreaker Mace ⚡! THE 30-MINUTE HUNT HAS BEGUN! Carrier Coordinates: X: 1,842, Y: 68, Z: -720 (Nether)',
      desc: 'The instant a player crafts the weapon, an emergency server alarm rings out! The carrier is cloaked in a permanent Glowing outline visible through walls, and their exact coordinates and dimension are broadcasted to all players every 60 seconds.',
      keyPoints: [
        'Carrier has a permanent Glowing aura visible through terrain.',
        'Exact [X, Y, Z] coordinates and dimension broadcast every 60 seconds.',
        '30-minute survival countdown begins immediately upon crafting.',
        'Mythic weapons ALWAYS drop on death (keepInventory is disabled server-wide).'
      ]
    },
    inheritance: {
      badge: 'STAGE 3: SLAYER INHERITANCE',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      title: 'Target Slay & Timer Inheritance (Clock Never Resets)',
      command: '/artifacts & /mythics status',
      statusTag: 'STATUS: INHERITED / CLOCK CONTINUES ⏱️',
      statusColor: 'text-purple-300 bg-purple-950/80 border-purple-600',
      screenPreview: '☠ [SLAYER INHERITANCE]: Piush executed Player1! Piush has seized the ⚡ Worldbreaker Mace ⚡! 14m 12s remaining on the Hunt!',
      desc: 'Mythic weapons are NEVER soulbound. If the carrier is slain in combat, the killer loots the weapon. Crucially, the 30-minute hunt timer DOES NOT reset! The slayer immediately inherits the carrier status, glowing aura, coordinate broadcasts, and remaining time on the clock.',
      keyPoints: [
        'Weapon drops on the ground upon death—anyone can steal it!',
        'The 30-minute hunt timer NEVER resets back to 30:00.',
        'The killer immediately inherits glowing and 60s coordinate broadcasts.',
        'Promotes nonstop, breathless king-of-the-hill PvP combat.'
      ]
    },
    trophy: {
      badge: 'STAGE 4: TROPHIES & REWARDS',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-600',
      title: '☠️ Guaranteed Severed Player Head Trophies',
      command: '/artifacts & /scalyxdrophead',
      statusTag: 'STATUS: REIGNING RELIC WIELDER 👑',
      statusColor: 'text-emerald-300 bg-emerald-950/80 border-emerald-600',
      screenPreview: '🏆 [HEAD TROPHY]: Severed Head of AlexCraft │ Executed by: Piush │ Weapon: ⚡ Worldbreaker Mace ⚡ │ Date: Nov 26, 2026',
      desc: 'Whenever ANY player is slain by a Mythic Weapon (via melee, piercing arrow, Calamity Nuke, Seismic shockwave, or Harpoon pull), the victim\'s authentic severed player head drops at their death location! Once the 30m hunt ends, the carrier becomes the recognized singular wielder.',
      keyPoints: [
        'Guaranteed player head drop on every single mythic weapon execution.',
        'Head features victim\'s authentic player skin and custom lore stamp.',
        'Lore displays: Victim Name, Slayer Name, Weapon Used, and Server Date.',
        'Surviving the 30m hunt removes glowing & coordinate broadcasts.'
      ]
    }
  };

  const activePhaseData = mythicLifecyclePhases[activeMythicPhase];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/60 border border-amber-500/50 text-amber-300 text-xs font-minecraft rounded-full">
          <Trophy className="w-4 h-4" />
          <span>DYNAMIC SERVER-WIDE COMPETITIONS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          SERVER EVENTS &amp; GRAND REWARDS
        </h1>
        <p className="max-w-3xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Scalyx SMP features fully automated, high-stakes server events designed to spark intense PvP warfare, community hunts, and PvE survival. Winners earn rare mythic crafting catalysts, huge cash bounties, custom donor kits, and rank swords!
        </p>
      </div>

      {/* GRAND CHAMPION REWARDS VAULT HIGHLIGHT */}
      <div className="mc-panel p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-yellow-500/60 bg-gradient-to-b from-[#1c1810] via-[#14141d] to-[#12121a] space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-yellow-900/50 gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-yellow-950/80 border-2 border-yellow-500 rounded-lg flex items-center justify-center text-yellow-400 shrink-0 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              <Gift className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-minecraft text-yellow-300 uppercase tracking-wider bg-yellow-950 px-2 py-0.5 rounded border border-yellow-700">
                OFFICIAL PODIUM PRIZES
              </span>
              <h2 className="text-xl sm:text-2xl font-minecraft text-white font-bold tracking-wider mc-shadow mt-0.5">
                GRAND CHAMPION REWARDS VAULT
              </h2>
            </div>
          </div>
          <div className="text-left sm:text-right font-minecraft">
            <div className="text-[10px] text-zinc-400">AUTOMATIC DISTRIBUTION</div>
            <div className="text-emerald-400 text-xs sm:text-sm font-bold">Instantly Credited to Winners</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#181926] rounded-lg border border-yellow-900/40 space-y-1.5">
            <div className="flex items-center gap-2 text-yellow-400 font-minecraft text-xs font-bold">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Mythic Crafting Items</span>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Rare ingredients: Dragon Eggs, Heavy Cores, Nether Stars, Echo Shards, and Hearts of the Sea to forge the 5 Server Relics.
            </p>
          </div>

          <div className="p-4 bg-[#181926] rounded-lg border border-yellow-900/40 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-minecraft text-xs font-bold">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span>Server Economy Cash</span>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Massive cash rewards ranging from <strong className="text-emerald-400">$25,000 to $100,000+</strong> credited directly to player balance.
            </p>
          </div>

          <div className="p-4 bg-[#181926] rounded-lg border border-yellow-900/40 space-y-1.5">
            <div className="flex items-center gap-2 text-purple-400 font-minecraft text-xs font-bold">
              <Crown className="w-4 h-4 text-purple-400" />
              <span>Rank Kits &amp; Upgrades</span>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Unlock prestigious donor kits (Warden, Eternal, Wither, Ender) packed in color-coded shulker boxes with dual 3x3 Super Pickaxes!
            </p>
          </div>

          <div className="p-4 bg-[#181926] rounded-lg border border-yellow-900/40 space-y-1.5">
            <div className="flex items-center gap-2 text-red-400 font-minecraft text-xs font-bold">
              <Sword className="w-4 h-4 text-red-400" />
              <span>Mythic Rank Swords</span>
            </div>
            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Exclusive claim rights to high-tier swords featuring 4-heart charged ultimate abilities and devastating on-hit passives.
            </p>
          </div>
        </div>
      </div>

      {/* DEDICATED SPOTLIGHT: HOW THE MYTHIC AWAKENING & HUNT EVENT WORKS */}
      <div className="mc-panel p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-[#00ffff]/80 bg-gradient-to-b from-[#0f1722] via-[#10121c] to-[#121422] space-y-6">
        
        {/* Banner Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-[#253244] gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-cyan-950/80 border-2 border-[#00ffff] rounded-lg flex items-center justify-center text-[#00ffff] shrink-0 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-minecraft text-[#00ffff] uppercase tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-600">
                  SERVER SINGULARITY EVENT • COMPLETE LIFECYCLE
                </span>
                <span className="text-[10px] font-minecraft text-yellow-300 bg-yellow-950/80 px-2 py-0.5 rounded border border-yellow-700">
                  LIMIT: 1 OF EACH ONLY
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-minecraft text-white font-bold tracking-wider mc-shadow mt-1">
                HOW THE MYTHICS FORGING EVENT WORKS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-[#111118] px-3.5 py-2 rounded border border-[#2b2b3d] font-minecraft text-xs">
              <div className="text-[10px] text-zinc-400">INSPECTION GUI</div>
              <div className="text-[#00ffff] font-bold">/artifacts &amp; /mythics</div>
            </div>
            <button
              onClick={() => { setActiveTab('weapons'); playClickSound(); }}
              className="mc-button mc-button-gold flex items-center gap-1.5 text-xs"
            >
              <Sword className="w-4 h-4" />
              <span>VIEW 5 MYTHICS</span>
            </button>
          </div>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="space-y-3">
          <div className="text-xs font-minecraft text-zinc-400 uppercase tracking-wider flex items-center justify-between">
            <span>STEP-BY-STEP EVENT WORKFLOW (CLICK ANY STAGE TO INSPECT)</span>
            <span className="text-yellow-400 text-[11px]">Lifecycle Stages 0 Through 4</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {[
              { id: 'locked', num: '0', title: 'Locked by Default', icon: Lock },
              { id: 'awakened', num: '1', title: 'Awakening Release', icon: Unlock },
              { id: 'forged', num: '2', title: 'Forging & 30m Hunt', icon: Radio },
              { id: 'inheritance', num: '3', title: 'Slayer Inheritance', icon: Sword },
              { id: 'trophy', num: '4', title: 'Head Trophies', icon: Skull }
            ].map((phase) => {
              const isSelected = activeMythicPhase === phase.id;
              const Icon = phase.icon;
              return (
                <button
                  key={phase.id}
                  onClick={() => { setActiveMythicPhase(phase.id); playClickSound(); }}
                  className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'border-[#00ffff] bg-cyan-950/70 shadow-lg scale-105'
                      : 'border-[#2d2e3f] bg-[#141520] hover:bg-[#1a1b2a] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-minecraft px-1.5 py-0.5 rounded border ${
                      isSelected ? 'bg-[#00ffff] text-black border-[#00ffff] font-bold' : 'bg-black/50 text-zinc-400 border-zinc-700'
                    }`}>
                      STAGE {phase.num}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#00ffff]' : 'text-zinc-500'}`} />
                  </div>
                  <span className={`font-minecraft text-xs truncate ${isSelected ? 'text-white font-bold' : 'text-zinc-300'}`}>
                    {phase.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="p-5 sm:p-6 bg-[#131522] rounded-xl border border-[#2b3346] space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3.5 border-b border-[#25283a] gap-3">
            <div>
              <span className={`text-[10px] font-minecraft px-2.5 py-0.5 rounded border uppercase tracking-wider ${activePhaseData.badgeColor}`}>
                {activePhaseData.badge}
              </span>
              <h3 className="text-lg sm:text-xl font-minecraft text-white font-bold tracking-wider mt-1">
                {activePhaseData.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-minecraft px-3 py-1 rounded border font-bold ${activePhaseData.statusColor}`}>
                {activePhaseData.statusTag}
              </span>
            </div>
          </div>

          {/* Screen Broadcast Simulation */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-minecraft text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              IN-GAME SCREEN &amp; CHAT PACKET BROADCAST:
            </span>
            <div className="p-3.5 bg-black/80 rounded-lg border border-cyan-500/50 font-minecraft text-xs sm:text-sm text-[#00ffff] text-center shadow-inner tracking-wide">
              {activePhaseData.screenPreview}
            </div>
          </div>

          {/* Description & Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            <div className="space-y-2">
              <h4 className="font-minecraft text-xs sm:text-sm text-yellow-300 font-bold uppercase tracking-wider">
                CORE EVENT MECHANICS
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {activePhaseData.desc}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-minecraft text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider">
                CRITICAL SERVER RULES
              </h4>
              <ul className="space-y-1.5">
                {activePhaseData.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* EVENT BROWSER SECTION */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-minecraft text-lg sm:text-2xl text-white font-bold tracking-wider mc-shadow">
              EXPLORE ALL 5 SERVER EVENTS
            </h2>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Select an event below to preview its HUD simulation, 3-stage lifecycle, and podium rewards.
            </p>
          </div>
          <span className="text-[11px] font-minecraft bg-[#181926] border border-[#2e3046] text-zinc-300 px-3 py-1.5 rounded shrink-0">
            AUTO-ARCHIVED IN SERVER REPOSITORIES
          </span>
        </div>

        {/* EVENT TABS */}
        <div className="flex flex-wrap items-center gap-2">
          {events.map((event) => {
            const isSelected = selectedEvent === event.id;
            const Icon = event.icon;
            return (
              <button
                key={event.id}
                onClick={() => {
                  setSelectedEvent(event.id);
                  playClickSound();
                }}
                className={`flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-lg font-minecraft text-xs sm:text-sm transition-all ${
                  isSelected
                    ? `${event.badgeColor} font-bold shadow-lg scale-105 border-2`
                    : 'bg-[#181926] text-zinc-400 hover:text-white hover:bg-[#202234] border border-[#2e3046]'
                }`}
              >
                <Icon className={`w-4 h-4 ${event.iconColor}`} />
                <span>{event.name}</span>
              </button>
            );
          })}
        </div>

        {/* SELECTED EVENT DETAIL SHOWCASE */}
        <div className={`mc-panel p-6 sm:p-8 rounded-xl shadow-2xl border-2 ${currentEvent.borderColor} ${currentEvent.bgGlow} bg-gradient-to-b from-[#161622] via-[#12131d] to-[#161622] space-y-7`}>
          
          {/* Event Top Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-[#2e3046] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1a1b2b] border-2 border-[#3d405a] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                {React.createElement(currentEvent.icon, {
                  className: `w-8 h-8 sm:w-9 sm:h-9 ${currentEvent.iconColor}`
                })}
              </div>
              <div>
                <span className={`text-[10px] font-minecraft uppercase tracking-wider px-2 py-0.5 rounded border ${currentEvent.badgeColor}`}>
                  {currentEvent.badge} • {currentEvent.type}
                </span>
                <h2 className={`text-xl sm:text-2xl md:text-3xl font-minecraft font-bold tracking-wider mc-shadow mt-1 ${currentEvent.accentColor}`}>
                  {currentEvent.name}
                </h2>
                <p className="text-xs text-zinc-300 font-sans mt-0.5">
                  {currentEvent.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 shrink-0">
              <div className="bg-[#111118] px-3.5 py-2 rounded border border-[#2b2b3d] font-minecraft">
                <div className="text-[10px] text-zinc-400">PLAYER STATS CMD</div>
                <div className="text-[#00ffff] text-xs font-bold">{currentEvent.command}</div>
              </div>
              <div className="bg-[#111118] px-3.5 py-2 rounded border border-[#2b2b3d] font-minecraft">
                <div className="text-[10px] text-zinc-400">ARCHIVE FILE</div>
                <div className="text-yellow-400 text-xs font-bold">{currentEvent.logFile}</div>
              </div>
            </div>
          </div>

          {/* VISUAL HUD SIMULATION (HOW IT LOOKS IN-GAME) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-minecraft">
              <span className="text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                HOW IT LOOKS ON YOUR SCREEN (IN-GAME HUD SIMULATION)
              </span>
              <span className="text-zinc-500 text-[10px]">Real-Time Action Bar Packet</span>
            </div>

            <div className={`p-4 rounded-lg border-2 ${currentEvent.hudSimulation.theme} flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden`}>
              <div className="text-[10px] font-minecraft text-zinc-500 uppercase tracking-widest mb-1">
                {currentEvent.hudSimulation.title}
              </div>
              <div className="font-minecraft text-sm sm:text-base font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {currentEvent.hudSimulation.content}
              </div>
            </div>
          </div>

          {/* THREE-STAGE EVENT LIFECYCLE (START -> GAMEPLAY -> CONCLUSION) */}
          <div className="space-y-3">
            <span className="text-[10px] font-minecraft text-zinc-400 uppercase tracking-wider block">
              EVENT LIFECYCLE &amp; HOW IT ENDS UP:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Stage 1 */}
              <div className="p-4 bg-[#141522] border border-[#2d2f44] rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-minecraft text-xs text-yellow-300 font-bold">
                  <span className="w-5 h-5 rounded-full bg-yellow-950 border border-yellow-600 flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span>{currentEvent.flow.start.title}</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {currentEvent.flow.start.desc}
                </p>
              </div>

              {/* Stage 2 */}
              <div className="p-4 bg-[#141522] border border-[#2d2f44] rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-minecraft text-xs text-[#00ffff] font-bold">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-600 flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span>{currentEvent.flow.gameplay.title}</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {currentEvent.flow.gameplay.desc}
                </p>
              </div>

              {/* Stage 3 */}
              <div className="p-4 bg-[#141522] border border-[#2d2f44] rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-minecraft text-xs text-red-400 font-bold">
                  <span className="w-5 h-5 rounded-full bg-red-950 border border-red-600 flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span>{currentEvent.flow.ending.title}</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {currentEvent.flow.ending.desc}
                </p>
              </div>

            </div>
          </div>

          {/* PRIZES WON FROM THIS EVENT */}
          <div className="p-4 bg-[#11121c] border border-[#2c2d40] rounded-lg space-y-2.5">
            <div className="flex items-center gap-2 font-minecraft text-xs text-yellow-300 font-bold uppercase tracking-wider">
              <Gift className="w-4 h-4 text-yellow-400" />
              <span>GUARANTEED EVENT PODIUM REWARDS FOR TOP 3 WINNERS:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-zinc-200">
              {currentEvent.rewards.map((reward, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-black/40 rounded border border-[#252636]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{reward}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* EVENT SCHEDULE & PARTICIPATION FAQ */}
      <div className="mc-panel p-6 sm:p-8 rounded-xl border border-[#2c2d40] bg-[#12131d] space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-[#292a3c]">
          <div>
            <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider">
              HOW TO PARTICIPATE &amp; EVENT NOTIFICATIONS
            </h3>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              No registration or entry fees required. All events are open to all players!
            </p>
          </div>
          <button
            onClick={() => { setActiveTab('rules'); playClickSound(); }}
            className="mc-button mc-button-red flex items-center gap-1.5 shrink-0"
          >
            <span>REVIEW COMBAT RULES</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-zinc-300">
          <div className="p-4 bg-[#171826] rounded border border-[#2b2c3e]">
            <strong className="text-yellow-400 font-minecraft block mb-1">1. Automatic Server Broadcasts</strong>
            Whenever an event starts, global sound effects and chat broadcasts alert everyone online. Keep your eyes on the chat and Action Bar!
          </div>

          <div className="p-4 bg-[#171826] rounded border border-[#2b2c3e]">
            <strong className="text-yellow-400 font-minecraft block mb-1">2. KeepInventory Rules Apply</strong>
            Remember: KeepInventory remains <strong className="text-red-400">DISABLED</strong> during events. High risk means high glory—gear up wisely!
          </div>

          <div className="p-4 bg-[#171826] rounded border border-[#2b2c3e]">
            <strong className="text-yellow-400 font-minecraft block mb-1">3. Check Discord Announcements</strong>
            Major scheduled weekend events and prize pools are announced ahead of time in our Discord announcements channel (<code className="text-[#00ffff]">discord.gg/scalyx</code>).
          </div>
        </div>
      </div>

    </div>
  );
}
