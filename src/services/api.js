
import axios from 'axios'
require('../mock/data') 


export async function getBanners(){


   return axios.get('/api/banner');

}

export async function getShortcutList(){


    return axios.get('/api/shortcut')

}   

export async function getproduct_1(){

    return axios.get('/api/products_1')


}

export async function getHShopCar(){
    return axios.get('/api/getshopcar')
}


export async function getProductdetailById(param){


    return axios.get('/api/productdetail/').then(function(response){


            return response.data;

    })

}

export async function login(param) {

   const {username,password,type} = param;


    return axios.get('/api/login').then(function(response){


        if(username === 'admin' && password === '888888'){
            
            return {
                status:'ok',
                type:type,
                currentAuthority:'admin'
            };
           
          }else if(password === '123456' && username === 'user'){

            return {
                status: 'ok',
                type,
                currentAuthority: 'user'
            }
         
          }else{

            return {
                status:'error',
                type:type,
            }
            
          }
    
        })
}

