'use client';

import ScreenSlider from '../components/ScreenSlider';
import Effects from '../components/Effects';
import MainTab from '../components/MainTab';
import EnemiesList from '../components/EnemiesList';
import { useState } from 'react';

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

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'effects' | 'enemies'>('effects');

  return (
    <main className="mt-18 flex justify-between gap-8">
      {/* <ScreenSlider position="left">
        <EnemiesList />
      </ScreenSlider> */}
      <MainTab />
      {/* <ScreenSlider position="right">
        <Effects />
      </ScreenSlider> */}
      <section className="h-300 w-1/4 flex-1 overflow-y-auto border-l border-gray-700 bg-gray-900">
        <TabButton onClick={() => setActiveTab('effects')}>Effects</TabButton>
        <TabButton onClick={() => setActiveTab('enemies')}>Enemies</TabButton>
        {activeTab === 'effects' && <Effects />}
        {activeTab === 'enemies' && <EnemiesList />}
      </section>
    </main>
  );
};

export default HomePage;
