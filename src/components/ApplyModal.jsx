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
    // Потом сюда можно подключить API / Bitrix / HH / webhook.
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-[#002D74]/35 backdrop-blur-sm"
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
              className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-[#002D74]/10 bg-white shadow-[0_30px_90px_rgba(0,45,116,0.18)]"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#002D74]/10 bg-[#F7F9FC] text-[#4A6896] transition hover:border-[#002D74]/20 hover:bg-[#EEF3F8] hover:text-[#002D74]"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <>
                  <div className="border-b border-[#002D74]/10 bg-[#F7F9FC] p-7 md:p-9">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#A3D300]">
                      Application
                    </div>

                    <h2 className="pr-12 text-3xl font-black tracking-[-0.04em] text-[#002D74] md:text-4xl">
                      Отклик на {job?.title}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4A6896]">
                      Оставь контакты и пару слов о себе. Без анкеты на 48 полей
                      и вопросов про знак зодиака.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 bg-white p-7 md:p-9"
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
                          placeholder="you@human-core.ru"
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

                    <label className="group flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-[#002D74]/15 bg-[#F7F9FC] p-4 transition hover:border-[#A3D300] hover:bg-[#A3D300]/5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#002D74]/5 text-[#002D74] transition group-hover:bg-[#A3D300]/15">
                          <Paperclip size={18} />
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-[#002D74]">
                            Прикрепить резюме
                          </div>

                          <div className="mt-1 text-xs text-[#4A6896]">
                            PDF, DOC, DOCX до 10 MB
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#A3D300]">
                        Выбрать
                      </span>

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>

                    <label className="flex items-start gap-3 text-xs leading-relaxed text-[#4A6896]">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 accent-[#A3D300]"
                      />

                      <span>
                        Я согласен на обработку персональных данных для связи
                        по поводу вакансии.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-[#A3D300] px-6 py-4 font-bold text-[#002D74] transition duration-200 hover:scale-[1.01] hover:bg-[#95C100]"
                    >
                      Отправить отклик
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[460px] flex-col items-center justify-center bg-white p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-[#A3D300] text-[#002D74]"
                  >
                    <Check size={34} />
                  </motion.div>

                  <h2 className="mt-8 text-4xl font-black tracking-[-0.05em] text-[#002D74]">
                    Отклик отправлен
                  </h2>

                  <p className="mt-4 max-w-md leading-relaxed text-[#4A6896]">
                    Мы получили твою заявку. Если совпадём по ожиданиям —
                    свяжемся и договоримся о знакомстве.
                  </p>

                  <button
                    onClick={onClose}
                    className="mt-8 rounded-full border border-[#002D74]/15 px-6 py-3 text-sm font-semibold text-[#002D74] transition hover:border-[#002D74]/25 hover:bg-[#F7F9FC]"
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
      <span className="mb-2 block text-sm font-semibold text-[#002D74]/75">
        {label}
      </span>

      {children}
    </label>
  )
}

const inputClass =
  'w-full rounded-2xl border border-[#002D74]/10 bg-[#F7F9FC] px-4 py-3.5 text-[#002D74] outline-none transition placeholder:text-[#4A6896]/50 hover:border-[#002D74]/20 focus:border-[#A3D300] focus:bg-white focus:ring-4 focus:ring-[#A3D300]/10'