import { motion } from "framer-motion";
import wrappedData from "../data/wrappedData";

export default function Wrapped() {
  return (
    <section className="section wrapped-section" id="wrapped">
      <span className="eyebrow">Retrospectiva</span>
      <h2>Nosso love wrapped</h2>

      <div className="wrapped-grid">
        {wrappedData.map((item, index) => (
          <motion.article
            className="wrapped-card"
            key={item.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <span>{item.kicker}</span>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
