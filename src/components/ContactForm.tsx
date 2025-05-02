"use client";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import { FaPaperPlane } from "react-icons/fa";
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
    console.log(data);
    reset();
  };

  // Google Maps Embed URL for the specified address
  const mapSrc = "https://maps.google.com/maps?q=%C5%9Eifa%20Mah.%2019%20May%C4%B1s%20Cad.%20No%3A37%20Tuzla%2FIstanbul&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          İletişim
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <MotionForm
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 border border-blue-100 dark:border-gray-700 h-full"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Bize Yazın</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Adınız Soyadınız</label>
              <input
                id="name"
                {...register("name", { required: "Adınızı giriniz" })}
                type="text"
                placeholder="Adınız Soyadınız"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1 block">{errors.name.message as string}</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">E-posta Adresiniz</label>
              <input
                id="email"
                {...register("email", {
                  required: "E-posta adresinizi giriniz",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Geçerli bir e-posta giriniz",
                  },
                })}
                type="email"
                placeholder="ornek@eposta.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 block">{errors.email.message as string}</span>
              )}
            </div>
            <div>
              <label htmlFor="konu" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Konu</label>
              <Controller
                name="konu"
                control={control}
                rules={{ required: "Konu seçiniz" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="konu" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
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
                <span className="text-red-500 text-xs mt-1 block">{errors.konu.message as string}</span>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Mesajınız</label>
              <textarea
                id="message"
                {...register("message", { required: "Mesajınızı yazınız" })}
                placeholder="Mesajınızı buraya yazın..."
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 block">{errors.message.message as string}</span>
              )}
            </div>
            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-soft flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition w-full mt-2"
            >
              <FaPaperPlane /> Mesajı Gönder
            </MotionButton>
            {isSubmitSuccessful && (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center mt-1 text-sm font-medium"
              >
                Mesajınız başarıyla gönderildi!
              </MotionDiv>
            )}
          </MotionForm>

          <MotionDiv
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-[400px] lg:h-full min-h-[400px] lg:min-h-[500px] rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700/50"
          >
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Teknik Servis Konumu"
            ></iframe>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
} 