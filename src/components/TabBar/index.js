import React ,{PureComponent} from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'

import {TabBar,Popover,Icon} from 'antd-mobile'
import {Link} from 'react-router-dom'

import WxPopover from './Popover'

import home from '../../assets/home.svg'

import list from '../../assets/list.svg'


import Styles from './index.less'


class WxTabBar extends TabBar{


    constructor(props){

        super(props);

        this.menuData = props.menus

        this.state = {
            visibel :''
        }



    }


    componentDidMount() {
        
        const object = this.refs;

      for (const key in object) {
          if (object.hasOwnProperty(key)) {
              const element = object[key];
              
          }
      }

        

        // console.log(a.offsetLeft+' '+a.offsetTop)
        
        // console.log(window.getCoimputedStyle(this.first).width)
    
    }




    getTabMenu = (menuData)=>{

        if(!menuData){
            return [];
        }
        return menuData.map((item,index) => {
            
            if(!item.children){

                return <div ref={"tab_"+index}  key={index} className={classNames(Styles.wx_am_tab_bar_tab)}>
                <Link to={item.path}>{item.name}</Link></div>

            }else{

                return (

                    <div ref={"tab_"+index}  key={index} className={classNames(Styles.wx_am_tab_bar_tab)}>
                    <img src={list} width="10" height="10" /><a href="#" onClick={this.getSubMenu.bind(this,index)}>{item.name}</a> 


                    {
                        this.state.visibel == index ?
                        <WxPopover tabindex={index}   ref={"tab_child"+index} submenus={item.children}   />
                        :""

                    } 
                      
                       </div>
                    
                    
                )  
             }

          })

    }

   

    getSubMenu =(index)=>{

    

        this.setState({
            visibel:index
        })

    }

    render(){

      const {menu} = this.props;


        const container = classNames({

            "am-tabs-tab-bar-wrap" : true,
            },
            Styles.container,
        )


       

        return (
            <div className={container}>

                <div className={classNames("am-tab-bar-bar",Styles.wx_tab_right_border)} style={{background_color:'white'}}>

                        <div className={classNames(Styles.img_home)}><img src={home} width="22" /></div>
                       { this.getTabMenu(this.menuData) }
                        
                </div>

                

                
                
            </div>
        )


    }


}

export default WxTabBar;