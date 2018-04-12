const initstate = {

    homePopup:true,

}

function globalRedux(state=initstate,{type,payload}){

    switch(type){

        case 'openPopup':

            return {
                ...state,
                homePopup:false,
            }
        case 'closePopup':

            return {
                ...state,
                homePopup:true,
            }
            

        default:
            return state;
    }


}

export default globalRedux;