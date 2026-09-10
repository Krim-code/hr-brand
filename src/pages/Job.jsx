import { useState } from 'react'
import { Navigate, Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  MapPin,
  Clock3,
  BriefcaseBusiness,
  WalletCards,
} from 'lucide-react'

import { jobs } from '../data/jobs'
import ApplyModal from '../components/ApplyModal'

export default function Job() {
  const { slug } = useParams()
  const [applyOpen, setApplyOpen] = useState(false)

  const job = jobs.find((item) => item.slug === slug)

  if (!job) {
    return <Navigate to="/jobs" replace />
  }

  return (
    <>
      <section className="min-h-screen bg-white px-6 pb-32 pt-32 text-[#002D74] md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/jobs"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[#4A6896] transition hover:text-[#002D74]"
          >
            <ArrowLeft size={16} />
            Все вакансии
          </Link>

          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#A3D300]">
                  {job.department}
                </div>

                {job.featured && (
                  <span className="rounded-full bg-[#A3D300]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#002D74]">
                    Hot position
                  </span>
                )}
              </div>

              <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#002D74] md:text-8xl">
                {job.title}
              </h1>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <MetaCard
                  icon={<MapPin size={17} />}
                  label="Формат"
                  value={job.location}
                />

                <MetaCard
                  icon={<Clock3 size={17} />}
                  label="Занятость"
                  value={job.type}
                />

                <MetaCard
                  icon={<BriefcaseBusiness size={17} />}
                  label="Уровень"
                  value={job.level}
                />

                <MetaCard
                  icon={<WalletCards size={17} />}
                  label="Доход"
                  value={job.salary}
                />
              </div>

              <div className="mt-20 max-w-4xl">
                <SectionLabel number="01" title="О вакансии" />

                <p className="text-xl leading-relaxed text-[#4A6896]">
                  {job.intro}
                </p>
              </div>

              <div className="mt-20 max-w-4xl">
                <SectionLabel number="02" title="Что предстоит делать" />
                <List items={job.responsibilities} />
              </div>

              <div className="mt-20 max-w-4xl">
                <SectionLabel number="03" title="Что мы ждём" />
                <List items={job.requirements} />
              </div>

              {job.niceToHave?.length > 0 && (
                <div className="mt-20 max-w-4xl">
                  <SectionLabel number="04" title="Будет плюсом" />
                  <List items={job.niceToHave} />
                </div>
              )}

              {job.stack?.length > 0 && (
                <div className="mt-20 max-w-4xl">
                  <SectionLabel number="05" title="Стек и инструменты" />

                  <div className="flex flex-wrap gap-3">
                    {job.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#002D74]/10 bg-[#F7F9FC] px-4 py-2 text-sm text-[#4A6896] transition hover:border-[#A3D300] hover:bg-[#A3D300]/8 hover:text-[#002D74]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-20 max-w-4xl">
                <SectionLabel number="06" title="Что предлагаем" />
                <List items={job.benefits} />
              </div>

              <div className="mt-24 max-w-4xl overflow-hidden rounded-[36px] bg-[#A3D300] p-8 text-[#002D74] md:p-12">
                <div className="text-sm font-bold uppercase tracking-[0.2em]">
                  Sounds good?
                </div>

                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl">
                  Не обязательно совпадать с вакансией на 100%.
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-[#002D74]/65">
                  Если большая часть задач знакома и хочется двигаться дальше —
                  откликайся. Разберёмся в деталях уже на знакомстве.
                </p>

                <button
                  type="button"
                  onClick={() => setApplyOpen(true)}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#002D74] px-7 py-4 font-bold text-white transition hover:scale-[1.02]"
                >
                  Откликнуться
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            <aside>
              <div className="sticky top-28">
                <div className="rounded-[30px] bg-[#002D74] p-7 text-white shadow-[0_24px_70px_rgba(0,45,116,0.16)]">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#A3D300]">
                    Interested?
                  </div>

                  <div className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em]">
                    Давай знакомиться.
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    Заполни короткую форму. Никакой регистрации и анкеты
                    размером с налоговую декларацию.
                  </p>

                  <button
                    type="button"
                    onClick={() => setApplyOpen(true)}
                    className="mt-8 w-full rounded-full bg-[#A3D300] px-5 py-4 font-bold text-[#002D74] transition hover:scale-[1.02] hover:bg-[#95C100]"
                  >
                    Откликнуться
                  </button>
                </div>

                <div className="mt-4 rounded-[26px] border border-[#002D74]/10 bg-[#F7F9FC] p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#4A6896]">
                    Hiring process
                  </div>

                  <div className="mt-5 space-y-5">
                    <ProcessStep number="1" text="Знакомство с рекрутером" />
                    <ProcessStep number="2" text="Интервью с командой" />
                    <ProcessStep number="3" text="Практическая часть" />
                    <ProcessStep number="4" text="Оффер" />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        job={job}
      />
    </>
  )
}

function MetaCard({ icon, label, value }) {
  return (
    <div className="rounded-[24px] border border-[#002D74]/10 bg-[#F7F9FC] p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#4A6896]">
        {icon}
        {label}
      </div>

      <div className="mt-3 font-medium text-[#002D74]">
        {value}
      </div>
    </div>
  )
}

function SectionLabel({ number, title }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-sm font-black text-[#A3D300]">
        {number}
      </span>

      <h2 className="text-3xl font-black tracking-[-0.04em] text-[#002D74] md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function List({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-4 rounded-[22px] border border-[#002D74]/10 bg-[#F7F9FC] p-5 transition hover:border-[#002D74]/20 hover:bg-white"
        >
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A3D300]/15 text-[#002D74]">
            <Check size={14} strokeWidth={3} />
          </div>

          <p className="leading-relaxed text-[#4A6896]">
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}

function ProcessStep({ number, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#002D74]/10 bg-white text-xs font-bold text-[#A3D300]">
        {number}
      </div>

      <div className="text-sm text-[#4A6896]">
        {text}
      </div>
    </div>
  )
}