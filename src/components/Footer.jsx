import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import Marquee from './Marquee'

const navigation = [
  ['О нас', '/about'],
  ['Вакансии', '/jobs'],
  ['Команда', '/team'],
  ['Бенефиты', '/benefits'],
  ['Контакты', '/contacts'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#002D74]/10 bg-[#002D74] text-white">
      <Marquee
        speed={28}
        items={[
          'BUILD',
          'CREATE',
          'SHIP',
          'LEARN',
          'GROW',
          'REPEAT',
          'TOGETHER',
        ]}
      />

      <div className="relative px-6 py-24">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#A3D300]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                <span className="h-2 w-2 rounded-full bg-[#A3D300]" />
                Open for new people
              </div>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl xl:text-[90px]">
                Может,
                <br />
                <span className="text-white/25">
                  пора работать
                </span>
                <br />
                вместе?
              </h2>

              <Link
                to="/jobs"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#A3D300] px-7 py-4 font-black text-[#002D74] transition duration-200 hover:scale-[1.02] hover:bg-[#95C100]"
              >
                Смотреть вакансии

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  Navigation
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {navigation.map(([label, href]) => (
                    <Link
                      key={href}
                      to={href}
                      className="group flex items-center justify-between border-b border-white/10 py-3 text-white/65 transition hover:border-white/20 hover:text-white"
                    >
                      <span>{label}</span>

                      <ArrowUpRight
                        size={15}
                        className="text-white/25 transition group-hover:text-[#A3D300]"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  Contact
                </div>

                <div className="mt-6 space-y-6">
                  <a
                    href="mailto:hello@human-core.ru"
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#A3D300] transition group-hover:border-[#A3D300]/40 group-hover:bg-[#A3D300]/10">
                      <Mail size={17} />
                    </div>

                    <div>
                      <div className="text-xs text-white/35">
                        General
                      </div>

                      <div className="mt-1 font-medium text-white/70 transition group-hover:text-white">
                        hello@human-core.ru
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#A3D300]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <div className="text-xs text-white/35">
                        Office
                      </div>

                      <div className="mt-1 font-medium text-white/70">
                        Moscow / Remote
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-white/10 pt-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A3D300] text-sm font-black text-[#002D74]">
                  H
                </div>

                <div className="font-black tracking-[-0.04em]">
                  HUMAN
                  <span className="text-[#A3D300]">/</span>
                  CORE
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-xs text-white/35">
                <span>
                  © {new Date().getFullYear()} HUMAN/CORE
                </span>

                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Personal data
                </a>

                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Cookies
                </a>
              </div>

              <div className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                Built for people
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10 py-8">
        <div className="whitespace-nowrap text-center text-[12vw] font-black leading-none tracking-[-0.08em] text-white/[0.035]">
          HUMAN/CORE
        </div>
      </div>
    </footer>
  )
}