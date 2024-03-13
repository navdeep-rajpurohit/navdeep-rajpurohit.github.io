import Image from "next/image";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { Container } from "postcss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
     <div class="container mt-24 mx-auto px-12 py-4">
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     </div>
     <Footer/>
    </main>
  );
}
