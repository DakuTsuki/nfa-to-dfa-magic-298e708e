import { Link } from "react-router-dom";
import { ArrowRight, GitBranch } from "lucide-react";
import logo from "@/assets/szechenyi-logo.jpg";
import SiteFooter from "@/components/SiteFooter";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-secondary">
      <header className="w-full px-6 py-8 flex justify-center">
        <img
          src={logo}
          alt="Széchenyi University Győr logo"
          className="h-28 md:h-40 w-auto object-contain"
        />
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="max-w-3xl w-full text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wide uppercase">
            <GitBranch className="w-3.5 h-3.5" />
            Formal Language Automata
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            NFA <span className="text-accent">→</span> DFA
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Converter
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            + Simulator Application
          </p>

          <div className="pt-4">
            <Link
              to="/app"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              {">>>"} Enter App {">>>>"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-12 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="p-5 rounded-xl border border-primary/20 bg-primary/10 text-left">
              <div className="text-xs uppercase tracking-wider text-primary mb-1">
                Professor
              </div>
              <div className="font-semibold text-foreground">
                Prof. Dr. Miklós Kuczmann
              </div>
            </div>
            <div className="p-5 rounded-xl border border-accent/20 bg-accent/10 text-left">
              <div className="text-xs uppercase tracking-wider text-accent mb-1">
                Course
              </div>
              <div className="font-semibold text-foreground">
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
