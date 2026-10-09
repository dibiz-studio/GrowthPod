import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ServiceTabProvider } from "@/components/home/ServiceTabContext";
import Hero from "@/components/home/Hero";
import Gap from "@/components/home/Gap";
import Services from "@/components/home/Services";

import Familiar from "@/components/home/Familiar";
import About from "@/components/home/About";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Shares the active service tab between the hero cards and the Services section */}
        <ServiceTabProvider>
          <Hero />
          <Gap />
          <Services />
        </ServiceTabProvider>
        
        <Familiar />
        
        <About />
      </main>
      <Footer />
    </>
  );
}
