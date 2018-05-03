import React, { PureComponent } from 'react'
import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux'
import { Swiper, Flex, FlexItem } from 'react-weui'


/**
 *  banner
 */
class Banner extends PureComponent {

   

     state = {
         data:[1,2,3,5,6]
     }


    componentDidMount() {
        // simulate img loading

        this.props.dispatch({
            type: 'getBannerListSaga',
        });

        

    }

    componentWillReceiveProps(nextprops){

        this.setState({
            data:nextprops.data,
        })

    }


    render() {

        console.log(this.state.data);

        return (

            <Carousel
            autoplay
            infinite
            selectedIndex={0}
        >
            {this.state.data.map(val => (
            <a
                key={val}
                href=""
                style={{ display: 'inline-block', width: '100%' }}
            >
                <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                }}
                />
            </a>
            ))}
        </Carousel>



        )
    }



}

export default connect(({ bannerRedux }) => {


    return bannerRedux



})(Banner);