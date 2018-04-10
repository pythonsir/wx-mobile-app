import React,{ PureComponent } from 'react'

import {Link} from 'react-router-dom'

import Styles from './index.less'

import Popup from '../../components/Popup'

import scar from '../../assets/scar.svg'

class ProductList extends PureComponent{


    constructor(props){

        super(props)
        this.state = {
            hidden:true,
        }

    }


    clickShopCar = (index)=>{

        this.setState({
            hidden:!this.state.hidden,
        })

    }

    closePopu = () =>{

        this.setState({
            hidden:!this.state.hidden,
        })

    }

    render(){

        const {data} = this.props;

        const content = (<div>44444444</div>)

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
                                                                <img onClick={this.clickShopCar.bind(this,index)}  className={Styles.scimg} src={scar} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </Link>
                            </li>
                        ))


                    }

                        
                    </ul>
                </div>

                <Popup content={content} onclose={this.closePopu} flag={this.state.hidden} />
            </div>

        )


    }




}

export default ProductList;