import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <PracticeAreas />
      <Experience />
      <Education />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
