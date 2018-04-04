import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getBanners} from '../services/api'

function* getBannerList(){

    const res = yield call(getBanners);

    yield put({
        type:'getBannerListRedux',
        payload:res.data,
        }   
    )



}



function* bannerSaga(){

 yield takeLatest('getBannerListSaga',getBannerList)

}

export default bannerSaga;