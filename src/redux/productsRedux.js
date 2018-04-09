const initstate = {

    data:[]

}

function productsRedux(state=initstate,{type,payload}){

    switch(type){

        case 'getProduct_1ReduxList':

            return {
                ...state,
                data:payload
            }

        default:
            return state;
    }


}

export default productsRedux;