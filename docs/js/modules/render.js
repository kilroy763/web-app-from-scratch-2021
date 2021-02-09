import {name, overview, poster_path, seasonName, vote_average} from './overview.js'
import {name2, overview2, poster_path2, seasonName2, vote_average2} from './saul.js'

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

export function forRender2(putData2){ //nodige elementen oproepen
    let data2 = putData2;
    name2(data2);
    overview2(data2);
    poster_path2(data2);
    seasonName2(data2);
    vote_average2(data2);
    console.log("data", data2)
    console.log(data2.name);
}

