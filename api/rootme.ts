import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch('https://api.www.root-me.org/auteurs/886940', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cookie': 'api_key=886940_47052075a26422c0148aaa882b31974eb708ecad220b6347862430655ee94e3f'
      }
    })

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des données Root-Me (${response.status})`)
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Erreur Root-Me:', error)
    res.status(500).json({ error: 'Erreur lors de la récupération des données Root-Me' })
  }
} 