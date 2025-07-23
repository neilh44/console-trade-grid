import { useEffect } from 'react';
import ConsoleNavBar from '@/components/ConsoleNavBar';
import TradingGrid from '@/components/TradingGrid';

const Index = () => {
  useEffect(() => {
    // Add keyboard navigation for gaming feel
    const handleKeyPress = (event: KeyboardEvent) => {
      // D-pad simulation
      switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          // Focus top buttons
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          // Focus bottom buttons
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          // Focus left buttons
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          // Focus right buttons
          break;
        case 'Enter':
        case ' ':
          // Activate focused button
          event.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Gaming console background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--console-accent)) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, hsl(var(--console-accent)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <ConsoleNavBar />
        
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          <TradingGrid />
          
          {/* Gaming console footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-console border border-border rounded-full px-6 py-3">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-bull rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-bear rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-3 h-3 bg-console rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                Use WASD or Arrow Keys • Press Enter to Execute
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
