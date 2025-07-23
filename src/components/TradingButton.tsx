import { useState } from 'react';
import { toast } from 'sonner';
import bullIcon from '@/assets/bull-icon.jpg';
import bearIcon from '@/assets/bear-icon.jpg';

interface TradingButtonProps {
  type: 'BUY' | 'SELL' | 'SHORT' | 'COVER';
  onClick?: () => void;
}

const TradingButton = ({ type, onClick }: TradingButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isBullish = type === 'BUY' || type === 'COVER';
  const imageUrl = isBullish ? bullIcon : bearIcon;
  const colorClass = isBullish ? 'bull' : 'bear';
  const shadowClass = isBullish ? 'shadow-bull' : 'shadow-bear';
  const gradientClass = isBullish ? 'bg-gradient-bull' : 'bg-gradient-bear';

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsPressed(true);
    setIsLoading(true);
    
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

  // Define static classes to avoid dynamic class issues
  const buttonClasses = isBullish 
    ? `
      relative group w-full aspect-square
      bg-gradient-button hover:bg-gradient-bull
      border-2 border-border hover:border-bull
      rounded-2xl overflow-hidden
      transform transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-bull
      ${isPressed ? 'scale-95' : ''}
      ${isLoading ? 'animate-pulse' : 'hover:animate-none'}
      focus:outline-none focus:ring-4 focus:ring-bull/50
    `
    : `
      relative group w-full aspect-square
      bg-gradient-button hover:bg-gradient-bear
      border-2 border-border hover:border-bear
      rounded-2xl overflow-hidden
      transform transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-bear
      ${isPressed ? 'scale-95' : ''}
      ${isLoading ? 'animate-pulse' : 'hover:animate-none'}
      focus:outline-none focus:ring-4 focus:ring-bear/50
    `;

  const textClasses = isBullish
    ? `text-2xl md:text-3xl lg:text-4xl font-bold text-foreground
       group-hover:text-bull-glow transition-colors duration-300
       font-mono tracking-wider ${isLoading ? 'animate-pulse' : ''}`
    : `text-2xl md:text-3xl lg:text-4xl font-bold text-foreground
       group-hover:text-bear-glow transition-colors duration-300
       font-mono tracking-wider ${isLoading ? 'animate-pulse' : ''}`;

  const glowClasses = isBullish
    ? 'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-bull/20 to-transparent'
    : 'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-bear/20 to-transparent';

  const loadingClasses = isBullish
    ? 'w-3 h-3 bg-bull rounded-full animate-ping'
    : 'w-3 h-3 bg-bear rounded-full animate-ping';

  const cornerClasses = isBullish
    ? `absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent
       border-b-[20px] border-b-bull/30 group-hover:border-b-bull/60
       transition-colors duration-300`
    : `absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent
       border-b-[20px] border-b-bear/30 group-hover:border-b-bear/60
       transition-colors duration-300`;

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={buttonClasses}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      
      {/* Glow Effect */}
      <div className={glowClasses} />
      
      {/* Button Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end p-6">
        <div className={textClasses}>
          {type}
        </div>
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute top-4 right-4">
            <div className={loadingClasses} />
          </div>
        )}
      </div>
      
      {/* Corner Accent */}
      <div className={cornerClasses} />
    </button>
  );
};

export default TradingButton;