"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

interface Reel {
  id: string;
  src: string;
  title: string;
  description: string;
}

interface Props {
  reels: Reel[];
}

export default function ReelsMobileSlider({ reels }: Props) {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const [currentReel, setCurrentReel] = useState(0);
  const [dragReady, setDragReady] = useState(false);

  useEffect(() => {
    setDragReady(true);
  }, []);

  const handleVideoPlay = (id: string) => {
    setIsPlaying((prev) => ({ ...prev, [id]: true }));
    Object.keys(isPlaying).forEach((key) => {
      if (key !== id && isPlaying[key]) setIsPlaying((prev) => ({ ...prev, [key]: false }));
    });
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
        {currentReel + 1} / {reels.length}
      </div>
      {/* Reels */}
      <motion.div
        className="h-full"
        drag={dragReady ? "y" : false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          if (dragReady && Math.abs(info.offset.y) > 100) {
            if (info.offset.y > 0 && currentReel > 0) {
              setCurrentReel((prev) => prev - 1);
              setIsPlaying({});
            } else if (info.offset.y < 0 && currentReel < reels.length - 1) {
              setCurrentReel((prev) => prev + 1);
              setIsPlaying({});
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
            onClick={() => handleVideoPlay(reel.id)}
          >
            <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-500/10 relative">
              <video
                id={`mobile-${reel.id}`}
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
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <FaPlay className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium">{reel.title}</p>
                <p className="text-white/70 text-sm mt-1">{reel.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 