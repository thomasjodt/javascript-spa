const API = 'https://rickandmortyapi.com/api/character'

export default async(id) => {  // getData
  const apiURL = id ? `${API}/${id}` : API

  try {
    const res = await fetch(apiURL)
    const data = await res.json()
    return data
  }
  catch (error) { console.error('Fetch Error: ', error) }
}