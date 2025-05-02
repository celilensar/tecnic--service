"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

// Hero banner resimleri
const banners = ["/herobanner.png", "/herobanner2.png"];

export default function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Banner değiştirme efekti
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 7000); // Süre 5000ms'den 7000ms'ye çıkarıldı

    return () => clearInterval(intervalId); // Component unmount olduğunda interval'i temizle
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen w-full text-center overflow-hidden px-4 py-20"
    >
      {/* Background Images (Verdiğin kod) */}
      <div className="absolute inset-0 z-0">
        {banners.map((banner, index) => (
          <motion.div
            key={banner}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentBanner === index ? 1 : 0,
              scale: currentBanner === index ? 1 : 1.1
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            {/* <img
              src={banner}
              alt={`Hero Background ${index + 1}`}
              className="w-full h-full object-cover"
            /> */}
            <Image
              src={banner}
              alt={`Hero Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0} // İlk banner'a öncelik ver
              // className="transition-opacity duration-1000 ease-in-out" // Framer Motion animasyonu ile çakışabileceği için kaldırıldı
            />
          </motion.div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" /> {/* Hafif gradient overlay */}
      </div>

      {/* İçerik Alanı - z-10 eklendi */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-shadow-lg"
        >
          Beyaz Eşya & Ev Aletleri Uzman Servis
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto text-shadow"
        >
          Arızalı beyaz eşyalarınız ve küçük ev aletleriniz için hızlı, güvenilir tamir ve bakım hizmetleri. Hemen bize ulaşın!
        </motion.p>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="btn-soft bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          >
            Hemen Servis Al
          </a>
          <a
            href="#hizmetler"
            className="btn-soft bg-white/90 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 px-8 py-3 rounded-lg font-semibold border border-transparent hover:bg-white dark:hover:bg-gray-900 transition shadow-md"
          >
            Hizmetlerimizi İncele
          </a>
        </motion.div>
      </div>
    </section>
  );
} 