import Home from './Home'
import Pagina from './Pagina'
import Busca from './Busca'
import Conteudo from './Conteudo'
import Aprovacao from './Aprovacao'
import Curso from './Curso'
import { fetchHomeRepos } from './apiHome'
import { fetchPaginaRepos } from './apiPagina'
import { fetchBuscaAssuntoRepos } from './apiBuscaAssunto'
import { fetchBuscaRepos } from './apiBusca'
import { fetchCursoRepos } from './apiCurso'

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
    path: '/busca/assunto/:pesquisa',
    component: Busca,
    fetchInitialData: (path = '') => fetchBuscaAssuntoRepos(path.split('/').pop())
  },
  {
    path: '/busca/:pesquisa',
    component: Busca,
    fetchInitialData: (path = '') => fetchBuscaRepos(path.split('/').pop())
  },
  {
    path: '/cadastro/conteudo',
    component: Conteudo
  },
  {
    path: '/cadastro/aprovacao',
    component: Aprovacao
  },
  {
    path: '/curso',
    component: Curso,
    fetchInitialData: (path = '') => fetchCursoRepos()
  }
]
export default routes
