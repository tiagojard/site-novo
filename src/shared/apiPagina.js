import fetch from 'isomorphic-fetch'

export function fetchPaginaRepos (pagina) {
  const encodedURI = encodeURI(`https://tiagojardim.000webhostapp.com/getPagina.php?pagina=${pagina}`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
}
