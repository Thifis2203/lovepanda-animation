import { motion } from "framer-motion";
import timelineData from "../data/timelineData";

export default function Timeline() {
  return (
    <section className="section timeline-section" id="historia">
      <span className="eyebrow">Linha do tempo</span>
      <h2>Nossa história</h2>

      <div className="timeline-list">
        {timelineData.map((item, index) => (
          <motion.div
            key={`${item.date}-${item.title}`}
            className="timeline-item"
            initial={{ x: index % 2 === 0 ? -70 : 70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
          >
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
