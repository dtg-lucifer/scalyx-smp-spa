import React, { useState } from 'react';
import { 
  Scroll, ShieldAlert, Gavel, AlertTriangle, Sword, Wind, 
  Heart, Shield, Ban, CheckCircle2, XCircle, AlertOctagon, 
  HelpCircle, MessageSquare, ChevronDown, Award 
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function RulesPage({ setActiveTab }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const coreRules = [
    {
      id: 'gear-balance',
      category: 'combat',
      number: 'RULE 01',
      title: 'Loadout Balance: Kit Armor vs Mythic / Kit Sword',
      badge: 'STRICT COMBAT LAW',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-700',
      tagline: 'Choose Armor OR Sword — Never Both Simultaneously in PvP',
      description: 'No player should fight another player with having both their kit armor and mythic / kit sword; they can only use either one of them at the time of the fight.',
      details: [
        'If you are wearing high-tier Kit Armor (Warden, Eternal, Wither, or Ender sets with bonus hearts and passive buffs), you CANNOT wield a Mythic Weapon or Mythic Rank Sword in PvP combat.',
        'If you are wielding a Mythic Weapon (Lifestealer, Worldbreaker Mace, Gungnir Spear, Poseidon\'s Tempest, Doomherald) or a Rank Sword, you must wear standard vanilla gear (vanilla Netherite/Diamond) — NOT ranked kit armor.',
        'This rule ensures high-stakes PvP remains competitive, preventing unkillable juggernauts from combining +20 Hearts dynamic scaling with high-damage mythic charged ultimates.',
        'You must configure your loadout prior to engaging in combat.'
      ],
      icon: Sword,
      iconColor: 'text-red-400',
      panelBorder: 'border-red-600/70',
      panelBg: 'bg-gradient-to-r from-red-950/30 to-[#17141a]'
    },
    {
      id: 'elytra-combat',
      category: 'combat',
      number: 'RULE 02',
      title: 'No Elytra Flying Away While in Combat',
      badge: 'NO FLIGHT COMBAT',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-600',
      tagline: 'Fight on Foot — Escaping via Flight is Prohibited',
      description: 'No elytra flying away while on combat.',
      details: [
        'Once engaged in PvP combat (taking damage from or inflicting damage to another player), you are strictly forbidden from equipping or rocket-boosting with an Elytra to flee.',
        'Escaping from an active battle using Elytra flight constitutes combat-evasion and is treated the same as combat logging.',
        'Tactical retreats must be done on foot, utilizing terrain, ender pearls, or combat mechanics — not aerial flight.',
        'If your Elytra is equipped during a fight, you must fight on ground level without using fireworks to boost away.'
      ],
      icon: Wind,
      iconColor: 'text-amber-400',
      panelBorder: 'border-amber-500/70',
      panelBg: 'bg-gradient-to-r from-amber-950/30 to-[#181613]'
    },
    {
      id: 'elytra-callout',
      category: 'combat',
      number: 'RULE 03',
      title: 'Ground PvP Callout Protocol for Flying Players',
      badge: 'GROUND HONOR CODE',
      badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-600',
      tagline: 'Land When Challenged — No Aerial Teasing or Hovering',
      description: 'If any elytra flying player is called on the ground for a PVP then they have to get to ground, not fly away, after that if both parties decide to fight then fight otherwise they can part their ways.',
      details: [
        'If a player flying with an Elytra is spotted and called down for PvP by players on the ground, the flying player MUST land on the ground rather than flying away or hovering overhead to taunt.',
        'Once landed, both parties communicate and decide whether they agree to duel or engage in PvP.',
        'If BOTH parties agree to fight, the battle commences fairly on the ground (adhering to Rule 01 & 02).',
        'If either party decides NOT to fight, they can peacefully part their ways without harassment, surprise attacks, or aerial chases.'
      ],
      icon: Shield,
      iconColor: 'text-[#00ffff]',
      panelBorder: 'border-[#00ffff]/70',
      panelBg: 'bg-gradient-to-r from-cyan-950/30 to-[#12161b]'
    },
    {
      id: 'heart-farming',
      category: 'lifesteal',
      number: 'RULE 04',
      title: 'No Alt Farming or Staged Heart Duping',
      badge: 'LIFESTEAL INTEGRITY',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-600',
      tagline: 'Earn Hearts Authentically — Zero Dummy Accounts',
      description: 'Creating alternate accounts or teaming with willing players to repeatedly die and inflate max heart pools or claim duplicate kits is strictly prohibited.',
      details: [
        'Players may only accumulate hearts and kits through genuine, authentic survival PvP and legitimate gameplay.',
        'Using alternate accounts (alts), friends, or bot accounts to repeatedly sacrifice lives for free hearts will trigger an automatic health reset and gear wipe.',
        'Bounties, kit timers, and server economies must never be bypassed through multi-accounting.'
      ],
      icon: Heart,
      iconColor: 'text-purple-400',
      panelBorder: 'border-purple-600/70',
      panelBg: 'bg-gradient-to-r from-purple-950/30 to-[#16121c]'
    },
    {
      id: 'combat-logging',
      category: 'lifesteal',
      number: 'RULE 05',
      title: 'No Combat Logging or Teleport Evasion',
      badge: 'FAIR COMBAT',
      badgeColor: 'bg-rose-950/80 text-rose-300 border-rose-600',
      tagline: 'Never Disconnect or Teleport to Evade Death',
      description: 'Disconnecting from the server, force-closing the client, or attempting to command-teleport while in active PvP is completely forbidden.',
      details: [
        'An active combat tag prevents the use of /spawn, /home, /tp, and /rtp during combat.',
        'Disconnecting during combat will spawn an NPC combat logger that can be slain by your opponent, dropping your complete inventory and granting them the kill.',
        'Repeated intentional combat disconnecting to glitch death mechanics is subject to severe staff penalties.'
      ],
      icon: AlertOctagon,
      iconColor: 'text-rose-400',
      panelBorder: 'border-rose-600/70',
      panelBg: 'bg-gradient-to-r from-rose-950/30 to-[#181115]'
    },
    {
      id: 'fair-play',
      category: 'conduct',
      number: 'RULE 06',
      title: 'Zero Tolerance for Hacks, Cheats & Exploits',
      badge: 'ANTI-CHEAT LAW',
      badgeColor: 'bg-red-950/80 text-red-300 border-red-700',
      tagline: 'Vanilla & Quality-of-Life Clients Only',
      description: 'The use of any hacked client, combat cheat, unauthorized mod, X-Ray pack, or game exploit is permanently prohibited.',
      details: [
        'Prohibited modifications include: Killaura, Auto-Totem, Auto-Crystal, Reach, Speed, Fly, Freecam, Baritone, Timer, and X-Ray resource packs.',
        'Approved client modifications: Sodium, Lithium, Iris, JourneyMap (fair-play mode), AppleSkin, and standard cosmetic mods.',
        'Duplication glitches (item dupes, rail dupes, shulker dupes) and Nether roof exploits are patched and strictly forbidden.'
      ],
      icon: Ban,
      iconColor: 'text-red-500',
      panelBorder: 'border-red-700/70',
      panelBg: 'bg-gradient-to-r from-red-950/30 to-[#181113]'
    },
    {
      id: 'spawn-trapping',
      category: 'conduct',
      number: 'RULE 07',
      title: 'No Spawn Trapping or Inescapable Death Loops',
      badge: 'COMMUNITY INTEGRITY',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-600',
      tagline: 'Wilderness Wars Only — Respect Server Entry Points',
      description: 'Creating inescapable death traps, bed-trapping newcomers at spawn, or camping random teleport locations is strictly prohibited.',
      details: [
        'World spawn and safe zones are neutral areas meant for commerce, meeting, and server access.',
        'Luring players via fake /tpa requests into instant void or lava holes (TP-trapping) is considered scamming.',
        'Base raiding and griefing in the wild are permitted, but lag machines designed to crash chunks or degrade server TPS are strictly banned.'
      ],
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      panelBorder: 'border-emerald-600/70',
      panelBg: 'bg-gradient-to-r from-emerald-950/30 to-[#121815]'
    }
  ];

  const filteredRules = activeCategory === 'all' 
    ? coreRules 
    : coreRules.filter(r => r.category === activeCategory);

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-minecraft rounded-full">
          <Gavel className="w-4 h-4 text-red-400" />
          <span>OFFICIAL SERVER CODE OF CONDUCT</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          SERVER RULES &amp; COMBAT CODE
        </h1>
        <p className="max-w-3xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Scalyx SMP is a high-stakes, competitive survival experience. To protect gameplay balance, prevent unfair super-stacking, and ensure exhilarating PvP, all players must adhere to these rules at all times.
        </p>
      </div>

      {/* CRITICAL WARNING / ENFORCEMENT BANNER */}
      <div className="mc-panel p-6 sm:p-7 rounded-xl shadow-2xl border-2 border-red-600 bg-gradient-to-b from-[#221013] via-[#161118] to-[#120f14] space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-red-900/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-900/50 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-400 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <AlertTriangle className="w-7 h-7 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-minecraft text-red-400 uppercase tracking-wider bg-red-950 px-2 py-0.5 rounded border border-red-700">
                OFFICIAL STAFF ENFORCEMENT NOTICE
              </span>
              <h2 className="text-lg sm:text-xl font-minecraft text-white font-bold tracking-wider mc-shadow mt-1">
                CONSEQUENCES OF BREAKING RULES
              </h2>
            </div>
          </div>
          <span className="text-xs font-minecraft text-red-400 bg-black/60 px-3 py-1 rounded border border-red-900 shrink-0">
            ZERO TOLERANCE
          </span>
        </div>

        {/* Quoted Rule Statement from User */}
        <div className="p-4 bg-black/50 border-l-4 border-l-red-500 rounded text-xs sm:text-sm text-red-200 font-minecraft leading-relaxed">
          <p className="italic">
            "If any of the above rules are broken and reported to any staff, that can lead to demotion and taking away of mythic or custom items from the player, and repeated behaviour can cause permanent ban from the server."
          </p>
        </div>

        {/* Penalty Escalation Table */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-sans">
          <div className="p-3.5 bg-[#171118] rounded border border-red-900/50">
            <div className="flex items-center gap-2 font-minecraft text-yellow-400 font-bold mb-1">
              <AlertOctagon className="w-4 h-4 text-yellow-400" />
              <span>1st Infraction</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Official staff warning, combat rollback, and confiscation of any illegitimately gained items or heads.
            </p>
          </div>

          <div className="p-3.5 bg-[#171118] rounded border border-red-900/50">
            <div className="flex items-center gap-2 font-minecraft text-orange-400 font-bold mb-1">
              <ShieldAlert className="w-4 h-4 text-orange-400" />
              <span>Major Violation</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              <strong>Rank demotion</strong> and <strong>immediate confiscation of all Mythic Weapons, Kit Swords, and custom items</strong> from the player inventory.
            </p>
          </div>

          <div className="p-3.5 bg-[#171118] rounded border border-red-900/50">
            <div className="flex items-center gap-2 font-minecraft text-red-500 font-bold mb-1">
              <Ban className="w-4 h-4 text-red-500" />
              <span>Repeated Behavior</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              <strong>Permanent Blacklist &amp; Ban</strong> from Scalyx SMP server and official Discord community without appeal.
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#12131d] border border-[#2b2c3d] rounded-xl max-w-lg mx-auto">
        <button
          onClick={() => { setActiveCategory('all'); playClickSound(); }}
          className={`px-3 py-1.5 rounded font-minecraft text-xs transition-all ${
            activeCategory === 'all'
              ? 'bg-[#222336] text-[#00ffff] font-bold border border-[#00ffff]/40 shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          All Rules ({coreRules.length})
        </button>

        <button
          onClick={() => { setActiveCategory('combat'); playClickSound(); }}
          className={`px-3 py-1.5 rounded font-minecraft text-xs transition-all ${
            activeCategory === 'combat'
              ? 'bg-red-950/80 text-red-300 font-bold border border-red-600 shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Combat &amp; Elytra
        </button>

        <button
          onClick={() => { setActiveCategory('lifesteal'); playClickSound(); }}
          className={`px-3 py-1.5 rounded font-minecraft text-xs transition-all ${
            activeCategory === 'lifesteal'
              ? 'bg-purple-950/80 text-purple-300 font-bold border border-purple-600 shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Lifesteal &amp; Hearts
        </button>

        <button
          onClick={() => { setActiveCategory('conduct'); playClickSound(); }}
          className={`px-3 py-1.5 rounded font-minecraft text-xs transition-all ${
            activeCategory === 'conduct'
              ? 'bg-emerald-950/80 text-emerald-300 font-bold border border-emerald-600 shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Fair Play &amp; Conduct
        </button>
      </div>

      {/* Rules List */}
      <div className="space-y-6">
        {filteredRules.map((rule) => {
          const Icon = rule.icon;
          return (
            <div
              key={rule.id}
              className={`mc-panel p-6 sm:p-7 rounded-xl border-2 ${rule.panelBorder} ${rule.panelBg} shadow-xl space-y-4 transition-all hover:brightness-105`}
            >
              {/* Header line */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#2e3046]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-black/40 border border-[#3b3c54] rounded flex items-center justify-center shrink-0">
                    <Icon className={`w-6 h-6 ${rule.iconColor}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-minecraft text-xs text-zinc-400 font-bold tracking-wider">
                        {rule.number}
                      </span>
                      <span className={`text-[9px] font-minecraft px-2 py-0.5 rounded border uppercase tracking-wider ${rule.badgeColor}`}>
                        {rule.badge}
                      </span>
                    </div>
                    <h3 className="font-minecraft text-base sm:text-lg text-white font-bold tracking-wide mt-0.5">
                      {rule.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-minecraft text-yellow-300 bg-black/40 px-3 py-1 rounded border border-[#2d2e40] shrink-0">
                  {rule.tagline}
                </span>
              </div>

              {/* Main Rule Summary Box */}
              <div className="p-3.5 bg-black/40 border border-[#2d2e40] rounded font-minecraft text-xs sm:text-sm text-yellow-300 leading-relaxed">
                👉 {rule.description}
              </div>

              {/* In-Depth Breakdown */}
              <div className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-zinc-300">
                <span className="text-[10px] font-minecraft text-zinc-400 uppercase tracking-wider block">
                  RULE BREAKDOWN &amp; SPECIFICATIONS:
                </span>
                <ul className="space-y-1.5">
                  {rule.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#00ffff] font-bold mt-0.5">▸</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* How to Report Violations */}
      <div className="mc-panel p-6 sm:p-8 rounded-xl border border-[#2d2e40] bg-[#12131d] space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-950/80 border border-blue-500 rounded flex items-center justify-center text-blue-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-minecraft text-base sm:text-lg text-white font-bold tracking-wider">
                HOW TO REPORT A RULE VIOLATOR
              </h3>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Staff members investigate all reports promptly to protect server fairness.
              </p>
            </div>
          </div>
          <a
            href="https://discord.gg/sclayx"
            target="_blank"
            rel="noopener noreferrer"
            className="mc-button mc-button-gold flex items-center gap-1.5 shrink-0"
          >
            <span>JOIN DISCORD TICKETS</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-sans text-zinc-300">
          <div className="p-3 bg-[#171826] rounded border border-[#2b2c3e]">
            <strong className="text-yellow-400 font-minecraft block mb-1">1. Record Video Evidence</strong>
            Capture full screen footage showing combat loadouts, Elytra flight during tags, or illegal behavior.
          </div>
          <div className="p-3 bg-[#171826] rounded border border-[#2b2c3e]">
            <strong className="text-yellow-400 font-minecraft block mb-1">2. Note Timestamp &amp; Names</strong>
            Include exact player IGNs, coordinates, and approximate server time in your report.
          </div>
          <div className="p-3 bg-[#171826] rounded border border-[#2b2c3e]">
            <strong className="text-yellow-400 font-minecraft block mb-1">3. Submit Ticket</strong>
            Open a private player report ticket on our official Discord at <code className="text-[#00ffff]">discord.gg/sclayx</code>.
          </div>
        </div>
      </div>

    </div>
  );
}
