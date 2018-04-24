import React ,{PureComponent} from 'react'

import {Switch,Route,Redirect} from 'react-router-dom'

import MainLayout from './MainLayout'

import Styles from './BaseLayout.less'

import ProductLayout from './ProductLayout'






class BaseLayout extends PureComponent{


    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
          hidden: false,
          fullScreen: true,
        };
      }

      

    render(){


        const { match } = this.props;


        return (
            <div>
                
                    <Switch> 
                            <Route  path="/home"   component={MainLayout} />

                            <Route path="/product" component={ProductLayout} />

                            <Redirect exact from="/" to="/home" />
                        
                    </Switch>
               
            </div>
           
        )

       

    }




}

export default BaseLayout;