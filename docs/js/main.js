console.log('JS werkt')


import {fetchData} from './modules/fetcher.js'
import {forRender} from './modules/render.js'


(async function Init(){
    const data = await fetchData()
    forRender(data)

}
)()


