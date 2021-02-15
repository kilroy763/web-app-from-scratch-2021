const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const brba = "tv/1396";  //code voor breaking bad
const saul = "tv/60059"; //code voor better call saul
const s1 = "/season/1"; // code voor seizoen 1
const url = `${cors}${brba}?api_key=${key}`; //samenvoegen van de link en key
const urls1 = `${cors}${brba}${s1}?api_key=${key}`; //samenvoegen van de link en key
const url2 = `${cors}${saul}?api_key=${key}`; //samenvoegen van de link en key
let dataResponse = {};



// fetch(`https://api.themoviedb.org/3/tv/1396/season/1?api_key=ae3a232f0096c607ad590f0ec850e635&language=en-US  `) 


// Data fetchen van beide series
export async function fetchData(saul){

    saul ? dataResponse = await fetch(url2) : dataResponse = await fetch(url)
    
    const data = dataResponse.json()

    return data
};



//     export async function fetchDatas1(){
//         const dataResponse = await fetch(urls1)
//         const data = dataResponse.json()
//         return data
//     };