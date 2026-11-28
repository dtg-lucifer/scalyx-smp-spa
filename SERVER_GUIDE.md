# Scalyx SMP - Complete Server & Custom Systems Guide

A comprehensive technical and operational documentation guide for the custom systems, rank kits, weapons, abilities, economy, and administration configured on **Scalyx SMP** (Minecraft 26.3 (Latest)).

---

## 🚀 Server Overview & Architecture

- **Server Version**: Minecraft Java Edition 26.3 (Latest) (Paper Build 249+)
- **Cross-Platform**: Optimized for modern clients with enhanced protocol support
- **Core Engine**: High-performance Paper engine with asynchronous chunk processing
- **Game Mode**: Hardcore-influenced Semi-Anarchy / Balanced Economy SMP
- **Inventory Safety**: **`keepInventory = false` globally**. All items drop on death for all ranks and staff. High stakes, high reward.

---

## 🎮 Essential Player Commands & Menus

| Command | Aliases | Description |
| :--- | :--- | :--- |
| **`/guide`** | `/help`, `/commands`, `/menu` | Opens the 5-row interactive Server Guide GUI linking all essential systems. |
| **`/kits`** | `/kit`, `/rankkits`, `/rankshop` | Opens the Rank Kits redemption GUI with previews and hierarchical claims. |
| **`/swords`** | `/rankswords`, `/ranksword`, `/claimsword` | Opens the Rank Swords GUI to claim exclusive weapons & view ultimate abilities. |
| **`/lifestealer`** | `/lifestealer status` | Public status command showing whether Lifestealer is forged, the current carrier, and hunt time left. |
| **`/homes`** | `/home`, `/sethome`, `/delhome` | Opens the interactive graphical Home Manager to set, rename, or teleport to waypoints. |
| **`/ec`** | `/enderchest`, `/echest` | Opens your portable 6-row (54-slot) deluxe Ender Chest from anywhere. |
| **`/ranks`** | - | Displays server ranks, hierarchy, weights, and exclusive perks. |
| **`/shop`** | - | Server item economy market (buy supplies & sell mined/farmed goods). |
| **`/ah`** | - | DonutAuctionHouse player-to-player auction marketplace. |
| **`/trade <player>`** | - | Direct player trading with dual-confirmation scam protection. |
| **`/rtp`** | `/wild` | Teleports thousands of blocks out into the wilderness. |
| **`/spawn`** | - | Teleports back to the safe central spawn hub. |
| **`/tpa <player>`** | `/tpaccept`, `/tpdeny` | Sends a teleport request to another online player. |
| **`/trash`** | `/disposal` | Opens an instant trash bin to dispose of unwanted items safely. |
| **`/asse stats`** | `/assassin stats` | View your assigned bounty target, distance in blocks (or dimension), and total event kills. |
| **`/scavenger stats`** | `/scav stats` | View your current scavenger target item, progress (e.g. 4/10), and items remaining. |
| **`/scavenger leaderboard`** | `/scav lb` | View real-time standings of all participants in the active Scavenger Hunt. |
| **`/scavenger claim`** | `/scav claim` | Claim your championship rewards after clearing inventory if it was full when winning. |
| **`/pvp status`** | - | Check whether global PvP combat is currently enabled or disabled. |
| **`/sb`** | - | Toggles the sidebar scoreboard on/off. |
| **`/skin`** | `/skins` | Change your player skin via username or direct image URL. |

---

## 👑 Rank Hierarchy & Permissions

Scalyx SMP features an 8-tier rank ladder. Higher ranks inherit all lower rank permissions and features:

| Rank | Weight | Prefix | Max Homes | Kits Claimable | Special Access |
| :--- | :---: | :--- | :---: | :--- | :--- |
| **Default** | 1 | `[MEMBER]` | 2 | None | Basic commands, `/rtp`, `/shop`, `/ah`, `/trade` |
| **Coal** | 10 | `[COAL]` | 3 | Coal | `/hat`, `/workbench`, Tier I Kit |
| **Iron** | 20 | `[IRON]` | 4 | Coal, Iron | Portable `/ec` command, Tier II Kit |
| **Gold** | 30 | `[GOLD]` | 5 | Coal → Gold | `/anvil`, Tier III Kit |
| **Blaze** | 40 | `[BLAZE]` | 6 | Coal → Blaze | `/feed`, `/smithing`, Tier IV Kit |
| **Warden** | 50 | `[WARDEN]` | 8 | Coal → Warden | **3×3×1 Super Pickaxe**, **Sculk Annihilator Sword**, Tier V Kit |
| **Eternal** | 60 | `[ETERNAL]` | 10 | Coal → Eternal | **3×3×1 Super Pickaxe**, **Eternal Zenith Blade**, Tier VI Kit |
| **Wither** | 70 | `[WITHER]` | 12 | Coal → Wither | **3×3×1 Super Pickaxe**, **Wither Reaper Blade**, Tier VII Kit |
| **Ender** | 80 | `[ENDER]` | 15 | **ALL Kits (Tier I - VIII)** | **3×3×1 Super Pickaxe**, **Void Sovereign World-Ender**, Tier VIII Kit |
| **Admin / Owner** | 90 - 100 | `[ADMIN]` / `[OWNER]` | Unlimited | All Kits (Admin Override Reclaim) | Full administrative server control |

---

## 🛡️ Rank Kits System (`/kits`)

All rank kits are packaged inside permanent, color-coded Shulker Boxes.

### 🌟 Hierarchical Kit Claims
- **Higher Ranks Claim Lower Kits**: Anyone holding a higher rank is automatically eligible to claim **all lower-tier kits** in addition to their own!
  - *Example*: An **Ender** player can claim Coal, Iron, Gold, Blaze, Warden, Eternal, Wither, AND Ender kits.
  - *Example*: A **Warden** player can claim Coal, Iron, Gold, Blaze, and Warden kits.
- **One-Time Claim Rule**: Each individual kit tier can be redeemed **once** per player account. Once claimed, that kit is marked as claimed in `/kits`.
- **Safe Delivery**: Kits will not redeem if the player's inventory lacks free space.

### 🛡️ Fair Play Armor & Inventory Balancing
- **No Thorns Across All Kits**: The Thorns enchantment has been **completely removed** from all rank kit armor sets to keep combat clean and enjoyable without annoying passive damage reflection.
- **Protection Hard Cap (Max Protection IV)**: All higher-tier armor sets are strictly capped at vanilla **Protection IV maximum** to preserve PvP balance and eliminate pay-to-win armor advantages.
- **Spear Lunge Hard Cap (Max Lunge III)**: All kit spears across all tiers (including high-rank Wither & Ender) are capped at **Lunge III maximum** to prevent unbalanced gap-closing lunges in PvP.
- **Mace Enchantment Mutual Exclusivity (Density Only)**: Rank kit maces strictly feature **Density only** (`Density V`), with Breach completely removed to maintain fair armor damage calculations and respect vanilla mutual exclusivity rules.
- **Quartz Armor Trims for Ender**: The supreme Tier VIII Ender Netherite armor features authentic **Quartz** material trims:
  - *Flow Trim*: Netherite Helmet & Netherite Boots
  - *Eye Trim*: Netherite Chestplate
  - *Bolt Trim*: Netherite Leggings
