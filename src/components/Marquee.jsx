import { motion } from 'framer-motion'

export default function Marquee({
  items = [],
  speed = 25,
  reverse = false,
  className = '',
}) {
  const content = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden border-y border-[#002D74]/10 bg-[#F7F9FC] ${className}`}
    >
      <motion.div
        className="flex w-max items-center whitespace-nowrap"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {content.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-8 py-5"
          >
            <span className="text-xl font-black uppercase tracking-[-0.03em] text-[#002D74]/75 md:text-2xl">
              {item}
            </span>

            <span className="text-2xl text-[#A3D300]">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7F9FC] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7F9FC] to-transparent" />
    </div>
  )
}