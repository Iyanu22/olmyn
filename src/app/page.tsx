import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import SelectedWork from "../components/sections/SelectedWork";
import Services from "../components/sections/Services";


export default function Home() {
  return (
        <>
          <Hero />
          <SelectedWork />
          <Process />
          <Services />
        </>
  );
}
