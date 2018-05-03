import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getProductdetailById} from '../services/api'



function* getProductdetailSaga({payload}){

    const res = yield call(getProductdetailById,payload);


    yield put({
        type:'pd/prodcutDetailByid',
        payload:res,
         }   
    )



}



function* productDetailSaga(){

 yield takeLatest('getProductdetailSaga',getProductdetailSaga)

}

export default productDetailSaga;