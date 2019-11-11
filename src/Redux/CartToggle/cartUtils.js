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

 export default addItemsToCart;