import { cart, removeFromCart, updateDeliveryOptions } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import dayjs from 'https://unpkg.com/dayjs@latest/esm/index.js';
import { products,getProduct } from "./../../data/products.js";


export function renderOrderSummary(){

function deliveryOptionsFunc(matchingProduct, cartItem){
  let html=''
  deliveryOptions.forEach(deliveryOption=>{
    const today = dayjs()
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
    const dateString =deliveryDate.format('dddd, MMMM D')
    const deliveryString =(deliveryOption.deliveryCents === 0)? 'FREE': `$${formatCurrency(deliveryOption.deliveryCents)}`
  
    const isChecked = cartItem.deliveryOptionsId === deliveryOption.id
    html+=`
        <div data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}"
        class="delivery-option js-delivery-option">
          <input type="radio" class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}" ${isChecked? 'checked': ''}>
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${deliveryString} - Shipping
            </div>
          </div>
        </div> 
`
})
return html;
}

  let cartContainerHTML =''

  cart.forEach((cartItem)=>{
    
      const productId = cartItem.productId;
      const matchingProduct = getProduct(productId)

  function ddd(cartItem){   
    let deliverydate;
    deliveryOptions.forEach(option=>{
    const deliveryOptionsId = cartItem.deliveryOptionsId;
    if(deliveryOptionsId === option.id){
      deliverydate = option.deliveryDays
  }
  }); 
      const today = dayjs()
      const deliveryDate = today.add(deliverydate, 'days')
      const dateString =deliveryDate.format('dddd, MMMM D')
  return dateString
  }

      cartContainerHTML +=`
      <div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
              <div class="delivery-date">
                Delivery date: ${ddd(cartItem)}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    $${matchingProduct.getPrice()}
                  </div>
                  <div class="product-quantity js-product-quantity-${matchingProduct.id}">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span data-product-id="${matchingProduct.id}" class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options js-delivery-options">
                <div class="delivery-options-title">
                Choose a delivery option:
                </div>
                ${deliveryOptionsFunc(matchingProduct, cartItem)}
                </div>
              </div>
            </div>`

          })


  document.querySelector('.js-order-summary').innerHTML =cartContainerHTML;

  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
      const productId = link.dataset.productId
      removeFromCart(productId)
      
      const productContainer= document.querySelector(`.js-cart-item-container-${productId}`)
      productContainer.remove()

      renderPaymentSummary()
    })
  })

  document.querySelectorAll('.js-delivery-option')
  .forEach(element=>{
    element.addEventListener('click', ()=>{
      const {productId, deliveryOptionId} = element.dataset
      updateDeliveryOptions(productId, deliveryOptionId)
      renderOrderSummary()
      renderPaymentSummary()
    })
  })
}

console.log(dayjs())
