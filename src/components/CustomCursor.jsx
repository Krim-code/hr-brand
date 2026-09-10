import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.3,
  })

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.3,
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        'a, button, [data-cursor-hover], input, textarea, select'
      )

      setHovered(Boolean(target))
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: hovered ? 54 : 14,
          height: hovered ? 54 : 14,
          opacity: hovered ? 0.18 : 1,
        }}
        transition={{
          duration: 0.18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 mix-blend-difference md:block"
      />

      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white md:block"
      />
    </>
  )
}

