import React ,{PureComponent} from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Styles from './popover.less'

export default class WxPopover extends PureComponent{

  


    render(){

        const {submenus } = this.props;

        return (

            <div className={classNames(Styles.container)}  >

                <div className={classNames(Styles.warper)}>

                        {
                            submenus.map((item,index)=>{

                                
                            return  <div key={index}>
                                                <Link to={item.path}>{item.name}</Link>
                                </div>


                            })

                        }
                </div>
                <div className={classNames(Styles.wx_popover_arrow)}></div>

            </div>


        ) 

    }




}