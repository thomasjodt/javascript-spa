import Home from '../pages/Home'
import Header from '../templates/Header'
import Error404 from '../pages/Error404'
import Characters from '../pages/Character'

const routes = {
  '/': Home,
  '/:id': Characters,
  '/contact': 'Contact',
}
export default async() => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()
}