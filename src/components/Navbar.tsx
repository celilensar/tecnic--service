"use client";
import Link from "next/link";
import { useState } from "react";
import { FaTools } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

const menu = [
  { name: "Anasayfa", href: "#hero" },
  { name: "Hizmetler", href: "#services" },
  { name: "Reels", href: "#reels" },
  { name: "Yorumlar", href: "#testimonials" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Dark mode toggle
  const toggleDark = () => {
    setDark(!dark);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !dark);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="#hero" className="flex items-center gap-2 font-bold text-xl text-primary">
          <FaTools className="text-2xl text-blue-600 dark:text-blue-400" />
          TeknikServis
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {menu.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.08 }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-2 py-1 rounded-md"
            >
              {item.name}
            </motion.a>
          ))}
          <button
            onClick={toggleDark}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Tema Değiştir"
          >
            {dark ? (
              <MdLightMode className="text-xl text-yellow-400" />
            ) : (
              <MdDarkMode className="text-xl text-gray-700" />
            )}
          </button>
        </div>
        {/* Mobil Menü */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Tema Değiştir"
          >
            {dark ? (
              <MdLightMode className="text-xl text-yellow-400" />
            ) : (
              <MdDarkMode className="text-xl text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 