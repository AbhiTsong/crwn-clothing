
 const addItemsToCart = (originalCartArray, payloadCartItem) => {
  const originalArrayId = originalCartArray.find(
    originalArray => {return(originalArray.id === payloadCartItem.id)}
  )
  if(originalArrayId){
    return originalCartArray.map(originalArray => 
      originalArray.id === payloadCartItem.id
      ? {...originalArray, quantity: originalArray.quantity + 1}
      : originalArray
      )
  }
  return [...originalCartArray, {...payloadCartItem, quantity: 1}]
}

export const removeItem = (originalCartArray, payloadCartItem) => {
  const originalArrayId = originalCartArray.find(originalArray => 
    originalArray.id === payloadCartItem.id
    )

    if(originalArrayId.quantity === 1){
      return originalCartArray.filter(originalArray => originalArray.id !== payloadCartItem.id )
    }

    return(originalCartArray.map(
      cartItems => 
      cartItems.id === payloadCartItem.id 
      ?{...cartItems, quantity: cartItems.quantity - 1}
      : cartItems 
    ))
}

 export default addItemsToCart;