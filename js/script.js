const img = "https://image.tmdb.org/t/p/w500" ;


// GET REQUEST
const movies = fetch(`https://api.themoviedb.org/3/tv/1396?api_key=ae3a232f0096c607ad590f0ec850e635&language=en-US  `)
                .then(response => response.json())
                .then(data => render(data));
            
                
function render(putData){
    let data = putData;
    console.log("this is the data", data)
    name(data);
    overview(data);
    poster_path(data);
    poster_path2(data);
    poster_path3(data);
    poster_path4(data);
    poster_path5(data);
    console.log(data.title);

}


function name(data){
    let cont = document.getElementById('title')
    cont.innerHTML = data.name
}

function  overview(data){
    let cont = document.getElementById('overview')
    cont.innerHTML = data.overview
}


function poster_path(data){
    let cont = document.getElementById('poster1')
    cont.src = img + data.seasons[1].poster_path
}

function poster_path2(data){
    let cont = document.getElementById('poster2')
    cont.src = img + data.seasons[2].poster_path
}

function poster_path3(data){
    let cont = document.getElementById('poster3')
    cont.src = img + data.seasons[3].poster_path
}

function poster_path4(data){
    let cont = document.getElementById('poster4')
    cont.src = img + data.seasons[4].poster_path
}

function poster_path5(data){
    let cont = document.getElementById('poster5')
    cont.src = img + data.seasons[5].poster_path
}

