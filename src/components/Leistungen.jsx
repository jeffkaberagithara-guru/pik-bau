import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { services } from "../data/content";

function ServiceItem({ service, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border-subtle"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-light text-foreground group-hover:text-foreground-muted transition-colors">
          {service.title}
        </span>
        <span className="ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-border-subtle rounded-full group-hover:border-foreground transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="body-text pb-6 max-w-2xl">{service.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Leistungen() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="leistungen" className="section-padding-y bg-background-alt">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop"
                alt="Architekten bei der Planung"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-background border border-border-subtle flex items-center justify-center">
              <div className="text-center">
                <span className="block text-3xl font-light text-foreground">9</span>
                <span className="label">Leistungen</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Services List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <span className="label block mb-4">Leistungen</span>
              <h2 className="heading-lg">Was wir tun</h2>
            </motion.div>

            <div className="max-w-3xl">
              {services.map((service, index) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isOpen={openId === service.id}
                  onToggle={() => handleToggle(service.id)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}