import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Services from "../components/Services";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import EditorGutter from "../components/EditorGutter";

export default function Home() {
  return (
    <>
      <EditorGutter />
      <main id="main-content">
        <Hero />
        <Projects />
        <Education />
        <Services />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}