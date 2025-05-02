"use client";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import { FaPaperPlane, FaPhone, FaEnvelope } from "react-icons/fa";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const MotionForm = dynamic(() => import("framer-motion").then(mod => mod.motion.form), { ssr: false });
const MotionButton = dynamic(() => import("framer-motion").then(mod => mod.motion.button), { ssr: false });
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const KONULAR = [
  { value: "teknik-hata", label: "Teknik Hata" },
  { value: "soru", label: "Soru" },
  { value: "yedek-parca", label: "Yedek Parça" },
  { value: "diger", label: "Diğer" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch px-2">
        {/* Form */}
        <MotionForm
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-100 dark:border-gray-700"
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
            <Controller
              name="konu"
              control={control}
              rules={{ required: "Konu seçiniz" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                    <SelectValue placeholder="Konu Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    {KONULAR.map((k) => (
                      <SelectItem key={k.value} value={k.value}>{k.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.konu && (
              <span className="text-red-500 text-sm mt-1 block">{errors.konu.message as string}</span>
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
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="btn-soft flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          >
            <FaPaperPlane /> Gönder
          </MotionButton>
          {isSubmitSuccessful && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center mt-2"
            >
              Mesajınız başarıyla gönderildi!
            </MotionDiv>
          )}
        </MotionForm>
        {/* Sağda iletişim kutusu */}
        <div className="flex flex-col justify-center bg-blue-50 dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-blue-100 dark:border-gray-700 min-h-[350px]">
          <div className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">Bize Ulaşın</div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 mb-2">
            <FaPhone /> 0212 123 45 67
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 mb-2">
            <FaEnvelope /> info@teknikservis.com
          </div>
          <div className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
            Tüm sorularınız ve servis talepleriniz için bize ulaşabilirsiniz. Uzman ekibimiz en kısa sürede dönüş yapacaktır.
          </div>
        </div>
      </div>
    </section>
  );
} 