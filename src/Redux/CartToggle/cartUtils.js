const addItemsToCart = (origialCartArray, payloadCartItem) => {
  const newItemId = origialCartArray.find(
    origialArray => origialArray.id === payloadCartItem.id    
  )

  if(newItemId){
  return  origialCartArray.map(
    origialArray => origialArray.id === payloadCartItem.id
    ? {...origialArray, quantity: origialArray.quantity + 1}
    : origialArray
   )
  }

  return [...origialCartArray, {...payloadCartItem, quantity: 1}]
 }

 export default addItemsToCart;