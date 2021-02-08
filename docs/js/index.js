const img = "https://image.tmdb.org/t/p/w500" ; //algemene link van de images 
const cors = 'https://api.themoviedb.org/3/tv/1396'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const url = `${cors}?api_key=${key}`; //samenvoegen van de link en key




routie('test', (date) => {
    console.log("het werkt");
});


fetch (url) 
    .then(response => response.json())
    .then(data => render(data));
    //oproepen API

function render(putData){ //nodige elementen oproepen
    let data = putData;
    name(data);
    overview(data);
    poster_path(data);
    seasonName(data);
    vote_average(data);
    console.log("data", data)
    console.log(data.name);
}




function poster_path(data){
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

function seasonName(data){
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




function  overview(data){
    let cont = document.getElementById('overview')
    cont.innerHTML = data.overview
} // plot van serie oproepen

function vote_average(data){
    let cont = document.getElementById('cijfer')
    cont.innerHTML = data.vote_average
} // cijfer van serie oproepen



export default function name(data){
    let cont = document.getElementById('title')
    cont.innerHTML = data.name
}   // titel van serie oproepen

