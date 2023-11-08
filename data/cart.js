export let cart = [
  {
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity : 2
  },
  {
    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity : 1
  }
];



export function addToCart(productId)
{
  let matchingItem;

  cart.forEach((cartItem) =>
  {
    if (productId === cartItem.productId)
    {
      matchingItem = cartItem;
    }
  });

  let quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

  if (matchingItem)
  {
    matchingItem.quantity += quantity;
  }
  else
  {
    cart.push(
      {
        productId,           //this is using destructuring. "the collection property's name it is equal to the name of the properties"
        quantity             //this is using destructuring
      });
  }


}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach( (cartItem) => {
    if(cartItem.productId !== productId)
    {
      newCart.push(cartItem);
    }
  } );

  cart  = newCart;
}