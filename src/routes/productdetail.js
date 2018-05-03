import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {history} from '../store'
import {withRouter} from 'react-router-dom'
import ProductDetailCom from '../components/ProductDetail'



@connect(({productDetailRedux})=>(
    productDetailRedux
))
class ProductDetail extends PureComponent{


    componentDidMount(){

        const {location} = this.props;

        if( undefined == location.search || "" == location.search){

            history.push("/home")

        }else{

            this.props.dispatch({
                type:'getProductdetailSaga',
                payload:{"id":this.props.location.search}
            })

        }

         console.log(this.props.location.search)

         


    }

            render(){

                return (
                
                    <ProductDetailCom data={this.props.data} />
                )


            }


}

export default withRouter(ProductDetail)
