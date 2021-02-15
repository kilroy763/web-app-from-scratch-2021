// Door middel van Routie verschillende routers maken voor de pagina's
export function router() {
    const breakingbad = document.getElementById('breakingbad');
    const bettercallsaul = document.getElementById('bettercallsaul')

    routie({
        '': function () {
            bettercallsaul.classList.add('show');
            breakingbad.classList.add('show');
            document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
        },
        'bettercallsaul': function () {
            breakingbad.classList.remove('show');
            bettercallsaul.classList.toggle('show');
            document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1930554.jpg)";
        },
        'breakingbad' : function () {
            breakingbad.classList.toggle('show');
            bettercallsaul.classList.remove('show');
            document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
        },
        'breakingbad/season/:id': function (id) {
            breakingbad.classList.toggle("show");
            console.log(id)
        }

    })
}


export function render(data, data2){
    if(data) {
        forRender(data)
    } 
    if(data2){
        forRenderSaul(data2)
    }
}











// document.getElementById('overview').style.display = "none";
// document.getElementById('overview2').style.display = "none";
// document.getElementById('title').style.display = "none";
// document.getElementById('title2').style.display = "none";
// document.getElementById('userrating').style.display = "none";
// document.getElementById('cijfer').style.display = "none";
// document.getElementById('cijfer2').style.display = "none";

// document.getElementById('overview2').style.display = "block";
// document.getElementById('title2').style.display = "block";
// document.getElementById('userrating').style.display = "block";
// document.getElementById('cijfer2').style.display = "block";

// document.getElementById('overview').style.display = "block";
// document.getElementById('title').style.display = "block";
// document.getElementById('userrating').style.display = "block";
// document.getElementById('cijfer').style.display = "block";