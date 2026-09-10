import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Coffee,
  HeartPulse,
  Home,
  Laptop,
  Plane,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap,
} from 'lucide-react'

const benefits = [
  {
    icon: <WalletCards size={22} />,
    title: 'Рыночная компенсация',
    text: 'Прозрачный доход, регулярный пересмотр и понятные ожидания без игры в угадайку.',
  },
  {
    icon: <HeartPulse size={22} />,
    title: 'Здоровье',
    text: 'ДМС, оплачиваемые больничные и нормальное отношение к тому, что люди иногда болеют.',
  },
  {
    icon: <Laptop size={22} />,
    title: 'Техника',
    text: 'Выдаём рабочее оборудование под задачи, а не ноутбук, переживший три эпохи Windows.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Обучение',
    text: 'Бюджет на курсы, книги, конференции и профессиональное развитие.',
  },
  {
    icon: <Home size={22} />,
    title: 'Remote / Hybrid',
    text: 'Большинство ролей можно совмещать с удалёнкой или гибридным форматом.',
  },
  {
    icon: <CalendarDays size={22} />,
    title: 'Отпуск',
    text: 'Полноценный оплачиваемый отпуск без ощущения, что ты совершаешь преступление против бизнеса.',
  },
  {
    icon: <Plane size={22} />,
    title: 'Work from anywhere',
    text: 'Для части команд можно временно работать из другого города или страны после согласования.',
  },
  {
    icon: <Coffee size={22} />,
    title: 'Гибкий старт дня',
    text: 'Не измеряем профессионализм количеством появлений в Slack ровно в 09:00.',
  },
]

const details = [
  {
    number: '01',
    title: 'Компенсация',
    text: 'Мы стараемся держать зарплаты конкурентными рынку и не строим систему мотивации вокруг туманных обещаний.',
    items: [
      'Фиксированная часть без скрытых условий',
      'Регулярный salary review',
      'Прозрачные уровни ответственности',
      'Премии для отдельных ролей и проектов',
    ],
  },
  {
    number: '02',
    title: 'Здоровье и баланс',
    text: 'Наша задача — чтобы сотрудник мог нормально работать долго, а не выгореть красиво за три квартала.',
    items: [
      'ДМС',
      'Оплачиваемые больничные',
      'Гибкий рабочий график',
      'Возможность брать day-off по согласованию',
    ],
  },
  {
    number: '03',
    title: 'Развитие',
    text: 'Если человек растёт быстрее компании — это хорошая проблема. Поэтому развитие не считается личным хобби сотрудника.',
    items: [
      'Курсы и сертификации',
      'Профессиональная литература',
      'Конференции и митапы',
      'Внутренний обмен экспертизой',
    ],
  },
  {
    number: '04',
    title: 'Рабочая среда',
    text: 'Стараемся убирать всё, что мешает нормально делать работу: лишние согласования, бессмысленные статусы и хаос в инструментах.',
    items: [
      'Современная техника',
      'Доступ к необходимым инструментам',
      'Нормальные процессы разработки и delivery',
      'Минимум корпоративной бюрократии',
    ],
  },
]

