'use client';

import { useState } from 'react';

const ButtonSlider = ({
  children,
  position,
  isSliderOpen,
  onClick
}: {
  children: React.ReactNode;
  position: 'left' | 'right';
  isSliderOpen: boolean;
  onClick: () => void;
}) => {
  const leftStyles = `${isSliderOpen ? 'translate-x-[25vw]' : 'translate-x-0'} left-0 border-r`;
  const rightStyles = `${isSliderOpen ? '-translate-x-[25vw]' : '-translate-x-0'} right-0 border-l`;

  return (
    <button
      onClick={onClick}
      className={`${position === 'left' ? leftStyles : rightStyles} fixed top-1/2 h-12 w-8 -translate-y-1/2 border-y border-gray-700 bg-gray-900 transition-transform duration-800 ease-in-out hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};

const ScreenSlider = ({ children, position }: { children: React.ReactNode; position: 'left' | 'right' }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const leftStyles = `${isSliderOpen ? 'translate-x-0' : '-translate-x-[25vw]'} left-0 scale-x-[-1]`;
  const rightStyles = `${isSliderOpen ? 'translate-x-0' : 'translate-x-[25vw]'} right-0 `;

  return (
    <>
      <ButtonSlider
        onClick={() => setIsSliderOpen(!isSliderOpen)}
        isSliderOpen={isSliderOpen}
        position={position}
      >
        {position === 'left' ? (isSliderOpen ? '<-' : '->') : isSliderOpen ? '->' : '<-'}
      </ButtonSlider>
      <div
        className={`${position === 'left' ? leftStyles : rightStyles} scrollbar-thumb-gray-500 scrollbar-track-gray-800 scrollbar fixed inset-y-0 z-90 mt-18 w-[25vw] overflow-y-scroll border-l border-gray-700 bg-gray-900 transition-transform duration-800 ease-in-out`}
      >
        <div className={`${position === 'left' && 'scale-x-[-1]'}`}>{children}</div>
      </div>
    </>
  );
};

export default ScreenSlider;
