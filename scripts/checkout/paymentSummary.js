import { cart, getItemsQuantity } from '../../data/cart.js'
import { getProduct as productsGetProduct } from '../../data/products.js'
import { getDeliveryOption } from '../../data/deliveryOptions.js'
import { formatCurrency } from '../utils/money.js'

export function renderPaymentSummary()
{
  //console.log('payment summary');
  let lProductPriceCents = 0;
  let lShippingPriceCents = 0;


  cart.forEach(itemCart =>
  {
    const lProduct = productsGetProduct(itemCart.productId);
    console.log(lProduct.id);
    lProductPriceCents += lProduct.priceCents * itemCart.quantity;

    const lDeliveryOption = getDeliveryOption(itemCart.deliveryOptionId)
    lShippingPriceCents += lDeliveryOption.priceCents;

  });

  const lTotalBeforeTaxCents = lProductPriceCents + lShippingPriceCents;
  const lTaxCents = lTotalBeforeTaxCents * 0.1;
  const lTotalCents = lTotalBeforeTaxCents + lTaxCents;

  const lPaymentSummaryHTML = `
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (${getItemsQuantity()}):</div>
          <div class="payment-summary-money">$${formatCurrency(lProductPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${formatCurrency(lShippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${formatCurrency(lTotalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${formatCurrency(lTaxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${formatCurrency(lTotalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
  `;


  document.querySelector(`.js-payment-summary`).innerHTML = lPaymentSummaryHTML;

}