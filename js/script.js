const img = "https://image.tmdb.org/t/p/w500" ;
const cors = 'https://api.themoviedb.org/3/tv/1396';
const key = 'ae3a232f0096c607ad590f0ec850e635';
const url = `${cors}?api_key=${key}`;


fetch (url) 
    .then(response => response.json())
    .then(data => render(data));
            

function render(putData){
    let data = putData;
    name(data);
    overview(data);
    poster_path(data);
    sNaam(data);
    vote_average(data);
    console.log("data", data)
    console.log(data.name);

}


function poster_path(data){
const info = document.getElementById('info')
const posters = [data.seasons[1].poster_path, data.seasons[2].poster_path, data.seasons[3].poster_path, data.seasons[4].poster_path, data.seasons[5].poster_path]
//https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
for (let poster of posters) {
    let nieuwposter = document.createElement('img')
    nieuwposter.src = img + poster;
    info.appendChild(nieuwposter)
}
}

function sNaam(data){
    const info = document.getElementById('info')
    const naam = [data.seasons[1].name, data.seasons[2].name, data.seasons[3].name, data.seasons[4].name, data.seasons[5].name]
    //https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    for (let namen of naam) {
        let sNaam = document.createElement('p')
        sNaam.textContent = namen ;
        info.appendChild(sNaam)
    }
}



function name(data){
    let cont = document.getElementById('title')
    cont.innerHTML = data.name
}


function  overview(data){
    let cont = document.getElementById('overview')
    cont.innerHTML = data.overview
}

function vote_average(data){
    let cont = document.getElementById('cijfer')
    cont.innerHTML = data.vote_average
}