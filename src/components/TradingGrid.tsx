import TradingButton from './TradingButton';

const TradingGrid = () => {
  const handleButtonClick = (type: string) => {
    console.log(`${type} button clicked`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Mobile-responsive grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <TradingButton 
          type="BUY" 
          onClick={() => handleButtonClick('BUY')}
        />
        <TradingButton 
          type="SELL" 
          onClick={() => handleButtonClick('SELL')}
        />
        <TradingButton 
          type="SHORT" 
          onClick={() => handleButtonClick('SHORT')}
        />
        <TradingButton 
          type="COVER" 
          onClick={() => handleButtonClick('COVER')}
        />
      </div>
      
      {/* Console-style status bar */}
      <div className="mt-8 p-4 bg-gradient-console border border-border rounded-lg">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">SYSTEM READY</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-console rounded-full" />
            <span className="text-sm text-muted-foreground font-mono">MARKET OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingGrid;