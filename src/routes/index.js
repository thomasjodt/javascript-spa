import Home from '../pages/Home'
import Header from '../templates/Header'
import Error404 from '../pages/Error404'
import Characters from '../pages/Character'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
  '/': Home,
  '/:id': Characters,
  '/contact': 'Contact',
}
export default async() => {   // router
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404
  content.innerHTML = await render()
}