import { motion } from 'framer-motion'
import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://sendmail-api-5muimqwbua-ew.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `${formData.subject} - de ${formData.name}`,
          body: formData.message
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message')
      }

      setIsSuccess(true)
      setFormData({
        name: '',
        subject: '',
        message: ''
      })
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi du message')
      console.error('Erreur:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="container relative z-10 max-w-4xl">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Me Contacter
        </motion.h2>

        <motion.div
          className="cyber-card p-8 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-background text-foreground rounded-md border border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors relative z-30"
                required
                placeholder="Votre nom"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-background text-foreground rounded-md border border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors relative z-30"
                required
                placeholder="Sujet de votre message"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 bg-background text-foreground rounded-md border border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none relative z-30"
                required
                placeholder="Votre message..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`cyber-button relative z-30 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-md text-green-500 text-center font-medium relative z-30"
              >
                Message envoyé avec succès !
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-500 text-center font-medium relative z-30"
              >
                {error}
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div 
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            Vous pouvez également me contacter via les réseaux sociaux :
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/romain-eyquem"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button p-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/eyquemro"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button p-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 