import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'
import bannerRedux from './bannerRedux'


const config = {
  routerReducer,
  bannerRedux,



}

  



export default combineReducers(config);

