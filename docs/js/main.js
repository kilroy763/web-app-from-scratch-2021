console.log('JS werkt')


import {fetchData} from './modules/fetcher.js'
import {forRender} from './modules/render.js'
import {router} from './modules/router.js'


(async function Init(){
    const data = await fetchData()
    forRender(data)
    router()
}
)()




