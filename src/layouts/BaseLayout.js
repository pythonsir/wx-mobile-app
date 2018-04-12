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

        // return (

        //     <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        //         <TabBar
        //         unselectedTintColor="#949494"
        //         tintColor="#33A3F4"
        //         barTintColor="white"
        //         hidden={this.state.hidden}
        //         >
        //         <TabBar.Item
        //             title="主页"
        //             key="home"
        //             icon={<div style={{
        //             width: '22px',
        //             height: '22px',
        //             background: `url(${home2}) center center /  21px 21px no-repeat` }}
        //             />
        //             }
        //             selectedIcon={<div style={{
        //             width: '22px',
        //             height: '22px',
        //             background: `url(${home1}) center center /  21px 21px no-repeat` }}
        //             />
        //             }
        //             selected={this.state.selectedTab === 'blueTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'blueTab',
        //             });
        //             }}
        //             data-seed="logId"
        //         >
                    
        //             <Home />
                    
        //         </TabBar.Item>
        //         <TabBar.Item
        //              icon={<div style={{
        //                 width: '22px',
        //                 height: '22px',
        //                 background: `url(${sort2}) center center /  21px 21px no-repeat` }}
        //                 />
        //                 }
        //                 selectedIcon={<div style={{
        //                 width: '22px',
        //                 height: '22px',
        //                 background: `url(${sort1}) center center /  21px 21px no-repeat` }}
        //                 />
        //                 }
        //             title="分类"
        //             key="Koubei"
        //             selected={this.state.selectedTab === 'redTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'redTab',
        //             });
        //             }}
        //             data-seed="logId1"
        //         >
        //         </TabBar.Item>
        //         <TabBar.Item
        //            icon={<div style={{
        //             width: '22px',
        //             height: '22px',
        //             background: `url(${shopcar2}) center center /  21px 21px no-repeat` }}
        //             />
        //             }
        //         selectedIcon={<div style={{
        //                 width: '22px',
        //                 height: '22px',
        //                 background: `url(${shopcar1}) center center /  21px 21px no-repeat` }}
        //                 />
        //                 }
        //             title="购物车"
        //             key="Friend"
                    
        //             selected={this.state.selectedTab === 'greenTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'greenTab',
        //             });
        //             }}
        //         >

        //         </TabBar.Item>
        //         <TabBar.Item
        //             icon={<div style={{
        //                 width: '22px',
        //                 height: '22px',
        //                 background: `url(${me2}) center center /  21px 21px no-repeat` }}
        //                 />
        //                 }
        //             selectedIcon={<div style={{
        //                     width: '22px',
        //                     height: '22px',
        //                     background: `url(${me1}) center center /  21px 21px no-repeat` }}
        //                     />
        //                     }
        //             title="我的"
        //             key="me"
        //             selected={this.state.selectedTab === 'yellowTab'}
        //             onPress={() => {
        //             this.setState({
        //                 selectedTab: 'yellowTab',
        //             });
        //             }}
        //         >
        //         </TabBar.Item>
        //         </TabBar>
        //     </div>
           
        // )

    }




}

export default BaseLayout;