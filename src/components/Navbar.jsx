import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react'

import Magnetic from './Magnetic'

const links = [
  ['О нас', '/about'],
  ['Вакансии', '/jobs'],
  ['Команда', '/team'],
  ['Бенефиты', '/benefits'],
  ['Контакты', '/contacts'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="border-b border-black/10 bg-lime-400 px-4 py-2 text-black">
          <div className="mx-auto flex max-w-7xl items-center justify-between text-[11px] font-black uppercase tracking-[0.15em]">
            <span>
              HUMAN/CORE — Careers
            </span>

            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
              </span>

              Hiring now
            </span>

            <span className="hidden md:block">
              Remote / Hybrid / Moscow
            </span>
          </div>
        </div>

        <div className="border-b border-white/10 bg-black/65 backdrop-blur-2xl">
          <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
            <Link
              to="/"
              className="group relative z-[70] flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 font-black text-black transition group-hover:rotate-6">
                H
              </div>

              <div className="text-lg font-black tracking-[-0.05em]">
                HUMAN
                <span className="text-lime-400">/</span>
                CORE
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map(([label, href]) => (
                <NavLink
                  key={href}
                  to={href}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-white/45 hover:bg-white/[0.05] hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                6 open roles
              </div>

              <Magnetic strength={0.22}>
                <Link
                  to="/jobs"
                  className="group flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-black text-black transition hover:scale-[1.02]"
                >
                  К нам

                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Magnetic>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
              aria-label="Открыть меню"
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-40 bg-[#080808] lg:hidden"
          >
            <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-lime-400/15 blur-[120px]" />
            <div className="absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-purple-500/10 blur-[130px]" />

            <div className="relative flex min-h-screen flex-col px-6 pb-8 pt-[140px]">
              <div className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-lime-400">
                Navigation
              </div>

              <nav className="flex flex-col">
                {links.map(([label, href], index) => (
                  <motion.div
                    key={href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.04 * index,
                    }}
                  >
                    <NavLink
                      to={href}
                      className={({ isActive }) =>
                        `group flex items-center justify-between border-b border-white/10 py-5 text-4xl font-black tracking-[-0.05em] transition ${
                          isActive
                            ? 'text-lime-400'
                            : 'text-white hover:text-lime-400'
                        }`
                      }
                    >
                      <span>
                        {label}
                      </span>

                      <ArrowUpRight
                        size={22}
                        className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="mb-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/30">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                    </span>

                    Hiring now
                  </div>

                  <div className="mt-4 text-3xl font-black tracking-[-0.04em]">
                    6 открытых
                    <br />
                    вакансий.
                  </div>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/40">
                    Development, Infrastructure, Design, Product и People.
                  </p>
                </div>

                <Link
                  to="/jobs"
                  className="flex w-full items-center justify-between rounded-[22px] bg-lime-400 px-6 py-5 font-black text-black"
                >
                  Смотреть вакансии
                  <ArrowUpRight size={19} />
                </Link>

                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-white/20">
                  <span>
                    HUMAN/CORE
                  </span>

                  <span>
                    Remote / Hybrid
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}