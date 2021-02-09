

export function router(){
    document.getElementById('info2').style.display = "none";
    document.getElementById('cijfer2').style.display = "none";
    document.getElementById('title2').style.display = "none";
    document.getElementById('overview2').style.display = "none";

    routie({
        'bettercallsaul': function()  {
        document.getElementById('cijfer').style.display = "none";
        document.getElementById('title').style.display = "none";
        document.getElementById('overview').style.display = "none";
        document.getElementById('info').style.display = "none";
        document.getElementById('info2').style.display = "block";
        document.getElementById('cijfer2').style.display = "block";
        document.getElementById('title2').style.display = "block";
        document.getElementById('overview2').style.display = "block";
        document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1930554.jpg)";
    }, 'breakingbad' : function(){
        document.getElementById('cijfer2').style.display = "none";
        document.getElementById('title2').style.display = "none";
        document.getElementById('overview2').style.display = "none";
        document.getElementById('info2').style.display = "none";
        document.getElementById('info').style.display = "block";
        document.getElementById('cijfer').style.display = "block";
        document.getElementById('title').style.display = "block";
        document.getElementById('overview').style.display = "block";
        document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
    }
        
})} 