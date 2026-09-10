import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
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
        <div className="border-b border-white/10 bg-[#002D74] px-4 py-2 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between text-[11px] font-black uppercase tracking-[0.15em]">
            <span>
              HUMAN/CORE — Careers
            </span>

            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A3D300] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3D300]" />
              </span>
              Hiring now
            </span>

            <span className="hidden text-white/65 md:block">
              Remote / Hybrid / Moscow
            </span>
          </div>
        </div>

        <div className="border-b border-[#002D74]/10 bg-white/85 shadow-[0_8px_30px_rgba(0,45,116,0.05)] backdrop-blur-2xl">
          <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
            <Link
              to="/"
              className="group relative z-[70] flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A3D300] font-black text-[#002D74] transition duration-200 group-hover:rotate-6">
                H
              </div>

              <div className="text-lg font-black tracking-[-0.05em] text-[#002D74]">
                HUMAN
                <span className="text-[#A3D300]">/</span>
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
                        ? 'bg-[#002D74] text-white'
                        : 'text-[#4A6896] hover:bg-[#002D74]/5 hover:text-[#002D74]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center gap-2 rounded-full border border-[#002D74]/10 bg-[#F7F9FC] px-3 py-2 text-xs text-[#4A6896]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A3D300]" />
                6 open roles
              </div>

              <Magnetic strength={0.22}>
                <Link
                  to="/jobs"
                  className="group flex items-center gap-2 rounded-full bg-[#A3D300] px-5 py-3 text-sm font-black text-[#002D74] transition duration-200 hover:scale-[1.02] hover:bg-[#95C100]"
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
              className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-[#002D74]/10 bg-[#F7F9FC] text-[#002D74] transition hover:border-[#002D74]/20 hover:bg-[#EEF3F8] lg:hidden"
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
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="absolute left-[5%] top-[18%] h-72 w-72 rounded-full bg-[#A3D300]/12 blur-[120px]" />
            <div className="absolute bottom-[8%] right-[5%] h-72 w-72 rounded-full bg-[#4A6896]/12 blur-[130px]" />

            <div className="relative flex min-h-screen flex-col px-6 pb-8 pt-[140px]">
              <div className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-[#A3D300]">
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
                        `group flex items-center justify-between border-b border-[#002D74]/10 py-5 text-4xl font-black tracking-[-0.05em] transition ${
                          isActive
                            ? 'text-[#A3D300]'
                            : 'text-[#002D74] hover:text-[#A3D300]'
                        }`
                      }
                    >
                      <span>
                        {label}
                      </span>

                      <ArrowUpRight
                        size={22}
                        className="text-[#4A6896]/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A3D300]"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="mb-6 rounded-[28px] border border-[#002D74]/10 bg-[#F7F9FC] p-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4A6896]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A3D300] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3D300]" />
                    </span>
                    Hiring now
                  </div>

                  <div className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#002D74]">
                    6 открытых
                    <br />
                    вакансий.
                  </div>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#4A6896]">
                    Development, Infrastructure, Design, Product и People.
                  </p>
                </div>

                <Link
                  to="/jobs"
                  className="flex w-full items-center justify-between rounded-[22px] bg-[#A3D300] px-6 py-5 font-black text-[#002D74] transition hover:bg-[#95C100]"
                >
                  Смотреть вакансии
                  <ArrowUpRight size={19} />
                </Link>

                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-[#4A6896]/65">
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