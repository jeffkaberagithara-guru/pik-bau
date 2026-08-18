import { motion } from "framer-motion";
import { company } from "../data/content";

export default function Introduction() {
  return (
    <section className="section-padding-y bg-background">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop&q=80"
                alt="Bauarbeiter bei der Arbeit"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-28 sm:w-32 h-28 sm:h-32 bg-background-alt border border-border-subtle flex items-center justify-center shadow-sm">
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl font-light text-foreground">25+</span>
                <span className="label">Jahre</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="heading-lg max-w-lg mb-6 sm:mb-8">
              Bauen mit Weitblick.{" "}
              <span className="font-[family-name:var(--font-serif)] italic">
                Handwerk mit Haltung.
              </span>
            </h2>
            <p className="body-text mb-8 sm:mb-10">{company.description}</p>
            <div className="flex items-center gap-6 sm:gap-8 text-sm">
              <div>
                <span className="block text-2xl sm:text-3xl font-light text-foreground">150+</span>
                <span className="label">Projekte</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div>
                <span className="block text-2xl sm:text-3xl font-light text-foreground">40+</span>
                <span className="label">Mitarbeiter</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
