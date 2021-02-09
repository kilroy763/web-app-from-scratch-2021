const img = "https://image.tmdb.org/t/p/w500" ; //algemene link van de images 

export function poster_path2(data2){
    const info = document.getElementById('info2')
    const posters = [data2.seasons[1].poster_path, data2.seasons[2].poster_path, data2.seasons[3].poster_path, data2.seasons[4].poster_path, data2.seasons[5].poster_path]
    for (let poster of posters) {
        let nieuwposter = document.createElement('img')
        nieuwposter.src = img + poster;
        info.appendChild(nieuwposter)
    }
    }
        //poster van de seizoenen oproepen
        //bron:https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    
export function seasonName2(data2){
        const info = document.getElementById('info2')
        const naam = [data2.seasons[1].name, data2.seasons[2].name, data2.seasons[3].name, data2.seasons[4].name, data2.seasons[5].name]
        for (let namen of naam) {
            let seasonName = document.createElement('p')
            seasonName.textContent = namen ;
            info.appendChild(seasonName)
        }
    }
        //namen van de seizoenen oproepen
        //bron:https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    
    
    
    
export function  overview2(data2){
        let cont = document.getElementById('overview2')
        cont.innerHTML = data2.overview
    } // plot van serie oproepen
    

export function vote_average2(data2){
        let cont = document.getElementById('cijfer2')
        cont.innerHTML = data2.vote_average
    } // cijfer van serie oproepen
    
    
    
export  function name2(data2){
        let cont = document.getElementById('title2')
        cont.innerHTML = data2.name
    }   // titel van serie oproepen
    
    