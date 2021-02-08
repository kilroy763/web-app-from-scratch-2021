const img = "https://image.tmdb.org/t/p/w500" ; //algemene link van de images 
const cors = 'https://api.themoviedb.org/3/tv/1396'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const url = `${cors}?api_key=${key}`; //samenvoegen van de link en key




export async function fetchData(){
    const dataResponse = await fetch(url)
    const data = dataResponse.json()
    return data
}


