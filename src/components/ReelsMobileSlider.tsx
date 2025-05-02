"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

interface Reel {
  id: string;
  src: string;
  title: string;
  description: string;
}

interface Props {
  reels: Reel[];
  isInView: boolean;
}

export default function ReelsMobileSlider({ reels, isInView }: Props) {
  const [currentReel, setCurrentReel] = useState(0);
  const [dragReady, setDragReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setDragReady(true);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl) {
        if (!isInView) {
          videoEl.pause();
        } else {
          if (index === currentReel) {
            videoEl.currentTime = 0;
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                console.error(`Video autoplay failed for index ${index}:`, error);
              });
            }
          } else {
            videoEl.pause();
          }
        }
      }
    });
  }, [currentReel, isInView]);

  return (
    <div className="relative h-[80vh] overflow-hidden rounded-lg">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
        {currentReel + 1} / {reels.length}
      </div>
      <motion.div
        className="h-full"
        drag={dragReady ? "y" : false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          if (dragReady && Math.abs(info.offset.y) > 100) {
            if (info.offset.y > 0 && currentReel > 0) {
              setCurrentReel((prev) => prev - 1);
            } else if (info.offset.y < 0 && currentReel < reels.length - 1) {
              setCurrentReel((prev) => prev + 1);
            }
          }
        }}
      >
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            className={`absolute inset-0 ${index === currentReel ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: index === currentReel ? 1 : 0,
              scale: index === currentReel ? 1 : 0.8,
              y: `${(index - currentReel) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full bg-background/80 backdrop-blur-sm overflow-hidden border border-blue-500/10 relative">
              <video
                ref={el => { videoRefs.current[index] = el; }}
                id={`mobile-${reel.id}`}
                src={reel.src}
                className="w-full h-full object-cover"
                loop
                playsInline
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-10 left-0 right-0 p-4">
                <p className="text-white font-medium">{reel.title}</p>
                <p className="text-white/70 text-sm mt-1">{reel.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {currentReel < reels.length - 1 && (
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/70"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{ pointerEvents: 'none' }}
        >
          <IoChevronDown size={28} />
        </motion.div>
      )}
    </div>
  );
}