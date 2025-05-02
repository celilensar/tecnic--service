"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Yeni menü öğeleri ve href'ler
const menuItems = [
  { name: "Ana Sayfa", href: "#hero" },
  { name: "Hizmetler", href: "#hizmetler" },
  { name: "Yorumlar", href: "#yorumlar" }, // Müşteri Yorumları için ID (varsayım)
  { name: "Reels", href: "#reels" },
  { name: "İletişim", href: "#contact" },
] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll dinleyicisi için useEffect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) { // 10px'den fazla kaydırılınca
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Listener'ı ekle
    window.addEventListener("scroll", handleScroll);
    // İlk yüklemede kontrol et (sayfa zaten kaydırılmış olabilir)
    handleScroll(); 
    // Component kaldırıldığında listener'ı temizle
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Sadece component mount/unmount olduğunda çalışır

  return (
    <nav
      className={`
        w-full flex fixed top-0 left-0 z-50 bg-transparent
        transition-all duration-300 ease-in-out
        ${scrolled ? 'py-2' : 'py-4'} 
      `}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between rounded-full shadow-lg bg-white/80 dark:bg-black/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800 px-4 sm:px-6 py-2 gap-4">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 font-extrabold text-xl sm:text-2xl text-gray-900 dark:text-white tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">MURATUSTA</span>
        </Link>
        {/* Menü - Desktop */}
        <div className="hidden md:flex gap-2 items-center relative">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                  if (isMobileMenuOpen) {
                      setIsMobileMenuOpen(false);
                  }
              }}
              className="px-4 py-2 rounded-full font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100/40 dark:hover:bg-blue-900/30 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Sağ Alan: Sadece Tema Değiştirme ve Mobil Menü Tetiği */}
        <div className="flex items-center gap-2">
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? <HiX className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <HiMenuAlt3 className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü İçeriği */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100/40 dark:hover:bg-blue-900/30 rounded-md px-3"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 