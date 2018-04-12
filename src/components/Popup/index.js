import React, {PureComponent} from 'react'
import classNames from 'classnames'
import Styles from './index.less'

/**
 * 弹出层
 */
class Popup extends PureComponent{


    constructor(props){
        super(props)
    }
    

    closeMe=()=>{

        this.props.dispatch({
            type:'closePopup'
        })

    
    }


    render(){


        const {flag} = this.props;

        return(

            <div >
                

                <div className={classNames(Styles.wx_popup,Styles.wx_content_bottom
        )} style={{"display": flag ? "none" :"block" }}>
            
                    { <div>
                        sssssss
                    </div> }

                </div>


                <div onClick={this.closeMe} className={Styles.wx_modal} style={{"display": flag ? "none" :"block" }}>


                </div>

            </div>

        )


    }

}

export default Popup;