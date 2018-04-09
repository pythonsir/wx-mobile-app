import React,{ PureComponent } from 'react'

import {Link} from 'react-router-dom'

import Styles from './index.less'

class ProductList extends PureComponent{


    render(){

        const {data} = this.props;
        console.log(data)

        return (

            // 商品列表
            <div className={Styles.list_container}>
                <div className={Styles.list_warper}>
                    <ul>

                    {
                        data.map((item,index)=>(

                            <li key={index}>
                                                <Link to={item.url} >

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
                                                                <i></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </Link>
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