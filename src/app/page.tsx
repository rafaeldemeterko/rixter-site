import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
    
      <Header />

      <main>

        <Hero />
         <Stats />
          <About />

      </main>

      <Footer />

    </>
  );
}
