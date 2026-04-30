import { Link } from "react-router-dom";
import logo from "@/assets/szechenyi-logo.jpg";

const SiteHeader = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 font-semibold text-foreground">
          <img src={logo} alt="Széchenyi University Győr logo" className="h-9 w-auto object-contain" />
          <span className="hidden sm:inline text-sm md:text-base">NFA → DFA Converter</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/app" className="text-muted-foreground hover:text-primary transition-colors">
            App
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
