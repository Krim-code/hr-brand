import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDownAZ,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Flame,
  Layers3,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react'

import { jobs } from '../data/jobs'

export default function Jobs() {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')
  const [location, setLocation] = useState('All')
  const [level, setLevel] = useState('All')
  const [type, setType] = useState('All')
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const [sort, setSort] = useState('default')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const departments = useMemo(
    () => ['All', ...new Set(jobs.map((job) => job.department))],
    []
  )

  const locations = useMemo(
    () => ['All', ...new Set(jobs.map((job) => job.location))],
    []
  )

  const levels = useMemo(
    () => ['All', ...new Set(jobs.map((job) => job.level))],
    []
  )

  const types = useMemo(
    () => ['All', ...new Set(jobs.map((job) => job.type))],
    []
  )

  const popularTags = useMemo(() => {
    const counter = {}

    jobs.forEach((job) => {
      ;[...(job.tags || []), ...(job.stack || [])].forEach((tag) => {
        counter[tag] = (counter[tag] || 0) + 1
      })
    })

    return Object.entries(counter)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag)
  }, [])

  const filteredJobs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    let result = jobs.filter((job) => {
      const searchable = [
        job.title,
        job.department,
        job.location,
        job.level,
        job.type,
        job.salary,
        job.intro,
        ...(job.tags || []),
        ...(job.stack || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        normalizedSearch === '' ||
        searchable.includes(normalizedSearch)

      const matchesDepartment =
        department === 'All' ||
        job.department === department

      const matchesLocation =
        location === 'All' ||
        job.location === location

      const matchesLevel =
        level === 'All' ||
        job.level === level

      const matchesType =
        type === 'All' ||
        job.type === type

      const matchesFeatured =
        !featuredOnly ||
        job.featured === true

      const jobTags = [
        ...(job.tags || []),
        ...(job.stack || []),
      ]

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => jobTags.includes(tag))

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesLocation &&
        matchesLevel &&
        matchesType &&
        matchesFeatured &&
        matchesTags
      )
    })

    if (sort === 'title') {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title, 'ru')
      )
    }

    if (sort === 'salary') {
      result = [...result].sort(
        (a, b) =>
          getMaxSalary(b.salary) - getMaxSalary(a.salary)
      )
    }

    if (sort === 'featured') {
      result = [...result].sort(
        (a, b) =>
          Number(Boolean(b.featured)) - Number(Boolean(a.featured))
      )
    }

    return result
  }, [
    search,
    department,
    location,
    level,
    type,
    featuredOnly,
    selectedTags,
    sort,
  ])

  const activeFiltersCount = [
    department !== 'All',
    location !== 'All',
    level !== 'All',
    type !== 'All',
    featuredOnly,
    selectedTags.length > 0,
  ].filter(Boolean).length

  const toggleTag = (tag) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    )
  }

  const resetFilters = () => {
    setSearch('')
    setDepartment('All')
    setLocation('All')
    setLevel('All')
    setType('All')
    setFeaturedOnly(false)
    setSelectedTags([])
    setSort('default')
  }

  return (
    <section className="min-h-screen bg-white px-6 pb-32 pt-40 text-[#002D74]">
      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mb-16">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#A3D300]">
            <span>
              Careers / {jobs.length} open positions
            </span>

            <span className="flex items-center gap-2 rounded-full border border-[#A3D300]/30 bg-[#A3D300]/10 px-3 py-1 text-[10px] tracking-[0.16em] text-[#002D74]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A3D300] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#A3D300]" />
              </span>

              Hiring now
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#002D74] md:text-8xl">
            Найди работу,
            <span className="text-[#4A6896]/45">
              {' '}которую не захочется ненавидеть.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4A6896]">
            Фильтруй по направлению, стеку, формату и уровню.
            Мы специально сделали это удобнее, чем большинство корпоративных карьерных порталов.
          </p>
        </div>

        {/* FILTERS */}
        <div className="sticky top-[115px] z-30 mb-8 rounded-[32px] border border-[#002D74]/10 bg-white/90 p-4 shadow-[0_24px_70px_rgba(0,45,116,0.10)] backdrop-blur-2xl md:p-5">
          <div className="flex flex-col gap-4 xl:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A6896]"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Frontend, PostgreSQL, Remote..."
                className="w-full rounded-2xl border border-[#002D74]/10 bg-[#F7F9FC] py-4 pl-12 pr-12 text-[#002D74] outline-none transition placeholder:text-[#4A6896]/50 hover:border-[#002D74]/20 focus:border-[#A3D300] focus:bg-white focus:ring-4 focus:ring-[#A3D300]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A6896] transition hover:text-[#002D74]"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setFiltersOpen((value) => !value)}
                className={`flex items-center gap-2 rounded-2xl border px-5 py-4 text-sm font-bold transition ${
                  filtersOpen || activeFiltersCount > 0
                    ? 'border-[#A3D300] bg-[#A3D300] text-[#002D74]'
                    : 'border-[#002D74]/10 bg-[#F7F9FC] text-[#4A6896] hover:border-[#002D74]/20 hover:text-[#002D74]'
                }`}
              >
                <SlidersHorizontal size={17} />

                Фильтры

                {activeFiltersCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#002D74] px-1.5 text-[10px] text-[#A3D300]">
                    {activeFiltersCount}
                  </span>
                )}

                <ChevronDown
                  size={15}
                  className={`transition ${
                    filtersOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <SortDropdown
                value={sort}
                onChange={setSort}
              />
            </div>
          </div>

          {filtersOpen && (
            <div className="mt-4 border-t border-[#002D74]/10 pt-5">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <FilterSelect
                  icon={<Layers3 size={15} />}
                  label="Направление"
                  value={department}
                  onChange={setDepartment}
                  items={departments}
                />

                <FilterSelect
                  icon={<MapPin size={15} />}
                  label="Локация"
                  value={location}
                  onChange={setLocation}
                  items={locations}
                />

                <FilterSelect
                  icon={<BriefcaseBusiness size={15} />}
                  label="Уровень"
                  value={level}
                  onChange={setLevel}
                  items={levels}
                />

                <FilterSelect
                  icon={<BadgeCheck size={15} />}
                  label="Занятость"
                  value={type}
                  onChange={setType}
                  items={types}
                />
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#4A6896]">
                    Технологии
                  </div>

                  {selectedTags.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedTags([])}
                      className="text-xs text-[#4A6896] transition hover:text-[#002D74]"
                    >
                      Очистить
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => {
                    const selected = selectedTags.includes(tag)

                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                          selected
                            ? 'border-[#A3D300] bg-[#A3D300] text-[#002D74]'
                            : 'border-[#002D74]/10 bg-[#F7F9FC] text-[#4A6896] hover:border-[#002D74]/20 hover:text-[#002D74]'
                        }`}
                      >
                        {selected && <Check size={13} />}
                        {tag}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#002D74]/10 pt-5">
                <button
                  type="button"
                  onClick={() => setFeaturedOnly((value) => !value)}
                  className={`flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm font-bold transition ${
                    featuredOnly
                      ? 'border-[#A3D300] bg-[#A3D300]/15 text-[#002D74]'
                      : 'border-[#002D74]/10 bg-[#F7F9FC] text-[#4A6896] hover:text-[#002D74]'
                  }`}
                >
                  <Flame size={17} />

                  Только HOT вакансии

                  <span
                    className={`ml-2 flex h-5 w-9 items-center rounded-full p-0.5 transition ${
                      featuredOnly
                        ? 'justify-end bg-[#A3D300]'
                        : 'justify-start bg-[#002D74]/10'
                    }`}
                  >
                    <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#4A6896] transition hover:bg-[#002D74]/5 hover:text-[#002D74]"
                >
                  <RotateCcw size={15} />
                  Сбросить всё
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ACTIVE FILTERS */}
        {activeFiltersCount > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs uppercase tracking-[0.15em] text-[#4A6896]">
              Активные фильтры
            </span>

            {department !== 'All' && (
              <ActiveFilter
                label={department}
                onRemove={() => setDepartment('All')}
              />
            )}

            {location !== 'All' && (
              <ActiveFilter
                label={location}
                onRemove={() => setLocation('All')}
              />
            )}

            {level !== 'All' && (
              <ActiveFilter
                label={level}
                onRemove={() => setLevel('All')}
              />
            )}

            {type !== 'All' && (
              <ActiveFilter
                label={type}
                onRemove={() => setType('All')}
              />
            )}

            {featuredOnly && (
              <ActiveFilter
                label="HOT"
                onRemove={() => setFeaturedOnly(false)}
              />
            )}

            {selectedTags.map((tag) => (
              <ActiveFilter
                key={tag}
                label={tag}
                onRemove={() => toggleTag(tag)}
              />
            ))}
          </div>
        )}

        {/* RESULTS INFO */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[#4A6896]">
          <div>
            Найдено вакансий:{' '}
            <span className="font-bold text-[#002D74]">
              {filteredJobs.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles size={15} className="text-[#A3D300]" />
            Актуально сегодня
          </div>
        </div>

        {/* JOB LIST */}
        <div className="border-t border-[#002D74]/10">
          {filteredJobs.map((job, index) => (
            <Link
              key={job.slug}
              to={`/jobs/${job.slug}`}
              data-cursor-hover
              className="group block border-b border-[#002D74]/10 py-8 transition duration-300 hover:bg-[#F7F9FC] md:px-2 md:hover:px-5"
            >
              <div className="grid gap-8 lg:grid-cols-[70px_1.4fr_.7fr_.7fr_auto] lg:items-center">
                <div className="hidden text-sm font-black text-[#002D74]/20 lg:block">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#002D74] md:text-3xl">
                      {job.title}
                    </h2>

                    {job.featured && (
                      <span className="flex items-center gap-1.5 rounded-full bg-[#A3D300]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#002D74]">
                        <Flame size={12} />
                        Hot
                      </span>
                    )}
                  </div>

                  <div className="mb-4 text-sm text-[#4A6896]">
                    {job.department}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(job.tags || []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#002D74]/10 bg-white px-3 py-1 text-xs text-[#4A6896] transition group-hover:border-[#002D74]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#002D74]/75">
                    <MapPin
                      size={16}
                      className="text-[#4A6896]"
                    />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#4A6896]">
                    <BriefcaseBusiness size={15} />
                    {job.level}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-[#002D74]">
                    {job.salary}
                  </div>

                  <div className="mt-2 text-sm text-[#4A6896]">
                    {job.type}
                  </div>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#002D74]/15 text-[#002D74] transition duration-300 group-hover:rotate-[-6deg] group-hover:border-[#A3D300] group-hover:bg-[#A3D300]">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredJobs.length === 0 && (
          <div className="relative overflow-hidden rounded-[40px] border border-[#002D74]/10 bg-[#F7F9FC] py-24 text-center">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#A3D300]/15 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#002D74]/10 bg-white text-[#A3D300]">
                <Search size={26} />
              </div>

              <div className="mt-7 text-4xl font-black tracking-[-0.05em] text-[#002D74]">
                Ничего не нашли.
              </div>

              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#4A6896]">
                Либо ты ищешь слишком конкретно, либо мы ещё не успели открыть
                идеальную вакансию. Сними пару фильтров и попробуй ещё раз.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#A3D300] px-6 py-3 font-bold text-[#002D74] transition hover:scale-[1.02] hover:bg-[#95C100]"
              >
                <RotateCcw size={16} />
                Сбросить фильтры
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function FilterSelect({
  icon,
  label,
  value,
  onChange,
  items,
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4A6896]">
        {icon}
        {label}
      </span>

      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-left text-sm transition ${
          open
            ? 'border-[#A3D300] bg-[#A3D300]/8 text-[#002D74]'
            : 'border-[#002D74]/10 bg-white text-[#4A6896] hover:border-[#002D74]/20 hover:text-[#002D74]'
        }`}
      >
        <span>
          {value === 'All' ? 'Все' : value}
        </span>

        <ChevronDown
          size={15}
          className={`transition duration-200 ${
            open
              ? 'rotate-180 text-[#A3D300]'
              : 'text-[#4A6896]'
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-[#002D74]/10 bg-white p-1.5 shadow-[0_20px_60px_rgba(0,45,116,0.14)]">
          {items.map((item) => {
            const selected = value === item

            return (
              <button
                key={item}
                type="button"
                onClick={() => {
                  onChange(item)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                  selected
                    ? 'bg-[#A3D300] text-[#002D74]'
                    : 'text-[#4A6896] hover:bg-[#F7F9FC] hover:text-[#002D74]'
                }`}
              >
                <span>
                  {item === 'All' ? 'Все' : item}
                </span>

                {selected && (
                  <Check
                    size={14}
                    strokeWidth={3}
                  />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function ActiveFilter({
  label,
  onRemove,
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="flex items-center gap-2 rounded-full border border-[#A3D300]/40 bg-[#A3D300]/10 px-3 py-1.5 text-xs font-medium text-[#002D74] transition hover:bg-[#A3D300]/20"
    >
      {label}
      <X size={12} />
    </button>
  )
}

function getMaxSalary(value = '') {
  const numbers = value
    .replace(/\s/g, '')
    .match(/\d+/g)

  if (!numbers?.length) {
    return 0
  }

  return Math.max(...numbers.map(Number))
}

function SortDropdown({
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const options = [
    {
      value: 'default',
      label: 'По умолчанию',
    },
    {
      value: 'featured',
      label: 'Сначала HOT',
    },
    {
      value: 'salary',
      label: 'По зарплате',
    },
    {
      value: 'title',
      label: 'По названию',
    },
  ]

  const current =
    options.find((item) => item.value === value) || options[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative min-w-[190px]"
    >
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-sm font-medium transition ${
          open
            ? 'border-[#A3D300] bg-[#A3D300]/8 text-[#002D74]'
            : 'border-[#002D74]/10 bg-[#F7F9FC] text-[#4A6896] hover:border-[#002D74]/20 hover:text-[#002D74]'
        }`}
      >
        <span className="flex items-center gap-3">
          <ArrowDownAZ
            size={16}
            className="text-[#4A6896]"
          />

          {current.label}
        </span>

        <ChevronDown
          size={14}
          className={`transition duration-200 ${
            open
              ? 'rotate-180 text-[#A3D300]'
              : 'text-[#4A6896]'
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-[70] min-w-full overflow-hidden rounded-2xl border border-[#002D74]/10 bg-white p-1.5 shadow-[0_20px_60px_rgba(0,45,116,0.14)]">
          {options.map((option) => {
            const selected = option.value === value

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-6 rounded-xl px-4 py-3 text-left text-sm transition ${
                  selected
                    ? 'bg-[#A3D300] text-[#002D74]'
                    : 'text-[#4A6896] hover:bg-[#F7F9FC] hover:text-[#002D74]'
                }`}
              >
                <span>
                  {option.label}
                </span>

                {selected && (
                  <Check
                    size={14}
                    strokeWidth={3}
                  />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}