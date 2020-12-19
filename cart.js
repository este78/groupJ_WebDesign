/*targeting/calling add-cart class */
let carts = document.querySelectorAll('.add-cart');

let products = [{
            name: 'Lodge Cast Iron Lid & Loop Handle',
            price: 155,
            inCart: 0
        },
        {
            name: 'Tagine Red Cast Iron Base',
            price: 45,
            inCart: 0
        },
        {
            name: 'Ilsa Mussel Pot - Enameled Carbon Steel & Porcelain Lid',
            price: 25,
            inCart: 0
        },
        {
            name: 'De Buyer PrimAppety Stockpot',
            price: 30,
            inCart: 0
        },


    ]
    /*loop throuth class add-cart, looping the array length */
for (let i = 0; i < carts.length; i++) {
    /*when ever click on add-cart add to cart */
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]); /*When called card number pass product*/
        totalCost(products[i]);
    })
}

/*this function is going to check the local storage if there is an items of cart numbers if is exists  */
function onLoadNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers'); /*get the number of items on click*/
    if (productNumbers) { /*if there is there are product number from local storage */
        document.querySelector('.cart span').textContent = productNumbers; /*set the product number to the number of product in the storage */
    }
}

/*Items to be add to the cart */
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers'); /*product number local storage */

    /*Covert string to int for product number */
    productNumbers = parseInt(productNumbers);
    /*if there  */
    if (productNumbers) { /*if there is product in the cart or if it exsts and true */
        localStorage.setItem('cartNumbers', productNumbers + 1); /*add plus one our default is 0, add one to it */
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else { /*if there is no product in the storage */
        localStorage.setItem('cartNumbers', 1); /*set the cart to one */
        document.querySelector('.cart span').textContent = 1; /*if that is the first item make 1 */
    }


    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    /*pass from JSON to js */
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    /*Pass as JSON not as Javascript */
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    console.log("The price is ", product.price);
}

onLoadNumbers(); /*when ever we run for the first time this will run */