import fetch from 'isomorphic-fetch'

export function fetchBuscaRepos (pesquisa) {
  const encodedURI = encodeURI(`https://tiagojardim.000webhostapp.com/getBusca.php?pesquisa=${decodeURI(pesquisa)}`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}