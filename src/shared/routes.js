import Home from './Home'
import Pagina from './Pagina'
import Busca from './Busca'
import { fetchHomeRepos } from './apiHome'
import { fetchPaginaRepos } from './apiPagina'
import { fetchBuscaRepos } from './apiBusca'

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
  },
  {
    path: '/busca/:pesquisa',
    component: Busca,
    fetchInitialData: (path = '') => fetchBuscaRepos(path.split('/').pop())
  }
]
export default routes
