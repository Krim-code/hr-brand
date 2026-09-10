import {
  ArrowUpRight,
  Braces,
  Building2,
  Code2,
  Cpu,
  Database,
  HeartHandshake,
  Layers3,
  MessageSquareMore,
  Network,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const team = [
  {
    name: 'Алексей',
    role: 'CEO',
    area: 'Strategy & Business',
    initials: 'AK',
    tags: ['Strategy', 'Growth', 'Product'],
    icon: <Building2 size={22} />,
  },
  {
    name: 'Мария',
    role: 'People Partner',
    area: 'People & Culture',
    initials: 'MV',
    tags: ['Hiring', 'Culture', 'Development'],
    icon: <HeartHandshake size={22} />,
  },
  {
    name: 'Игорь',
    role: 'CTO',
    area: 'Engineering',
    initials: 'IS',
    tags: ['Architecture', 'Platform', 'Security'],
    icon: <Cpu size={22} />,
  },
  {
    name: 'Анна',
    role: 'Product Director',
    area: 'Product',
    initials: 'AN',
    tags: ['Discovery', 'Strategy', 'Analytics'],
    icon: <Layers3 size={22} />,
  },
  {
    name: 'Максим',
    role: 'Engineering Lead',
    area: 'Development',
    initials: 'MK',
    tags: ['Backend', 'Frontend', 'Delivery'],
    icon: <Code2 size={22} />,
  },
  {
    name: 'София',
    role: 'Design Lead',
    area: 'Design',
    initials: 'SP',
    tags: ['UX', 'UI', 'Design System'],
    icon: <Palette size={22} />,
  },
]

const functions = [
  {
    icon: <Code2 />,
    title: 'Development',
    count: '42',
    text: 'Backend, frontend и мобильная разработка.',
  },
  {
    icon: <Network />,
    title: 'Infrastructure',
    count: '18',
    text: 'DevOps, SRE, platform и observability.',
  },
  {
    icon: <Palette />,
    title: 'Design',
    count: '12',
    text: 'Product design, research и design systems.',
  },
  {
    icon: <Database />,
    title: 'Data',
    count: '14',
    text: 'Analytics, data engineering и BI.',
  },
  {
    icon: <Users />,
    title: 'Product',
    count: '21',
    text: 'Product management и discovery.',
  },
  {
    icon: <HeartHandshake />,
    title: 'People',
    count: '13',
    text: 'Recruitment, HR и internal communications.',
  },
]

const principles = [
  {
    icon: <MessageSquareMore />,
    title: 'Говорим прямо',
    text: 'Обратная связь должна экономить время, а не создавать новый слой корпоративного фольклора.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Доверяем по умолчанию',
    text: 'Не контролируем каждое движение. Даём контекст, ответственность и ожидаем результат.',
  },
  {
    icon: <Braces />,
    title: 'Спорим по делу',
    text: 'Должность не делает аргумент сильнее. Побеждает тот, у кого лучше логика и данные.',
  },
]

export default function Team() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-28 pt-40">
        <div className="absolute left-[8%] top-[10%] h-80 w-80 rounded-full bg-lime-400/15 blur-[140px]" />
        <div className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
            Team / People behind the product
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.065em] md:text-8xl xl:text-[104px]">
            Сильные люди.
            <br />
            <span className="text-white/20">
              Разные роли.
            </span>
            <br />
            Одна команда.
          </h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <p className="max-w-3xl text-xl leading-relaxed text-white/50">
              Мы не собираем команду по принципу одинаковых резюме и одинакового мышления.
              Нам важнее сильные специалисты, которые умеют работать автономно,
              договариваться и двигать результат.
            </p>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-lime-400">
                <Sparkles size={16} />
                120+ человек
              </div>

              <p className="mt-3 leading-relaxed text-white/45">
                Продукт, разработка, инфраструктура, дизайн, аналитика и people-команда.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Stat number="120+" label="сотрудников" />
          <Stat number="6" label="направлений" />
          <Stat number="17" label="городов" />
          <Stat number="72%" label="remote" />
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
              Leadership
            </div>

            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.055em] md:text-7xl">
              Люди, которые
              <span className="text-white/20"> держат направление.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />

                  <div className="flex h-full items-center justify-center">
                    <div className="relative">
                      <div className="flex h-32 w-32 items-center justify-center rounded-[36px] border border-white/10 bg-lime-400 text-4xl font-black tracking-[-0.06em] text-black shadow-2xl">
                        {member.initials}
                      </div>

                      <div className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#111] text-lime-400">
                        {member.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
                    {member.area}
                  </div>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                    {member.name}
                  </h3>

                  <div className="mt-1 text-white/40">
                    {member.role}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
              Team structure
            </div>

            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.055em] md:text-7xl">
              Как устроена
              <span className="text-white/20"> команда.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {functions.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.025] p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-black">
                    {item.icon}
                  </div>

                  <div className="text-4xl font-black tracking-[-0.05em] text-white/15">
                    {item.count}
                  </div>
                </div>

                <h3 className="mt-12 text-3xl font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] bg-lime-400 p-8 text-black md:p-14">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em]">
                  Culture
                </div>

                <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em]">
                  Как мы работаем вместе.
                </h2>
              </div>

              <div className="grid gap-3">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] bg-black/5 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-black text-lime-400">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-xl font-black">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-relaxed text-black/60">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            <Quote
              text="Самое ценное — здесь реально можно влиять на решения, а не просто исполнять их."
              name="Engineering"
            />

            <Quote
              text="Команды довольно автономные. Если видишь, что процесс мешает — его можно менять."
              name="Product"
            />

            <Quote
              text="Люди здесь умеют спорить жёстко, но без перехода на личности. Это редкость."
              name="Design"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 md:p-14">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                Join the team
              </div>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Может быть,
                <span className="text-white/20"> следующая карточка — твоя.</span>
              </h2>
            </div>

            <a
              href="/jobs"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:scale-[1.02]"
            >
              Смотреть вакансии
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ number, label }) {
  return (
    <div className="border-white/10 p-8 md:border-r md:p-10">
      <div className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
        {number}
      </div>

      <div className="mt-2 text-sm text-white/35">
        {label}
      </div>
    </div>
  )
}

function Quote({ text, name }) {
  return (
    <div className="flex min-h-[280px] flex-col justify-between rounded-[30px] border border-white/10 bg-white/[0.025] p-8">
      <div className="text-2xl font-semibold leading-snug tracking-[-0.035em]">
        “{text}”
      </div>

      <div className="text-sm font-bold uppercase tracking-[0.18em] text-lime-400">
        {name}
      </div>
    </div>
  )
}