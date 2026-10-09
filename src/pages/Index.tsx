import About from "@/components/site/About";
import Contributions from "@/components/site/Contributions";
import Feed from "@/components/site/Feed";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import { useRevealObserver } from "@/hooks/use-reveal";

const Index = () => {
  useRevealObserver();

  return (
    <div className="poster flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />

        <div className="container-page">
          <Contributions />
          <Feed />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
