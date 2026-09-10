import { useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react'

export default function Contacts() {
  const [sent, setSent] = useState(false)

  return (
    <section className="min-h-screen bg-white px-6 pb-32 pt-40 text-[#002D74]">
      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-[#A3D300]/15 blur-[130px]" />
          <div className="absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-[#4A6896]/12 blur-[140px]" />

          <div className="relative">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              Contacts / Say hello
            </div>

            <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#002D74] md:text-8xl xl:text-[100px]">
              Давай
              <span className="text-[#4A6896]/45"> поговорим.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#4A6896]">
              По вакансии, партнёрству, продукту или просто если есть что сказать.
              Письма не проваливаются в корпоративную чёрную дыру — мы реально их читаем.
            </p>
          </div>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid gap-4 lg:grid-cols-3">
          <ContactCard
            icon={<BriefcaseBusiness />}
            label="Careers"
            title="Хочешь к нам?"
            text="Вопросы по вакансиям, процессу найма и откликам."
            action="jobs@human-core.ru"
            href="mailto:jobs@human-core.ru"
          />

          <ContactCard
            icon={<Building2 />}
            label="Business"
            title="По партнёрству"
            text="Интеграции, совместные проекты и коммерческие предложения."
            action="hello@human-core.ru"
            href="mailto:hello@human-core.ru"
          />

          <ContactCard
            icon={<MessageCircle />}
            label="Press & media"
            title="Медиа и PR"
            text="Комментарии, интервью и всё, что связано с публичными коммуникациями."
            action="press@human-core.ru"
            href="mailto:press@human-core.ru"
          />
        </div>

        {/* FORM + OFFICE */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[36px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 md:p-10">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#A3D300]">
              Write to us
            </div>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[#002D74] md:text-5xl">
              Напиши сообщение
            </h2>

            {!sent ? (
              <form
                className="mt-10 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Имя">
                    <input
                      required
                      type="text"
                      placeholder="Алексей"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      required
                      type="email"
                      placeholder="you@human-core.ru"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Тема">
                  <select
                    className={inputClass}
                    defaultValue="career"
                  >
                    <option value="career">
                      Вакансии
                    </option>

                    <option value="business">
                      Партнёрство
                    </option>

                    <option value="press">
                      Медиа
                    </option>

                    <option value="other">
                      Другое
                    </option>
                  </select>
                </Field>

                <Field label="Сообщение">
                  <textarea
                    required
                    rows="6"
                    placeholder="Расскажи, с чем пришёл..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <label className="flex items-start gap-3 text-xs leading-relaxed text-[#4A6896]">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#A3D300]"
                  />

                  <span>
                    Я согласен на обработку персональных данных для обратной связи.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-[#A3D300] px-7 py-4 font-bold text-[#002D74] transition hover:scale-[1.02] hover:bg-[#95C100]"
                >
                  Отправить
                  <Send size={18} />
                </button>
              </form>
            ) : (
              <div className="mt-10 flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-[#A3D300]/30 bg-[#A3D300]/8 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#A3D300] text-[#002D74]">
                  <Send size={30} />
                </div>

                <h3 className="mt-7 text-4xl font-black tracking-[-0.05em] text-[#002D74]">
                  Сообщение улетело.
                </h3>

                <p className="mt-4 max-w-md leading-relaxed text-[#4A6896]">
                  Мы уже получили его. Если там не предложение купить базу клиентов
                  и не письмо от «службы безопасности Telegram», скоро ответим.
                </p>

                <div className="mt-6 rounded-full border border-[#002D74]/10 bg-white px-4 py-2 text-xs text-[#4A6896]">
                  Обычно отвечаем в течение 1–2 рабочих дней
                </div>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-[#002D74]/15 px-6 py-3 text-sm font-medium text-[#002D74] transition hover:border-[#002D74]/25 hover:bg-white"
                >
                  Отправить ещё одно
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-[36px] bg-[#A3D300] p-8 text-[#002D74] md:p-10">
              <div className="text-sm font-bold uppercase tracking-[0.2em]">
                Office
              </div>

              <h3 className="mt-5 text-4xl font-black tracking-[-0.05em]">
                Москва
              </h3>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <div className="font-bold">
                      БЦ Example Tower
                    </div>

                    <div className="mt-1 text-sm text-[#002D74]/65">
                      Москва, Пресненская набережная, 8
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <div className="font-bold">
                      Общие вопросы
                    </div>

                    <div className="mt-1 text-sm text-[#002D74]/65">
                      hello@human-core.ru
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="mailto:hello@human-core.ru"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#002D74] px-6 py-3 font-bold text-white transition hover:scale-[1.02]"
              >
                Написать нам
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#4A6896]">
                Response time
              </div>

              <div className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#002D74]">
                Обычно отвечаем
                <br />
                в течение 1–2 дней.
              </div>

              <p className="mt-4 leading-relaxed text-[#4A6896]">
                По вакансиям иногда быстрее. По пятницам вечером — ну тут как повезёт.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 rounded-[40px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#A3D300]">
                FAQ
              </div>

              <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-[#002D74]">
                Частые вопросы
              </h2>
            </div>

            <div className="divide-y divide-[#002D74]/10">
              <Faq
                question="Можно написать напрямую по вакансии?"
                answer="Да. Если вакансия открыта, можно откликнуться через сайт или написать на карьерную почту."
              />

              <Faq
                question="Вы рассматриваете удалённый формат?"
                answer="Да, для большинства технических и продуктовых ролей удалённый формат возможен."
              />

              <Faq
                question="Можно отправить резюме без конкретной вакансии?"
                answer="Можно. Если подходящей позиции сейчас нет, мы всё равно можем сохранить контакт и вернуться позже."
              />

              <Faq
                question="Есть ли тестовое задание?"
                answer="Зависит от позиции. Если оно есть, стараемся делать его коротким и максимально приближенным к реальной работе."
              />
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-24 overflow-hidden rounded-[40px] bg-[#002D74] p-8 text-white md:p-14">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#A3D300]">
                Careers
              </div>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Возможно, нам уже пора познакомиться.
              </h2>
            </div>

            <a
              href="/jobs"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#A3D300] px-7 py-4 font-bold text-[#002D74] transition hover:scale-[1.02] hover:bg-[#95C100]"
            >
              Смотреть вакансии
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  title,
  text,
  action,
  href,
}) {
  return (
    <a
      href={href}
      className="group rounded-[30px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#002D74]/20 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,45,116,0.08)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3D300] text-[#002D74]">
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="text-[#4A6896]/35 transition group-hover:text-[#A3D300]"
        />
      </div>

      <div className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#4A6896]">
        {label}
      </div>

      <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#002D74]">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-[#4A6896]">
        {text}
      </p>

      <div className="mt-8 font-medium text-[#A3D300]">
        {action}
      </div>
    </a>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#002D74]/75">
        {label}
      </span>

      {children}
    </label>
  )
}

function Faq({
  question,
  answer,
}) {
  return (
    <div className="py-6">
      <div className="text-lg font-bold text-[#002D74]">
        {question}
      </div>

      <p className="mt-3 max-w-2xl leading-relaxed text-[#4A6896]">
        {answer}
      </p>
    </div>
  )
}

const inputClass =
  'w-full rounded-2xl border border-[#002D74]/10 bg-white px-4 py-3.5 text-[#002D74] outline-none transition placeholder:text-[#4A6896]/50 hover:border-[#002D74]/20 focus:border-[#A3D300] focus:ring-4 focus:ring-[#A3D300]/10'