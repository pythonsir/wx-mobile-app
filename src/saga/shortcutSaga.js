import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getShortcutList} from '../services/api'


function* getShortcutSagaList(){

    const res = yield call(getShortcutList)

    yield put({
        type:'getShortcutReduxList',
        payload:res.data,
    })


}


function* shortcutSaga(){

    yield takeLatest('getShortcutSagaList',getShortcutSagaList)
   
}
   
export default shortcutSaga;