"use client";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ThemeToggle } from "@/components/ThemeToggle";

const menu = [
  {
    name: "Ürünler",
    dropdown: [
      { name: "Beyaz Eşya Servisi", href: "#hizmetler" },
      { name: "Küçük Ev Aletleri", href: "#hizmetler" },
      { name: "Petek Temizliği", href: "#hizmetler" },
      { name: "2. El Alım-Satım", href: "#hizmetler" },
      { name: "Kombi Parça", href: "#hizmetler" },
    ],
  },
  {
    name: "Hizmetler",
    dropdown: [
      { name: "Bakım & Onarım", href: "#hizmetler" },
      { name: "Yedek Parça", href: "#hizmetler" },
    ],
  },
  {
    name: "Fiyatlandırma",
    href: "#contact",
  },
  {
    name: "Blog",
    href: "#",
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full flex justify-center fixed top-0 left-0 z-50 py-4 px-2 bg-transparent">
      <div className="w-full max-w-7xl flex items-center justify-between rounded-full shadow-lg bg-white/80 dark:bg-black/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800 px-6 py-2 gap-4">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">TEKNİKSERVİS</span>
        </Link>
        {/* Menü */}
        <div className="hidden md:flex gap-2 items-center relative">
          {menu.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-full font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100/40 dark:hover:bg-blue-900/30 transition-all">
                  {item.name}
                  <MdKeyboardArrowDown className="text-lg" />
                </button>
                {/* Dropdown */}
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-12 min-w-[200px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-blue-100 dark:border-gray-800 py-2 z-50 animate-fade-in">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.name}
                        href={d.href}
                        className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-800 rounded-xl transition-all"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100/40 dark:hover:bg-blue-900/30 transition-all"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        {/* Sağ Butonlar */}
        <div className="flex items-center gap-2">
          <button className="hidden md:inline px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-blue-100/60 dark:hover:bg-blue-900/40 transition-all border border-transparent">
            Demo Talep Et
          </button>
          <button className="px-4 py-2 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-800 transition-all">
            Giriş Yap
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-900 text-white font-semibold shadow hover:bg-blue-700 transition-all">
            Kayıt Ol
          </button>
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 