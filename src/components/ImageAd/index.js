import React,{PureComponent} from 'react'
import {Link} from 'react-router-dom'
import Styles from './index.less'
import classNames from 'classnames'

class ImageAd extends PureComponent{


    render(){

        const { imgsrc,imgurl } = this.props;

        return (
            // 图片广告
            <div className={Styles.image_ad_container}>
            
                    <Link to={imgurl} >
                        <img src={imgsrc} />
                    </Link>
            
            </div>
        )

    }


}

export default ImageAd;