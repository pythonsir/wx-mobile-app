import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {default as HomeShopcarComponent} from '../components/HomeShopCar'


class HomeShopcar extends PureComponent{

    render(){

        const { ajaxdata }  = this.props;

        return (
            <HomeShopcarComponent  data={ajaxdata} />
        )
    }

}

export default connect(({ homeShopcarRedux })=>{

    return {
        ajaxdata : homeShopcarRedux.data
    }

})(HomeShopcar)