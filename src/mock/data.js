import Mock from 'mockjs'
import banner1 from '../assets/banner1.gif'
import banner2 from '../assets/banner2.gif'
import banner3 from '../assets/banner3.gif'


const banner= Mock.mock('/api/banner',[

    banner1,
    banner2,
    banner3,

])


export {
    banner
}