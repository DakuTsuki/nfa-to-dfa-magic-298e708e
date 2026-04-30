const SiteFooter = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground text-center">
        <div>
          © {new Date().getFullYear()} · NFA → DFA Converter by{" "}
          <span className="font-medium text-foreground">
            Adetogun Samuel Adegunju
          </span>
          .
        </div>
        <div>
          Created by{" "}
          <span className="font-medium text-foreground">
            Adetogun Samuel Adegunju
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
