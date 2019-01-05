import fetch from 'isomorphic-fetch'

export function fetchPerguntaRepos (id) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta/${id}.json`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}