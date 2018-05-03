const initstate = {

    data:{}

}

function productDetailRedux(state=initstate,{type,payload}){

    switch(type){

        case 'pd/prodcutDetailByid':

            return {
                ...state,
                data:payload,
            }

        default:
            return state;
    }


}

export default productDetailRedux;