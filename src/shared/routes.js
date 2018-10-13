import Home from './Home'
import Grid from './Grid'
import Pagina from './Pagina'
import { fetchPopularRepos } from './api'
import { fetchPaginaRepos } from './apiPagina'
import { fetchHomeRepos } from './apiHome'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
    fetchInitialData: (path = '') => fetchHomeRepos(0)
  },
  {
    path: '/pagina/:id/:titulo',
    component: Pagina,
    fetchInitialData: (path = '') => fetchPaginaRepos(path.replace("/"+path.split('/').pop(),'').split('/').pop())
  }
]
export default routes
