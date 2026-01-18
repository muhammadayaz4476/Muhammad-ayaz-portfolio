import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Workflow from "@/components/Workflow";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GitHubSection from "@/components/GitHubSection";
import Experience from "@/components/Experience"; // Keeping old one just in case, or removing if replaced completely
import Contact from "@/components/Contact";

const Separator = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8" />
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Workflow />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Education />
      <Separator />
      <Testimonials />
      <Separator />
      <FAQ />
      <Separator />
      <GitHubSection />
      <Separator />
      <Contact />
    </main>
  );
}
