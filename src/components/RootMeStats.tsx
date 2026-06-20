import { useState, useEffect } from 'react'

interface RootMeData {
  score?: number
  position?: number
  challenges_validates?: number
}

export function RootMeStats() {
  const [data, setData] = useState<RootMeData>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRootMeStats = async () => {
      try {
        const response = await fetch('/api/rootme', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        })

        if (!response.ok) {
          throw new Error(`Erreur API Root-Me (${response.status})`)
        }

        const json = await response.json()
        setData({
          score: json.score,
          position: json.position,
          challenges_validates: json.validations?.length || 0
        })
      } catch (err) {
        setError('Données indisponibles')
        console.error('Erreur Root-Me:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRootMeStats()
  }, [])

  const stats = [
    { label: 'Points',     value: loading ? '…' : error ? '—' : String(data.score ?? '—') },
    { label: 'Classement', value: loading ? '…' : error ? '—' : `#${data.position ?? '—'}` },
    { label: 'Challenges', value: loading ? '…' : error ? '—' : String(data.challenges_validates ?? '—') },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(s => (
        <div key={s.label} className="bg-muted/30 p-3 rounded-lg text-center">
          <div className="text-lg font-bold text-primary">{s.value}</div>
          <div className="text-xs text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
