// Importeren van de gerenderde data
import {nameBrBa, overviewBrBa, poster_pathBrBa, seasonNameBrBa, vote_averageBrBa} from './routes/brba.js'
import {nameSaul, overviewSaul, poster_pathSaul, seasonNameSaul, vote_averageSaul} from './routes/saul.js'
import {air_date, name, poster_path, episodes} from './routes/season.js'

export function render(dataBrBa, dataSaul){
     if(dataBrBa) {
         forRender(dataBrBa)
     } 
     if(dataSaul){
         forRenderSaul(dataSaul)
     }
}



//nodige elementen oproepen voor breaking bad
export function forRender(putDataBrBa){ 
    let dataBrBa = putDataBrBa;
    nameBrBa(dataBrBa);
    overviewBrBa(dataBrBa);
    poster_pathBrBa(dataBrBa);
    seasonNameBrBa(dataBrBa);
    vote_averageBrBa(dataBrBa);
}

//nodige elementen oproepen voor better call saul
export function forRenderSaul(putDataSaul){ 
    let dataSaul = putDataSaul;
    nameSaul(dataSaul);
    overviewSaul(dataSaul);
    poster_pathSaul(dataSaul);
    seasonNameSaul(dataSaul);
    vote_averageSaul(dataSaul);
}

//nodige elementen oproepen voor breaking bad
export function forRenderSeason(putDataSeasons){ 
    let dataSeason = putDataSeasons;
    air_date(dataSeason);
    name(dataSeason);
    poster_path(dataSeason);
    episodes(dataSeason);
}

