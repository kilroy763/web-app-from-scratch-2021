console.log('JS werkt')


import {fetchData} from './modules/fetcher.js'
import {forRender} from './modules/render.js'
import {poster_path, seasonName,  overview, name} from './modules/overview.js'

async function Init(){
    const data = await fetchData()
    render(data)
    forRender(data)
    poster_path(data)
    seasonName(data)
    overview(data)
    name(data)
}