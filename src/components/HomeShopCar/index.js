import React,{PureComponent} from 'react'
import Styles from './index.less'
import close from '../../assets/close.png'
import classNames from 'classnames'
import Stepper from '../Stepper'

/**
 * 首页添加购物车
 */
class HomeShopCar extends PureComponent{


    state={

        submitFlag:false,
        price:undefined,
        currgg:undefined,
        val:1,
        
    }

    onChange = (val) => {
        // console.log(val);
        this.setState({ val:val });
      }

  
    closeMe=()=>{

        this.props.dispatch({
            type:'closePopup'
        })

        this.setState({
            ...this.state,
            price:undefined,
            currgg:undefined,
        })

        var _body = document.getElementsByTagName("body")

        _body[0].style.overflow="";



    
    }    


    setPrice=(item)=>{

        this.setState({
            ...this.state,
            submitFlag:true,
            price:item.price,
            currgg:item.id,
        })

    }

    // 获取商品的数量
    getNums =(val)=>{
        console.log(val)
    }

    renderGg=(data)=>{

        if(data != undefined){
            
            return data.map(item=>(

                <span onClick={this.setPrice.bind(this,item)} key={item.id} className={classNames(Styles.row_group_item_gg_i,this.state.currgg == item.id?Styles.active:'')}>
                                {item.sepc}             
                </span>
            ))

        }
         

    }

    render(){

        const {data} = this.props;
        
        const gg = this.renderGg(data.data)

        console.log(data.data)

        return (
            <div className={Styles.hsc_container}>

                <div className={Styles.hac_layout}>

                        <div className={classNames(Styles.hac_header,Styles.hairline) }>
            
                            <div className={Styles.hac_header_img_warper}>

                                <img src={data.imgsrc} className={Styles.hac_header_img} />

                            </div>
                            <div className={Styles.hac_header_info}>

                                <div className={Styles.hac_header_info_title}>

                                        {data.title}
                                
                                </div>

                                <div className={Styles.hac_header_info_price}>

                                        <span className={Styles.price_symbol}>￥</span>

                                        <span className={Styles.price_number}>
                                        {this.state.price == undefined? data.priceRange:this.state.price}</span>
                                </div>

                                <span onClick={this.closeMe.bind(this)} className={Styles.close_icon} style={{backgroundImage:`url(${close})`}}></span>

                            </div>

                        </div>
                        <div className={Styles.hac_body} style={{maxHeight: "467px"}}>

                            <div className={Styles.group_container}>

                                <div className={Styles.row_group}>

                                    <div className={Styles.row_group_item}>

                                            <div className={Styles.row_group_item_title}>
                                                净含量:
                                            </div>

                                            <div className={classNames(Styles.row_group_item_gg,Styles.hairline) }>
                                                {gg}
                                            </div>

                                    </div>

                                </div>

                            </div>

                            <div className={Styles.stepper_stock}>

                                   <div className={Styles.stepper_container}>

                                        <div className={Styles.stepper_title}>购物数量：</div>

                                            <Stepper onnums={this.getNums} />
                                   </div>

                                <div className={Styles.stock_count}>剩余2017件</div>
                            </div>
                            <div className={classNames(Styles.hairline,Styles.hairline_top_bottom) }>
                            </div>


                        </div>
                        <div className={Styles.wx_actions}>
                            <button className={classNames(Styles.van_button,Styles.van_button_default)}><span>加入购物车</span></button>
                            <button className={classNames(Styles.van_button,Styles.van_button_primary)}><span>立即购买</span></button>
                        </div>


                </div>
            </div>
        )

    }

}

export default HomeShopCar;