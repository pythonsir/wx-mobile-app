import React , {PureComponent} from 'react'
import Styles from './index.less'
import classNames from 'classnames'


/**
 * 步进器
 */
class Stepper extends PureComponent{

        state={
            currValue:1,
        }

        subtract=()=>{

            if(this.state.currValue != 1){

                this.props.onnums(this.state.currValue -1)

                this.setState({
                    currValue:this.state.currValue - 1,
                })

            }


        }

     

        addNums=()=>{

            this.props.onnums(this.state.currValue +1)

            this.setState({
                currValue:this.state.currValue +1,
            })


        }


        render(){


            return (

                <div className={Styles.wx_stepper}>
                    <button onClick={this.subtract} className={classNames(Styles.wx_stepper__stepper,Styles.wx_stepper__minus,Styles.wx_stepper__stepper_1,
                        this.state.currValue == 1?
                        Styles.wx_stepper__stepper__minus_disabled:"",) }>
                    </button>
                    <input className={Styles.wx_stepper__input} readOnly value={this.state.currValue}/>
                    <button onClick={this.addNums} className={classNames(Styles.wx_stepper__stepper,Styles.wx_stepper__plus,Styles.wx_stepper__stepper_2)}></button>
                </div>
            )
        }

}

export default Stepper;