import fetch from 'isomorphic-fetch'

export function fetchBuscaAssuntoRepos (pesquisa) {
  //const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy=%22assunto/0/nome%22&equalTo=%22${decodeURI(pesquisa)}%22`)
  const encodedURI = encodeURI(`https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy="pesquisa"&endAt="${decodeURI(pesquisa.toLowerCase())}\uf8ff"`)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos != null ? Object.values(repos).filter(function(value, index, self){ var encontrou = true; pesquisa.toLowerCase().split('%20').forEach(function(v){ if(value.pesquisa.indexOf(v) == -1) encontrou = false;   }); return encontrou == true;  }) : null)
    .catch((error) => {
      console.warn(error)
      return null
    });
}