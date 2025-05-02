"use client";

import dynamic from 'next/dynamic';

// Dinamik olarak yüklenecek bileşenler
const Hizmetlerimiz = dynamic(() => import('../components/Hizmetlerimiz'), { 
  loading: () => <div className="h-40 flex items-center justify-center"><p>Yükleniyor...</p></div>, // Yüklenme durumuna basit bir yükseklik verelim
  ssr: false 
});
const Testimonials = dynamic(() => import('../components/Testimonials'), { 
  loading: () => <div className="h-40 flex items-center justify-center"><p>Yükleniyor...</p></div>,
  ssr: false 
});
const Reels = dynamic(() => import('../components/Reels'), { 
  loading: () => <div className="h-40 flex items-center justify-center"><p>Yükleniyor...</p></div>,
  ssr: false 
});
const ContactForm = dynamic(() => import('../components/ContactForm'), { 
  loading: () => <div className="h-40 flex items-center justify-center"><p>Yükleniyor...</p></div>,
  ssr: false 
});
const ChatBot = dynamic(() => import('../components/ChatBot'), { 
  // ChatBot'un kendi animasyonu var, loading state'i gereksiz olabilir veya farklı ele alınabilir
  // loading: () => <p>Yükleniyor...</p>, 
  ssr: false // ChatBot genellikle sadece client tarafında çalışır
});

export default function DynamicLoader() {
  return (
    <>
      <Hizmetlerimiz />
      <Testimonials />
      <Reels />
      <ContactForm />
      <ChatBot />
    </>
  );
} 