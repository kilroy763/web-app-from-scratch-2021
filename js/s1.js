const image = "https://image.tmdb.org/t/p/w500" ;


// GET REQUEST
const movies = fetch(`https://api.themoviedb.org/3/tv/1396/season/1?api_key=ae3a232f0096c607ad590f0ec850e635&language=en-US  `)
                .then(response => response.json())
                .then(data => render(data));
            
                
function render(putData){
    let data = putData;
    console.log("this is the data", data)
    name(data);
    overview(data);
    poster_path(data);

    console.log(data.name);

}


function name(data){
    let cont = document.getElementById('title')
    cont.innerHTML = data.name
}

function  overview(data){
    let cont = document.getElementById('overview')
    cont.innerHTML = data.overview
}





function poster_path(data) {
    let cont = document.getElementById('info');
    let article = document.createElement('article');
    let img = document.createElement('img');
    img.src = image + data.poster_path
    article.id = "image1";
    article.appendChild(img);
    cont.appendChild(article);
}