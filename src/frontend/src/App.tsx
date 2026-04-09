import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-1">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
