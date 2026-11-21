import React from 'react';
import { ShoppingBag, ArrowLeftRight, Landmark, DollarSign, ShieldCheck, Tag, Search, Sparkles } from 'lucide-react';
import ServerIPBadge from '../components/ServerIPBadge';
import { playClickSound } from '../utils/audio';

export default function EconomyPage() {
  const shopCategories = [
    { name: 'Building Blocks', icon: '/assets/items/deepslate.png', items: 'Deepslate, Quartz, Terracotta, Glass, Concrete' },
    { name: 'Ores & Minerals', icon: '/assets/items/gold_ingot.png', items: 'Diamonds, Ancient Debris, Emeralds, Iron, Redstone' },
    { name: 'Farming & Food', icon: '/assets/items/golden_apple.png', items: 'Golden Carrots, Enchanted Apples, Crops, Nether Wart' },
    { name: 'Mob Drops', icon: '/assets/items/blaze_rod.png', items: 'Blaze Rods, Ender Pearls, Gunpowder, Wither Skulls' },
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/60 border border-amber-500/50 text-amber-300 text-xs font-minecraft rounded-full">
          <ShoppingBag className="w-4 h-4" />
          <span>PLAYER-DRIVEN COMMERCE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-minecraft text-white font-bold tracking-wider mc-shadow">
          TRADING, AUCTIONS &amp; ECONOMY
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
          Amass wealth through mining, raiding, and high-volume trading. Scalyx SMP features a robust player-centric economy backed by secure tools.
        </p>
      </div>

      {/* 3 Pillars of Economy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* DonutAuctionHouse */}
        <div className="mc-panel p-6 rounded-xl flex flex-col justify-between border-2 border-amber-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-950/60 border border-amber-500 rounded text-amber-400">
                <Tag className="w-6 h-6" />
              </div>
              <span className="text-xs font-minecraft text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-600">
                DONUTSMP STYLE
              </span>
            </div>

            <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider mb-2">
              AUCTION HOUSE (/ah)
            </h3>
            
            <div className="inline-block bg-black/40 border border-[#3b3c52] px-2 py-0.5 rounded text-xs font-minecraft text-yellow-300 mb-3">
              /ah • /ah sell &lt;price&gt;
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              Sell your rare enchanted gear, super pickaxes, and enchanted golden apples to the highest bidder or set an instant buyout price. Browse active listings by category or search by item name.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#2d2e40] text-xs font-minecraft text-zinc-400 flex items-center justify-between">
            <span>Listing Limit: 10 Items</span>
            <span className="text-emerald-400">Zero Listing Fee</span>
          </div>
        </div>

        {/* Server Merchant Shop */}
        <div className="mc-panel p-6 rounded-xl flex flex-col justify-between border-2 border-emerald-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-950/60 border border-emerald-500 rounded text-emerald-400">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-xs font-minecraft text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-600">
                OFFICIAL MARKET
              </span>
            </div>

            <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider mb-2">
              SERVER SHOP (/shop)
            </h3>
            
            <div className="inline-block bg-black/40 border border-[#3b3c52] px-2 py-0.5 rounded text-xs font-minecraft text-emerald-300 mb-3">
              /shop • /sellgui
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              Clean categorized graphical interface to buy essential building materials, mob drops, and catalysts. Liquidate surplus crops or mining spoils to fund your army.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#2d2e40] text-xs font-minecraft text-zinc-400 flex items-center justify-between">
            <span>Dynamic Stock</span>
            <span className="text-yellow-400">Instant Cashout</span>
          </div>
        </div>

        {/* Dual-Lock Trading */}
        <div className="mc-panel p-6 rounded-xl flex flex-col justify-between border-2 border-cyan-500/40">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-cyan-950/60 border border-cyan-500 rounded text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-minecraft text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-600">
                SCAM-PROOF
              </span>
            </div>

            <h3 className="font-minecraft text-lg sm:text-xl text-white font-bold tracking-wider mb-2">
              SECURE TRADE (/trade)
            </h3>
            
            <div className="inline-block bg-black/40 border border-[#3b3c52] px-2 py-0.5 rounded text-xs font-minecraft text-[#00ffff] mb-3">
              /trade &lt;player&gt;
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              Dual-confirmation trading window guarantees safe peer-to-peer exchanges. Both players lock their offering, review items, and confirm. Modifying any item resets the timer instantly.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#2d2e40] text-xs font-minecraft text-zinc-400 flex items-center justify-between">
            <span>Anti-Bait Protection</span>
            <span className="text-[#00ffff]">100% Safe</span>
          </div>
        </div>

      </div>

      {/* Shop Categories Preview */}
      <div className="mc-panel p-8 rounded-xl shadow-xl space-y-6">
        <h3 className="font-minecraft text-2xl text-white font-bold tracking-wider mc-shadow">
          SERVER SHOP DEPARTMENTS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shopCategories.map((cat, idx) => (
            <div key={idx} className="p-4 bg-[#141520] border border-[#2c2d3f] rounded-lg flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img src={cat.icon} alt={cat.name} className="w-8 h-8 pixelated" />
                <h4 className="font-minecraft text-base text-yellow-300 font-bold">{cat.name}</h4>
              </div>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">{cat.items}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
