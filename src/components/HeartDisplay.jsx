import React from 'react';

export default function HeartDisplay({ hearts = 10, maxHearts = 20, type = 'normal', label = '' }) {
  // Each heart container holds 2 HP (1 full heart)
  const heartElements = [];
  const fullHearts = Math.min(hearts, maxHearts);

  for (let i = 0; i < fullHearts; i++) {
    heartElements.push(
      <img
        key={i}
        src={type === 'hardcore' ? '/assets/items/heart_container_hardcore.png' : '/assets/items/heart_container.png'}
        alt="Minecraft Heart"
        className="w-5 h-5 pixelated inline-block hover:scale-125 transition-transform"
      />
    );
  }

  return (
    <div className="flex flex-col gap-1 p-2 bg-[#121217] border border-[#2b2b35] rounded">
      {label && (
        <div className="flex justify-between items-center text-xs font-minecraft text-zinc-400">
          <span>{label}</span>
          <span className="text-[#ff5555] font-bold">{hearts} Hearts ({hearts * 2} HP)</span>
        </div>
      )}
      <div className="flex flex-wrap gap-1 items-center">
        {heartElements}
      </div>
    </div>
  );
}
