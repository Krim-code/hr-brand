import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Globe2,
  Zap,
  Users,
} from 'lucide-react'

import Marquee from '../components/Marquee'
import Magnetic from '../components/Magnetic'
import { jobs } from '../data/jobs'

export default function Home() {
  const featuredJobs = jobs
    .filter((job) => job.featured)
    .slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="bg-grid relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-20 pt-32">
        <div className="absolute left-[5%] top-[18%] h-96 w-96 rounded-full bg-[#A3D300]/15 blur-[150px]" />
        <div className="absolute bottom-[5%] right-[4%] h-[420px] w-[420px] rounded-full bg-[#4A6896]/12 blur-[160px]" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#002D74]/10 bg-white/75 px-4 py-2 text-sm text-[#4A6896] shadow-[0_8px_30px_rgba(0,45,116,0.06)] backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A3D300] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3D300]" />
              </span>

              Hiring now

              <span className="text-[#002D74]/20">/</span>

              <span className="text-[#4A6896]">
                {jobs.length} open positions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.075em] text-[#002D74] md:text-8xl xl:text-[118px]"
            >
              WORK
              <br />
              WITHOUT
              <br />
              <span className="text-[#A3D300]">
                BORING.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-8 md:flex-row md:items-end"
            >
              <p className="max-w-xl text-lg leading-relaxed text-[#4A6896]">
                Создаём цифровые продукты, развиваем технологии и строим
                команду, в которой сильным людям не мешают нормально работать.
              </p>

              <Magnetic strength={0.18}>
                <Link
                  to="/jobs"
                  className="group flex shrink-0 items-center gap-3 text-lg font-bold text-[#002D74]"
                >
                  Смотреть вакансии

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#002D74] text-white transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-[#A3D300] group-hover:text-[#002D74]">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* HERO CARD */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{
                opacity: 0,
                rotate: 8,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                rotate: 3,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative aspect-[4/5] overflow-hidden rounded-[42px] bg-gradient-to-br from-[#A3D300] via-[#B9DF35] to-[#E7F2A8] shadow-[0_30px_100px_rgba(0,45,116,0.14)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.65),transparent_30%)]" />

              <div className="absolute inset-0 flex flex-col justify-between p-9 text-[#002D74]">
                <div className="flex justify-between">
                  <span className="rounded-full border border-[#002D74]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]">
                    People first
                  </span>

                  <span className="text-6xl font-black tracking-[-0.06em]">
                    01
                  </span>
                </div>

                <div>
                  <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
                    Rule number one
                  </div>

                  <div className="text-5xl font-black leading-[0.88] tracking-[-0.065em]">
                    NO
                    <br />
                    CORPORATE
                    <br />
                    BULLSHIT
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-16 top-24 rounded-full border border-[#002D74]/10 bg-white/90 px-5 py-3 text-sm font-bold text-[#002D74] shadow-xl backdrop-blur-xl"
            >
              120+ talents
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-10 bottom-24 rounded-full bg-[#A3D300] px-5 py-3 text-sm font-black text-[#002D74] shadow-xl"
            >
              {jobs.length} OPEN ROLES
            </motion.div>

            <motion.div
              animate={{
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 left-10 rounded-2xl border border-[#002D74]/10 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[#4A6896]">
                Work mode
              </div>

              <div className="mt-1 font-bold text-[#002D74]">
                Remote / Hybrid
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        speed={24}
        items={[
          'REMOTE FIRST',
          'PRODUCT THINKING',
          'ENGINEERING CULTURE',
          'NO MICROMANAGEMENT',
          'PEOPLE FIRST',
          'SHIP FAST',
          'OWN THE RESULT',
          'BUILD TOGETHER',
        ]}
      />

      {/* STATS */}
      <section className="border-b border-[#002D74]/10 bg-[#F7F9FC]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Stat number="120+" label="людей" />
          <Stat number="17" label="городов" />
          <Stat number="4.8" label="eNPS" />
          <Stat number="72%" label="remote" />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-5xl">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#A3D300]">
              Почему мы
            </div>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#002D74] md:text-7xl">
              Работа должна
              <br />
              давать энергию.
              <span className="text-[#4A6896]/45">
                {' '}Не жрать её.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Feature
              icon={<Zap />}
              number="01"
              title="Решаем быстро"
              text="Минимум согласований, максимум здравого смысла. Если решение можно принять сегодня — не переносим его на следующую неделю."
            />

            <Feature
              icon={<Users />}
              number="02"
              title="Сильная команда"
              text="Работаешь с людьми, у которых можно учиться. Должность здесь не делает аргумент автоматически правильным."
            />

            <Feature
              icon={<Globe2 />}
              number="03"
              title="Работай откуда хочешь"
              text="Нас интересует результат, а не география твоего стула и количество зелёных кружков в мессенджере."
            />
          </div>
        </div>
      </section>

      {/* KPI CARDS */}
      <section className="bg-white px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-glow rounded-[36px] border border-[#002D74]/10 bg-[#F7F9FC] p-8">
              <div className="text-[82px] font-black leading-none tracking-[-0.08em] text-[#A3D300] md:text-[100px]">
                72%
              </div>

              <div className="mt-7 text-xl font-bold text-[#002D74]">
                команды работает удалённо
              </div>

              <p className="mt-3 leading-relaxed text-[#4A6896]">
                География перестала быть ограничением раньше, чем это стало модным.
              </p>
            </div>

            <div className="card-glow rounded-[36px] border border-[#002D74]/10 bg-[#F7F9FC] p-8">
              <div className="text-[82px] font-black leading-none tracking-[-0.08em] text-[#002D74] md:text-[100px]">
                17
              </div>

              <div className="mt-7 text-xl font-bold text-[#002D74]">
                городов
              </div>

              <p className="mt-3 leading-relaxed text-[#4A6896]">
                Команды распределены, процессы построены вокруг асинхронности и доверия.
              </p>
            </div>

            <div className="rounded-[36px] bg-[#A3D300] p-8 text-[#002D74]">
              <div className="text-[82px] font-black leading-none tracking-[-0.08em] md:text-[100px]">
                {jobs.length}
              </div>

              <div className="mt-7 text-xl font-bold">
                открытых вакансий
              </div>

              <p className="mt-3 leading-relaxed text-[#002D74]/65">
                И одна из них вполне может оказаться той самой.
              </p>

              <Link
                to="/jobs"
                className="mt-8 inline-flex items-center gap-2 font-bold"
              >
                Смотреть все
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <Marquee
        reverse
        speed={32}
        items={[
          'REACT',
          'TYPESCRIPT',
          'PYTHON',
          'POSTGRESQL',
          'DOCKER',
          'KUBERNETES',
          'FIGMA',
          'GITLAB CI',
          'PROMETHEUS',
          'GRAFANA',
          'ANSIBLE',
          'LINUX',
        ]}
      />

      {/* FEATURED JOBS */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
                Featured openings
              </div>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#002D74] md:text-7xl">
                Ищем тех,
                <span className="text-[#4A6896]/45">
                  {' '}кто хочет влиять.
                </span>
              </h2>
            </div>

            <Link
              to="/jobs"
              className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-[#002D74]"
            >
              Все вакансии

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#002D74]/15 transition group-hover:border-[#A3D300] group-hover:bg-[#A3D300]">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <Link
                key={job.slug}
                to={`/jobs/${job.slug}`}
                className="card-glow group flex min-h-[370px] flex-col justify-between rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#002D74]/20 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,45,116,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#A3D300]">
                      {job.department}
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#002D74]/10 text-[#002D74] transition group-hover:border-[#A3D300] group-hover:bg-[#A3D300]">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-[#002D74]">
                    {job.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(job.tags || []).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#002D74]/10 bg-white px-3 py-1 text-xs text-[#4A6896]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-[#4A6896]">
                    <BriefcaseBusiness size={15} />
                    {job.location}
                  </div>

                  <div className="mt-3 text-xl font-bold text-[#002D74]">
                    {job.salary}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="bg-[#F7F9FC] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              Hiring process
            </div>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#002D74] md:text-7xl">
              Без семи кругов
              <span className="text-[#4A6896]/45">
                {' '}собеседований.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              [
                '01',
                'Знакомство',
                '30 минут с рекрутером. Обсуждаем ожидания, опыт и контекст.',
              ],
              [
                '02',
                'Команда',
                'Говорим о задачах, подходах, технологиях и том, как реально устроена работа.',
              ],
              [
                '03',
                'Практика',
                'Короткая практическая часть или разбор кейса без бесплатного production.',
              ],
              [
                '04',
                'Оффер',
                'Фиксируем условия, формат работы и договариваемся о дате старта.',
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="card-glow group rounded-[28px] border border-[#002D74]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#002D74]/20 hover:shadow-[0_20px_50px_rgba(0,45,116,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black text-[#A3D300]">
                    {number}
                  </div>

                  <div className="h-2 w-2 rounded-full bg-[#002D74]/10 transition group-hover:bg-[#A3D300]" />
                </div>

                <h3 className="mt-14 text-2xl font-bold tracking-[-0.03em] text-[#002D74]">
                  {title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#4A6896]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              Inside the team
            </div>

            <h2 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-[#002D74] md:text-7xl">
              Что говорят
              <span className="text-[#4A6896]/45">
                {' '}люди внутри.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Quote
              text="Здесь реально можно спорить с руководителем и не получить квест на увольнение."
              name="Михаил"
              role="Backend Lead"
            />

            <Quote
              text="Меньше процессов ради процессов. Больше ответственности и нормальной инженерии."
              name="Елена"
              role="Product Designer"
            />

            <Quote
              text="Удалёнка здесь — это не бонус. Это просто нормальный способ работать."
              name="Андрей"
              role="DevOps Engineer"
            />
          </div>
        </div>
      </section>

      {/* GIANT KINETIC TEXT */}
      <section className="overflow-hidden bg-white py-16 md:py-24">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex w-max whitespace-nowrap"
        >
          {[0, 1].map((item) => (
            <div
              key={item}
              className="flex items-center gap-12 pr-12"
            >
              <span className="text-[14vw] font-black leading-none tracking-[-0.08em] text-[#002D74]/5">
                BUILD
              </span>

              <span className="text-[14vw] font-black leading-none tracking-[-0.08em] text-[#A3D300]">
                TOGETHER
              </span>

              <span className="text-[14vw] font-black leading-none tracking-[-0.08em] text-[#002D74]/5">
                GROW
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#A3D300] px-8 py-16 text-[#002D74] md:px-16 md:py-20">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 text-sm font-bold uppercase tracking-[0.25em]">
                Open positions
              </div>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Возможно, следующая глава — твоя.
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-[#002D74]/65">
                Если среди вакансий есть что-то близкое — откликайся.
                Не обязательно совпадать с описанием на сто процентов.
              </p>
            </div>

            <Magnetic strength={0.16}>
              <Link
                to="/jobs"
                className="flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#002D74] px-7 py-4 font-bold text-white transition hover:scale-[1.02]"
              >
                Все вакансии
                <ArrowRight size={18} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ number, label }) {
  return (
    <div className="border-[#002D74]/10 p-8 md:border-r md:p-10">
      <div className="text-4xl font-black tracking-[-0.05em] text-[#002D74] md:text-5xl">
        {number}
      </div>

      <div className="mt-2 text-sm text-[#4A6896]">
        {label}
      </div>
    </div>
  )
}

function Feature({
  icon,
  number,
  title,
  text,
}) {
  return (
    <div className="card-glow group rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#002D74]/20 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,45,116,0.08)]">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3D300] text-[#002D74]">
          {icon}
        </div>

        <div className="text-sm font-black text-[#002D74]/20">
          {number}
        </div>
      </div>

      <h3 className="mt-16 text-2xl font-bold tracking-[-0.03em] text-[#002D74]">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-[#4A6896]">
        {text}
      </p>
    </div>
  )
}

function Quote({
  text,
  name,
  role,
}) {
  return (
    <div className="card-glow flex min-h-[320px] flex-col justify-between rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition hover:border-[#002D74]/20 hover:bg-white">
      <div className="text-2xl font-semibold leading-snug tracking-[-0.035em] text-[#002D74]">
        “{text}”
      </div>

      <div>
        <div className="font-bold text-[#002D74]">
          {name}
        </div>

        <div className="mt-1 text-sm text-[#4A6896]">
          {role}
        </div>
      </div>
    </div>
  )
}