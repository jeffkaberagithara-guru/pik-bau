import { motion } from "framer-motion";
import { partners } from "../data/content";

function PartnerItem({ partner, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="py-5 sm:py-6 border-b border-border-subtle last:border-b-0"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-background rounded-full overflow-hidden border border-border-subtle">
          <img
            src={partner.image}
            alt={partner.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-light text-foreground">{partner.name}</h3>
          <p className="label mt-0.5 sm:mt-1 truncate">{partner.specialty}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Partner() {
  return (
    <section id="partner" className="section-padding-y bg-background-alt">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <span className="label block mb-3 sm:mb-4">Partner</span>
          <h2 className="heading-lg">Unsere Fachpartner</h2>
        </motion.div>

        <div className="max-w-3xl">
          {partners.map((partner, index) => (
            <PartnerItem key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
