const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const brba = "tv/1396"
const saul = "tv/60059"
const url = `${cors}${brba}?api_key=${key}`; //samenvoegen van de link en key
const url2 = `${cors}${saul}?api_key=${key}`; //samenvoegen van de link en key





export async function fetchData(){
    const dataResponse = await fetch(url)
    const data = dataResponse.json()
    return data
};

export async function fetchData2(){
    const dataResponse = await fetch(url2)
    const data = dataResponse.json()
    return data
};


