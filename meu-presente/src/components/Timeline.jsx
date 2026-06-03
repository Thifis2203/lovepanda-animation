import { motion } from "framer-motion";
import timelineData from "../data/timelineData";

export default function Timeline() {

  return (
    <section
      style={{
        padding:"50px"
      }}
    >
      <h1>✨ Nossa História ✨</h1>

      {timelineData.map((item,index)=>(
        <motion.div
          key={index}
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.8}}
          style={{
            marginTop:"30px",
            padding:"20px",
            background:"rgba(255,255,255,.15)",
            borderRadius:"20px"
          }}
        >
          <h3>{item.date}</h3>
          <p>{item.title}</p>
        </motion.div>
      ))}
    </section>
  )
}