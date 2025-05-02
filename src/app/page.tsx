import Hero from "../components/Hero";
import Hizmetlerimiz from "../components/Hizmetlerimiz";
import Reels from "../components/Reels";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Hizmetlerimiz />
      <Reels />
      <Testimonials />
      <ContactForm />
      <MapSection />
    </>
  );
}
