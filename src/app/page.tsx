import Hero from "../components/Hero";
import Hizmetlerimiz from "../components/Hizmetlerimiz";
import Reels from "../components/Reels";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import ChatBot from "../components/ChatBot";

export default function Home() {
  return (
    <>
      <Hero />
      <Hizmetlerimiz />
      <Testimonials />
      <Reels />
      <ContactForm />
      <ChatBot />
    </>
  );
}
