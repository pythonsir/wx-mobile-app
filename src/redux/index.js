import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'
import bannerRedux from './bannerRedux'
import shortCutRedux from './shortCutRedux'
import productsRedux from './productsRedux'

const config = {
  routerReducer,
  bannerRedux,
  shortCutRedux,
  productsRedux,


}

  



export default combineReducers(config);

