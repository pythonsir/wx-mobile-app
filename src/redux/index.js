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


const config = {
  routerReducer,
  bannerRedux,
  shortCutRedux,
  productsRedux,
  globalRedux,
  homeShopcarRedux,
}

  



export default combineReducers(config);

