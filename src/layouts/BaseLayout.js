import React ,{PureComponent} from 'react'
import { Flex } from 'antd-mobile'

import Styles from './BaseLayout.less'

import WxTabBar from '../components/TabBar'

import  Banner from '../routes/banner'

import ShortCut from '../routes/shortcut'

import SearchProduct from '../components/SearchProduct'

import ImageAd from '../components/ImageAd'

import ad1 from '../assets/ad1.jpg'

import {menuData} from '../common/menu'

import ProductList from '../routes/productList'


class BaseLayout extends PureComponent{


    render(){


        return (

            <div className={Styles.container}>
                <Banner />
                <ShortCut />
                 <SearchProduct text={"搜索商品"} />
                <ImageAd imgurl="" imgsrc={ad1} /> 
                <ProductList />
                <WxTabBar  menus={menuData}/>
            </div>

        )

            
    



    }




}

export default BaseLayout;