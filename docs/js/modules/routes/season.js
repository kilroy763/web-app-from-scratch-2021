//algemene link van de images 
const img = "https://image.tmdb.org/t/p/w500" ;


export  function nameSeasons(dataSeasons){
    let titel = document.getElementById('seasonsTitle')
    titel.innerHTML = dataSeasons.name
}   

export  function air_date(dataSeasons){
    let airDate = document.getElementById('SeasonsAirDate')
    airDate.innerHTML = dataSeasons.air_date
}   

        // plot van serie oproepen
        export function  overviewSeasons(dataSeasons){
            let overviewseasons = document.getElementById('overviewseasons')
            overviewseasons.innerHTML = dataSeasons.overview
        } 


export function episodes(dataSeasons){
        const info = document.getElementById('infoSeasons')
        info.innerHTML = '';
        const posters = dataSeasons.episodes
        posters.forEach((poster, i) => {
            let nieuwposter = document.createElement('img')
            nieuwposter.src = img + dataSeasons.episodes[i].still_path;
            info.appendChild(nieuwposter)

            // nieuwposter.onclick = function(){
            //     nieuwposter.classList.add('enlarge')

            //   }
            
        })};
    
      
    
        export function episodeName(dataSeasons){
            const info = document.getElementById('infoSeasons')
            const naam = dataSeasons.episodes
            naam.forEach((poster, i) => {
                let episodeName = document.createElement('p')
                episodeName.textContent = dataSeasons.episodes[i].name ;
                info.appendChild(episodeName)
            })};

            


export function poster_path(dataSeasons){
    let poster = document.createElement("img");
    poster.src = img + dataSeasons.poster_path ; 
    let src = document.getElementById("seasonImg");
    src.innerHTML = '';
    src.appendChild(poster);
};

