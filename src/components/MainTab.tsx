'use client';

import { useState } from 'react';
import CharmSelector from './CharmSelector';
import CurrentCharms from './CurrentCharms';
import KnightStats from './KnightStats';
import NailSelector from './NailSelector';
import SpellSelector from './SpellSelector';

enum AVAILABLE_TABS {
  CHARMS = 'charms',
  NAILS = 'nails',
  SPELLS = 'spells'
}

const TabButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xs border border-gray-700 bg-gray-800 px-4 font-semibold text-gray-300 transition-colors hover:cursor-pointer hover:bg-gray-700 hover:text-gray-200"
    >
      {children}
    </button>
  );
};

const MainTab = () => {
  const [activeTab, setActiveTab] = useState<AVAILABLE_TABS>(AVAILABLE_TABS.CHARMS);

  return (
    <section className="flex-2 px-10 py-4">
      <CurrentCharms />
      <hr className="my-2 border-gray-700" />
      {activeTab === 'charms' && <CharmSelector />}
      {activeTab === 'nails' && <NailSelector />}
      {activeTab === 'spells' && <SpellSelector />}
      <hr className="my-2 border-gray-700" />
      <div className="flex justify-center gap-12">
        <TabButton onClick={() => setActiveTab(AVAILABLE_TABS.CHARMS)}>CHARMS</TabButton>
        <TabButton onClick={() => setActiveTab(AVAILABLE_TABS.NAILS)}>NAILS</TabButton>
        <TabButton onClick={() => setActiveTab(AVAILABLE_TABS.SPELLS)}>SPELLS</TabButton>
      </div>
      <hr className="my-2 border-gray-700" />
      <KnightStats />
    </section>
  );
};

export default MainTab;
