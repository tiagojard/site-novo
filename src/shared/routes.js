import Home from './Home'
import Busca from './Busca'
import Conteudo from './Conteudo'
import Pergunta from './Pergunta'
import Aprovacao from './Aprovacao'
import Curso from './Curso'
import Entrar from './Entrar'
//import { fetchHomeRepos } from './apiHome'
import { fetchPerguntaRepos } from './apiPergunta'
import { fetchBuscaAssuntoRepos } from './apiBuscaAssunto'
import { fetchBuscaRepos } from './apiBusca'
import { fetchCursoRepos } from './apiCurso'

/*
{
  path: '/',
  exact: true,
  component: Home,
  fetchInitialData: (path = '') => fetchHomeRepos(0)
},
*/
const routes =  [
  {
    path: '/',
  exact: true,
  component: Home
  },
  {
    path: '/pergunta/:id/:titulo',
    component: Pergunta,
    fetchInitialData: (path = '') => fetchPerguntaRepos(path.replace("/"+path.split('/').pop(),'').split('/').pop())
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
  },
  {
    path: '/entrar',
    component: Entrar
  }
]
export default routes
