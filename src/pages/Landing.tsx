import { Link } from "react-router-dom";
import { ArrowRight, GitBranch } from "lucide-react";
import logo from "@/assets/szechenyi-logo.jpg";
import SiteFooter from "@/components/SiteFooter";

const Landing = () => {
  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-gradient-to-br from-background via-background to-secondary md:overflow-hidden">
      <main className="flex-1 flex items-center justify-center px-4 py-4 min-h-0">
        <div className="max-w-3xl w-full text-center flex flex-col items-center gap-2 md:gap-3">
          <img
            src={logo}
            alt="Széchenyi University Győr logo"
            className="h-20 md:h-28 w-auto object-contain"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] md:text-xs font-medium tracking-wide uppercase">
            <GitBranch className="w-3 h-3" />
            Formal Language Automata
          </div>

          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            NFA <span className="text-accent">→</span> DFA
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Converter
            </span>
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground font-light">
            + Simulator Application
          </p>

          <Link
            to="/app"
            className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-full text-base md:text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            {">>>"} Enter App {">>>>"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="grid grid-cols-2 gap-3 w-full max-w-xl mt-1">
            <div className="p-3 md:p-4 rounded-xl border border-primary/20 bg-primary/10 text-left">
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-primary mb-0.5">
                Professor
              </div>
              <div className="text-xs md:text-sm font-semibold text-foreground">
                Prof. Dr. Miklós Kuczmann
              </div>
            </div>
            <div className="p-3 md:p-4 rounded-xl border border-accent/20 bg-accent/10 text-left">
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-accent mb-0.5">
                Course
              </div>
              <div className="text-xs md:text-sm font-semibold text-foreground">
                Formal Languages and Automata
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Landing;
