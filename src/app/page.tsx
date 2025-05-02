import dynamic from 'next/dynamic';

// Statik olarak import edilen bileşenler dinamik hale getirilecek
import Hero from "../components/Hero";
// import Hizmetlerimiz from "../components/Hizmetlerimiz";
// import Reels from "../components/Reels";
// import Testimonials from "../components/Testimonials";
// import ContactForm from "../components/ContactForm";
// import ChatBot from "../components/ChatBot";

// Dinamik olarak yüklenecek bileşenler
const Hizmetlerimiz = dynamic(() => import('../components/Hizmetlerimiz'), { 
  loading: () => <p>Yükleniyor...</p>,
  ssr: false // İsteğe bağlı: Sunucu tarafında render edilmesin
});
const Testimonials = dynamic(() => import('../components/Testimonials'), { 
  loading: () => <p>Yükleniyor...</p>,
  ssr: false 
});
const Reels = dynamic(() => import('../components/Reels'), { 
  loading: () => <p>Yükleniyor...</p>,
  ssr: false 
});
const ContactForm = dynamic(() => import('../components/ContactForm'), { 
  loading: () => <p>Yükleniyor...</p>,
  ssr: false 
});
const ChatBot = dynamic(() => import('../components/ChatBot'), { 
  loading: () => <p>Yükleniyor...</p>,
  ssr: false // ChatBot genellikle sadece client tarafında çalışır
});

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
