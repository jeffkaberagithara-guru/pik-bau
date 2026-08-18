import { motion } from "framer-motion";
import { references } from "../data/content";

function ReferenceCard({ reference, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden mb-4">
        <img
          src={reference.image}
          alt={`${reference.title} — ${reference.category}`}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-light text-foreground mb-1">
            {reference.title}
          </h3>
          <p className="label">{reference.category}</p>
        </div>
        <span className="label tabular-nums">{reference.year}</span>
      </div>
    </motion.article>
  );
}

export default function Referenzen() {
  return (
    <section id="referenzen" className="section-padding-y bg-background">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="label block mb-4">Referenzen</span>
          <h2 className="heading-lg">Ausgewählte Projekte</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {references.map((reference, index) => (
            <ReferenceCard key={reference.id} reference={reference} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}