import { useState, useEffect } from 'react';
import TradingButton from './TradingButton';

const TradingGrid = () => {
  const [focusedButton, setFocusedButton] = useState(0); // 0: BUY, 1: SELL, 2: SHORT, 3: COVER
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  const buttons = ['BUY', 'SELL', 'SHORT', 'COVER'] as const;

  const handleButtonClick = (type: string) => {
    console.log(`${type} button clicked`);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setIsKeyboardNavigation(true);
      
      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          event.preventDefault();
          setFocusedButton(prev => prev % 2 === 0 ? prev + 1 : prev - 1);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          event.preventDefault();
          setFocusedButton(prev => prev % 2 === 0 ? prev + 1 : prev - 1);
          break;
        case 'ArrowUp':
        case 'w':
        case 'W':
          event.preventDefault();
          setFocusedButton(prev => prev < 2 ? prev + 2 : prev - 2);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          event.preventDefault();
          setFocusedButton(prev => prev < 2 ? prev + 2 : prev - 2);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          handleButtonClick(buttons[focusedButton]);
          // Trigger button click programmatically
          const button = document.querySelector(`[data-button-index="${focusedButton}"] button`) as HTMLButtonElement;
          button?.click();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedButton]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* PlayStation-style 2x2 gamepad layout */}
      <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
        {buttons.map((type, index) => (
          <div key={type} data-button-index={index} className="relative">
            <TradingButton 
              type={type}
              onClick={() => handleButtonClick(type)}
              isFocused={isKeyboardNavigation && focusedButton === index}
              onFocus={() => setFocusedButton(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingGrid;