import { ChevronLeft, ChevronRight, Settings, Wifi, Battery, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsoleNavBar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-gradient-ps-dark border border-ps-blue/30 rounded-2xl p-6 mb-8 shadow-ps">
      {/* Left side - Navigation */}
      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-xl transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-ps-blue" />
        </Button>
        
        <div className="flex items-center space-x-4 text-ps-blue font-gaming font-bold">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-ps-blue rounded-full animate-pulse" />
            <span className="text-xl tracking-wider">PAGE</span>
          </div>
          <span className="text-3xl text-foreground">1</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-xl transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-ps-blue" />
        </Button>
      </div>
      
      {/* Center - Main title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-gaming tracking-widest">
          PLAYSTATION
        </h1>
        <div className="text-sm md:text-base text-ps-blue font-gaming tracking-wider mt-1">
          TRADING CONSOLE
        </div>
      </div>
      
      {/* Right side - System indicators */}
      <div className="flex items-center space-x-4">
        {/* System status icons */}
        <div className="flex items-center space-x-3">
          <Wifi className="w-5 h-5 text-neon-green animate-pulse" />
          <Volume2 className="w-5 h-5 text-ps-blue" />
          <Battery className="w-5 h-5 text-neon-green" />
        </div>
        
        {/* Settings */}
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-xl transition-all duration-300 group"
        >
          <Settings className="w-6 h-6 text-ps-blue group-hover:animate-spin" />
        </Button>
      </div>
    </div>
  );
};

export default ConsoleNavBar;