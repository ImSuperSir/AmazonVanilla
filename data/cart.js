export const cart = [];



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