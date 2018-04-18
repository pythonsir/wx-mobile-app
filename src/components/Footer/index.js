import React,{PureComponent} from 'react'
import Styles from './index.less'
import footer from '../../assets/footer.png'

/**
 *  页尾组件
 */
export default class Footer extends PureComponent{

     render(){
         return (
             <div className={Styles.footer_container}>
                 <div className={Styles.content}>
                    <a href="https://manzj.net"><img style={{width:"20px",cursor:'point'}} src={footer}/>码农之家</a> <span>提供技术支持</span>
                 </div>
             </div>
         )
     }



}