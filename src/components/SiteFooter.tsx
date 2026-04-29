const SiteFooter = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} · NFA → DFA Converter</div>
        <div>
          Professor:{" "}
          <span className="font-medium text-foreground">
            Prof. Dr. Miklós Kuczmann
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
