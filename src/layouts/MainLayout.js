import React,{PureComponent} from 'react'

import {Switch,Route,Redirect} from 'react-router-dom'


import {getRouterData} from '../common/router'

import WxTabBar from '../components/TabBar'

export default class MainLayout extends PureComponent{



        render(){
            return(
                <div>
                    
                    <Switch>

                            {
                                    getRouterData().map((item,index)=>(

                                        <Route  exact key={index} path={item.path} component={item.component} />

                                    ))
                            }
                        
                    </Switch>

                    
                                
                    <Route   component={WxTabBar} />


                </div>
                
            )
        }


}