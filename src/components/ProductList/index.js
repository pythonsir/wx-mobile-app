import React,{ PureComponent } from 'react'

import {Link} from 'react-router-dom'

import Styles from './index.less'

import Popup from '../../components/Popup'

import scar from '../../assets/scar.svg'

class ProductList extends PureComponent{


   
    state={
        hidden:false,
    }


    clickShopCar = (index)=>{


        this.props.dispatch({
            type:'openPopup'
        })

        this.props.dispatch({
            type:'getHomeShopcarSaga'
        })

        var _body = document.getElementsByTagName("body")

        _body[0].style.overflow="hidden";
       


        return false;
       

    }

  

    render(){

        const {data} = this.props;


        return (

            // 商品列表
            <div className={Styles.list_container}>
                <div className={Styles.list_warper}>
                    <ul>

                    {
                        data.map((item,index)=>(

                            <li key={index}>
                                                <div className={Styles.pwarper}>

                                                    <div>
                                                        <img src={item.imgsrc} />
                                                    </div>
                                                    <div className={Styles.title_warper}>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className={Styles.price_warper}>

                                                        <p><em>¥ {item.price}</em></p>
                                                        <div className={Styles.shop_cart}>
                                                            <div className={Styles.cap_goods_list__buy_btn}>
                                                                <img onClick={this.clickShopCar.bind(this,index)}  className={Styles.scimg} src={scar} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                            </li>
                        ))


                    }

                        
                    </ul>
                </div>

            </div>

        )


    }




}

export default ProductList;