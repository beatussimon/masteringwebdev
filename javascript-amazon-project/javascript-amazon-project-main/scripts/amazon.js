const products =[
    {
        image : 'images/products/intermediate-composite-basketball.jpg',
        prodcutName:'Intermediate Size Basketball',
        ratings:{
            stars:'images/ratings/rating-45.png',
            numbers:'127'
        },
        price:2095
    },
    {
        image : 'images/products/athletic-cotton-socks-6-pairs.jpg',
        prodcutName:'Black and Gray Athletic Cotton Socks - 6 Pairs',
        ratings:{
            stars:'images/ratings/rating-40.png',
            numbers:'87'
        },
        price:1090
    },
    {
        image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        prodcutName:'Adults Plain Cotton T-Shirt - 2 Pack',
        ratings:{
            stars:'images/ratings/rating-45.png',
            numbers:'790'
        },
        price:'4560'
    }
]
let divHTML =''

products.forEach((product) => {
  divHTML +=  `  
  <div class="product-container">    
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.prodcutName}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
         src="${product.ratings.stars}">
        <div class="product-rating-count link-primary">
          ${product.ratings.numbers}
        </div>
      </div>

      <div class="product-price">
        $${(product.price/100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart">
        Add to Cart
      </button>
      </div> `
    });
    let productDiv = document.querySelector('.js-product-grid');
    productDiv.innerHTML = divHTML

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log('Added to cart')
    })
})
