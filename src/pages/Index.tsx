import About from "@/components/site/About";
import Contributions from "@/components/site/Contributions";
import Feed from "@/components/site/Feed";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Intro from "@/components/site/Intro";

const Index = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Intro />
        <Contributions />
        <Feed />
        <About />
      </div>
    </main>
    <Footer />
  </div>
);

export default Index;
