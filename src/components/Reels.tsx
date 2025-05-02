"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPlay } from "react-icons/fa";
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
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "0px 0px -50% 0px" });

  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl) {
        const reelId = reels[index]?.id;
        if (reelId === playingVideoId) {
          videoEl.currentTime = 0;
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => console.error("Error attempting to play video:", error));
          }
        } else {
          videoEl.pause();
        }
      }
    });
  }, [playingVideoId]);

  const handleVideoPlay = (id: string) => {
    setPlayingVideoId(prevId => prevId === id ? null : id);
  };

  return (
    <section 
      id="reels" 
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Galeri</h2>
        <p className="text-muted-foreground text-center mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base">
          Servis hizmetlerimizden örnekler ve müşteri memnuniyeti videolarımız
        </p>

        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reels.map((reel, index) => (
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
                className="aspect-[9/16] bg-black dark:bg-gray-800/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700/50 relative group cursor-pointer"
                onClick={() => handleVideoPlay(reel.id)}
              >
                <video
                  ref={el => { videoRefs.current[index] = el; }}
                  id={reel.id}
                  src={reel.src}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  loop
                  playsInline
                  style={{ opacity: playingVideoId === reel.id ? 1 : 0.7 }}
                />
                {playingVideoId !== reel.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <FaPlay className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                  <p className="text-white font-medium text-sm md:text-base">{reel.title}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{reel.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {isMobile && <ReelsMobileSlider reels={reels} isInView={isInView} />}
      </div>
    </section>
  );
} 