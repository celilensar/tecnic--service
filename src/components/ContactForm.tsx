"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data: any) => {
    // Burada backend'e gönderme işlemi yapılabilir
    reset();
  };

  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900 transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        İletişim
      </h2>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-100 dark:border-gray-700"
      >
        <div>
          <input
            {...register("name", { required: "Adınızı giriniz" })}
            type="text"
            placeholder="Adınız"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1 block">{errors.name.message as string}</span>
          )}
        </div>
        <div>
          <input
            {...register("email", {
              required: "E-posta adresinizi giriniz",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Geçerli bir e-posta giriniz",
              },
            })}
            type="email"
            placeholder="E-posta"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 block">{errors.email.message as string}</span>
          )}
        </div>
        <div>
          <textarea
            {...register("message", { required: "Mesajınızı yazınız" })}
            placeholder="Mesajınız"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1 block">{errors.message.message as string}</span>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="btn-soft flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        >
          <FaPaperPlane /> Gönder
        </motion.button>
        {isSubmitSuccessful && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-2"
          >
            Mesajınız başarıyla gönderildi!
          </motion.div>
        )}
      </motion.form>
    </section>
  );
} 