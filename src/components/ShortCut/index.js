import React,{PureComponent} from 'react'

import {Link} from 'react-router-dom'

import Styles from './index.less'

class ShortCut extends  PureComponent {


    render(){

    const {data} = this.props;

        return (

            <div className={Styles.containter}>

            {
  

            data.map((item,index)=>(

                <div key={index}>

                  <Link to={item.url}> <img  src={item.img} />  </Link>     
                                                   

               </div>

            )) 

                
            }
                


            </div>

        )

            
        

    }



}

export default ShortCut;