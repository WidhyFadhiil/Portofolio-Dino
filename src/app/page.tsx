import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ParticleField } from "@/components/ui/ParticleField";
import { VelocityMarquee } from "@/components/ui/VelocityMarquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Activity } from "@/components/sections/Activity";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { marqueeTech } from "@/lib/data";

export default function Home() {
  return (
    <Providers>
      <Preloader />
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <VelocityMarquee items={marqueeTech} />
        <About />
        <TechStack />
        <Projects />
        <Activity />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
