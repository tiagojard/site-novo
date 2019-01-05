import fetch from 'isomorphic-fetch'

export function fetchBuscaAssuntoRepos (pesquisa) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy=%22assunto/0/nome%22&equalTo=%22${decodeURI(pesquisa)}%22`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos != null ? Object.values(repos) : null)
    .catch((error) => {
      console.warn(error)
      return null
    });
}