import ConsoleNavBar from '@/components/ConsoleNavBar';
import TradingGrid from '@/components/TradingGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* PlayStation-style animated background */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ps-blue/5" />
        
        {/* PlayStation geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, hsl(var(--ps-blue)) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, hsl(var(--neon-cyan)) 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, hsl(var(--ps-blue)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 150px 150px, 80px 80px'
          }} />
        </div>
        
        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, hsl(var(--ps-blue)) 4px, hsl(var(--ps-blue)) 6px)',
            animation: 'shimmer 3s linear infinite'
          }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-ps-blue rounded-full animate-float opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <ConsoleNavBar />
        
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <TradingGrid />
          
          {/* PlayStation-style control instructions */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <div className="bg-gradient-ps-dark border border-ps-blue/30 rounded-2xl px-8 py-6 shadow-ps">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {/* Gamepad controls */}
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-neon-green" />
                    <div className="w-3 h-3 bg-neon-red rounded-full animate-pulse shadow-neon-red" style={{ animationDelay: '0.5s' }} />
                    <div className="w-3 h-3 bg-ps-blue rounded-full animate-pulse shadow-ps" style={{ animationDelay: '1s' }} />
                  </div>
                  <span className="text-sm text-foreground font-gaming tracking-wider">
                    WASD / ARROW KEYS
                  </span>
                </div>
                
                {/* Action button */}
                <div className="flex items-center space-x-3">
                  <div className="px-3 py-1 bg-ps-blue/20 border border-ps-blue rounded-lg">
                    <span className="text-xs text-ps-blue font-gaming tracking-wider">ENTER</span>
                  </div>
                  <span className="text-sm text-foreground font-gaming tracking-wider">
                    EXECUTE TRADE
                  </span>
                </div>
              </div>
              
              {/* PlayStation branding */}
              <div className="mt-4 pt-4 border-t border-ps-blue/20">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-ps-blue rounded-full animate-pulse" />
                  <span className="text-xs text-ps-blue font-pixel tracking-widest">
                    POWERED BY PLAYSTATION INTERFACE
                  </span>
                  <div className="w-2 h-2 bg-ps-blue rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
