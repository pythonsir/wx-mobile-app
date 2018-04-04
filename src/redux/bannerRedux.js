const initstate = {

    data:[]

}

function bannerRedux(state=initstate,{type,payload}){

    switch(type){

        case 'getBannerListRedux':

            return {
                ...state,
                data:payload
            }

        default:
            return state;
    }


}

export default bannerRedux;