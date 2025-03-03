import { useState, useEffect } from 'react'

interface RootMeStatsProps {
  username: string
}

interface RootMeData {
  score?: number
  position?: number
  challenges_validates?: number
}

export function RootMeStats({ username }: RootMeStatsProps) {
  const [data, setData] = useState<RootMeData>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRootMeStats = async () => {
      try {
        // En production, utilise l'API Route de Vercel
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? '/api/rootme'
          : '/api/rootme/auteurs/886940'

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          console.error('Status:', response.status)
          console.error('Headers:', Object.fromEntries(response.headers.entries()))
          throw new Error(`Erreur lors de la récupération des données Root-Me (${response.status})`)
        }

        const data = await response.json()
        console.log('Data received:', data)
        setData({
          score: data.score,
          position: data.position,
          challenges_validates: data.validations?.length || 0
        })
      } catch (err) {
        setError('Erreur de connexion à l\'API Root-Me')
        console.error('Erreur Root-Me:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRootMeStats()
  }, [username])

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-muted/30 p-3 rounded-lg text-center animate-pulse">
            <div className="h-6 bg-primary/20 rounded mb-1"></div>
            <div className="h-4 bg-primary/10 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-sm text-red-500">
        {error}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-muted/30 p-3 rounded-lg text-center">
        <div className="text-lg font-bold text-primary">{data.score}</div>
        <div className="text-xs text-muted-foreground">Points</div>
      </div>
      <div className="bg-muted/30 p-3 rounded-lg text-center">
        <div className="text-lg font-bold text-primary">#{data.position}</div>
        <div className="text-xs text-muted-foreground">Classement</div>
      </div>
      <div className="bg-muted/30 p-3 rounded-lg text-center">
        <div className="text-lg font-bold text-primary">{data.challenges_validates}</div>
        <div className="text-xs text-muted-foreground">Challenges</div>
      </div>
    </div>
  )
} 