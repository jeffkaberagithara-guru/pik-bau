import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import logo from "/Logo2.png";
import { company } from "../data/content";

export default function Contact() {
  return (
    <section id="kontakt" className="section-padding-y bg-cta-bg text-cta-text relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div className="section-padding relative z-10">
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
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Modernes Bürogebäude"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="label block mb-4 text-background-muted">Kontakt</span>
            <h2 className="heading-lg mb-8 md:mb-12">
              Bereit für Ihr{" "}
              <span className="font-[family-name:var(--font-serif)] italic">
                nächstes Projekt?
              </span>
            </h2>

            <p className="body-text text-background-muted mb-8">
              Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihr Bauvorhaben.
              Wir freuen uns auf Ihre Anfrage.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-4 text-background-muted hover:text-background transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center border border-background/30 rounded-full group-hover:border-background transition-colors">
                  <Phone size={18} />
                </span>
                <span className="text-lg">{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 text-background-muted hover:text-background transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center border border-background/30 rounded-full group-hover:border-background transition-colors">
                  <Mail size={18} />
                </span>
                <span className="text-lg">{company.email}</span>
              </a>
            </div>

            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide hover:bg-background-alt transition-colors duration-300 group"
            >
              Nachricht senden
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="section-padding border-t border-background/10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
          <img src={logo} alt={company.name} className="h-14 md:h-16 w-auto brightness-0 invert" />
          <div className="text-center md:text-right">
            <p className="text-sm text-background-muted">{company.address.street}, {company.address.zip} {company.address.city}</p>
            <p className="text-sm text-background-muted mt-1">&copy; {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
