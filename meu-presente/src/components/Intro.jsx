import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <motion.h1
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        ❤️ Para o Amor da Minha Vida ❤️
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
      >
        Uma surpresa feita especialmente para você
      </motion.p>
    </section>
  )
}