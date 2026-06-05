import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

export default function Intro({ onNext }) {
  return (
    <section className="hero-section" id="inicio">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <span className="eyebrow">Um presente digital</span>
        <h1>Para o meu presentinho de mamãe Obá</h1>
        <p>
          Uma retrospectiva feita com carinho para lembrar o quanto a nossa
          história é especial.
        </p>
        <button className="primary-action" type="button" onClick={onNext}>Abrir surpresa</button>
      </motion.div>

      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ delay: 0.2, duration: 0.9 }}
      >
        <img src={heroImage} alt="Memoria especial do casal" />
        <span>Nossa história</span>
      </motion.div>
    </section>
  )
}
