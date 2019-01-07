import fetch from 'isomorphic-fetch'

export function fetchHomeRepos (id) {

  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy=%22data%22&limitToLast=10`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => Object.values(repos))
    .catch((error) => {
      console.warn(error)
      return null
    });
  }
