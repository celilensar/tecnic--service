"use client";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const navLinks = [
  { name: "Ana Sayfa", href: "#hero" },
  { name: "Hizmetler", href: "#hizmetler" },
  { name: "Müşteri Yorumları", href: "#yorumlar" },
  { name: "Galeri", href: "#reels" },
  { name: "İletişim", href: "#contact" },
];

const serviceLinks = [
  { name: "Beyaz Eşya", href: "#hizmetler" },
  { name: "Küçük Ev Aletleri", href: "#hizmetler" },
  { name: "Petek Temizliği", href: "#hizmetler" },
  { name: "2. El Alım-Satım", href: "#hizmetler" },
  { name: "Kombi Parça", href: "#hizmetler" },
  { name: "Klima Servisi", href: "#hizmetler" },
];

const ADDRESS = "Şifa Mah. 19 Mayıs Cad. No:37 Tuzla/İstanbul";
const PHONE = "0212 123 45 67";
const EMAIL = "info@teknikservis.com";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          <div className="space-y-4">
             <Link href="#hero" className="inline-block font-bold text-2xl text-blue-600 dark:text-blue-400 mb-2">Muratusta</Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tüm beyaz eşya ve ev aletleriniz için profesyonel, hızlı ve güvenilir teknik servis çözümleri.
            </p>
            <div className="space-y-2 text-sm">
               <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaPhone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </div>
               <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaEnvelope className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Bizi Takip Edin</h3>
             <div className="flex gap-4 text-xl mb-6">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muratusta. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
} 