const initstate = {

    data:[]

}

function shortCutRedux(state=initstate,{type,payload}){

    switch(type){

        case 'getShortcutReduxList':

            return {
                ...state,
                data:payload
            }

        default:
            return state;
    }


}

export default shortCutRedux;