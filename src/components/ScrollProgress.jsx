import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
      }}
     className="fixed left-0 right-0 top-0 z-[9999] h-[3px] bg-[#A3D300] shadow-[0_0_14px_rgba(163,211,0,0.45)]"
    />
  )
}