import fetch from 'isomorphic-fetch'

export function fetchHomeRepos (data) {
  var url = 'https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy=%22data%22';
  //if(data != "")
    //url = 'https://guiadesenvolvedor-78a46.firebaseio.com/pergunta.json?orderBy=%22data%22&limitToLast=11&endAt=%22'+data+'%22'
  const encodedURI = encodeURI(url)
  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => Object.values(repos))
    .catch((error) => {
      console.warn(error)
      return null
    });
  }