export default function Benefits() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-6 pb-28 pt-40">
        <div className="absolute left-[10%] top-[10%] h-80 w-80 rounded-full bg-[#A3D300]/15 blur-[140px]" />
        <div className="absolute right-[8%] top-[35%] h-96 w-96 rounded-full bg-[#4A6896]/12 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
            Benefits / What you get
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.065em] text-[#002D74] md:text-8xl xl:text-[104px]">
            Не только
            <br />
            <span className="text-[#4A6896]/45">
              зарплата.
            </span>
            <br />
            Хотя и она важна.
          </h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <p className="max-w-3xl text-xl leading-relaxed text-[#4A6896]">
              Мы стараемся собирать пакет условий так, чтобы он реально облегчал
              жизнь и работу, а не существовал только красивой строчкой в вакансии.
            </p>

            <div className="rounded-[28px] border border-[#002D74]/10 bg-[#F7F9FC] p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-[#A3D300]">
                <Sparkles size={16} />
                Главное
              </div>

              <p className="mt-3 leading-relaxed text-[#4A6896]">
                Бенефиты не заменяют нормальную зарплату, адекватный менеджмент
                и интересную работу. Они должны дополнять их.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#002D74]/10 bg-[#F7F9FC]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Stat number="28" label="дней отпуска" />
          <Stat number="100%" label="оплата больничных" />
          <Stat number="72%" label="работают remote" />
          <Stat number="2×" label="salary review / год" />
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              Core benefits
            </div>

            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.055em] text-[#002D74] md:text-7xl">
              То, что помогает
              <span className="text-[#4A6896]/45">
                {' '}работать нормально.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-[30px] border border-[#002D74]/10 bg-[#F7F9FC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#002D74]/20 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,45,116,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A3D300] text-[#002D74]">
                  {benefit.icon}
                </div>

                <h3 className="mt-10 text-2xl font-black tracking-[-0.04em] text-[#002D74]">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#4A6896]">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL SECTIONS */}
      <section className="bg-white px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4">
            {details.map((section) => (
              <div
                key={section.number}
                className="grid gap-8 rounded-[34px] border border-[#002D74]/10 bg-[#F7F9FC] p-8 transition duration-300 hover:border-[#002D74]/20 md:p-10 lg:grid-cols-[.8fr_1.2fr]"
              >
                <div>
                  <div className="text-sm font-black text-[#A3D300]">
                    {section.number}
                  </div>

                  <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] text-[#002D74]">
                    {section.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-relaxed text-[#4A6896]">
                    {section.text}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[20px] border border-[#002D74]/10 bg-white p-5"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#A3D300]/15 text-[#002D74]">
                        <ShieldCheck size={15} />
                      </div>

                      <span className="text-[#002D74]/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK STYLE */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] bg-[#A3D300] p-8 text-[#002D74] md:p-14">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em]">
                  Work style
                </div>

                <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em]">
                  Работа должна вписываться в жизнь.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Highlight
                  icon={<Home />}
                  title="Remote-first"
                  text="Для большинства ролей место работы не привязано к конкретному столу."
                />

                <Highlight
                  icon={<Zap />}
                  title="Flexible hours"
                  text="Важнее результат и доступность команды, чем магическое 09:00."
                />

                <Highlight
                  icon={<BriefcaseBusiness />}
                  title="No micromanagement"
                  text="Не считаем клики мыши и не просим отчёт о каждом прожитом часу."
                />

                <Highlight
                  icon={<CalendarDays />}
                  title="Real vacation"
                  text="Отпуск нужен для отдыха, а не для чтения рабочих чатов у бассейна."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FC] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
              FAQ
            </div>

            <h2 className="text-5xl font-black tracking-[-0.055em] text-[#002D74] md:text-7xl">
              А теперь
              <span className="text-[#4A6896]/45">
                {' '}нормальные вопросы.
              </span>
            </h2>
          </div>

          <div className="divide-y divide-[#002D74]/10 border-y border-[#002D74]/10">
            <Faq
              question="Бенефиты доступны всем сотрудникам?"
              answer="Базовый пакет доступен всем штатным сотрудникам. Отдельные опции могут зависеть от роли, региона и формата работы."
            />

            <Faq
              question="Можно полностью удалённо?"
              answer="Для большинства технических и продуктовых позиций — да. Некоторые роли предполагают периодическое присутствие в офисе."
            />

            <Faq
              question="Есть ли испытательный срок?"
              answer="Да, стандартно три месяца. Условия компенсации на испытательном сроке не урезаются."
            />

            <Faq
              question="Как часто пересматривается зарплата?"
              answer="Обычно дважды в год либо при существенном изменении роли и уровня ответственности."
            />

            <Faq
              question="Можно выбрать рабочий ноутбук?"
              answer="Подбираем технику под задачи и роль. Для инженерных и дизайнерских позиций конфигурация согласовывается отдельно."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#002D74] p-8 text-white md:p-14">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3D300]">
                Ready?
              </div>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                Осталось найти
                <span className="text-white/35">
                  {' '}подходящую роль.
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

function Highlight({ icon, title, text }) {
  return (
    <div className="rounded-[24px] bg-white/30 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#002D74] text-[#A3D300]">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-black text-[#002D74]">
        {title}
      </h3>

      <p className="mt-2 leading-relaxed text-[#002D74]/65">
        {text}
      </p>
    </div>
  )
}

function Faq({ question, answer }) {
  return (
    <div className="grid gap-4 py-7 md:grid-cols-[.8fr_1.2fr]">
      <div className="text-lg font-bold text-[#002D74]">
        {question}
      </div>

      <p className="max-w-2xl leading-relaxed text-[#4A6896]">
        {answer}
      </p>
    </div>
  )
}