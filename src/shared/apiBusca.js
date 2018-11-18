import fetch from 'isomorphic-fetch'

export function fetchBuscaRepos (pesquisa) {
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/conteudo.json?orderBy="pesquisa"&endAt="${decodeURI(pesquisa.toLowerCase())}\uf8ff"`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos != null ? Object.values(repos).filter(function(value, index, self){ var encontrou = true; pesquisa.split('%20').forEach(function(v){ if(value.pesquisa.indexOf(v) == -1) encontrou = false;   }); return encontrou == true;  }) : null)
    .catch((error) => {
      console.warn(error)
      return null
    });
}