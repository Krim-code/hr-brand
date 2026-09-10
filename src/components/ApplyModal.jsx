import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Paperclip, X } from 'lucide-react'

export default function ApplyModal({ open, onClose, job }) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) {
      setSubmitted(false)
    }
  }, [open])

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const handleSubmit = (event) => {
    event.preventDefault()

    // Пока имитируем отправку.
    // Потом сюда можно воткнуть API / Bitrix / HH / email webhook.
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#111] shadow-2xl"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <>
                  <div className="border-b border-white/10 p-7 md:p-9">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">
                      Application
                    </div>

                    <h2 className="pr-12 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                      Отклик на {job?.title}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/40">
                      Оставь контакты и пару слов о себе. Без анкеты на 48 полей
                      и вопросов про знак зодиака.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-7 md:p-9"
                  >
                    <Field label="Имя">
                      <input
                        type="text"
                        required
                        placeholder="Алексей"
                        className={inputClass}
                      />
                    </Field>

                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Email">
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Telegram / телефон">
                        <input
                          type="text"
                          placeholder="@username"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field label="Ссылка на резюме">
                      <input
                        type="url"
                        placeholder="https://hh.ru/resume/..."
                        className={inputClass}
                      />
                    </Field>

                    <Field label="О себе">
                      <textarea
                        rows="5"
                        placeholder="Пара слов про опыт, сильные стороны и что ищешь..."
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    <label className="group flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-4 transition hover:border-lime-400/60 hover:bg-lime-400/[0.03]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                          <Paperclip size={18} />
                        </div>

                        <div>
                          <div className="text-sm font-medium">
                            Прикрепить резюме
                          </div>

                          <div className="mt-1 text-xs text-white/30">
                            PDF, DOC, DOCX до 10 MB
                          </div>
                        </div>
                      </div>

                      <span className="text-xs text-lime-400">
                        Выбрать
                      </span>

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>

                    <label className="flex items-start gap-3 text-xs leading-relaxed text-white/35">
                      <input
                        type="checkbox"
                        required
                        className="mt-1"
                      />

                      <span>
                        Я согласен на обработку персональных данных для связи
                        по поводу вакансии.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-lime-400 px-6 py-4 font-bold text-black transition hover:scale-[1.01] hover:bg-lime-300"
                    >
                      Отправить отклик
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[460px] flex-col items-center justify-center p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black"
                  >
                    <Check size={34} />
                  </motion.div>

                  <h2 className="mt-8 text-4xl font-black tracking-[-0.05em]">
                    Отклик отправлен
                  </h2>

                  <p className="mt-4 max-w-md leading-relaxed text-white/40">
                    Мы получили твою заявку. Если совпадём по ожиданиям —
                    свяжемся и договоримся о знакомстве.
                  </p>

                  <button
                    onClick={onClose}
                    className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:bg-white/5"
                  >
                    Закрыть
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
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

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-lime-400'