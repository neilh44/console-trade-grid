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
      
      {/* PlayStation-style HUD status bar */}
      <div className="mt-12 p-6 bg-gradient-ps-dark border border-ps-blue/30 rounded-2xl shadow-ps">
        <div className="flex items-center justify-between">
          {/* Left side - System status */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-neon-green" />
              <span className="text-sm text-foreground font-gaming tracking-wider">SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-ps-blue rounded-full animate-float shadow-ps" />
              <span className="text-sm text-foreground font-gaming tracking-wider">MARKET ACTIVE</span>
            </div>
          </div>
          
          {/* Center - Current focus indicator */}
          {isKeyboardNavigation && (
            <div className="flex items-center space-x-3">
              <div className="px-4 py-2 bg-ps-blue/20 border border-ps-blue rounded-lg">
                <span className="text-sm text-ps-blue font-gaming tracking-wider">
                  SELECTED: {buttons[focusedButton]}
                </span>
              </div>
            </div>
          )}
          
          {/* Right side - Connection status */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-sm text-foreground font-gaming tracking-wider">CONNECTED</span>
          </div>
        </div>
        
        {/* PlayStation-style progress bar */}
        <div className="mt-4 h-1 bg-ps-blue/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-ps-blue to-ps-blue-glow animate-shimmer" 
               style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default TradingGrid;