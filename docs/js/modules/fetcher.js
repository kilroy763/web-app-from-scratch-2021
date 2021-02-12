const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const brba = "tv/1396"  //code voor breaking bad
const saul = "tv/60059" //code voor better call saul
const url = `${cors}${brba}?api_key=${key}`; //samenvoegen van de link en key
const url2 = `${cors}${saul}?api_key=${key}`; //samenvoegen van de link en key




// Data fetchen van Breaking bad
export async function fetchData(){
    const dataResponse = await fetch(url)
    const data = dataResponse.json()
    return data
};

// Data fetchen van Better Call Saul
export async function fetchData2(){
    const dataResponse = await fetch(url2)
    const data = dataResponse.json()
    return data
};