- **Higher Rank Kit Inventory Additions** *(Warden, Eternal, Wither, Ender only)*:
  - **64x Experience Bottles**: Added to all 4 high-rank kits that feature Super Pickaxes.
  - **Dual 3x3x1 Super Pickaxes**: Every high rank kit provides **TWO** distinct 3x3x1 Super Pickaxes:
    - **1x Fortune Super Pickaxe**: Standard 3x3 area mining with Fortune III.
    - **1x Silk Touch Super Pickaxe**: Dedicated 3x3 area mining with Silk Touch I.
  - **64x Oak Logs (1 Stack)**: Added exclusively to the highest rank kit (**Ender**).
  - *Lower-tier kits (Coal, Iron, Gold, Blaze) do NOT receive these items.*

### 🩸 Armor Health Scaling & Set Perks
Wearing a complete 4-piece set of ranked armor activates permanent potion effects, perks, and heart increases. Removing any piece immediately resets max health back to 10 hearts (20 HP) with no lingering glitches:

- **Ender Set (Tier VIII)**: **20 Hearts (40 HP Max)**, Speed III, Strength II, Permanent Fire Resistance, and No Fall Damage.
- **Wither Set (Tier VII)**: **16 Hearts (32 HP)**, Speed II, Strength II, Resistance II, Wither Effect Immunity, and No Fall Damage.
- **Eternal Set (Tier VI)**: **14 Hearts (28 HP)**, Speed I, Strength I, Resistance I, and No Fall Damage.
- **Warden Set (Tier V)**: **12 Hearts (24 HP)**, Night Vision, Resistance I, Blindness & Darkness Immunity.
- **Blaze Set (Tier IV)**: Permanent Fire Resistance & Speed I (Auto-extinguishes fire/lava).
- **Gold Set (Tier III)**: Resistance I & Haste I.
- **Iron Set (Tier II)**: Speed I & Resistance I.
- **Coal Set (Tier I)**: Speed I.
- **Base / Unequipped**: **10 Hearts (20 HP Default)**.

---

## ⛏️ Custom 3x3x1 Super Pickaxes

Custom area-mining pickaxes (modeled after DonutSMP) are equipped in high-tier kits (**Warden**, **Eternal**, **Wither**, and **Ender**):

- **Dual Pickaxe Setup**: Each eligible kit includes both a **Fortune** version and a **Silk Touch** version:
  - *Warden (Tier V)*: **Sculk Resonator** (Fortune III) & **Sculk Silk Resonator** (Silk Touch I)
  - *Eternal (Tier VI)*: **Eternal Nebula Pickaxe** (Fortune III) & **Eternal Silk Nebula Pickaxe** (Silk Touch I)
  - *Wither (Tier VII)*: **Wither Core Obliterator** (Fortune III) & **Wither Silk Core Obliterator** (Silk Touch I)
  - *Ender (Tier VIII)*: **Void Sovereign World-Shaper** (Fortune III) & **Void Sovereign Silk Shaper** (Silk Touch I)
- **Ability**: Mines a 3-wide × 3-high × 1-deep (3×3×1) area centered on the target block.
- **Toggle Mode**: Right-Clicking while holding any Super Pickaxe toggles between **Super Pickaxe Mode (3x3x1)** and **Normal Mining Mode (1x1)** with audio feedback and action bar confirmation.
- **Full Enchantment Support**: Fortune multiplies ore yields for every broken block; Silk Touch extracts raw intact blocks natively across the entire 3x3 area.
- **Unbreakable Block Protection**: Strictly protects Bedrock, End Portal Frames, Portals, Command Blocks, Barriers, Spawners, and storage containers from area mining.

---

## ⚔️ Rank Swords, Passives & Ultimate Abilities (`/swords`)

Players can claim specialized rank swords from the `/swords` GUI (accessible for **Warden**, **Eternal**, **Wither**, and **Ender** ranks). Higher ranks can claim lower tier swords as well.

Each high-rank sword features **Ultimate Abilities**, **Combat Passives (10% Chance On-Hit)**, and **Wielder Perks**:

- **Activation**: Hold **Right-Click for 5 seconds** (works with or without a shield equipped). An action bar displays charging progress `[■■■□□] 60%` with chime sounds.
- **Independent Cooldowns**: 60 seconds per activation, tracked **independently per individual sword ID**. Looting or trading other players' swords allows using each weapon's ultimate without sharing cooldowns!
- **Damage Rebalancing**: Custom swords and mythics deal slightly elevated damage with signature skills, but are strictly balanced so they **never deal 2x or more damage than a maxed vanilla sword**, preventing pay-to-win dominance.
- **Damage Hard Cap**: All ultimate abilities are strictly capped at **4 Hearts (8 HP)** to keep PvP balanced.
- **Inventory Safety Rules**: `keepInventory` is permanently **disabled** for all ranks, members, and admins. All loot drops on death.

| Rank Sword | Base & Enchants | Ultimate Ability (Hold R-Click 5s) | Combat Passive (10% On-Hit) | Wielder Passive Perk |
| :--- | :--- | :--- | :--- | :--- |
| **Sculk Annihilator** *(Warden)* | Diamond Sword<br>Sharp V, KB II, Loot III, Unb III | **Sonic Shockwave Blast**<br>Raycasts Warden sonic boom up to 25 blocks forward, piercing targets, dealing up to 4 hearts damage, inflicting Darkness & Slowness. | **Sculk Annihilation Burst**<br>10% chance to deal bonus Sculk damage (+1.5 Hearts) with sonic boom shockwaves. | **Warden Immunity**<br>Immune to Warden attacks & Sonic Booms; Wardens will not aggro; auto-cleanses Darkness and Blindness. |
| **Eternal Zenith Blade** *(Eternal)* | Diamond Sword<br>Sharp V, Sweep IV, Loot IV, Fire Asp II, Unb IV, Mend | **Solar Flame Laser**<br>Projects a dense solar flame laser beam up to 30 blocks ahead, damaging up to 4 hearts and igniting enemies for 4s. | **True Fire Ignition**<br>10% chance to pierce enemy defenses: strips Fire Resistance if present and burns the victim for 12 seconds. | **Fire & Lava Immunity**<br>Permanent Fire & Lava Resistance while wielding; extinguishes fire ticks instantly. |
| **Wither Reaper Blade** *(Wither)* | Netherite Sword<br>Sharp VI, Sweep IV, Loot IV, Fire Asp II, KB II, Unb IV, Mend | **Wither Skull Strike**<br>Launches a homing Wither Skull dealing up to 4 hearts damage and applying Wither II (block griefing disabled). | **Wither Affliction**<br>10% chance to inflict Wither II for 5 seconds with dark smoke particles. | **Wither Immunity**<br>Immune to Wither effects and wither damage; auto-cleanses wither ticks. |
| **Void Sovereign World-Ender** *(Ender)* | Netherite Sword<br>Sharp VI, Sweep V, Loot V, Fire Asp II, KB II, Unb V, Mend | **Void Rupture, Breath & Darkness**<br>5-block radial blast pushing enemies back + forward blast wave (up to 4 hearts) + lingering **Dragon's Breath** cloud (12s) + **Darkness & Blindness (60s)** on struck foes. | **Void Curse**<br>10% chance to inflict Poison II (15s) and Darkness & Blindness (15s). | **Void Cloak**<br>Immune to Poison, Darkness & Blindness; Endermen never aggro on direct eye contact; any attacking Enderman is instantly eradicated. |

