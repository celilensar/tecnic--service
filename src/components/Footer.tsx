import { FaInstagram, FaTwitter, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-blue-100 dark:border-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <div className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-1">TeknikServis</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">Tüm cihazlarınız için güvenilir teknik servis hizmeti.</div>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm justify-center md:justify-start">
            <FaPhone /> 0212 123 45 67
            <FaEnvelope className="ml-4" /> info@teknikservis.com
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-4 text-2xl justify-center"
        >
          <a href="#" className="btn-soft text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="btn-soft text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" className="btn-soft text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" aria-label="Facebook"><FaFacebook /></a>
        </motion.div>
      </div>
      <div className="text-center text-xs text-gray-400 dark:text-gray-600 mt-6">© {new Date().getFullYear()} TeknikServis. Tüm hakları saklıdır.</div>
    </footer>
  );
} 