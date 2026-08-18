import { motion } from "framer-motion";
import { company } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop"
          alt="Moderne Architektur mit klaren Linien und viel Tageslicht"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-16 md:pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label block mb-4">{company.tagline}</span>
          <h1 className="heading-xl max-w-4xl">
            Wir verwirklichen{" "}
            <span className="font-[family-name:var(--font-serif)] italic">
              Ihre Vision
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-cta-bg text-cta-text text-sm font-medium tracking-wide hover:bg-foreground transition-colors duration-300"
          >
            Projekt besprechen
          </a>
          <a
            href="#referenzen"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Referenzen ansehen
          </a>
        </motion.div>
      </div>
    </section>
  );
}