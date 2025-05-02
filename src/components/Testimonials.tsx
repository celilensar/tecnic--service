"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Swiper componentlerini ve CSS'lerini import et
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Pagination ve Autoplay modüllerini import et
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Autoplay CSS

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const testimonials = [
  {
    name: "Ayşe Korkmaz",
    handle: "@aysekorkmaz",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=AK",
    comment:
      "Çamaşır makinem arızalanmıştı, aynı gün gelip hızlıca tamir ettiler. Çok memnun kaldım, teşekkürler!",
    rating: 5,
  },
  {
    name: "Mehmet Öztürk",
    handle: "@mehmetozturk",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=M%C3%96",
    comment:
      "Petek temizliği için çağırdım. İşlerini titizlikle yaptılar, evim eskisinden daha iyi ısınıyor. Profesyonel ve güler yüzlü bir ekip.",
    rating: 5,
  },
  {
    name: "Fatma Demir",
    handle: "@fatmademir",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=FD",
    comment:
      "Buzdolabım soğutmuyordu, parça değişimi gerekti. Makul fiyata orijinal parça ile değişim yapıldı. Güvenilir servis.",
    rating: 4,
  },
  {
    name: "Ali Vural",
    handle: "@alivural",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=AV",
    comment:
      "Kombimiz için yıllık bakım yaptırdık. Detaylı kontrol ve bilgilendirme için teşekkürler. Randevu saatine de tam zamanında geldiler.",
    rating: 5,
  },
  {
    name: "Zeynep Şahin",
    handle: "@zeynepsahin",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=Z%C5%9E",
    comment:
      "Fırınımın camı kırılmıştı, kısa sürede yenisiyle değiştirdiler. Fiyatları da diğer yerlere göre uygundu.",
    rating: 4,
  },
  {
    name: "Hasan Çelik",
    handle: "@hasancelik",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=H%C3%87",
    comment:
      "İkinci el bir çamaşır makinesi aldım, sorunsuz çalışıyor ve garantisi de var. Alım satım konusunda da yardımcı oluyorlar.",
    rating: 5,
  },
  {
    name: "Emine Arslan",
    handle: "@eminearslan",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=EA",
    comment:
      "Küçük ev aletleri tamiri için başvurdum, blenderım tamir edildi. Hızlı ve ekonomik bir çözüm oldu.",
    rating: 4,
  },
  {
    name: "Mustafa Yıldız",
    handle: "@mustafayildiz",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=MY",
    comment:
      "Acil servis ihtiyacımız oldu, hafta sonu olmasına rağmen gelip sorunumuzu çözdüler. Müşteri memnuniyetine önem veriyorlar.",
    rating: 5,
  },
   {
    name: "Seda Can",
    handle: "@sedacan",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=SC",
    comment:
      "Yeni taşındığım evin peteklerini temizlettim, sonuçtan çok memnunum. Gelen ekip çok saygılıydı.",
    rating: 5,
  },
  {
    name: "İbrahim Kılıç",
    handle: "@ibrahimkilic",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=IK",
    comment:
      "Tamir süreci biraz uzasa da sonuçta sorun çözüldü. İletişimleri daha iyi olabilirdi.",
    rating: 3,
  },
    {
    name: "Leyla Aydın",
    handle: "@leylaaydin",
    avatar: "https://placehold.co/40x40/a3a3a3/ffffff?text=LA",
    comment:
      "Her zaman tercih ettiğim servis. Beyaz eşyalarımı güvenle teslim ediyorum.",
    rating: 5,
  }
];

// Tek bir yorum kartı için Component (Tekrarlanan kodu azaltmak için)
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
  <MotionDiv
    key={index} // Key burada da olabilir veya SwiperSlide içinde
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    // h-full kaldırıldı, yükseklik içeriğe göre ayarlanacak
    className="break-inside-avoid p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-sm border border-blue-100 dark:border-gray-700/50 flex flex-col"
  >
    {/* Yıldız Rating */}
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, starIndex) => (
        <FaStar
          key={starIndex}
          className={starIndex < testimonial.rating ? "text-blue-500" : "text-gray-300 dark:text-gray-500"}
        />
      ))}
    </div>
    {/* Yorum Metni - flex-grow eklendi */}
    <p className="text-gray-700 dark:text-gray-300 mb-4 text-[15px] leading-relaxed flex-grow">“{testimonial.comment}”</p>
    {/* Kullanıcı Bilgisi - mt-auto eklendi */}
    <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700/50 mt-auto">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={40}
        height={40}
        className="rounded-full bg-gray-200 dark:bg-gray-700"
        unoptimized
      />
      <div>
        <p className="font-semibold text-sm text-gray-900 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.handle}</p>
      </div>
    </div>
  </MotionDiv>
);

// Veriyi belirtilen boyutta gruplara ayıran yardımcı fonksiyon
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Testimonials() {
  // Yorumları 3'erli gruplara ayır
  const testimonialChunks = chunkArray(testimonials, 3);

  return (
    <section id="yorumlar" className="py-20 sm:py-24 overflow-hidden"> {/* overflow-hidden eklendi */}
      <div className="container mx-auto px-4">
        {/* Bölüm Başlığı */}
        <div className="text-center mb-12 md:mb-16">
           <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">Müşteri Yorumları</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
             Binlerce Memnun Müşterimizden Bazıları
          </h2>
        </div>

        {/* Büyük Ekran: Masonry Grid */}
        <div className="hidden sm:block columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`masonry-${i}`} testimonial={t} index={i} />
          ))}
        </div>

        {/* Küçük Ekran: Swiper Slider (Gruplanmış) */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30} // Gruplar arası boşluk biraz artırılabilir
            slidesPerView={1} // Her slaytta 1 grup gösterilecek
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000, // Her slaytta 3 yorum olduğu için gecikme artırıldı
              disableOnInteraction: false,
            }}
            // loop={true} // Gruplama ile loop şimdilik kaldırıldı
            className="pb-10"
          >
            {testimonialChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={`chunk-${chunkIndex}`} className="h-auto"> {/* h-auto kalsın */}
                {/* Her slayt içinde dikey olarak 3 yorum */}
                <div className="flex flex-col gap-4">
                  {chunk.map((testimonial, itemIndex) => (
                    <TestimonialCard
                      key={`swiper-${chunkIndex}-${itemIndex}`}
                      testimonial={testimonial}
                       // index prop'u animasyon gecikmesi için önemliyse genel index hesaplanabilir,
                       // şimdilik basit tutmak için 0 verelim veya kaldırabiliriz.
                      index={0} // Veya index={chunkIndex * 3 + itemIndex}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
} 