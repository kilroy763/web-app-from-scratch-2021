// Importeren van de benodige stukken code
import {
    fetchData,
    fetchDatas1
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
    const dataSeasons = await fetchDatas1()
    console.log(dataBrBa, dataSaul, dataSeasons)

    render(dataBrBa, dataSaul, dataSeasons)

    router()

})()