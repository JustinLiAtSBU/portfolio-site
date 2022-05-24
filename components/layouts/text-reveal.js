import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const TextReveal = ({ text, fontSize, stagger }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.8,
        staggerChildren: stagger ? stagger : 0.12
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    },
  }
  const controls = useAnimation(sentence)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.h3
      ref={ref}
      variants={sentence}
      initial="hidden"
      animate={controls}
    >
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={`${char}-${index}`}
            style={{ fontSize: fontSize }}
            variants={letter}
          >
            {char}
          </motion.span>
        )
      })}
    </motion.h3>
  )
}

export default TextReveal