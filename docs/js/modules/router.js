export function router(){
    routie({
        'bettercallsaul': function()  {
            
        document.getElementById('breakingbad').style.display = "none";
        document.getElementById('bettercallsaul').style.display = "block";

        document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1930554.jpg)";
    }, '' : function(){
        document.getElementById('bettercallsaul').style.display = "none";
        document.getElementById('breakingbad').style.display = "block";
        
        document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
    }, 'breakingbadSeason1' : function(){
        document.getElementById('bettercallsaul').style.display = "none";
        document.getElementById('breakingbad').style.display = "none";
    }
        
})} 