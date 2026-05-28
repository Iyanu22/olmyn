import About from "../components/sections/About";
import ContactCta from "../components/sections/ContactCta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import SelectedWork from "../components/sections/SelectedWork";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";


export default function Home() {
  return (
        <>
          <Hero />
          <SelectedWork />
          <Process />
          <Services />
          <About />
          <Testimonials />
          <Faq />
          <ContactCta />
        </>
  );
}
