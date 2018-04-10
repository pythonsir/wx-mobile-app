import React ,{PureComponent} from 'react'
import { TabBar } from 'antd-mobile'

import Styles from './BaseLayout.less'

import Home from '../routes/home'

import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'

import me1 from '../assets/me1.png'
import me2 from '../assets/me2.png'

import shopcar1 from '../assets/shopcar1.svg'
import shopcar2 from '../assets/shopcar2.svg'

import sort1 from '../assets/sort1.svg'
import sort2 from '../assets/sort2.svg'


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

        return (

            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                >
                <TabBar.Item
                    title="主页"
                    key="home"
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${home2}) center center /  21px 21px no-repeat` }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${home1}) center center /  21px 21px no-repeat` }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                    }}
                    data-seed="logId"
                >
                    
                    <Home />
                    
                </TabBar.Item>
                <TabBar.Item
                     icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${sort2}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${sort1}) center center /  21px 21px no-repeat` }}
                        />
                        }
                    title="分类"
                    key="Koubei"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'redTab',
                    });
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                   icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${shopcar2}) center center /  21px 21px no-repeat` }}
                    />
                    }
                selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${shopcar1}) center center /  21px 21px no-repeat` }}
                        />
                        }
                    title="购物车"
                    key="Friend"
                    
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'greenTab',
                    });
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: `url(${me2}) center center /  21px 21px no-repeat` }}
                        />
                        }
                    selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${me1}) center center /  21px 21px no-repeat` }}
                            />
                            }
                    title="我的"
                    key="me"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'yellowTab',
                    });
                    }}
                >
                </TabBar.Item>
                </TabBar>
            </div>
           
        )

    }




}

export default BaseLayout;