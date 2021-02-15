//algemene link van de images 
const img = "https://image.tmdb.org/t/p/w500" ; 

//poster van de seizoenen oproepen
export function poster_pathSaul(dataSaul){
    const info = document.getElementById('infoSaul')
    const posters = [dataSaul.seasons[1].poster_path, dataSaul.seasons[2].poster_path, dataSaul.seasons[3].poster_path, dataSaul.seasons[4].poster_path, dataSaul.seasons[5].poster_path]
    for (let poster of posters) {
        let nieuwposter = document.createElement('img')
        nieuwposter.src = img + poster;
        info.appendChild(nieuwposter)
    }
    }
 

//namen van de seizoenen oproepen
export function seasonNameSaul(dataSaul){
        const info = document.getElementById('infoSaul')
        const naam = [dataSaul.seasons[1].name, dataSaul.seasons[2].name, dataSaul.seasons[3].name, dataSaul.seasons[4].name, dataSaul.seasons[5].name]
        for (let namen of naam) {
            let seasonName = document.createElement('p')
            seasonName.textContent = namen ;
            info.appendChild(seasonName)
        }
    }
//bron:https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    
// plot van serie oproepen
export function  overviewSaul(dataSaul){
        let cont = document.getElementById('overviewSaul')
        cont.innerHTML = dataSaul.overview
    } 
    
// cijfer van serie oproepen
export function vote_averageSaul(dataSaul){
        let cont = document.getElementById('cijferSaul')
        cont.innerHTML = dataSaul.vote_average
    }
    
    
// titel van serie oproepen
export  function nameSaul(dataSaul){
        let cont = document.getElementById('titleSaul')
        cont.innerHTML = dataSaul.name
    } 
    
    