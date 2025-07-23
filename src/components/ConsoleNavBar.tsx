import { ChevronLeft, ChevronRight, Settings, Wifi, Battery, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsoleNavBar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-gradient-ps-dark border border-ps-blue/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8 shadow-ps">
      {/* Left side - Navigation */}
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-lg sm:rounded-xl transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ps-blue" />
        </Button>
        
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-ps-blue font-gaming font-bold">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-ps-blue rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-xl tracking-wide sm:tracking-wider">PAGE</span>
          </div>
          <span className="text-lg sm:text-2xl md:text-3xl text-foreground">1</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-lg sm:rounded-xl transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ps-blue" />
        </Button>
      </div>
      
      {/* Center - Main title */}
      <div className="text-center flex-1 mx-2 sm:mx-4">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-gaming tracking-wide sm:tracking-wider md:tracking-widest">
          PLAYSTATION
        </h1>
        <div className="text-xs sm:text-sm md:text-base text-ps-blue font-gaming tracking-wide sm:tracking-wider mt-0.5 sm:mt-1">
          TRADING CONSOLE
        </div>
      </div>
      
      {/* Right side - System indicators */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        {/* System status icons - hide some on mobile */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green animate-pulse" />
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-ps-blue hidden sm:block" />
          <Battery className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green" />
        </div>
        
        {/* Settings */}
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-lg sm:rounded-xl transition-all duration-300 group"
        >
          <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ps-blue group-hover:animate-spin" />
        </Button>
      </div>
    </div>
  );
};

export default ConsoleNavBar;