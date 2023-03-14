import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Landing from "@/sections/Landing";
import Projects from "@/sections/Projects";
import Techs from "@/sections/Techs";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
      <Landing />
      <Experience />
      <Projects />
      <Techs />
      <Footer />
    </main>
  );
}
