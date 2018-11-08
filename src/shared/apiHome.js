import fetch from 'isomorphic-fetch'

export function fetchHomeRepos (id) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy=%22ativo%22&equalTo=true`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => Object.values(repos))
    .catch((error) => {
      console.warn(error)
      return null
    });
}
