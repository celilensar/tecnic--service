"use client";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then(mod => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then(mod => mod.motion.p), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center overflow-hidden bg-gradient-to-br from-blue-100/60 via-white to-purple-100/60 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors"
    >
      {/* Animasyonlu arka plan bulutu */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -z-10 left-1/2 top-1/2 w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/40 blur-3xl dark:bg-blue-900/30"
      />
      <MotionH1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg"
      >
        Beyaz Eşya ve Küçük Ev Aletlerinde Uzman Servis!
      </MotionH1>
      <MotionP
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Beyaz eşya, küçük ev aletleri, petek temizliği, 2. el beyaz eşya alım-satım ve kombi yedek parça hizmetlerinde güvenilir ve hızlı çözüm ortağınız! Tüm bakım, onarım ve parça ihtiyaçlarınız için yanınızdayız.
      </MotionP>
      <MotionDiv
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
          className="btn-soft bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold border border-blue-200 dark:border-blue-900 shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          Hizmetlerimizi İncele
        </a>
      </MotionDiv>
    </section>
  );
} 