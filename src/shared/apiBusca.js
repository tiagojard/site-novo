import fetch from 'isomorphic-fetch'

export function fetchBuscaRepos (pesquisa) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy="ativo"&endAt=true&orderBy="pesquisa"&endAt="${decodeURI(pesquisa.toLowerCase())}\uf8ff"`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos != null ? Object.values(repos) : null)
    .catch((error) => {
      console.warn(error)
      return null
    });
}