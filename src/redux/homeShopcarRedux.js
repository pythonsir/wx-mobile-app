const initstate = {

    data:{},

}

function homeShopcarRedux(state=initstate,{type,payload}){

    switch(type){

        case 'addHomeShopCar':

            return {
                ...state,
                data:payload,
            }

        default:
            return state;
    }


}

export default homeShopcarRedux;