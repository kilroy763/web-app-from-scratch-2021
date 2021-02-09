

export function router(){
    routie('test', (date) => {
        document.getElementById('title').style.display = "none";
        document.getElementById('overview').style.display = "none";
        document.getElementById('info').style.display = "none";
        document.getElementById('userrating').style.display = "none";
        document.getElementById('cijfer').style.display = "none";

        function seasonName(data){
            const info = document.getElementById('poging2')
            const naam = [data.seasons[1].name, data.seasons[2].name]
            for (let namen of naam) {
                let seasonName = document.createElement('p')
                seasonName.textContent = namen ;
                info.appendChild(seasonName)
            }
        }
    });
    console.log(seasonName)
} 