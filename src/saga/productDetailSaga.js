import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getProductdetailById} from '../services/api'



function* getProductdetailSaga({payload}){

    const res = yield call(getProductdetailById,payload);

    console.log(res)

    // yield put({
    //     type:'getBannerListRedux',
    //     payload:res.data,
    //     }   
    // )



}



function* productDetailSaga(){

 yield takeLatest('getProductdetailSaga',getProductdetailSaga)

}

export default productDetailSaga;