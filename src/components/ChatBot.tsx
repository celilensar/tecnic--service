"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, MessageSquare } from "lucide-react";

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappMessage = encodeURIComponent(message);
      const phoneNumber = "905315616616";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setIsChatOpen(false);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <motion.div
        className="fixed bottom-20 right-5 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      >
        <Button
          onClick={toggleChat}
          size="icon"
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          aria-label="Chat'i Aç"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* WhatsApp Chat Bot Window - Stiller orijinal koda göre güncellendi */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }} // Orijinal animasyon
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Orijinal transition
            // Orijinal stiller geri getirildi
            className="fixed bottom-20 inset-x-4 sm:inset-x-auto sm:right-4 z-50 max-w-[350px] bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-500/10 overflow-hidden"
          >
            {/* Chat Header - Stiller orijinal koda göre güncellendi */}
            <div className="bg-blue-500/10 p-4 flex items-center justify-between border-b border-blue-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                   {/* Font büyüklüğü ve durum metni orijinaldeki gibi */}
                  <h3 className="font-semibold text-base text-foreground">Murat Usta</h3>
                  <p className="text-sm text-muted-foreground">Çevrimiçi</p>
                </div>
              </div>
               {/* Kapatma butonu orijinaldeki gibi */}
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-blue-500/10 rounded-full transition-colors text-muted-foreground"
                aria-label="Chat'i Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Area - Stiller orijinal koda göre güncellendi, sabit yükseklik kaldırıldı */}
            <div className="p-4 space-y-4">
              {/* Initial bot message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                </div>
                <div className="bg-blue-500/10 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">Merhaba! Size nasıl yardımcı olabiliriz?</p>
                </div>
              </div>
            </div>

            {/* Chat Input - Stiller orijinal koda göre güncellendi */}
            <div className="p-4 border-t border-blue-500/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 bg-background/50 border border-blue-500/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-shadow"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="rounded-full bg-green-500 hover:bg-green-600 flex-shrink-0"
                  aria-label="Gönder"
                >
                  <Send className="w-4 h-4 text-white" /> {/* text-white eklendi */}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 