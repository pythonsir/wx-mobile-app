import React ,{PureComponent} from 'react'

import {default as Products} from '../components/ProductList'

import {connect} from 'react-redux'


class ProductList extends PureComponent{

    componentDidMount(){

        this.props.dispatch({
            type:'getproduct_1'
        })


    }


    render(){


        return (

            <Products {...this.props} />
        )

    }


}

export default  connect(({productsRedux})=>{

    return {
        data : productsRedux.data,
    }

})(ProductList);