console.log('JS werkt')


import {fetchData, fetchData2} from './modules/fetcher.js'
import {forRender, forRender2} from './modules/render.js'
import {router} from './modules/router.js'


(async function Init(){
    const data = await fetchData()
    const data2 = await fetchData2()
    forRender(data)
    forRender2(data2)
    router()
}
)()




