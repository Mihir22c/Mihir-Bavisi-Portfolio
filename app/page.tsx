import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import Products from "@/components/Products";

export default function Page() {
  return (
    <>
      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
