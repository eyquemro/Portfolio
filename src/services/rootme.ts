interface RootMeProfile {
  nom: string;
  score: number;
  position: number;
  challenges: {
    id_challenge: number;
    url_challenge: string;
  }[];
}

export async function fetchRootMeProfile(apiKey: string): Promise<RootMeProfile> {
  try {
    const response = await fetch('https://api.www.root-me.org/auteurs/eyquemro', {
      headers: {
        'Cookie': `spip_session=${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    
    const text = await response.text();
    console.log('Response:', text);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status} - ${text}`);
    }

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Erreur de parsing JSON:', e);
      throw new Error('Format de réponse invalide');
    }
  } catch (error) {
    console.error('Erreur détaillée:', error);
    throw error;
  }
}

export async function fetchRootMeStats(apiKey: string) {
  try {
    const response = await fetch('https://api.www.root-me.org/challenges', {
      headers: {
        'Cookie': `spip_session=${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Status Challenges:', response.status);
    const text = await response.text();
    console.log('Response Challenges:', text);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Erreur de parsing JSON:', e);
      throw new Error('Format de réponse invalide');
    }
  } catch (error) {
    console.error('Erreur détaillée challenges:', error);
    throw error;
  }
} 