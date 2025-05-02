import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const reels = [
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Cihaz Temizliği ve Bakım",
  },
  {
    url: "https://www.w3schools.com/html/movie.mp4",
    title: "Hızlı Onarım Süreci",
  },
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Müşteri Memnuniyeti",
  },
];

export default function Reels() {
  return (
    <section id="reels" className="w-full py-16 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900 transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Reels
      </h2>
      <div className="flex gap-6 overflow-x-auto px-4 md:justify-center scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900">
        {reels.map((reel, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="min-w-[220px] max-w-[240px] md:min-w-[300px] md:max-w-[320px] aspect-[9/16] bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-between p-3 transition-all btn-soft border border-blue-100 dark:border-gray-700"
          >
            <div className="w-full h-full rounded-xl overflow-hidden mb-2">
              <ReactPlayer
                url={reel.url}
                width="100%"
                height="100%"
                controls={true}
                style={{ aspectRatio: "9/16" }}
              />
            </div>
            <div className="w-full text-center mt-2">
              <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {reel.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 