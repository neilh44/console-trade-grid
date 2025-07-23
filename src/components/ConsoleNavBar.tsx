import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsoleNavBar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-gradient-console border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="w-10 h-10 p-0 hover:bg-secondary hover:shadow-console transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-console" />
        </Button>
        
        <div className="flex items-center space-x-2 text-console font-mono font-bold">
          <span className="text-lg">1</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-10 h-10 p-0 hover:bg-secondary hover:shadow-console transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-console" />
        </Button>
      </div>
      
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground font-mono tracking-wider">
          TRADING CONSOLE
        </h1>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        className="w-10 h-10 p-0 hover:bg-secondary hover:shadow-console transition-all duration-300"
      >
        <Settings className="w-5 h-5 text-console animate-pulse" />
      </Button>
    </div>
  );
};

export default ConsoleNavBar;