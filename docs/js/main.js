// Importeren van de benodige stukken code
import {
    fetchData,
    fetchDataSeason
} from './modules/fetcher.js'
import {
    render
} from './modules/render.js'
import {
    router
} from './modules/router.js'

// Alles laten runnen
(async function Init() {
    const dataBrBa = await fetchData(false)
    const dataSaul = await fetchData(true)



    console.log(dataBrBa, dataSaul )

    render(dataBrBa, dataSaul)

    router()

})()