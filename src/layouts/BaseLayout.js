import React ,{PureComponent} from 'react'

import {Switch,Route,Redirect} from 'react-router-dom'

import {getRouterData} from '../common/router'

import Styles from './BaseLayout.less'

import Home from '../routes/home'



import WxTabBar from '../components/TabBar'


class BaseLayout extends PureComponent{


    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
          hidden: false,
          fullScreen: true,
        };
      }

      getBashRedirect = () => {
        // According to the url parameter to redirect
        // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
        const urlParams = new URL(window.location.href);
    
        const redirect = urlParams.searchParams.get('redirect');
        // Remove the parameters in the url
        if (redirect) {
          urlParams.searchParams.delete('redirect');
          window.history.replaceState(null, 'redirect', urlParams.href);
        } else {
          return '/home';
        }
        return redirect;
      }
    

    render(){

        const bashRedirect = this.getBashRedirect();

        const { match } = this.props;

        console.log(match)

        return (
            <div>
                <Switch>

                        {
                            getRouterData().map((item,index)=>(

                                <Route exact key={index} path={item.path} component={item.component} />

                            ))
                        }

                     <Redirect exact from="/" to={bashRedirect} />
                </Switch>
                <WxTabBar />
                
            </div>
           
        )

       

    }




}

export default BaseLayout;