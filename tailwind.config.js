/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Minecraft"', '"Minecraftia"', 'monospace'],
        'minecraft-title': ['"MinecraftTen"', '"Minecraft"', 'monospace'],
        pixel: ['"Minecraft"', '"Minecraftia"', 'monospace'],
        silkscreen: ['"Silkscreen"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        mc: {
          dark: '#0c0d12',
          panel: '#1e1e24',
          panelBorder: '#32323a',
          dirt: '#483423',
          grass: '#5c8e32',
          stone: '#5b5b5b',
          bedrock: '#161616',
          gold: '#FFAA00',
          yellow: '#FFFF55',
          diamond: '#55FFFF',
          emerald: '#55FF55',
          redstone: '#FF5555',
          amethyst: '#c76fe6',
          netherite: '#312c36',
          sculk: '#00ffff',
          sculkDark: '#031c26',
          wither: '#1f132b',
        }
      },
      boxShadow: {
        'mc-btn': 'inset -2px -4px 0px 0px rgba(0,0,0,0.6), inset 2px 2px 0px 0px rgba(255,255,255,0.4)',
        'mc-btn-active': 'inset 2px 4px 0px 0px rgba(0,0,0,0.7)',
        'mc-slot': 'inset 2px 2px 0px 0px #1e1e1e, inset -2px -2px 0px 0px #5a5a5a',
        'mc-box': '0 0 0 3px #121216, 0 0 0 6px #3b3b45',
        'glow-cyan': '0 0 25px rgba(0, 255, 255, 0.45)',
        'glow-red': '0 0 25px rgba(255, 60, 60, 0.45)',
        'glow-gold': '0 0 25px rgba(255, 170, 0, 0.45)',
        'glow-purple': '0 0 25px rgba(180, 50, 255, 0.45)',
      }
    },
  },
  plugins: [],
}
