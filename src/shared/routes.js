import Home from './Home'
import Grid from './Grid'
import Pagina from './Pagina'
import { fetchPopularRepos } from './api'
import { fetchPaginaRepos } from './apiPagina'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/pagina/:id/:titulo',
    component: Pagina,
    fetchInitialData: (path = '') => fetchPaginaRepos(path.replace("/"+path.split('/').pop(),'').split('/').pop())
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  }
]
export default routes
