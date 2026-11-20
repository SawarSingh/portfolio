import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Highlights />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
