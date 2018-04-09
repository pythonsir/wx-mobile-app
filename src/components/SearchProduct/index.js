import React,{PureComponent} from 'react'
import Styles from './index.less'
import buttonimg from '../../assets/search_icon_2.png'

class SearchProduct extends PureComponent{





    render(){

        const {text} = this.props;

        const bg ={
            
            backgroundImage: `url(${buttonimg})`,
         
           
        }

        return (
            <div className={Styles.custom_search}>
             <div className={Styles.form}>
                <input  className={Styles.custom_search_input} placeholder={text}  />
                <button  className={Styles.custom_search_button} style={bg}>搜索</button>
             </div>
            
            
            </div>
        )

    }
}

export default SearchProduct;