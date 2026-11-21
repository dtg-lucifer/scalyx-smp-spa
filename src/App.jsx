import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SurvivalPage from './pages/SurvivalPage';
import WeaponsPage from './pages/WeaponsPage';
import WorldPage from './pages/WorldPage';
import EconomyPage from './pages/EconomyPage';
import RanksPage from './pages/RanksPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'survival':
        return <SurvivalPage />;
      case 'weapons':
        return <WeaponsPage />;
      case 'world':
        return <WorldPage />;
      case 'economy':
        return <EconomyPage />;
      case 'ranks':
        return <RanksPage />;
      case 'home':
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d13] text-[#e0e0e0] flex flex-col font-sans relative selection:bg-[#00ffff] selection:text-black overflow-x-hidden w-full max-w-full">
      {/* Ambient background grid / subtle noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content View */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
