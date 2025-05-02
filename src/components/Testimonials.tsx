import { motion } from "framer-motion";
import { FaUserCircle, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment:
      "Cihazım çok hızlı bir şekilde tamir edildi. Hem ilgi hem de hız mükemmeldi! Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Elif Kaya",
    comment:
      "Servis süreci boyunca sürekli bilgilendirildim. Çok güvenilir ve profesyonel bir ekip.",
    rating: 5,
  },
  {
    name: "Mehmet Demir",
    comment:
      "Fiyat/performans olarak harika. Tekrar bir sorun yaşarsam yine burayı tercih edeceğim.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Müşteri Yorumları
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="max-w-xs w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center border border-blue-100 dark:border-gray-700 btn-soft"
          >
            <FaUserCircle className="text-5xl text-blue-400 dark:text-blue-600 mb-2" />
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={
                    idx < t.rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }
                />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-center mb-2">“{t.comment}”</p>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 mt-2">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 