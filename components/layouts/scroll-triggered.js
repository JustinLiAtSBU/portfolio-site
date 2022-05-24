import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  visible: { opacity: 1, x: 0, y: 0 },
}

const ScrollTriggered = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.2, type: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollTriggered