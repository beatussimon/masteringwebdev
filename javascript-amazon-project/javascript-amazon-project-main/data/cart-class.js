
class Cart{
    cartItem = undefined;
    localStorageKey =  undefined;

    constructor(localStorageKey){
        this.localStorageKey= localStorageKey;
        this.loadFromStorage();
    }


    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        
        if(!this.cartItems){
        this.cartItems = [
                {   
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 1,
                    deliveryOptionsId: '1'
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionsId:'2'
                }
            ];
        }
        }
    savetoLocalStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems))
        }
        
    addToCart(productId){
            let matchingItem;
                this.cartItems.forEach((cartItem)=>{
                    if(productId === cartItem.productId){
                    matchingItem = cartItem;
                    }
                })
        
                if(matchingItem){
                    matchingItem.quantity+=1;
                }else{
                    this.cartItems.push({
                    productId: productId,
                    quantity: 1,
                    deliveryOptionsId: '1'
                    })
                }
                this.savetoLocalStorage();
        }
        
    removeFromCart(productId){
        let newCart = []
        this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem)
        }
        })
        this.cartItems = newCart;
        this.savetoLocalStorage();
    }
    
    
    updateDeliveryOptions(productId, deliveryOptionId){
    let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                if(productId === cartItem.productId){
                matchingItem = cartItem;
                }
            })
    
            matchingItem.deliveryOptionsId = deliveryOptionId;
            this.savetoLocalStorage()
    }
}



const cart = new Cart('cart-oop');
const businessCart= new Cart('cart-business')

console.log(cart);
console.log(businessCart); 
console.log(businessCart instanceof Cart)
