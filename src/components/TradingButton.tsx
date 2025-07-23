import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import bullIcon from '@/assets/bull-icon.jpg';
import bearIcon from '@/assets/bear-icon.jpg';

interface TradingButtonProps {
  type: 'BUY' | 'SELL' | 'SHORT' | 'COVER';
  onClick?: () => void;
  isFocused?: boolean;
  onFocus?: () => void;
}

const TradingButton = ({ type, onClick, isFocused, onFocus }: TradingButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isBullish = type === 'BUY' || type === 'COVER';
  const imageUrl = isBullish ? bullIcon : bearIcon;
  
  useEffect(() => {
    if (isFocused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFocused]);

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsPressed(true);
    setIsLoading(true);
    
    // PlayStation-style haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    try {
      const endpoint = `/api/${type.toLowerCase()}`;
      
      // Simulate API call (replace with actual implementation)
      toast.loading(`Processing ${type} order...`, { id: type });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulated success
      toast.success(`${type} order executed successfully!`, { id: type });
      
      onClick?.();
    } catch (error) {
      toast.error(`Failed to execute ${type} order`, { id: type });
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsPressed(false), 200);
    }
  };

  // PlayStation-style button classes - reduced size
  const getButtonClasses = () => {
    const baseClasses = `
      relative group w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 max-w-40 max-h-32
      bg-gradient-button border-2 rounded-2xl overflow-hidden
      transform transition-all duration-300 ease-out
      focus:outline-none font-gaming
      ${isPressed ? 'animate-button-press' : ''}
      ${isLoading ? 'animate-pulse' : ''}
      ${isFocused ? 'ring-2 ring-ps-blue animate-ps-glow' : ''}
    `;
    
    if (isBullish) {
      return `${baseClasses}
        border-bull hover:border-neon-green
        hover:bg-gradient-bull hover:scale-105 hover:shadow-neon-green
        ${isHovered || isFocused ? 'shadow-neon-green animate-neon-pulse' : 'border-bull/50'}
      `;
    } else {
      return `${baseClasses}
        border-bear hover:border-neon-red
        hover:bg-gradient-bear hover:scale-105 hover:shadow-neon-red
        ${isHovered || isFocused ? 'shadow-neon-red animate-neon-pulse' : 'border-bear/50'}
      `;
    }
  };

  const getTextClasses = () => {
    const baseText = `text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground
                     font-gaming tracking-wider uppercase transition-all duration-300
                     ${isLoading ? 'animate-pulse' : ''}`;
    
    if (isBullish) {
      return `${baseText} group-hover:text-neon-green ${isHovered || isFocused ? 'text-neon-green drop-shadow-lg' : ''}`;
    } else {
      return `${baseText} group-hover:text-neon-red ${isHovered || isFocused ? 'text-neon-red drop-shadow-lg' : ''}`;
    }
  };

  const getGlowClasses = () => {
    const baseGlow = 'absolute inset-0 transition-opacity duration-500';
    
    if (isBullish) {
      return `${baseGlow} bg-gradient-to-t from-neon-green/30 via-neon-green/10 to-transparent
              ${isHovered || isFocused ? 'opacity-100' : 'opacity-0'}`;
    } else {
      return `${baseGlow} bg-gradient-to-t from-neon-red/30 via-neon-red/10 to-transparent
              ${isHovered || isFocused ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  const getLoadingClasses = () => {
    if (isBullish) {
      return 'w-2 h-2 bg-neon-green rounded-full animate-ping';
    } else {
      return 'w-2 h-2 bg-neon-red rounded-full animate-ping';
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onFocus={onFocus}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isLoading}
      className={getButtonClasses()}
      tabIndex={0}
    >
      {/* Background Image with PlayStation-style overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          opacity: isHovered || isFocused ? 0.9 : 0.7,
          filter: isHovered || isFocused ? 'brightness(1.2) saturate(1.3)' : 'brightness(0.8)'
        }}
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/20" />
      
      {/* Animated glow effect */}
      <div className={getGlowClasses()} />
      
      {/* PlayStation-style scan lines */}
      <div className="absolute inset-0 opacity-10"
           style={{
             background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--ps-blue)) 2px, hsl(var(--ps-blue)) 4px)'
           }} />
      
      {/* Button Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-2 sm:p-3 space-y-1">
        {/* Main label */}
        <div className={getTextClasses()}>
          {type}
        </div>
        
        {/* PlayStation-style subtitle */}
        <div className="text-xs text-muted-foreground font-pixel tracking-wider opacity-80 hidden sm:block">
          {isBullish ? 'LONG' : 'SHORT'}
        </div>
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute top-1 right-1 flex space-x-1">
            <div className={getLoadingClasses()} />
            <div className={getLoadingClasses()} style={{ animationDelay: '0.2s' }} />
            <div className={getLoadingClasses()} style={{ animationDelay: '0.4s' }} />
          </div>
        )}
        
        {/* Focus indicator */}
        {isFocused && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-0.5 bg-ps-blue rounded-full animate-pulse" />
          </div>
        )}
      </div>
      
      {/* PlayStation corner accents */}
      <div className={`absolute top-1 left-1 w-2 h-2 border-l border-t transition-colors duration-300
                      ${isBullish ? 'border-neon-green' : 'border-neon-red'}
                      ${isHovered || isFocused ? 'opacity-100' : 'opacity-50'}`} />
      <div className={`absolute bottom-1 right-1 w-2 h-2 border-r border-b transition-colors duration-300
                      ${isBullish ? 'border-neon-green' : 'border-neon-red'}
                      ${isHovered || isFocused ? 'opacity-100' : 'opacity-50'}`} />
    </button>
  );
};

export default TradingButton;