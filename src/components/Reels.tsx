"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaPlay, FaChevronUp, FaChevronDown } from "react-icons/fa";
import ReelsMobileSlider from "./ReelsMobileSlider";

const reels = [
  {
    id: "reel1",
    src: "/reel1.mp4",
    title: "Beyaz Eşya Onarımında Uzmanlık",
    description: "Buzdolabı, çamaşır makinesi ve daha fazlası için profesyonel servis." },
  {
    id: "reel2",
    src: "/reel2.mp4",
    title: "Küçük Ev Aletleri Bakımında Hızlı Çözüm",
    description: "Blender, süpürge, ütü ve diğer küçük ev aletleriniz için hızlı servis." },
  {
    id: "reel3",
    src: "/reel3.mp4",
    title: "Petek Temizliği ile Maksimum Verim",
    description: "Petek ve kalorifer sistemlerinizin verimli çalışması için profesyonel temizlik." },
];

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Reels() {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const [currentReel, setCurrentReel] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => { setIsClient(true); }, []);

  const handleVideoPlay = (id: string) => {
    setIsPlaying((prev) => ({ ...prev, [id]: true }));
    // Diğer videoları durdur
    Object.keys(isPlaying).forEach((key) => {
      if (key !== id && isPlaying[key]) setIsPlaying((prev) => ({ ...prev, [key]: false }));
    });
  };

  return (
    <section id="reels" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Reels</h2>
        <p className="text-muted-foreground text-center mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base">
          Servis hizmetlerimizden örnekler ve müşteri memnuniyeti videolarımız
        </p>

        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reels.map((reel) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 5px 15px -5px rgba(0,0,0,0.1)",
                }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="aspect-[9/16] bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer border border-blue-500/10 relative group"
                onClick={() => handleVideoPlay(reel.id)}
              >
                <video
                  id={reel.id}
                  src={reel.src}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  muted
                  autoPlay={isPlaying[reel.id]}
                  onPlay={() => setIsPlaying((prev) => ({ ...prev, [reel.id]: true }))}
                  onPause={() => setIsPlaying((prev) => ({ ...prev, [reel.id]: false }))}
                />
                {!isPlaying[reel.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-blue-500/40 transition-all duration-300">
                      <FaPlay className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium text-sm md:text-base">{reel.title}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{reel.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {isMobile && <ReelsMobileSlider reels={reels} />}
      </div>
    </section>
  );
} 