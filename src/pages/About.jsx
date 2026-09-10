import {
  ArrowUpRight,
  Check,
  Globe2,
  HeartHandshake,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'

const values = [
  {
    icon: <Zap size={22} />,
    title: 'Скорость без суеты',
    text: 'Мы быстро принимаем решения, но не путаем скорость с хаосом. Чем меньше лишних согласований — тем больше времени на нормальную работу.',
  },
  {
    icon: <Users size={22} />,
    title: 'Сильные люди рядом',
    text: 'Мы строим команды так, чтобы каждый мог учиться у коллег, спорить по делу и расти не только по должности, но и по уровню мышления.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Ответственность',
    text: 'Свобода работает только вместе с ответственностью. Мы доверяем людям решения и ожидаем такого же отношения к результату.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Без корпоративного театра',
    text: 'Не любим процессы ради процессов, пустые лозунги и презентации на 86 слайдов. Всё, что можно объяснить человеческим языком — объясняем человеческим языком.',
  },
]

const facts = [
  ['120+', 'сотрудников'],
  ['17', 'городов'],
  ['4.8 / 5', 'средняя оценка eNPS'],
  ['72%', 'работают удалённо'],
]

const timeline = [
  {
    year: '2021',
    title: 'Старт',
    text: 'Собрали небольшую команду и запустили первый продукт.',
  },
  {
    year: '2022',
    title: 'Рост',
    text: 'Вышли на несколько направлений и начали расширять продуктовую команду.',
  },
  {
    year: '2024',
    title: 'Платформа',
    text: 'Объединили сервисы в единую платформу и начали системно развивать инфраструктуру.',
  },
  {
    year: '2026',
    title: 'Следующий этап',
    text: 'Масштабируем продукты, команды и внутренние процессы без потери скорости.',
  },
]

const principles = [
  'Можно спорить с руководителем.',
  'Решения объясняются, а не спускаются сверху.',
  'Удалёнка — нормальный формат работы, а не привилегия.',
  'Фокус на результате, а не на количестве часов онлайн.',
  'Ошибки разбираем, а не ищем виноватого.',
  'Хорошая идея важнее должности автора.',
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-6 pb-28 pt-40">
        <div className="absolute left-[10%] top-[15%] h-80 w-80 rounded-full bg-[#A3D300]/15 blur-[130px]" />
        <div className="absolute right-[5%] top-[35%] h-96 w-96 rounded-full bg-[#4A6896]/12 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
            About / HUMAN CORE
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.065em] text-[#002D74] md:text-8xl xl:text-[104px]">
            Строим компанию,
            <br />
            <span className="text-[#4A6896]/45">
              в которой хочется
            </span>
            <br />
            работать.
          </h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <p className="max-w-3xl text-xl leading-relaxed text-[#4A6896]">
              HUMAN/CORE — продуктовая технологическая компания. Мы создаём
              цифровые сервисы, развиваем собственные продукты и строим
              инженерную культуру вокруг автономии, ответственности и здравого
              смысла.
            </p>

            <div className="rounded-[28px] border border-[#002D74]/10 bg-[#F7F9FC] p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#A3D300]">
                <Sparkles size={16} />
                Наша идея
              </div>

              <p className="leading-relaxed text-[#4A6896]">
                Компания должна усиливать человека, а не превращать его
                рабочий день в квест по согласованию согласований.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-y border-[#002D74]/10 bg-[#F7F9FC]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {facts.map(([number, label]) => (
            <div
              key={label}
              className="border-[#002D74]/10 p-8 md:border-r md:p-10"
            >
              <div className="text-4xl font-black tracking-[-0.05em] text-[#002D74] md:text-5xl">
                {number}
              </div>

              <div className="mt-2 text-sm text-[#4A6896]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="sticky top-32">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
                  Who we are
                </div>

                <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#002D74] md:text-6xl">
                  Не семья.
                  <br />
                  <span className="text-[#4A6896]/45">
                    Команда профессионалов.
                  </span>
                </h2>
              </div>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-[#4A6896]">
              <p>
                Мы не обещаем, что здесь всегда будет легко. Сложные задачи,
                ответственность и быстрый темп иногда действительно требуют
                усилий. Но мы стараемся сделать так, чтобы эти усилия уходили
                в работу, а не в борьбу с внутренней бюрократией.
              </p>

              <p>
                У нас нет идеи строить «семью на работе». Нам ближе другой
                подход: сильная команда людей, которые уважают время друг друга,
                держат слово, умеют говорить прямо и объединяются вокруг
                результата.
              </p>

              <p>
                Можно не соглашаться с руководителем. Можно задавать неудобные
                вопросы. Можно менять процессы, если они перестали работать.
                Нельзя только делать вид, что всё нормально, когда явно
                разваливается.
              </p>

              <div className="rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#4A6896]">
                  Short version
                </div>

                <div className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#002D74]">
                  Меньше политики.
                  <br />
                  Больше нормальной работы.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              Our values
            </div>

            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.055em] text-[#002D74] md:text-7xl">
              Не плакаты на стене.
              <span className="text-[#4A6896]/45">
                {' '}Рабочие принципы.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#002D74]/20 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,45,116,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3D300] text-[#002D74]">
                  {value.icon}
                </div>

                <h3 className="mt-10 text-3xl font-bold tracking-[-0.04em] text-[#002D74]">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-xl leading-relaxed text-[#4A6896]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] bg-[#A3D300] p-8 text-[#002D74] md:p-14">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em]">
                  How we work
                </div>

                <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em]">
                  Что считается нормой.
                </h2>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[22px] bg-white/30 p-5"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#002D74] text-[#A3D300]">
                      <Check size={14} strokeWidth={3} />
                    </div>

                    <div className="leading-relaxed">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#F7F9FC] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              How we build
            </div>

            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.055em] text-[#002D74] md:text-7xl">
              Продукт, инженерия
              <span className="text-[#4A6896]/45">
                {' '}и люди — одна система.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Capability
              icon={<Layers3 />}
              number="01"
              title="Product"
              text="Исследуем задачи пользователей, проверяем гипотезы и стараемся принимать продуктовые решения на данных, а не на громкости голоса в переговорке."
            />

            <Capability
              icon={<Rocket />}
              number="02"
              title="Engineering"
              text="Автоматизация, CI/CD, инфраструктура как код, наблюдаемость и нормальные инженерные практики — не украшение, а способ быстрее двигаться."
            />

            <Capability
              icon={<Globe2 />}
              number="03"
              title="People"
              text="Строим распределённые команды, понятные зоны ответственности и среду, где сильные специалисты могут влиять на результат."
            />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              Our story
            </div>

            <h2 className="text-5xl font-black tracking-[-0.055em] text-[#002D74] md:text-7xl">
              Несколько лет
              <span className="text-[#4A6896]/45">
                {' '}в четырёх точках.
              </span>
            </h2>
          </div>

          <div className="border-t border-[#002D74]/10">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid gap-5 border-b border-[#002D74]/10 py-8 md:grid-cols-[150px_1fr_1.4fr] md:items-start"
              >
                <div className="text-3xl font-black text-[#A3D300]">
                  {item.year}
                </div>

                <div className="text-2xl font-bold tracking-[-0.03em] text-[#002D74]">
                  {item.title}
                </div>

                <div className="leading-relaxed text-[#4A6896]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="bg-white px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            <Quote
              text="Здесь можно реально влиять на то, как устроен продукт и процессы вокруг него."
              name="Алексей"
              role="Backend Engineer"
            />

            <Quote
              text="Самое ценное — скорость принятия решений. Нет ощущения, что любая идея должна пройти семь этажей."
              name="Мария"
              role="Product Manager"
            />

            <Quote
              text="Ошибки здесь не прячут. Их разбирают и меняют систему так, чтобы второй раз было сложнее наступить на те же грабли."
              name="Илья"
              role="DevOps Engineer"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] bg-[#002D74] p-8 text-white md:p-14">
            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#A3D300]">
                  Join us
                </div>

                <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                  Хорошая компания —
                  <span className="text-white/35">
                    {' '}это люди, которые её строят.
                  </span>
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
    </>
  )
}

function Capability({ icon, number, title, text }) {
  return (
    <div className="rounded-[30px] border border-[#002D74]/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#002D74]/20 hover:shadow-[0_20px_50px_rgba(0,45,116,0.07)]">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A3D300]/15 text-[#002D74]">
          {icon}
        </div>

        <div className="text-sm font-black text-[#002D74]/20">
          {number}
        </div>
      </div>

      <h3 className="mt-14 text-3xl font-black tracking-[-0.04em] text-[#002D74]">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-[#4A6896]">
        {text}
      </p>
    </div>
  )
}

function Quote({ text, name, role }) {
  return (
    <div className="flex min-h-[320px] flex-col justify-between rounded-[32px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition duration-300 hover:border-[#002D74]/20 hover:bg-white">
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