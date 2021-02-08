import fetchData from './fetcher.js'

export function poster_path(data){
    const info = document.getElementById('info')
    const posters = [data.seasons[1].poster_path, data.seasons[2].poster_path, data.seasons[3].poster_path, data.seasons[4].poster_path, data.seasons[5].poster_path]
    for (let poster of posters) {
        let nieuwposter = document.createElement('img')
        nieuwposter.src = img + poster;
        info.appendChild(nieuwposter)
    }
    }
        //poster van de seizoenen oproepen
        //bron:https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    
export function seasonName(data){
        const info = document.getElementById('info')
        const naam = [data.seasons[1].name, data.seasons[2].name, data.seasons[3].name, data.seasons[4].name, data.seasons[5].name]
        for (let namen of naam) {
            let seasonName = document.createElement('p')
            seasonName.textContent = namen ;
            info.appendChild(seasonName)
        }
    }
        //namen van de seizoenen oproepen
        //bron:https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    
    
    
    
export function  overview(data){
        let cont = document.getElementById('overview')
        cont.innerHTML = data.overview
    } // plot van serie oproepen
    
    function vote_average(data){
        let cont = document.getElementById('cijfer')
        cont.innerHTML = data.vote_average
    } // cijfer van serie oproepen
    
    
    
export  function name(data){
        let cont = document.getElementById('title')
        cont.innerHTML = data.name
    }   // titel van serie oproepen
    
    