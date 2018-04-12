import React ,{PureComponent} from 'react'


import  Banner from '../routes/banner'

import ShortCut from '../routes/shortcut'

import SearchProduct from '../components/SearchProduct'

import ImageAd from '../components/ImageAd'

import ad1 from '../assets/ad1.jpg'

import {menuData} from '../common/menu'

import ProductList from '../routes/productList'
import { width } from 'window-size';
import { inherits } from 'util';

export default class Home extends PureComponent{

    render(){

        return (

            <div style={{ "height": "100%","overflow": "scroll"}}>
                <Banner />
                <ShortCut />
                <SearchProduct text={"搜索商品"} />
                <ImageAd imgurl="" imgsrc={ad1} /> 
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
            </div>        
            
        )
            
        
    }



}
