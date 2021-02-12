 //algemene link van de images 
const img = "https://image.tmdb.org/t/p/w500" ;

//poster van de seizoenen oproepen
export function poster_path(data){
    const info = document.getElementById('info')
    const posters = [data.seasons[1].poster_path, data.seasons[2].poster_path, data.seasons[3].poster_path, data.seasons[4].poster_path, data.seasons[5].poster_path]
    for (let poster of posters) {
        let nieuwposter = document.createElement('img')
        let posterlink = document.createElement('a')
        posterlink.href = '#breakingbadseason1'
        nieuwposter.src = img + poster;
        posterlink.appendChild(nieuwposter)
        info.appendChild(posterlink)


    }
    }
       
//namen van de seizoenen oproepen     
export function seasonName(data){
        const info = document.getElementById('info')
        const naam = [data.seasons[1].name, data.seasons[2].name, data.seasons[3].name, data.seasons[4].name, data.seasons[5].name]
        for (let namen of naam) {
            let seasonName = document.createElement('p')
            seasonName.textContent = namen ;
            info.appendChild(seasonName)
        }
    }
//bron:https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    
    
    
// plot van serie oproepen
export function  overview(data){
        let cont = document.getElementById('overview')
        cont.innerHTML = data.overview
    } 
    
// cijfer van serie oproepen
export function vote_average(data){
        let cont = document.getElementById('cijfer')
        cont.innerHTML = data.vote_average
    } 
 
// titel van serie oproepen    
export  function name(data){
        let cont = document.getElementById('title')
        cont.innerHTML = data.name
    }   
    
    