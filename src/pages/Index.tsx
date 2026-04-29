import "normalize.css";
import { AppProvider } from "@/legacy/store/Context";
import App from "@/legacy/App.jsx";
import "@/legacy/App.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <main className="flex-1">
      <AppProvider>
        <App />
      </AppProvider>
    </main>
    <SiteFooter />
  </div>
);

export default Index;
