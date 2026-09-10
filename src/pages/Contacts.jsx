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
    <section className="min-h-screen px-6 pb-32 pt-40">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
            Contacts / Say hello
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl xl:text-[100px]">
            Давай
            <span className="text-white/20"> поговорим.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/45">
            По вакансии, партнёрству, продукту или просто если есть что сказать.
            Письма не проваливаются в корпоративную чёрную дыру — мы реально их читаем.
          </p>
        </div>

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

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.025] p-8 md:p-10">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Write to us
            </div>

            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
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

                <label className="flex items-start gap-3 text-xs leading-relaxed text-white/35">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />

                  <span>
                    Я согласен на обработку персональных данных для обратной связи.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:scale-[1.02]"
                >
                  Отправить
                  <Send size={18} />
                </button>
              </form>
            ) : (
              <div className="mt-10 flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-lime-400/20 bg-lime-400/[0.04] p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black">
                  <Send size={30} />
                </div>

                <h3 className="mt-7 text-4xl font-black tracking-[-0.05em]">
                  Сообщение улетело.
                </h3>

                <p className="mt-4 max-w-md leading-relaxed text-white/45">
                  Мы уже получили его. Если там не предложение купить базу клиентов
                  и не письмо от «службы безопасности Telegram», скоро ответим.
                </p>

                <div className="mt-6 rounded-full border border-white/10 px-4 py-2 text-xs text-white/30">
                  Обычно отвечаем в течение 1–2 рабочих дней
                </div>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Отправить ещё одно
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-[36px] bg-lime-400 p-8 text-black md:p-10">
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

                    <div className="mt-1 text-sm text-black/60">
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

                    <div className="mt-1 text-sm text-black/60">
                      hello@human-core.ru
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="mailto:hello@human-core.ru"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white"
              >
                Написать нам
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-8">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/30">
                Response time
              </div>

              <div className="mt-5 text-3xl font-black tracking-[-0.04em]">
                Обычно отвечаем
                <br />
                в течение 1–2 дней.
              </div>

              <p className="mt-4 leading-relaxed text-white/40">
                По вакансиям иногда быстрее. По пятницам вечером — ну тут как повезёт.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 rounded-[40px] border border-white/10 bg-white/[0.025] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-lime-400">
                FAQ
              </div>

              <h2 className="mt-5 text-5xl font-black tracking-[-0.05em]">
                Частые вопросы
              </h2>
            </div>

            <div className="divide-y divide-white/10">
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

        <div className="mt-24 overflow-hidden rounded-[40px] bg-lime-400 p-8 text-black md:p-14">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.22em]">
                Careers
              </div>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Возможно, нам уже пора познакомиться.
              </h2>
            </div>

            <a
              href="/jobs"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 font-bold text-white transition hover:scale-[1.02]"
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
      className="group rounded-[30px] border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-black">
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="text-white/20 transition group-hover:text-lime-400"
        />
      </div>

      <div className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
        {label}
      </div>

      <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-white/40">
        {text}
      </p>

      <div className="mt-8 font-medium text-lime-400">
        {action}
      </div>
    </a>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/60">
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
      <div className="text-lg font-bold">
        {question}
      </div>

      <p className="mt-3 max-w-2xl leading-relaxed text-white/40">
        {answer}
      </p>
    </div>
  )
}

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-lime-400'
