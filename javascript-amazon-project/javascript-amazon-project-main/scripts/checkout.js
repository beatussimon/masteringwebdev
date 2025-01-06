import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'
import { loadProducts, loadProductsFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";


async function loadPage() {
    console.log('load page')

    await loadProductsFetch()
    const value = await new Promise((resolve)=>{
        loadCart(()=>{
            resolve()
        })})
    
        renderOrderSummary()
        renderPaymentSummary()
        console.log(value)
        return 'valueX'
}

loadPage().then((value)=>{
    console.log('next steps')
    console.log(value)
})


/*
Promise.all([
    loadProductsFetch(),   new Promise((resolve)=>{
    loadCart(()=>{
        resolve('iNSIDE THE RESOLVE FUNCTION')
    })
})]).then((value)=>{
    console.log(value   )
    renderOrderSummary()
    renderPaymentSummary()
})
*/


/*

new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('iNSIDE THE RESOLVE FUNCTION')
    })
}).then((value)=>{
    console.log(value)
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve()
        })
    })
}).then(()=>{
    renderOrderSummary()
    renderPaymentSummary()
})

/*

/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary()
        renderPaymentSummary()
    })
 })
 */