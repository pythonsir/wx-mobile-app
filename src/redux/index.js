import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'
import bannerRedux from './bannerRedux'
import shortCutRedux from './shortCutRedux'
import productsRedux from './productsRedux'
import globalRedux from './globalRedux'
import homeShopcarRedux from './homeShopcarRedux'
import productDetailRedux from './productDetailRedux'


const config = {
  routerReducer,
  bannerRedux,
  shortCutRedux,
  productsRedux,
  globalRedux,
  homeShopcarRedux,
  productDetailRedux,
}

  



export default combineReducers(config);

