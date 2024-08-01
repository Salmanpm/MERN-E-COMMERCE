import React, { createContext, useState } from "react";
import { useEffect } from "react";



export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <300+1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    

    const url = "https://e-commerce-backend-ocdj.onrender.com"

    const [all_product,setAll_Product] = useState([])

    const [cartItems,setCartItems] = useState(getDefaultCart())

    useEffect(() => {
        fetch(`${url}/allproducts`)
        .then((response) => response.json())
        .then((data) => setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch(`${url}/getcart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response) => response.json())
            .then((data) => setCartItems(data))
        }
    },[])
    


    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}) )

        const auth_token = localStorage.getItem('auth-token')
        if(auth_token) {
            fetch(`${url}/addtocart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': auth_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}) )

        const auth_token = localStorage.getItem('auth-token')
        if(auth_token) {
            fetch(`${url}/removefromcart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': auth_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
        }
        }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let itemInfo = all_product.find((product)=>product.id===Number(item))
                        if(itemInfo) {
                            totalAmount += cartItems[item] * itemInfo.new_price;
                        }
                       
                    }
                    
            }
            return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItem += cartItems[item]
                    }
            }
            return totalItem;
    }


    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;
