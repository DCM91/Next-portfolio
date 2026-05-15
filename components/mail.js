import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { RiMailSendLine } from "react-icons/ri"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const API_KEY = process.env.NEXT_PUBLIC_EMAILJS_API_KEY

export const Mail = () => {
  const refForm = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, refForm.current, API_KEY)
      .then(() => alert("Message Sent!"))
      .catch((error) => console.error(error))
  }

  return (
    <form ref={refForm} onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          id="from_name"
          name="from_name"
          type="text"
          required
          placeholder="Your name"
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
        />
      </div>

      <div>
        <label htmlFor="email_id" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email_id"
          name="email_id"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Your message..."
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
      >
        Send Message
        <RiMailSendLine size={18} />
      </button>
    </form>
  )
}
