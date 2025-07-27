import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
