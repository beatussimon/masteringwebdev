import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'
import { loadProducts} from "../data/products.js";
import { loadCart } from "../data/cart.js";


Promise.all([new Promise((resolve)=>{
    loadProducts(()=>{
        resolve("The string in the first resolve")
    })
}),   new Promise((resolve)=>{
    loadCart(()=>{
        resolve('iNSIDE THE RESOLVE FUNCTION')
    })
})]).then((value)=>{
    console.log(value   )
    renderOrderSummary()
    renderPaymentSummary()
})

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