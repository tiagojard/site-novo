import fetch from 'isomorphic-fetch'

export function fetchPaginaRepos (id) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/conteudo/${id}.json`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}