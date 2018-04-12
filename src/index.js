import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import store ,{history} from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'

import './index.css'; 


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
       <Route path="/"  component={BaseLayout } />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)