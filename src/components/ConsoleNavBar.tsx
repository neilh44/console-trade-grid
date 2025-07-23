import { ChevronLeft, ChevronRight, Settings, Wifi, Battery, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsoleNavBar = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-full bg-gradient-ps-dark border border-ps-blue/30 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 mb-2 sm:mb-4 md:mb-6 lg:mb-8 shadow-ps overflow-hidden">
      {/* Left side - Navigation */}
      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 flex-shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-ps-blue" />
        </Button>
        
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 text-ps-blue font-gaming font-bold">
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-ps-blue rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base lg:text-xl tracking-tight sm:tracking-wide md:tracking-wider">PAGE</span>
          </div>
          <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground">1</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-ps-blue" />
        </Button>
      </div>
      
      {/* Center - Main title */}
      <div className="text-center flex-1 mx-1 sm:mx-2 md:mx-4 min-w-0">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground font-gaming tracking-tight sm:tracking-wide md:tracking-wider lg:tracking-widest truncate">
          PLAYSTATION
        </h1>
        <div className="text-xs sm:text-sm md:text-base text-ps-blue font-gaming tracking-tight sm:tracking-wide md:tracking-wider mt-0.5 truncate">
          TRADING CONSOLE
        </div>
      </div>
      
      {/* Right side - System indicators */}
      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 flex-shrink-0">
        {/* System status icons - progressive hiding on smaller screens */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          <Wifi className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-neon-green animate-pulse" />
          <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-ps-blue hidden md:block" />
          <Battery className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-neon-green hidden sm:block" />
        </div>
        
        {/* Settings */}
        <Button
          variant="ghost"
          size="sm"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-0 hover:bg-ps-blue/20 hover:shadow-ps border border-ps-blue/30 rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 group"
        >
          <Settings className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-ps-blue group-hover:animate-spin" />
        </Button>
      </div>
    </div>
  );
};

export default ConsoleNavBar;