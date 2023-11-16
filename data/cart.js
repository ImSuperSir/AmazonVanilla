export let cart = JSON.parse(localStorage.getItem(`cart`));

if (!cart)
{
  cart = [];
}

function saveToStorage()
{
  localStorage.setItem('cart', JSON.stringify(cart));
}

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
        quantity,             //this is using destructuring
        deliveryOptionId : '2'    
      });
  }

  saveToStorage();

}

export function removeFromCart(productId)
{
  const newCart = [];

  cart.forEach((cartItem) =>
  {
    if (cartItem.productId !== productId)
    {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function getItemsQuantity()
{
  let lQuantity = 0;
  cart.forEach((cartItem) =>
  {
    lQuantity += cartItem.quantity;
  });

  return lQuantity;
}

export function updateQuantity(productId, newQuantity)
{
  let matchingItem;
  cart.forEach((cartItem) =>
  {
    if (productId === cartItem.productId)
    {
      matchingItem = cartItem;
    }

  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){

  let matchingItem;
  cart.forEach( (cartItem) => {

    if(cartItem.productId === productId){
      matchingItem = cartItem;
    }

  });

  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();

}