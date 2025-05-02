"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const containerStyle = {
  width: "100%",
  height: "350px",
  borderRadius: "1rem",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
};

const center = {
  lat: 41.0082, // İstanbul
  lng: 28.9784,
};

export default function MapSection() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD-EXAMPLE-KEY-REPLACE", // Kendi API key'in ile değiştir
  });

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Konumumuz
      </h2>
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-gray-700 btn-soft"
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              styles: [
                {
                  featureType: "all",
                  elementType: "geometry",
                  stylers: [
                    { color: "#e9e9e9" },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [
                    { color: "#757575" },
                  ],
                },
              ],
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div className="flex items-center justify-center h-[350px] text-gray-500 dark:text-gray-400">
            Harita yükleniyor...
          </div>
        )}
      </MotionDiv>
    </section>
  );
} 