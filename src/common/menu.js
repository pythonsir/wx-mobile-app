
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'

import me1 from '../assets/me1.png'
import me2 from '../assets/me2.png'

import shopcar1 from '../assets/shopcar1.png'
import shopcar2 from '../assets/shopcar2.png'

import sort1 from '../assets/sort1.png'
import sort2 from '../assets/sort2.png'

/** 
 *  tabbar菜单
*/

const menuData = [

    {
        name:'主页',
        key:'home',
        path:'/home',
        icon: home1,
        selectedIcon:home2,
        unselectedTintColor:"#949494",
        tintColor:"#33A3F4",
    },
    {
        name:'分类',
        key:'classify',
        path:'/classify',
        icon: sort1,
        selectedIcon:sort2,
        unselectedTintColor:"#949494",
        tintColor:"#33A3F4",
    },
    {
        name:'购物车',
        key:'shopcar',
        path:'/shopcar',
        icon: shopcar1,
        selectedIcon:shopcar2,
        unselectedTintColor:"#949494",
        tintColor:"#33A3F4",
    },
    {
        name:'我的',
        key:'me',
        path:'/me',
        icon: me1,
        selectedIcon:me2,
        unselectedTintColor:"#949494",
        tintColor:"#33A3F4",
    },
    


]

export {
    menuData
}