
const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const brba = "tv/1396";  //code voor breaking bad
const saul = "tv/60059"; //code voor better call saul
const season = "/season/"; // code voor seizoen 
const seasonNumber1 = 1; // code voor specifieke seizoen
const urlBrBa = `${cors}${brba}?api_key=${key}`; //samenvoegen van de link en key
const urlSaul = `${cors}${saul}?api_key=${key}`; //samenvoegen van de link en key
const urlSeason = `${cors}${brba}${season}${seasonNumber1}?api_key=${key}`; //samenvoegen van de link en key

let dataResponse = {};





// Data fetchen van beide series
export async function fetchData(saul){

    saul ? dataResponse = await fetch(urlSaul) : dataResponse = await fetch(urlBrBa)
    
    const data = dataResponse.json()

    return data
};



    export async function fetchDatas1(){
        const dataResponse = await fetch(urlSeason)
        const data = dataResponse.json()
        return data
    };
