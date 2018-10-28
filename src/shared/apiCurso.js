import fetch from 'isomorphic-fetch'

export function fetchCursoRepos () {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/produto.json`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => Object.values(repos))
    .catch((error) => {
      console.warn(error)
      return null
    });
}
