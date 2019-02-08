import Home from './Home'
import Busca from './Busca'
import Conteudo from './Conteudo'
import Pergunta from './Pergunta'
import Aprovacao from './Aprovacao'
import Cursos from './Cursos'
import Curso from './Curso'
import Entrar from './Entrar'
import { fetchHomeRepos } from './apiHome'
import { fetchPerguntaRepos } from './apiPergunta'
import { fetchBuscaAssuntoRepos } from './apiBuscaAssunto'
import { fetchBuscaRepos } from './apiBusca'
import { fetchCursoRepos } from './apiCurso'
import { fetchCursosRepos } from './apiCursos'
/*
{
    path: '/',
  exact: true,
  component: Home
  },

*/
const routes =  [
  {
    path: '/',
  exact: true,
  component: Home,
  fetchInitialData: (path = '') => fetchHomeRepos("")
  },
  {
    path: '/pergunta/:id/:titulo',
    component: Pergunta,
    fetchInitialData: (path = '') => fetchPerguntaRepos(path.replace("/"+path.split('/').pop(),'').split('/').pop())
  },
  {
    path: '/ordem/:data',
    exact: true,
    component: Home,
    fetchInitialData: (path = '') => fetchHomeRepos(path.split('/').pop())
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
    path: '/cursos',
    component: Cursos,
    fetchInitialData: (path = '') => fetchCursosRepos()
  },
  {
    path: '/curso/:id/:titulo',
    component: Curso,
    fetchInitialData: (path = '') => fetchCursoRepos(path.replace("/"+path.split('/').pop(),'').split('/').pop())
  },
  {
    path: '/entrar',
    component: Entrar
  }
]
export default routes
