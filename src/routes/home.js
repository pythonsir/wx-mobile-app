import React ,{PureComponent} from 'react'

import classNames from 'classnames'

import {connect} from 'react-redux'

import  Banner from '../routes/banner'

import ShortCut from '../routes/shortcut'

import SearchProduct from '../components/SearchProduct'

import ImageAd from '../components/ImageAd'

import Popup from '../components/Popup'

import ad1 from '../assets/ad1.jpg'

import {menuData} from '../common/menu'

import ProductList from '../routes/productList'
import { width } from 'window-size';
import { inherits } from 'util';

import Styles from '../index.css'

import Footer from '../components/Footer'


 class Home extends PureComponent{



    render(){

        const {homePopup,dispatch}  = this.props;

        return (

            <div  style={{ "height": "100%",marginBottom:"60px"}}>
                <Banner />
                <ShortCut />
                <SearchProduct text={"搜索商品"} />
                <ImageAd imgurl="" imgsrc={ad1} /> 
                <ProductList />
                <Popup   dispatch = {dispatch}  flag={homePopup} />
                <Footer />
            </div>        
            
        )
            
        
    }


}

export default  connect(({globalRedux})=>{
    return {
        homePopup:globalRedux.homePopup,
    }
})(Home)
