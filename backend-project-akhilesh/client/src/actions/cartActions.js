export const addToCart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    title: product.title,
    _id: product._id,
    price: product.price,
    image: product.image,
    category : product.category,
    countInStock: product.countInStock,
    quantity: quantity,
  }
  dispatch({type: 'ADD_TO_CART', payload : cartItem})

  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
};


export const deleteFromCart=(item)=>(dispatch,getState) =>{

    dispatch({type:'DELETE_FROM_CART', payload:item})
    localStorage.removeItem('cartItems.id', JSON.parse(getState().cartReducer.cartItems))


}
