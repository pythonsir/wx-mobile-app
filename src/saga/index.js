
import { put,takeEvery,fork,all } from 'redux-saga/effects'
import  globalSaga from './globalSaga'
import  bannerSaga from './bannerSaga'
import shortcutSaga from './shortcutSaga'
import productSaga from './productSaga'
import homeShopcarSaga from './homeShopcarSaga'

// 所有saga的入口配置文件
const config = [

   fork(globalSaga),
   fork(bannerSaga),
   fork(shortcutSaga),
   fork(productSaga),
   fork(homeShopcarSaga),

]


export default function* rootSaga(){

    yield all(config)

};