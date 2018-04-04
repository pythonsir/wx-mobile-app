import React ,{PureComponent} from 'react'
import { Flex } from 'antd-mobile'

import Styles from './BaseLayout.less'

import WxTabBar from '../components/TabBar'
import  Banner from '../routes/banner'

import {menuData} from '../common/menu'


class BaseLayout extends PureComponent{


    render(){


        return (

            <div>
                <Banner />
                <WxTabBar  menus={menuData}/>
            </div>

        )

            
    



    }




}

export default BaseLayout;