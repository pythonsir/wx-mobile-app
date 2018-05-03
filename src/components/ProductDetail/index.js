import React,{PureComponent} from 'react'
import { Carousel } from 'antd-mobile'
import Styles from './index.less'


/**
 * 商品详情
 */
export default class ProductDetailCom extends PureComponent{

    state={
        imgurls:[1,2,3,4,5,6,7,9,10]
    }

 
      componentWillReceiveProps(nextProps){
      

        this.setState({
            imgurls:nextProps.data.banner
        })

      }

     render(){

        const {data} = this.props;

        console.log(data)

         return (
             <div>
                 <div className={Styles.banner}>

                        <Carousel
                            dots={true} 
                            autoplay={true}
                            infinite

                            >

                            {
                               this.state.imgurls.map((item,index)=>(
                        
                                    <img key={index}  src={item} 
                                    style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                }}
                                    />
                                ))
                                     

                            }


                            </Carousel>

                 </div>
                 <div className={Styles.pro_header}>

                    <h2 className={Styles.title}>

                                {data.title}

                    </h2>
                    <div className={Styles.pro_price}>
                            
                            <div className={Styles.pro_curr_price}>
                            <span>¥</span>
                            <i className={Styles.price}>{data.price}</i>
                            </div>

                    </div>


                 </div>

             </div>
         )
     }

}