import React,{PureComponent} from 'react'
import { Carousel } from 'antd-mobile';
import {connect} from 'react-redux'

/**
 *  banner
 */
class Banner extends PureComponent{


    state = {
        imgHeight: 176,
        slideIndex: 0,
      }

    componentDidMount() {
        // simulate img loading

        this.props.dispatch({
            type: 'getBannerListSaga',
          });

        
    }


    render(){

        const {data } = this.props;

        return (

            <Carousel
                autoplay={false}
                infinite
                selectedIndex={1}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {data.map(val => (
                <a
                    key={val}
                    href=""
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                    <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                    />
                </a>
                ))}
            </Carousel>
        )
    }



}

export default connect(({bannerRedux})=>{


    return bannerRedux
    
    

})(Banner);