"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaTools, FaCogs, FaRecycle, FaFire, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    title: "Beyaz Eşya Bakım & Onarım",
    icon: <FaTools className="text-3xl text-blue-500" />,
    description: "Buzdolabı, çamaşır makinesi, bulaşık makinesi ve tüm beyaz eşyalarınız için uzman bakım ve onarım hizmeti."
  },
  {
    title: "Küçük Ev Aletleri Bakım & Onarım",
    icon: <FaCogs className="text-3xl text-purple-500" />,
    description: "Blender, süpürge, ütü ve diğer küçük ev aletleriniz için hızlı ve güvenilir servis."
  },
  {
    title: "Petek Temizliği",
    icon: <FaFire className="text-3xl text-orange-500" />,
    description: "Petek ve kalorifer sistemlerinizin verimli çalışması için profesyonel temizlik hizmeti."
  },
  {
    title: "2. El Beyaz Eşya Alım-Satım",
    icon: <FaRecycle className="text-3xl text-green-500" />,
    description: "Kullanılmış beyaz eşyalarınızı değerinde alıyor, uygun fiyatlarla satışını yapıyoruz."
  },
  {
    title: "Kombi Yedek Parça",
    icon: <FaShoppingCart className="text-3xl text-pink-500" />,
    description: "Kombi ve ısıtma sistemleriniz için orijinal yedek parça temini ve montajı."
  },
];

export default function Hizmetlerimiz() {
  return (
    <section id="hizmetler" className="py-20 relative overflow-hidden">
      {/* Blur efektli dekoratif arka planlar */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-300/20 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-200/30 rounded-full blur-2xl z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">Hizmetlerimiz</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tüm beyaz eşya ve küçük ev aletleriniz için profesyonel bakım ve onarım hizmeti sunuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm border-blue-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 