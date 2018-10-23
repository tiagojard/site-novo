import fetch from 'isomorphic-fetch'

export function fetchBuscaRepos (pesquisa) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy="pesquisa"&endAt="${decodeURI(pesquisa)}\uf8ff"`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}