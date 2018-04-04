/** 
 * 菜单只支持3个
*/

const menuData = [

    {
        name:'全部商品',
        path:'all'
    },
    {
        name:'积分商城',
        children:[
            {
                name:'积分商城',
                path:'',
            },
            {
                name:'积分商城2',
                path:'',
            },
            {
                name:'积分商城2',
                path:'',
            }

        ]
    },
    {
        name:'我的订单',
        children:[
            {
                name:'待付款',
                path:'',
            },
            {
                name:'待收货',
                path:'',
            }

        ]
    }


]

export {
    menuData
}