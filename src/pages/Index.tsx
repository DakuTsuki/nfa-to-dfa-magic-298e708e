import "normalize.css";
import { AppProvider } from "@/legacy/store/Context";
import App from "@/legacy/App.jsx";
import "@/legacy/App.css";

const Index = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default Index;
