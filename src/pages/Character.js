import getHash from '../utils/getHash'
import getData from '../utils/getData'

export default async() => {

  const id = getHash()
  const character = await getData(id)

  const view = `
    <div class="Characters-inner" >
      <article class="Characters-card" >
        <img src="${character.image}" alt="${character.name}" >
        <h2>${character.name}</name>
      </article>
      
      <article class="Characters-card" >
        <p><b>Episodes:</b> <span>${character.episode.length}</span></p>
        <p><b>Status:</b> <span>${character.status}</span></p>
        <p><b>Specie:</b> <span>${character.species}</span></p>
        <p><b>Genre:</b> <span>${character.gender}</span></p>
        <p><b>Origin:</b> <span>${character.origin.name}</span></p>
        <p><b>Last Location:</b> <span>${character.location.name}</span></p>
      </article>
    </div>
  `
  return view
}