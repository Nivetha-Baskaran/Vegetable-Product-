import {useEffect} from 'react';

const Cart = () => {
    useEffect(() => {
    /*    -------- Add To Cart   -------*/
    const buttonCart = document.querySelector('#cart-icon');
    const cart = document.querySelector('.cart');
    const buttonClose = document.querySelector('#cart-close');

    buttonCart.addEventListener('click', () => {
        cart.classList.add('cart-active');

    });

    buttonClose.addEventListener('click', () => {
        cart.classList.remove('cart-active');

    });
    
    function loadContent() {
        //Remove veg Items from cart
        let btnRemove = document.querySelectorAll('.cart-remove');
        btnRemove.forEach((btn) => {
            btn.addEventListener('click', removeItem);
        });

        //Product Item Change Event
        let Quantity = document.querySelectorAll('.cart-quantity');
        Quantity.forEach((input) => {
            input.addEventListener('change', changeQty);
        });


        //Product Cart

        let cartButtons = document.querySelectorAll('.add-cart');
        cartButtons.forEach((cartbtn) => {
            cartbtn.addEventListener('click', addCart);
        });

        updateTotal();
    }

    //Remove Item
    function removeItem() {
        if (window.confirm('Are You Sure to Remove')) {
            let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
            itemList = itemList.filter(el => el.title !== title);
            this.parentElement.remove();
            loadContent();
        }
    }

   
    //Change Quantity
    function changeQty() {
        if (isNaN(this.value) || this.value < 1) {
            this.value = 1;
        }
        loadContent();
    }
    let itemList = [];
 
    //Add Cart
    function addCart(event) {
        
        let Organic = event.currentTarget.parentElement;
        let title = Organic.querySelector('.Veg-title').innerHTML;
        let price = Organic.querySelector('.Amount').innerHTML;
        let imgSrc = Organic.querySelector('.ImageCard').src;
        
        
        let newProduct = { title, price, imgSrc }

        //Check Product already Exist in Cart
        if (itemList.find((el) => el.title === newProduct.title)) {
            alert("Product Already added in Cart");
            return;
        }
        else {
            itemList.push(newProduct);
        };

        let newProductElement = createCartProduct(title, price, imgSrc);
        let element = document.createElement('div');
        element.innerHTML = newProductElement;
        let cartBasket = document.querySelector('.cart-content');
        cartBasket.append(element);
        loadContent();
    }
  loadContent();
    
    function createCartProduct(title, price, imgSrc) {

        return `
        <div class="cart-box">
            <img src="${imgSrc}" alt="" />
            <div class="detail-box">
                <div class="cart-food-title">${title}</div>
                <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amt">${price}</div>
                </div>
            <input type="number" value="1" class="cart-quantity" />
            </div>

        <i class="fa-solid fa-trash-can cart-remove"></i>
        </div>
        ` ;
    }
   
    function updateTotal() {
        const cartItems = document.querySelectorAll('.cart-box');
        const totalValue = document.querySelector('.total-price');

        let total = 0;
        cartItems.forEach(product => {
            let priceElement = product.querySelector('.cart-price');
            let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
            let qty = product.querySelector('.cart-quantity').value;
            total += (price * qty);
            product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);
        });
        totalValue.innerHTML = 'Rs.' + total;
        


        // Add Product Count in Cart Icon
        const cartCount = document.querySelector('.cart-count');
        let count = itemList.length;
        cartCount.innerHTML = count;

        if (count === 0) {
            cartCount.style.display = "none";
        } else {
            cartCount.style.display = "block";
        }
    }
});
}

export default Cart;