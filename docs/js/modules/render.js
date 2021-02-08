import fetchData from './fetcher.js'

export function forRender(putData){ //nodige elementen oproepen
    let data = putData;
    name(data);
    overview(data);
    poster_path(data);
    seasonName(data);
    vote_average(data);
    console.log("data", data)
    console.log(data.name);
}

