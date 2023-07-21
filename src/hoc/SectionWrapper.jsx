import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => {
  const hoc = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span
          className="hash-span"
          id={idName}
        >
          {" "}
        </span>
        <Component />
      </motion.section>
    )
  }
  return hoc
}

export default SectionWrapper