---

## ☠️ Server Unique Mythic Artifacts & Weapons (`/artifacts`)

Across the entire realm of Scalyx SMP, there exist **only 5 Server-Unique Mythic Weapons**. Each can only ever be forged **ONCE** in a Crafting Table.

### 🔒 Absolute Server Singularity & Event Unlock Control
- **CRAFTING LOCKED BY DEFAULT**: Mythic weapon crafting is **completely disabled** until an Administrator explicitly starts the event.
  - If a player places ingredients into a Crafting Table while an event is locked, the craft is immediately cancelled and an alert warns: `Crafting Locked! The Mythic Event for <Weapon> is not active yet.`
  - Administrators trigger event releases via `/mythics <weapon|all> start`, which broadcasts an ancient awakening announcement with dragon growls across the server.
  - Administrators can pause or seal crafting at any time with `/mythics <weapon|all> stop`.
- **ONLY 1 CAN EXIST**: Only 1 copy of each weapon can exist simultaneously in the world.
- **Unobtainable via P2W / Ranks**: Cannot be purchased, claimed from rank kits, or spawned by donor perks.
- **Dedicated Artifacts GUI (`/artifacts` or `/mythics`)**: Full interactive 54-slot showcase showing status (`LOCKED`, `EVENT ACTIVE`, or `ALREADY FORGED`), live wielders, ability breakdowns, and interactive 3x3 crafting recipes.
- **30-Second Stun Cooldown**: Stun abilities on the Mace and Spear feature an enforced **30-second cooldown** to prevent team stun-locking.
- **Balanced Damage Scaling (Non-P2W)**: Weapons are tuned with high-tier enchantments (Sharpness V, Density V, Breach IV, Lunge III) and unique abilities, while ensuring no weapon deals twice the damage of a maxed vanilla sword.
- **30-Minute Hunt & Drop on Death**:
  - Forging triggers an emergency global server broadcast!
  - Permanent glowing effect on the carrier.
  - Carrier coordinates `[X, Y, Z]` and world are broadcasted every 60 seconds.
  - If the carrier dies during the hunt, the timer **DOES NOT RESET**; the slayer inherits the target!
  - **Always Drops on Death**: The mythic weapon is never soulbound—it always drops upon death in combat, allowing other players to kill the wielder, loot it, and steal it!
- **☠️ Guaranteed Player Head Trophy Drops**:
  - Slaying any player with a Mythic Weapon (via melee, projectile arrow, Calamity Nuke, Seismic shockwave, Harpoon, or abilities) **guarantees that the victim's severed player head drops** at their death location!
  - The dropped head features the victim's authentic player skin texture and custom trophy lore recording the victim's name, the killer's name, the exact mythic weapon used, and the timestamp.

---

### 1. ⚔️ Lifestealer (Netherite Sword)
- **Crafting Recipe**: `1x Dragon Egg` surrounded by `4x Netherite Blocks` and `4x Enchanted Golden Apples`.
- **Enchantments**: Sharpness V, Sweeping Edge III, Looting III, Fire Aspect II, Unbreaking III, Mending I.
- **Passive 1 (Heart Theft)**: Steals 1 Heart (up to 4 Hearts) on-hit for 60 seconds.
- **Passive 2 (Wither Decay)**: 10% chance on-hit to inflict Wither II decay.
- **Ultimate (Heart Siphon Nova - 5m Cooldown)**: Hold Right-Click for 5s to siphon 1 Heart each from up to 10 entities in a 10-block radius, granting the wielder up to **+10 Max Hearts for 5 minutes**!

### 2. ⚡ Worldbreaker Mace (Mace)
- **Crafting Recipe**: `1x Heavy Core` (center), `4x Netherite Blocks` (corners), `2x Breeze Rods` (top/bottom), `2x Enchanted Golden Apples` (sides).
- **Attack Speed Modifier**: **Minimal Attack Cooldown** (Sword-speed 1.6 attack speed / fast combat cadence).
- **Enchantments**: Density V, Breach IV, Wind Burst III, Sharpness V, Fire Aspect II, Knockback II, Unbreaking III, Mending I.
- **Passive 1 (Stun - 30s Cooldown)**: 100% chance on-hit against players and mobs to strike them with lightning and completely paralyze them (AI disabled for mobs; walk speed 0, jump locked, mining fatigue for players) for 5 seconds (30-second cooldown per player).
- **Passive 2 (Double Jump)**: Press Jump twice in mid-air to launch 15 blocks into the sky with an explosive wind burst!
- **Ultimate (Seismic Cataclysm - Crouch + Jump, 2m Cooldown)**: Crouch and Jump to rocket 20 blocks into the sky. Negates 100% fall damage on landing and detonates a massive **10-block ground explosion** dealing devastating damage to surrounding enemies! *(Normal vanilla fall smash attack remains uncapped).*

### 3. 🌿 Gungnir, Sovereign Spear (Netherite Spear)
- **Base Item**: Netherite Spear (`minecraft:netherite_spear` - full spear reach, thrust, and lunge animations).
- **Attack Speed Modifier**: **Minimal Attack Cooldown** (Sword-speed 1.6 attack speed / fast combat cadence).
- **Infinite Stamina**: **Zero Hunger Cost** while carrying or wielding the spear.
- **Crafting Recipe**: `1x Nether Star` (center), `4x Netherite Blocks` (sides), `4x Echo Shards` (corners), `1x Heart of the Sea` (bottom).
- **Enchantments**: Sharpness V, Lunge III, Fire Aspect II, Knockback II, Unbreaking III, Mending I.
- **Passive 1 (Light Foot)**: Negates 100% of all fall damage while holding or carrying the spear!
- **Passive 2 (Stun - 30s Cooldown)**: 100% chance on-hit against players and mobs to strike them with lightning and paralyze them for 5 seconds (30-second cooldown per player).
- **Passive 3 (Breaker of Chains)**: Always shatters and disables enemy shields on-hit with audio-visual break feedback.
- **Ultimate (Verdant Harpoon - Sneak + Right-Click, 1m Cooldown)**: Fires a 35-block grasping vine raycast. Hooking an enemy pulls them violently directly into melee range; hitting a block or ledge hoists the wielder up to that vantage point!

