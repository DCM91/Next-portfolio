"use client"

import { useState, useRef } from "react"
import { RiMailSendLine, RiCheckLine, RiLoader4Line } from "react-icons/ri"
import { useTranslation } from "@/hooks/useTranslation"

export const Mail = () => {
  const t = useTranslation()
  const refForm = useRef()
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus("loading")
    setError(null)

    const form = refForm.current
    const data = {
      from_name: form.from_name.value,
      email_id: form.email_id.value,
      message: form.message.value,
    }

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setStatus("success")
          refForm.current.reset()
          setTimeout(() => setStatus("idle"), 5000)
        } else {
          setError(t.mail.error)
          setStatus("idle")
        }
      })
      .catch(() => {
        setError(t.mail.error)
        setStatus("idle")
      })
  }

  return (
    <form ref={refForm} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div className="relative">
        <input
          id="from_name"
          name="from_name"
          type="text"
          required
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
        />
        <label
          htmlFor="from_name"
          className="absolute left-4 z-10 px-1 pointer-events-none transition-all bg-surface-alt
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:bg-transparent
            top-0 -translate-y-1/2 text-xs peer-focus:text-accent"
        >
          {t.mail.yourName}
        </label>
      </div>

      <div className="relative">
        <input
          id="email_id"
          name="email_id"
          type="email"
          required
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
        />
        <label
          htmlFor="email_id"
          className="absolute left-4 z-10 px-1 pointer-events-none transition-all bg-surface-alt
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:bg-transparent
            top-0 -translate-y-1/2 text-xs peer-focus:text-accent"
        >
          {t.mail.emailAddress}
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-4 z-10 px-1 pointer-events-none transition-all bg-surface-alt
            peer-placeholder-shown:top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:bg-transparent
            top-0 -translate-y-1/2 text-xs peer-focus:text-accent"
        >
          {t.mail.yourMessage}
        </label>
      </div>

      {status === "success" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 animate-fade-in">
          <RiCheckLine size={18} />
          <span className="text-sm font-medium">{t.mail.success}</span>
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-hover text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none group"
      >
        {status === "loading" ? (
          <>
            <RiLoader4Line size={18} className="animate-spin" />
            <span>{t.mail.sending}</span>
          </>
        ) : (
          <>
            <span>{t.mail.sendMessage}</span>
            <RiMailSendLine size={18} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}