import { motion } from "framer-motion";
import galleryData from "../data/galleryData";

export default function Gallery() {
  return (
    <section className="section gallery-section" id="fotos">
      <span className="eyebrow">Album de memorias</span>
      <h2>Nossos momentos favoritos</h2>

      <div className="gallery-grid">
        {galleryData.map((photo, index) => (
          <motion.article
            className="memory-card"
            key={photo.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
          >
            <img src={photo.image} alt={photo.title} />
            <div>
              <span>{photo.date}</span>
              <h3>{photo.title}</h3>
              <p>{photo.caption}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