### 4. 🔱 Poseidon's Abyssal Tempest (Trident)
- **Crafting Recipe**: `1x Heart of the Sea` (center), `2x Tridents` (top corners), `4x Netherite Blocks`, `2x Enchanted Golden Apples` (middle sides), `1x Conduit` (bottom).
- **Attack Speed Modifier**: **Minimal Attack Cooldown** (Sword-speed 1.6 attack speed / fast combat cadence).
- **Enchantments**: Impaling V, Loyalty III, Channeling I, Sharpness V, Unbreaking III, Mending I *(Trident Throw Disabled: Melee & Anywhere Riptide only)*.
- **Passive 1 (Ocean's Sovereign & Anywhere Riptide)**: Permanent Water Breathing, Dolphin's Grace, and Conduit Power while held. Right-Click triggers **Anywhere Riptide Dash** with client cooldown protection and an Action Bar status indicator (`RIPTIDE READY` / `RECHARGING`).
- **Passive 2 (Abyssal Drown - 30% Chance On-Hit)**: **30% chance on every hit** to inflict true **drowning damage for 5 seconds** (1 heart/sec) and paralyze the target with **Slowness IV for 10 seconds**! Displays drowning bubbles, water splash particles, and drowning audio.
- **Ultimate (Tsunami Cataclysm - Sneak + Right-Click, 2m Cooldown)**: Summons a surging 25-block tsunami tidal wave with lightning strikes, sweeping enemies up, dealing heavy water damage and Slowness III.

### 5. 💥 Doomherald, Oblivion Ballista (Crossbow)
- **Crafting Recipe**: `1x Nether Star` (center), `1x Crossbow` (top), `4x Netherite Blocks` (sides), `4x Dragon's Breath` (corners), `1x Enchanted Golden Apple` (bottom).
- **Enchantments**: Piercing IV, Quick Charge III, Infinity I, Unbreaking III, Mending I *(Multishot removed per design)*.
- **True Oblivion Pierce**: Every hit directly deals **2 Hearts (4 HP) of pure true damage**, completely bypassing all armor, protection, and enchantments!
- **Passive 1 (Rapid Barrage)**: **30% chance** on shoot to grant 10 rapid-fire instant shots without needing to reload!
- **Passive 2 (Void Toxin)**: 30% chance on arrow hit to inflict Darkness and Poison for 15 seconds.
- **Ultimate (Calamity Nuke - Sneak + Shoot, 1m Cooldown)**: Next shot detonates a massive **10-block oblivion explosion** upon impact dealing devastating uncapped area damage, knockback, and fire!

---

### 🛡️ Server-Unique Mythic Armors (`mythic_armors.sk`)

In addition to the 5 Mythic Weapons, Scalyx SMP features **4 Server-Unique Mythic Armor Artifacts**, forged with legendary passives and singularity protection:

#### 1. ⚡ Stormbreaker Aegis (Netherite Chestplate)
- **Base Item**: `minecraft:netherite_chestplate`
- **Lore**: *"Forged in the heart of the eternal tempest."*
- **Enchantments**: Protection IV, Unbreaking III, Mending I
- **Combat Passive (Storm Surge Aura)**: Landing a 7-hit melee combo triggers an electrifying lightning storm around the wearer, calling down lightning bolts on all nearby hostiles within 8 blocks, inflicting heavy shock damage, and granting the wearer **Resistance I** for 10 seconds.
- **Identifier**: `storm_chestplate`

#### 2. 👁 All-Seeing Crown (Netherite Helmet)
- **Base Item**: `minecraft:netherite_helmet`
- **Lore**: *"The gaze of the ancient watchers pierces through all realms."*
- **Enchantments**: Protection IV, Respiration III, Aqua Affinity I, Unbreaking III, Mending I
- **Ability (Hunter's Vision - 3m Cooldown)**: Crouching continuously for **10 seconds** unleashes ancient psychic radar, granting all online players within a massive **100-block radius** a **Glowing outline for 30 seconds** and broadcasting their exact coordinates and distance to the wearer.
- **Identifier**: `oracle_helmet`

#### 3. 🛡 Mirrorwalk Greaves (Netherite Leggings)
- **Base Item**: `minecraft:netherite_leggings`
- **Lore**: *"Walk the threshold between realities; mirror all strikes."*
- **Enchantments**: Protection IV, Swift Sneak III, Unbreaking III, Mending I
- **Combat Passive (Mirror Barrier - 2m Cooldown)**: When the wearer's health falls below **5 hearts (10 HP)**, an iridescent crystalline energy barrier activates for **30 seconds**, reflecting **50% of all incoming damage directly back at the attackers** (capped at a total of 10 hearts deflected before shattering).
- **Identifier**: `mirror_leggings`

#### 4. ☄ Titanfall Boots (Netherite Boots)
- **Base Item**: `minecraft:netherite_boots`
- **Lore**: *"Drop from the heavens and crush the earth."*
- **Enchantments**: Protection IV, Feather Falling IV, Depth Strider III, Unbreaking III, Mending I
- **Combat Passive (Seismic Titanfall)**: Falling from a height of **5 or more blocks completely negates all fall damage** and triggers a devastating **Density V Mace seismic impact** in a **5-block ground radius**, dealing heavy kinetic shock damage and launching nearby enemies high into the air.
- **Identifier**: `titan_boots`

---

## 🎯 Dynamic Server-Wide Events

Scalyx SMP features 5 custom, fully-automated server events designed to drive community engagement, PvP warfare, and PvE survival:

---

### 1. 🎯 The Assassin's Event System (`/asse`)
* **Circular Target Assignment**: Initiated via `/asse start`, all online players are randomized into a circular bounty loop ($P_1 \to P_2 \dots \to P_1$) where no player is ever assigned themselves.
* **Real-Time Distance & Dimension Tracking**: Action Bar HUD updates every 2 seconds with live proximity data (`🎯 TARGET: PlayerName │ 142 blocks away │ Kills: 3` or dimension status `[In Nether]`, `[In End]`).
* **Target Elimination & Inheritance**: Slaying your target grants +1 kill and immediately inherits your victim's target!
* **Conclusion & Archive**: Broadcasts podium with wither sound, outputs to console, and appends records to `ASSASSINS_EVENT.md`.

---

### 2. 👑 Crown of the Warlord (`/warlord`)
* **~5000-Block Spawn Drop**: Initiated via `/warlord start`, the celestial **Crown of the Warlord** spawns at a randomized location ~5000 blocks away from world spawn to ensure a fair race for every player! Coordinates are broadcasted to chat.
* **Warlord Transformation**: Holding or wearing the crown makes the player the **Warlord**, granting **Permanent Glowing**, **+4 Extra Hearts** (Warlord Crown Blessing), **Strength I**, and **Resistance I**.
* **Curse of Burden**: To preserve fair combat, the Warlord **cannot teleport, throw ender pearls, or fly**.
* **Score Accumulation**: Holding the crown earns **1 Point every 3 seconds**. Action bar radar tracks distance to the crown or current Warlord for all players.
* **Drop on Death / Disconnect**: Dropped immediately upon death or quit. Slay the Warlord to seize it!
* **Conclusion & Archive**: On `/warlord stop`, top 3 point holders are announced with wither sound and recorded in `WARLORD_EVENT.md`.

---

### 3. 🩸 The Blood Moon: Eclipse of the Abyss (`/bloodmoon`)
* **Apocalyptic Atmosphere**: Sky plunges into pitch black thunder and goat horn sound effects (`/bloodmoon start`).
* **Empowered Abyssal Mobs**: Hostile mob spawns have a 40% chance to become elite nightmare variants:
  * **🕷 Abyssal Crawler**: Speed II, Jump Boost II, inflicts Poison II and Darkness on hit (3 Blood Essence).
  * **⚡ Storm Skeleton**: Fires flaming arrows with lightning strikes (4 Blood Essence).
  * **☠ Void Dreadnought**: Netherite/Iron axe juggernaut with 40 HP, Strength I, Resistance I; drops diamonds/netherite scraps (6 Blood Essence).
  * Standard mobs grant 1 Blood Essence.
* **Death Penalty**: Dying during the Blood Moon docks 20% of your accumulated essence!
* **Conclusion & Archive**: On `/bloodmoon stop`, restores daytime/clear weather, announces top 3 slayers, and appends records to `BLOOD_MOON_EVENT.md`.

---

### 4. 💰 The High Bounty: Most Wanted (`/bounty`)
* **Target Selection**: Initiated via `/bounty start [player]`, designates a chosen or randomized player as the **Most Wanted Outlaw**.
* **Outlaw Juggernaut**: Outlaw receives **Glowing outline**, **Speed I**, and **+4 Extra Hearts**.
* **Radar & Coordinate Pings**: Outlaw's exact coordinates are broadcasted to the entire server every 60 seconds. Hunters receive real-time action bar radar pointing directly to the Outlaw.
* **Execution Rewards**: The hunter who executes the Outlaw claims **+10 Bounty Points**, the **Outlaw's Severed Head**, and **5 Diamonds**. If the Outlaw kills hunters in self-defense, they gain **+3 Survival Points**.
* **Conclusion & Archive**: On `/bounty stop`, announces top podium winners with wither sound and appends records to `BOUNTY_EVENT.md`.

---

### 5. 🔍 The Scavenger Hunt Event System (`/scavenger`)
* **Strict Sequential Search & Dynamic CSV Loading**: Initiated via `/scavenger start` (or `/scav start`), all online players are registered into the hunt. The 10 target items are **dynamically read directly from `SCAVENGER_ITEMS.csv` at runtime** whenever the event starts, allowing administrators to modify or reorder items in the CSV without restarting the server.
* **Action Bar HUD Tracker**: Participating players have their current target item continuously displayed right above the locator/hotbar formatted exactly as:
  `<#FFD700>#<serial_number> <#888888>-> <#00FFDD><item_name>` (e.g. `#1 -> Oak Log`).
* **Pickup Progression**: Finding an item means picking it up into the player's inventory (`on pick up:`). Upon collecting the required item, celebratory audio rings out and the player is instantly promoted to the next item number.
* **10-Item Official Registry (`SCAVENGER_ITEMS.csv`)**:
  1. `1` - **Oak Log** (`oak_log`)
  2. `2` - **Raw Iron** (`raw_iron`)
  3. `3` - **Redstone Dust** (`redstone`)
  4. `4` - **Amethyst Shard** (`amethyst_shard`)
  5. `5` - **Golden Apple** (`golden_apple`)
  6. `6` - **Obsidian** (`obsidian`)
  7. `7` - **Blaze Rod** (`blaze_rod`)
  8. `8` - **Ghast Tear** (`ghast_tear`)
  9. `9` - **Ancient Debris** (`ancient_debris`)
  10. `10` - **Echo Shard** (`echo_shard`)
* **Victory & 4-Piece God Armor Trophy Rotation**:
  * The first player to collect all 10 items wins the hunt!
  * **🏆 Rotating God Armor Champion Trophy**:
    * Each completed hunt rotates through **4 pieces of Server God Armor**:
      1. 🛡 **God Chestplate**: Netherite Chestplate, **Every Protection Level IV** (`Protection IV`, `Fire Protection IV`, `Blast Protection IV`, `Projectile Protection IV`), `Unbreaking III`, `Mending I`, **Dune Armor Trim with Emerald**.
      2. 👖 **God Leggings**: Netherite Leggings, **Every Protection Level IV**, `Swift Sneak III`, `Unbreaking III`, `Mending I`, **Dune Armor Trim with Emerald**.
      3. 👢 **God Boots**: Netherite Boots, **Every Protection Level IV**, `Feather Falling IV`, `Depth Strider III`, `Soul Speed III`, `Unbreaking III`, `Mending I`, **Dune Armor Trim with Emerald**.
      4. 👑 **God Helmet**: Netherite Helmet, **Every Protection Level IV**, `Respiration III`, `Aqua Affinity I`, `Unbreaking III`, `Mending I`, **Dune Armor Trim with Emerald**.
    * **Rotation Sequence**: `Chestplate` ➔ `Leggings` ➔ `Boots` ➔ `Helmet` ➔ `Chestplate` (persisted in `SCAVENGER_HUNT.md`).
  * **Free Space Check**: If the winner has open slots in their inventory, rewards are automatically delivered immediately (**God Armor Trophy Piece**, **$10,000 cash**, **16x Enchanted Golden Apples**, **4x Netherite Ingots**, **64x Diamonds**).
  * **Full Inventory Protection**: If the winner's inventory is full, they are prominently alerted on screen with titles, sounds, and chat messages instructing them to clear space and run **`/scavenger claim`**!
  * **Strict Claim Validation**: Running `/scavenger claim` matches the player's username against the recorded winner in `SCAVENGER_HUNT.md`. Once verified and slots are available, the exact rotated God Armor trophy piece and loot are delivered and the claim status updates to `[CLAIMED]`.
* **Conclusion & Comprehensive Logging (`SCAVENGER_HUNT.md`)**:
  * Event conclusions automatically record start/end timestamps, winner name, claim status, the specific God Armor trophy awarded, the next trophy piece in rotation, and a full markdown table detailing every player who participated, their final rank, items found (e.g. `7/10`), and last item reached.

---

## 👑 Master Staff & Admin Commands Reference

Staff with OP or `scalyx.kit.admin` have complete administrative control over all server subsystems:

### 1. Mythic Artifacts & Singularity Management
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/mythics <weapon\|all> start`** | `scalyx.kit.admin` / OP | **Unleash Mythic Event**: Activates crafting for the designated mythic weapon (or all 5), broadcasting a server-wide announcement. |
| **`/mythics <weapon\|all> stop`** | `scalyx.kit.admin` / OP | **Lock Mythic Event**: Disables and seals crafting for the designated mythic weapon (or all 5). |
| **`/mythics status`** | Default (All Players) | View real-time status of all 5 mythics (`LOCKED`, `EVENT ACTIVE`, or `FORGED`) and active carrier. |
| **`/artifacts`** or **`/mythics`** | `scalyx.mythics.gui` | Open the interactive Mythic Weapons & 3x3 Recipe Showcase GUI. (Shift-Right-Click allows staff to claim weapons). |
| **`/artifact give <weapon\|all> [player]`** | `scalyx.mythics.admin` | **Admin Bypass**: Directly grant any or all mythic weapons to yourself or a player, completely bypassing the 1-per-server limit. |
| **`/artifact admin status`** | `scalyx.mythics.admin` | View global crafted state, active wielders, and hunt status for all 5 mythics. |
| **`/artifact admin reset <weapon\|all>`** | `scalyx.mythics.admin` | Reset weapon crafted state and end active hunts, allowing players to craft them again. |
| **`/artifact admin unclaim <weapon\|all>`** | `scalyx.mythics.admin` | Clear wielder records and reset ownership. |
| **`/mythicadmin status`** | `scalyx.mythics.admin` | Detailed console/chat overview of carrier UUIDs, broadcast coordinates, world, and remaining hunt timers. |
| **`/mythicadmin give <player> <weapon> [bypass]`** | `scalyx.mythics.admin` | Deliver a mythic weapon to a player (with optional bypass flag). |
| **`/mythicadmin reset <weapon\|all>`** | `scalyx.mythics.admin` | Administrative reset of weapon records. |
| **`/lifestealer status`** | `scalyx.lifestealer.status` | Check live status of Lifestealer (forged state, carrier name, coordinates, hunt time). |
| **`/lifestealer give <player>`** | `scalyx.lifestealer.admin` | Directly deliver Lifestealer to a player (blocked if one already exists unless reset). |
| **`/lifestealer reset`** | `scalyx.lifestealer.admin` | Reset Lifestealer forged status, allowing a player to re-forge it with the Dragon Egg. |

### 2. Rank Kits Management
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/kits`** | Default | Player kits claim GUI. *(Admins can click to re-claim any kit infinitely without cooldowns)*. |
| **`/kitadmin status <player>`** | `scalyx.kit.admin` | Inspect a player's complete kit claim history across all 8 tiers. |
| **`/kitadmin reset <player> [kit\|all]`** | `scalyx.kit.admin` | Reset one or all kit claims for a player (supports offline players). |
| **`/kitadmin give <player> <kit>`** | `scalyx.kit.admin` | Force-spawn a kit Shulker Box directly into a player's inventory. |

### 3. Rank Swords Management
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/swords`** | Default | Player swords claim GUI with hierarchical claims. |
| **`/ranksword status <player>`** | `scalyx.kit.admin` | View sword claims for a player. |
| **`/ranksword reset <player> [tier\|all]`** | `scalyx.kit.admin` | Reset sword claim status for a player (supports offline players). |
| **`/ranksword give <player> <tier>`** | `scalyx.kit.admin` | Force-deliver a rank sword (`coal`, `iron`, `gold`, `blaze`, `warden`, `eternal`, `wither`, `ender`). |
| **`/ranksword resetcd [player]`** | `scalyx.kit.admin` | Reset the 60-second ultimate ability cooldown for rapid testing. |

### 4. 3x3x1 Super Pickaxes Management
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/pickaxe toggle`** | Default (while holding) | Toggle between 3x3x1 area mining and standard 1x1 mining mode. |
| **`/pickaxe give <player> [tier]`** | `scalyx.kit.admin` | Force-deliver a 3x3x1 Super Pickaxe (`warden`, `eternal`, `wither`, `ender`) to a player. |

### 5. Scalyx Core Engine Commands (Native Mechanics & Debug)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/scalyxdrophead <victim> [killer] [weapon]`** | `scalyx.mechanics` | Spawns a textured player head of `<victim>` with custom lore (killer, weapon, date). |
| **`/scalyxstun <entity> [durationTicks]`** | `scalyx.mechanics` | Strikes target with lightning and freezes them (disables AI for mobs; locks walk speed & jump for players, safe mid-air flight handling & auto-restore on reconnect). |
| **`/scalyxpull <victim> <puller>`** | `scalyx.mechanics` | High-power Harpoon velocity vector pulling the victim smoothly directly into melee range of the puller. |
| **`/scalyxcharge <player>`** | `scalyx.mechanics` | Instantly charges an arrow into a player's held crossbow natively without NBT command errors. |
| **`/scalyxcooldown <player> [ticks]`** | `scalyx.mechanics` | Sets client-side item cooldown packet on tridents to prevent right-click charge jitter. |
| **`/scalyxrecordevent <start> \| <end> \| <p1> \| <p2> \| <p3>`** | `scalyx.mechanics` | Appends Assassin's Event podium winners and timestamps directly to `ASSASSINS_EVENT.md`. |

### 6. 🎯 Server Events Management

#### A. 🎯 The Assassin's Event (`/asse`)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/asse start`** | `scalyx.asse.admin` | Starts the Assassin's Event. Shuffles all online participants into a circular bounty loop and activates target tracking HUD. |
| **`/asse stop`** | `scalyx.asse.admin` | Stops the event. Broadcasts Top 3 winners with wither spawn sound, logs to console, and appends records to `ASSASSINS_EVENT.md`. |
| **`/asse leaderboard`** | `scalyx.asse.admin` | Displays a real-time admin leaderboard of all participants sorted by assassin kills. |
| **`/asse reset <player>`** | `scalyx.asse.admin` | Resets a specific player's assassin kill count to 0 and reassigns them a fresh target. |
| **`/asse kick <player>`** | `scalyx.asse.admin` | Removes a player from the active event, clearing their bounty and repairing the target chain. |
| **`/asse stats`** | Default (All Players) | Displays personal event statistics, current target, distance in blocks (or dimension: `"In Nether"`, `"In End"`), and total kills. |

#### B. 👑 Crown of the Warlord (`/warlord`)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/warlord start`** | `scalyx.admin` / OP | Spawns the Crown ~5000 blocks away from world spawn, strikes lightning, broadcasts coords, and starts scoring. |
| **`/warlord stop`** | `scalyx.admin` / OP | Ends event, plays wither sound, announces podium winners, and logs results to `WARLORD_EVENT.md`. |
| **`/warlord leaderboard`** | Default (All Players) | Displays real-time top 10 point holders. |
| **`/warlord reset <player>`** | `scalyx.admin` / OP | Resets a specific player's accumulated Warlord points to 0. |
| **`/warlord kick <player>`** | `scalyx.admin` / OP | Strips the Crown from the carrier (drops it at their feet) and removes them from the event. |
| **`/warlord stats`** | Default (All Players) | Displays personal points, current Warlord wielder, and crown coordinates if on the ground. |

#### C. 🩸 The Blood Moon (`/bloodmoon`)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/bloodmoon start`** | `scalyx.admin` / OP | Plunges server into midnight & thunder, plays ominous horn, and spawns empowered mob waves. |
| **`/bloodmoon stop`** | `scalyx.admin` / OP | Ends eclipse, resets daytime/clear weather, announces top 3 monster slayers, and logs to `BLOOD_MOON_EVENT.md`. |
| **`/bloodmoon leaderboard`** | Default (All Players) | Displays real-time leaderboard of players sorted by Blood Essence. |
| **`/bloodmoon reset <player>`** | `scalyx.admin` / OP | Resets a player's Blood Essence to 0. |
| **`/bloodmoon stats`** | Default (All Players) | Displays personal Blood Essence and active eclipse status. |

#### D. 💰 The High Bounty (`/bounty`)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/bounty start [<player>]`** | `scalyx.admin` / OP | Declares the specified player (or random online player) as the Most Wanted Outlaw with buffs & periodic radar pings. |
| **`/bounty stop`** | `scalyx.admin` / OP | Concludes the manhunt, announces podium winners with wither sound, and logs to `BOUNTY_EVENT.md`. |
| **`/bounty leaderboard`** | Default (All Players) | Displays real-time bounty points leaderboard for hunters and outlaws. |
| **`/bounty reset <player>`** | `scalyx.admin` / OP | Resets a player's bounty score and outlaw kill count. |
| **`/bounty stats`** | Default (All Players) | Displays personal bounty score, kills, and current active outlaw. |

#### E. 🔍 The Scavenger Hunt Event (`/scavenger`)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/scavenger start`** | `scalyx.scavenger.admin` / OP | Initiates the event, registers all online players, activates Action Bar tracking for Item #1, and plays dragon sound. |
| **`/scavenger stop`** | `scalyx.scavenger.admin` / OP | Stops the hunt manually without a winner and logs final standings to `SCAVENGER_HUNT.md`. |
| **`/scavenger claim`** | Default (All Players) | Validates winner name against `SCAVENGER_HUNT.md` and delivers full championship loot if inventory was cleared. |
| **`/scavenger stats`** | Default (All Players) | Displays personal items found, target item number, name, and total items remaining. |
| **`/scavenger leaderboard`** | Default (All Players) | Displays real-time standings of all participating players and items found. |
| **`/scavenger reloaditems`** | `scalyx.scavenger.admin` / OP | Synchronizes and reloads the 10-item sequential registry from `SCAVENGER_ITEMS.csv`. |
| **`/scalyxscavrecord <start> \| <end> \| <winner> \| <claimed> \| <data>`** | `scalyx.mechanics` / Console | Writes complete event standings, rotated God Armor piece, and claim status to `SCAVENGER_HUNT.md`. |
| **`/scalyxscavclaim <player>`** | `scalyx.mechanics` / Console | Backend engine validator matching player against `SCAVENGER_HUNT.md` for God Armor & reward disbursement. |
| **`/scalyxscavload`** | `scalyx.mechanics` / Console | Dynamically reads and registers all 10 scavenger items directly from `SCAVENGER_ITEMS.csv`. |

### 7. Moderation, Inspection & Player Utilities
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/pvp [on\|off\|status]`** | `scalyx.pvp.admin` / OP | Globally enable, disable, or query PvP combat state across the server. |
| **`/screenbroadcast <message>`** | `scalyx.broadcast.screen` / OP | Broadcast high-visibility center-screen title announcement with sound effects to all players (Aliases: `/cbroadcast`, `/sbroadcast`, `/titlebc`, `/bcscreen`). |
| **`/locate <structure\|biome\|poi> <target>`** | `minecraft.command.locate` / OP | Locates vanilla/datapack structures, biomes, or POIs (automatically resolves plugin conflicts). |
| **`/slocate <structure\|biome\|poi> <target>`** | `minecraft.command.locate` / OP | Dedicated vanilla locate alias directly bypassing any plugin overrides. |
| **`/wglocate <player>`** | `worldguard.locate` / OP | WorldGuard player locator command. |
| **`/ecsee <player>`** / **`/endersee`** | `enhancedechest.admin.view` | Live inspect and edit any player's 54-slot deluxe Ender Chest. |
| **`/invsee <player>`** | `invseeplusplus.invsee` | Live inspect and edit any player's inventory and armor. |
| **`/ping [player]`** | Default | Check connection latency in ms for yourself or another player. |
| **`/trash`** / **`/disposal`** | Default | Opens a clean disposal bin GUI to safely destroy unwanted items. |
| **`/sb`** | Default | Toggles the sidebar scoreboard on/off. |
| **`/ranks`** | Default | Displays all rank tiers, weights, and perks in chat. |
| **`/rules`** | Default | Displays the official server rules. |
| **`/discord`** | Default | Sends the server Discord community invite link. |

### 8. Economy & Rewards Controls
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/daily`** | Default | Claim daily login money reward with streak multipliers. |
| **`/streak`** | Default | Check current daily login streak and progress. |
| **`/coinflip <amount> [heads\|tails]`** | Default | PvP coinflip gambling system. |
| **`/eco give\|take\|set <player> <amount>`** | `essentials.eco` | Admin Vault economy management. |
| **`/shop`** | Default | Open EconomyShopGUI server marketplace. |
| **`/ah`** | Default | Open DonutAuctionHouse player auctions. |
| **`/trade <player>`** | Default | Open AxTrade secure two-way trading window. |

### 9. Group, Permission & Rank Administration (LuckPerms)
| Command | Permission | Description |
| :--- | :--- | :--- |
| **`/lp user <player> parent set <rank>`** | `luckperms.*` | Set a player's primary rank (`coal`, `iron`, `gold`, `blaze`, `warden`, `eternal`, `wither`, `ender`, `admin`, `owner`). |
| **`/lp user <player> parent add <rank>`** | `luckperms.*` | Add an additional group/rank to a player. |
| **`/lp user <player> info`** | `luckperms.*` | View detailed permission nodes, inheritance, and groups for a player. |

### 10. Server Operations & Maintenance
| Command | Terminal / Console | Description |
| :--- | :--- | :--- |
| **`make restart`** | Terminal (`make -C ... restart`) | Gracefully stops the Paper server, saves all chunk and player data, and restarts cleanly in tmux session `paper:1`. |
| **`sk reload <script\|all>`** | Minecraft Console / In-game OP | Hot-reloads Skript files (`sk reload mythic_weapons`, `sk reload lifestealer`, `sk reload smp_combat`, etc.). |
| **`minecraft:reload`** | Minecraft Console / In-game OP | Hot-reloads custom datapacks, recipes, and advancement triggers. |
| **`tab reload`** | Minecraft Console / In-game OP | Hot-reloads TAB player list, header/footer, animations, and scoreboard configurations. |

---

## 🗺️ World Generation, Dimensions & Structure Overhauls

Scalyx SMP features an overhauled world generation ecosystem with dedicated vanilla structure overhauls:

### 🏰 Dungeons & Taverns (DnT) Vanilla Structure Overhauls
All standalone structure overhauls from **Dungeons and Taverns** (by NovaWostra) are active and generating across the Overworld and Nether:
- **Nether Fortress Overhaul** (`DnT_Nether_Fortress_Overhaul.zip`): Expansive custom fortresses with multi-tiered bridges, citadel keeps, and enhanced blaze/wither spawner chambers.
- **Stronghold Overhaul** (`DnT_Stronghold_Overhaul.zip`): Sprawling redesigned strongholds featuring puzzle chambers, grand libraries, and dramatic portal arenas.
- **Ancient City Overhaul** (`DnT_Ancient_City_Overhaul.zip`): Immersive Deep Dark citadels with atmospheric sculk architecture and unique loot vaults.
- **Ocean Monument Overhaul** (`DnT_Ocean_Monument_Overhaul.zip`): Majestic underwater temples with expanded guardian labyrinths and hidden core chambers.
- **Mineshaft Overhaul** (`DnT_Mineshaft_Overhaul.zip`): Multi-level deep mineshafts with support beams, minecart tracks, and ore vein clusters.
- **Woodland Mansion Overhaul** (`DnT_Woodland_Mansion_Overhaul.zip`): Vast illager castles with secret rooms, prisoner dungeons, and boss arenas.
- **Pillager Outpost Overhaul** (`DnT_Pillager_Outpost_Overhaul.zip`): Fortified outpost watchtowers with encampments, cages, and watchpoints.
- **Desert Temple Overhaul** (`DnT_Desert_Temple_Overhaul.zip`): Elaborate sand-swept pyramids with traps, burial crypts, and archeology sites.
- **Jungle Temple Overhaul** (`DnT_Jungle_Temple_Overhaul.zip`): Overgrown jungle ruins with redstone dart traps and hidden relic alcoves.
- **Swamp Hut Overhaul** (`DnT_Swamp_Hut_Overhaul.zip`): Eerie stilt witch huts with brewing cauldrons and swamp creature dens.
- *(Note: All older `[RETIRED]` datapacks are omitted per development guidelines).*

### 🌍 Landscape, Biome & Dimension Overhauls
- **Terralith & Trek**: Complete Overworld terrain redesign with 85+ realistic biomes, canyons, and towering mountain ranges.
- **Incendium**: Complete Nether overhaul with 8 new nether biomes and custom hellish structures.
- **Stellarity & Nullscape**: Custom End dimension generation with void citadels, stellar biomes, and custom dragon battles (*The End was preserved intact*).
- **Explorify & Structory**: Hundreds of small decorative ruins, towers, campsites, and world-enriching landmarks.

---

## 🌐 Wilderness RTP, WorldGuard & Spawn Protection

- **BetterRTP 10,000-Block Wild Distribution**:
  - The BetterRTP plugin is configured with a maximum radius of **10,000 blocks** (`max-radius: 10000`).
  - Players running `/rtp` or `/wild` are spread deep across uncharted terrain rather than clustering within 1,000 blocks of spawn.
- **Spawn Protection Zeroed (`spawn-protection=0`)**:
  - Vanilla spawn protection in `server.properties` is set to `0`.
  - All hub protection, non-break flags, and non-pvp zones are exclusively governed by **WorldGuard** regions, eliminating vanilla override glitches and allowing non-OP staff and WorldEdit builders to operate seamlessly.

---

## 💬 Chat & Direct Message Formatting

All in-game communication channels adhere to a unified, clean, and recognizable format:

- **Public Chat**: Managed via EssentialsChat & LuckPerms prefixes:
  - Format: `<Prefix> <PlayerName> » <Message>`
  - Example: `[MEMBER] Piush » Hello everyone!`
- **Private Messages & Whispers (`/msg`, `/tell`, `/w`, `/r`)**:
  - Standardized in `messages_en.properties` and `config.yml` to mirror the server styling:
  - Sender View: `[M] You -> <Recipient> >> <Message>`
  - Recipient View: `[M] <Sender> -> You >> <Message>`
  - Example: `[M] MightNotBePiush -> Piush >> Hey, want to team up?`

---

## 🛡️ Permissions & Security Lockdown

- **OP Command Restriction**:
  - Unprivileged players (and de-opped users) have zero access to `/op`, `/deop`, `/minecraft:op`, or any elevation vectors.
  - Command permissions are restricted strictly to server administrators and owners via LuckPerms (`luckperms.*` / Bukkit default commands blocked).
- **WorldGuard Region Protection**:
  - Players without explicit bypass permissions (`worldguard.region.bypass.*`) cannot break blocks, place blocks, or open containers inside defined WorldGuard regions (including Spawn Hub, Markets, and Arenas).

---

## ⚙️ Event Recorder Daemon & VPS Operations

When deploying Scalyx SMP to a dedicated VPS or cloud host:

- **Event Record Logging**:
  - Automated events (Assassin's, Warlord, Blood Moon, High Bounty, and Scavenger Hunt) record winners, podium statistics, completion timestamps, and full participant standings natively into markdown archives (`ASSASSINS_EVENT.md`, `WARLORD_EVENT.md`, `BLOOD_MOON_EVENT.md`, `BOUNTY_EVENT.md`, `SCAVENGER_HUNT.md`) and load sequential targets from `SCAVENGER_ITEMS.csv` via the server plugin engine without requiring external Python daemon scripts.
- **Background Daemon / Service Management**:
  - The server runs under a clean `tmux` or `systemd` unit file (managed via `make start`, `make stop`, and `make restart`).
  - Logs are persisted in `logs/latest.log` and compressed daily by Paper.

---

## ✅ SMP Launch Pre-Flight Checklist

1. **KeepInventory**: Verified `false` globally across all worlds.
2. **Kits Hierarchy**: Higher rank players can claim all lower rank kits with zero permission conflicts. No kits contain Density with Breach, and Lunge is strictly capped at Level 3.
3. **Kit Armor Enchants**: No Thorns on any kit armor; Protection capped at Max Protection IV; Quartz trims applied to Ender set.
4. **Kit Inventories**: 64x XP Bottles on higher-tier kits; dual Fortune & Silk Touch 3x3 pickaxes included; 64x Oak Logs in Ender kit.
5. **Super Pickaxes**: 3x3x1 mining active with bedrock protection enabled (Fortune and Silk Touch versions).
6. **Rank Swords**: 60s independent cooldowns, 4-heart damage hard cap, and on-hit passives operational.
7. **Mythic Weapons & Armors**: Crafting disabled/locked by default; released manually via `/mythics <weapon|all> start`; 30s stun cooldowns on Mace & Spear; balanced non-P2W damage; 4 unique Mythic Armor pieces functional.
8. **Server Events**: 5 automated events operational (`/asse`, `/warlord`, `/bloodmoon`, `/bounty`, `/scavenger`), including full inventory protection and `/scavenger claim` validation in `SCAVENGER_HUNT.md`.
9. **Combat & Moderation**: `/pvp [on|off|status]` global toggle and `/screenbroadcast` title alerts active.
10. **Wilderness RTP**: Configured to 10k radius distribution; vanilla `spawn-protection=0` for clean WorldGuard region enforcement.
11. **Chat & DMs**: Whispers formatted as `[M] Sender -> Recipient >> message`.
12. **Security & Permissions**: `/op` and WorldGuard bypass rights strictly locked to verified administrators.
13. **Ender Chest**: 54-slot deluxe storage saving correctly across sessions.
14. **Homes**: GUI home manager with rank-scaled limits functioning smoothly.
15. **Economy**: `/shop` prices and `/ah` functioning with safe trading protections.
