import { Link } from "react-router-dom";
import { Workflow } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
            <Workflow className="w-4 h-4" />
          </div>
          <span>NFA → DFA Converter</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/app" className="text-muted-foreground hover:text-foreground transition-colors">
            App
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
