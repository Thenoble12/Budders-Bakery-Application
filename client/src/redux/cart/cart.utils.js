export const addItemToCart = ( cartItems, cartAddItem ) => {
    
    const updateCart = (item) => {
        fetch(`/update_cart`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((r) => r.json())
            .then((data) => {
            console.log("Cart Updated")
            })            
        };
       
    
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartAddItem.id
    );

    if (existingCartItem) {

        return cartItems.map((cartItem) => {           
            if (cartItem.id === cartAddItem.id) {
                updateCart({ ...cartItem, quantity: cartItem.quantity + 1})
                return { ...cartItem, quantity: cartItem.quantity + 1}
            }
            else {
                updateCart(cartItem)
                return cartItem
            }
        })
                
    }

    updateCart(...cartItems, {...cartAddItem, quantity: 1 })
    return [...cartItems, {...cartAddItem, quantity: 1 }]
};

export const removeItemFromCart = ( cartItems, cartRemoveItem ) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartRemoveItem.id
    );
    if (existingCartItem.quantity === 1 ) {
        return cartItems.filter((cartItem) => cartItem.id !== cartRemoveItem.id)    
    }
    return cartItems.map((cartItem) => 
      cartItem.id === cartRemoveItem.id 
        ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}


// export const addItemToCart = ( cartItems, cartAddItem ) => {
//     const existingCartItem = cartItems.find(
//         (cartItem) => cartItem.id === cartAddItem.id
//     );

//     if (existingCartItem) {
//         return cartItems.map((cartItem) => 
//             cartItem.id === cartAddItem.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1} 
//                 : cartItem );        
//     }

//     //POST - UPDATE CART
//     return [...cartItems, {...cartAddItem, quantity: 1 }]
// };

// export const removeItemFromCart = ( cartItems, cartRemoveItem ) => {
//     const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id === cartRemoveItem.id
//     );
//     if (existingCartItem.quantity === 1 ) {
//         return cartItems.filter((cartItem) => cartItem.id !== cartRemoveItem.id)    
//     }
//     return cartItems.map((cartItem) => 
//       cartItem.id === cartRemoveItem.id 
//         ? {...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     )
// }
