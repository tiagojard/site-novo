import fetch from 'isomorphic-fetch'

export function fetchHomeRepos (id) {
  const encodedURI = encodeURI(`https://tiagojardim.000webhostapp.com/getDestaque.php?id_pagina=${id}`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}
