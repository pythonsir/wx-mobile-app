import Mock from 'mockjs'
import banner1 from '../assets/banner1.gif'
import banner2 from '../assets/banner2.gif'
import banner3 from '../assets/banner3.gif'

import sc1 from '../assets/sc1.png'
import sc2 from '../assets/sc2.png'
import sc3 from '../assets/sc3.png'
import sc4 from '../assets/sc4.png'


import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'

const Random = Mock.Random


const banner= Mock.mock('/api/banner',[

    banner1,
    banner2,
    banner3,

])

const shortcut = Mock.mock('/api/shortcut',[

    {
        url:"",
        img:sc1,
    },
    {
        url:"",
        img:sc2,
    },
    {
        url:"",
        img:sc3,
    },
    {
        url:"",
        img:sc4,
    },


])

const products_1 = Mock.mock('/api/products_1',[

    {
        url:'',
        imgsrc:p1,
        title:'【买2份减10元】海南贵妃芒果 香甜多汁 皮薄核小 原产地芒果新鲜采摘 中大果净重5斤装京东包邮',
        "price|1-100.1-2":1,
    },
    {
        url:'',
        imgsrc:p2,
        title:'熊猫精选  黑芝麻蜜丸  手工现做  柴火慢蒸 九蒸九晒黑芝麻蜜丸12丸/罐/108克 买三罐送一罐 四罐1疗程',
        "price|1-100.1-2":1,
    },
    {
        url:'',
        imgsrc:p3,
        title:'熊猫精选  陕北米脂小米 农家月子米 养胃养颜 现磨现发 5斤装包邮',
        "price|1-100.1-2":1,
    },
    {
        url:'',
        imgsrc:p4,
        title:'熊猫有礼 阿九提冰川牧场纯牛奶 原生牧场 军工品质 滴滴鲜醇（200ml*16袋）',
        "price|1-100.1-2":1,
    },
    {
        url:'',
        imgsrc:p5,
        title:'熊猫有礼 燕麦代餐酸奶 醇香口感，奇妙风味，能量酸奶（180g*12杯）',
        "price|1-100.1-2":1,
    },


])


const addShopcar = Mock.mock('/api/getshopcar',{

    "id|1000-2000":1,
    "title":'熊猫有礼  健康无添加  小孩可以放心吃的猪肉丝  香酥猪肉松&黄金猪肉丝',
    "priceRange":"20.00-30.00",
    "imgsrc":p1,
    "data|3":[
            {
                "id|3000-4000":1,
                "sepc|1":[
                        "黄金猪肉丝98g+香酥猪肉松108g",
                        "黄金猪肉丝98g",
                        "香酥猪肉松108g"
                ],
                "price|20-30.2":1,
                "count|1000-2000":1,
            }
        
    ],




})

export {
    banner,
    shortcut,
    products_1,
    addShopcar,
}