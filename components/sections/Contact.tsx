"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FormStatus = "idle" | "loading" | "success" | "error";

const MAX_MESSAGE_LENGTH = 500;

function FloatingField({
  id,
  name,
  label,
  type = "text",
  disabled,
  error,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  disabled: boolean;
  error?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        placeholder=" "
        required
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className="peer w-full bg-surface-card border border-hairline px-4 pt-6 pb-2 text-on-dark font-light focus:outline-none focus:border-m-blue-dark transition-colors disabled:opacity-50"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-xs font-bold tracking-[1.5px] text-m-blue-text transition-all duration-200 pointer-events-none
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-light peer-placeholder-shown:text-body-muted
          peer-focus:top-2 peer-focus:text-xs peer-focus:tracking-[1.5px] peer-focus:font-bold peer-focus:text-m-blue-text"
      >
        {label}
      </label>
      <span
        className="absolute left-0 bottom-0 h-[2px] bg-m-blue-dark w-full origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 ease-out"
        aria-hidden="true"
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-m-red text-xs mt-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) setErrors(result.errors);
        setErrorMessage(result.message || t.contact.genericError);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setMessageLength(0);
    } catch {
      setErrorMessage(t.contact.connectionError);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-canvas py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p className="text-sm font-bold tracking-[1.5px] text-m-blue-text mb-4">
            {t.contact.label}
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">
            <TextReveal text={t.contact.heading} delay={0.1} />
          </h2>
          <p className="text-body font-light mb-12">
            {t.contact.description}
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="border border-hairline p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                className="w-12 h-12 mx-auto mb-4 border-2 border-m-blue-dark flex items-center justify-center"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <motion.path
                    d="M4 12l6 6L20 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-m-blue-text"
                  />
                </motion.svg>
              </motion.div>
              <p className="text-lg font-bold mb-2">{t.contact.successTitle}</p>
              <p className="text-body font-light">
                {t.contact.successBody}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-bold tracking-[1.5px] text-body hover:text-on-dark transition-colors"
              >
                {t.contact.sendAnother}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              <Reveal delay={0.05}>
                <FloatingField
                  id="name"
                  name="name"
                  label={t.contact.name}
                  disabled={status === "loading"}
                  error={errors.name?.[0]}
                />
              </Reveal>

              <Reveal delay={0.1}>
                <FloatingField
                  id="email"
                  name="email"
                  label={t.contact.email}
                  type="email"
                  disabled={status === "loading"}
                  error={errors.email?.[0]}
                />
              </Reveal>

              <Reveal delay={0.15}>
                <FloatingField
                  id="subject"
                  name="subject"
                  label={t.contact.subject}
                  disabled={status === "loading"}
                  error={errors.subject?.[0]}
                />
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    rows={5}
                    required
                    maxLength={MAX_MESSAGE_LENGTH}
                    disabled={status === "loading"}
                    onChange={(e) => setMessageLength(e.target.value.length)}
                    className="peer w-full bg-surface-card border border-hairline px-4 pt-6 pb-2 text-on-dark font-light focus:outline-none focus:border-m-blue-dark transition-colors disabled:opacity-50 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-xs font-bold tracking-[1.5px] text-m-blue-text transition-all duration-200 pointer-events-none
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-light peer-placeholder-shown:text-body-muted
                      peer-focus:top-2 peer-focus:text-xs peer-focus:tracking-[1.5px] peer-focus:font-bold peer-focus:text-m-blue-text"
                  >
                    {t.contact.message}
                  </label>
                  <span
                    className="absolute left-0 bottom-0 h-[2px] bg-m-blue-dark w-full origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 ease-out"
                    aria-hidden="true"
                  />
                  <div className="flex justify-between items-start mt-2">
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-m-red text-xs"
                        >
                          {errors.message[0]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <span
                      className={`text-xs font-light ml-auto tabular-nums transition-colors ${
                        messageLength >= MAX_MESSAGE_LENGTH
                          ? "text-m-red"
                          : "text-body/50"
                      }`}
                    >
                      {messageLength}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                </div>
              </Reveal>

              <AnimatePresence>
                {status === "error" && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-m-red text-sm"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>

              <Reveal delay={0.25}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full border border-on-dark px-8 py-4 text-sm font-bold tracking-[1.5px] transition-all duration-300 hover:bg-on-dark hover:text-canvas hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      />
                      {t.contact.sending}
                    </>
                  ) : (
                    t.contact.send
                  )}
                </button>
              </Reveal>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}