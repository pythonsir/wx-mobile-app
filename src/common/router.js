import Home from '../routes/home'
import Classify from '../routes/classify'
import Me from '../routes/me'
import ShopCar from '../routes/shopcar'
import BasicLayout from '../layouts/BaseLayout'


export const getRouterData = () => {

    const routerConfig = [

            
            {
                path:'/home',
                component:Home, 
            },
            {
                path:'/home/classify',
                component:Classify,
            },
            {
                path:'/home/shopcar',
                component:ShopCar,
            },
            {
                path:'/home/me',
                component:Me,
            }


    ]

    return routerConfig;

}