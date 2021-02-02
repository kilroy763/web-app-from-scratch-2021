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
    still_path(data);
    epname(data)
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

function still_path(data){

    const info = document.getElementById('info')
    
    const posters = [data.episodes[0].still_path, data.episodes[1].still_path, data.episodes[2].still_path, data.episodes[3].still_path, data.episodes[4].still_path]
    
    //https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
    for (let poster of posters) {
        let nieuwposter = document.createElement('img')
        nieuwposter.src = image + poster;
        info.appendChild(nieuwposter)
    
    }
    
    }

    function epname(data){

        const info = document.getElementById('info')
        
        const naam = [data.episodes[0].name, data.episodes[1].name, data.episodes[2].name, data.episodes[3].name, data.episodes[4].name]
        
        //https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode
        for (let namen of naam) {
            let epnaam = document.createElement('p')
            epnaam.textContent = namen ;
            info.appendChild(epnaam)
        
        }
        
        }
    