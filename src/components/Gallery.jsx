import { motion } from "framer-motion";
import galleryData from "../data/galleryData";

export default function Gallery() {
  return (
    <section className="section gallery-section" id="fotos">
      <span className="eyebrow">Album de memórias</span>
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
            {photo.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={photo.poster}
                preload="metadata"
              >
                <source src={photo.video} type="video/mp4" />
                Seu navegador não suporta este vídeo.
              </video>
            ) : (
              <img src={photo.image} alt={photo.title} />
            )}
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
