import fetch from 'isomorphic-fetch'

export function fetchPaginaRepos (id) {
  const encodedURI = encodeURI(`https://tiagojardim.000webhostapp.com/getPagina.php?pagina=${id}`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}
