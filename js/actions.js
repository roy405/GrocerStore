/*
   An if statement to see if the document state is loading. 
   If loading, it adds a event listener which listens for the page to load.
   Once loaded, the pageReady function is called.
   Or else, regardless teh pageReady function is called.
   */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', pageReady)
}
else {
    pageReady()
}

/*
    This is the main function, which runs upon the page fully finishes loading and has mounted.
    It consists of eventlistener assignment to various html elements such as buttons and inputs.
*/
function pageReady() {

    console.log("localstorage", localStorage.getItem('cart'))

    //Getting localStorage entry and parsing to JSON.
    var localStorageProducts = JSON.parse(localStorage.getItem('cart'))
    var checkoutButton = document.getElementsByClassName('btn-dim')[1]

    //Checking if local storage has cart items. if not, disabing checkoutbutton
    if (localStorageProducts === null || localStorageProducts.length === 0) {
        checkoutButton.disabled = true
    }

    if (localStorageProducts !== null) {
        var cartPersistance = JSON.parse(localStorage.getItem('cart'))
        getCart(cartPersistance)
        storageCartTotalUpdate()
    }

    //Event listener for each button added to products on the cart to remove the product
    var removeCartItem = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeCartItem.length; i++) {
        var button = removeCartItem[i]
        button.addEventListener('click', cartItemRemoveHandler)
    }

    //Event Listener to changing Quantity
    var quantityInputs = document.getElementsByClassName('form-control')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    //Product Icons Add to Cart Event listener
    var addToCartButtons = document.getElementsByClassName('btn-product-icon btn-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', getProductForCart)
    }

    //Product Button Add to Cart Event Listener
    var productAddToCartButtons = document.getElementsByClassName('btn-cart')
    for (var i = 0; i < productAddToCartButtons.length; i++) {
        var button = productAddToCartButtons[i]
        button.addEventListener('click', getProductForCart)
    }

    //To Product Detail page Event Listener
    var productListImages = document.getElementsByClassName('product-media')
    for (var i = 0; i < productListImages.length; i++) {
        var imageAnchor = productListImages[i]
        imageAnchor.addEventListener('click', toProductDetail)
    }

    //Search Input Function
    var searchInput = document.querySelector("[data-search]")
    searchInput.addEventListener("input", e => {
        const value = e.target.value;
        var productList = document.getElementsByClassName('cols-2')[0].children
        for (var i = 0; i < productList.length; i++) {
            var productTitle = productList[i].getElementsByClassName('product-name')[0].children[0].innerHTML
            var lowerCaseProductTitle = productTitle.toLowerCase();
            const isVisible = lowerCaseProductTitle.includes(value)
            productList[i].classList.toggle("hide", !isVisible)
        }
    })

    // Button event listener for delete all items currently in cart
    var deleteAllCartItemButton = document.getElementsByClassName('mb-2')[0]
    deleteAllCartItemButton.addEventListener('click', removeAllCartProducts)


    //Category loop is here
    const subListItems = document.querySelectorAll('.subcat li');
    for (let i = 0; i < subListItems.length; i++) {

        let eventHandle = subListItems[i]

        eventHandle.addEventListener('click', e => {

            let listText = eventHandle.children[0].innerHTML
            let textWithoutNumber = listText.substring(listText.length - 4, 0)

            let productList = document.getElementsByClassName('cols-2')[0].children

            for (let j = 0; j < productList.length; j++) {
                let productSubcat = productList[j].getElementsByClassName('product-subcategory-span')[0].innerHTML
                let isVisible = productSubcat.includes(textWithoutNumber)
                productList[j].classList.toggle("hide", !isVisible)
            }
        })
    }

    //This is is the product Filter mechanism
    const priceFilter = document.querySelectorAll('.filter-price li');
    for (let i = 0; i < priceFilter.length; i++) {
        let button = priceFilter[i]
        button.addEventListener('click', () => {
  
            let str = button.innerText

            matches = str.match(/\d+/g);
     
            let min = parseInt(matches[0])
            let max = parseInt(matches[2])

            let productList = document.getElementsByClassName('cols-2')[0].children

            for( let j=0; j<productList.length;j++){
                let productPrice = productList[j].getElementsByClassName('product-price')[0].children[0].innerHTML
                let extractedPrice = productPrice.match(/\d+/g)[0];
                let isVisible;
                if((extractedPrice >min && extractedPrice < max) || extractedPrice== min || extractedPrice==max ){
                    isVisible=true;
                }
                productList[j].classList.toggle("hide",!isVisible)
            }
        })
    }

    // Method to assign number of items in each subcategory to the category side-bar
    for (let i = 0; i < subListItems.length; i++) {

        let listItem = subListItems[i].children[0].innerText
        let productList = document.getElementsByClassName('cols-2')[0].children
        let count = 0
        for (let j = 0; j < productList.length; j++) {


            let productSubcat = productList[j].getElementsByClassName('product-subcategory-span')[0].innerText

            const isVisible = productSubcat.includes(listItem)

            if (isVisible === true) {
                count += 1
            }

        }
        let htmlText = subListItems[i].children[0]
        htmlText.textContent += " " + "(" + count + ")"
    }

    // EXPERIMENTATION WITH KEEPING A SINGLE DROP DOWN OPEN AT A TIME
    var categoryNav = document.querySelector('.mobile-menu.mmenu-anim')
    categoryNav.addEventListener('toggle', function (event) {
        if (!event.target.open) return;
        var dropdowns = categoryNav.querySelectorAll('.cat-list-item[show]');
        Array.prototype.forEach.call(dropdowns, function (dropdown) {
            if(dropdown === event.target) return;
            dropdown.removeAttribute('open');
        });
    }, true);
}


// Function to handle quantity increment in the cart input fields.
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 || input.value > 20) {
        input.value = 1
    }
    updateCartTotal()
}
/*
    Function to get the products from products list to add to cart. 
    From the button element, the function goes upto the parent element hierarchy and 
    get the values of the product's title, price and image source from the html elements
    and passes them to the addItemToCart function. Also it calls the updateCartTotal function 
    which handles the total calculation for the overall cart items.
*/
function getProductForCart(event) {
    var button = event.target
    var productToAdd = button.parentElement.parentElement.parentElement.parentElement
    var productTitle = productToAdd.getElementsByClassName('product-name')[0].innerText
    var productPrice = productToAdd.getElementsByClassName('product-price')[0].children[0].innerText
    var productImageSource = productToAdd.getElementsByClassName('grocer-product-image')[0].src
    console.log(productImageSource)
    var productQuantity = productToAdd.getElementsByClassName('quantity')[0].value
    addItemToCart(productTitle, productPrice, productImageSource, productQuantity)
    updateCartTotal()
}

//Function to retrieve and add the item that was identified from the getProductToCart() method into the cart itself
function addItemToCart(productTitle, productPrice, productImageSource, productQuantity) {
    document.getElementsByClassName('btn-dim')[1].disabled = false

    var cartRow = document.createElement('div')
    cartRow.classList.add('product', 'product-mini')
    var cartProducts = document.getElementsByClassName('products scrollable')[0]
    var cartProductTitles = cartProducts.getElementsByClassName('product-name')
    for (var i = 0; i < cartProductTitles.length; i++) {
        if (cartProductTitles[i].innerHTML == productTitle) {
            var cartProductParentElement = cartProductTitles[i].parentElement.parentElement
            var inputField = cartProductParentElement.getElementsByClassName('form-control')[0]
            var parsedInputField = parseInt(inputField.value)
            inputField.value = parsedInputField + 1
            return
        }
    }
    var cartRowContents = `
            <figure class="product-media">
                <a>
                    <img src=${productImageSource} class="cart-image-source" alt="product" width="84" height="105" />
                </a>
                <a href="#" title="Remove Product" class="btn-remove">
                    <i class="p-icon-times"></i><span class="sr-only">Close</span>
                </a>
            </figure>
            <div class="product-detail">
                <a href="product.html" class="product-name">${productTitle}</a>
                <div class="price-box">
                    <div class="input-group">
                        <button class="quantity-minus p-icon-minus-solid"></button>
                        <input class="quantity form-control" type="number" min="1" max="20" value=${productQuantity}>
                        <button class="quantity-plus p-icon-plus-solid"></button>
                    </div>
                    <span class="product-price">${productPrice}</span>
                </div>
            </div>`
    cartRow.innerHTML = cartRowContents
    cartProducts.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', cartItemRemoveHandler)
    cartRow.getElementsByClassName('form-control')[0].addEventListener('change', quantityChanged)
}

// 
function getCart(productsArray) {

    document.getElementsByClassName('btn-dim')[1].disabled = false
    for (var i = 0; i < productsArray.length; i++) {
        product = productsArray[i]
        var cartRow = document.createElement('div')
        cartRow.classList.add('product', 'product-mini')
        var cartProducts = document.getElementsByClassName('products scrollable')[0]
        var cartProductTitles = cartProducts.getElementsByClassName('product-name')
        var cartRowContents = `
                <figure class="product-media">
                    <a href="product-simple.html">
                        <img src=${product.imageSrc} class="cart-image-source" alt="product" width="84" height="105" />
                    </a>
                    <a href="#" title="Remove Product" class="btn-remove">
                        <i class="p-icon-times"></i><span class="sr-only">Close</span>
                    </a>
                </figure>
                <div class="product-detail">
                    <a href="product.html" class="product-name">${product.title}</a>
                    <div class="price-box">
                        <div class="input-group">
                            <button class="quantity-minus p-icon-minus-solid"></button>
                            <input class="quantity form-control" type="number" min="1" max="20" value=${product.quantity}>
                            <button class="quantity-plus p-icon-plus-solid"></button>
                        </div>
                        <span class="product-price">${product.price}</span>
                    </div>
                </div>`
        cartRow.innerHTML = cartRowContents
        cartProducts.append(cartRow)
        cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', cartItemRemoveHandler)
        cartRow.getElementsByClassName('form-control')[0].addEventListener('change', quantityChanged)
    }
}

// Cart item remove handler. It removes the entire HTML element along with it's
// child elements upon clicking the corresponding remove button.
function cartItemRemoveHandler(event) {
    var buttonEventValue = event.target
    buttonEventValue.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

// Function to remove all cart Items
function removeAllCartProducts() {
    var cartItemsContainer = document.getElementsByClassName('products scrollable')[0]
    cartItemsContainer.replaceChildren()
    updateCartTotal()
}

// Function to Update the localStorage and Total Amount in Cart
function updateCartTotal() {
    var cartProductsEncloser = document.getElementsByClassName('products scrollable')[0]
    var cartProducts = cartProductsEncloser.getElementsByClassName('product-mini')
    var totalPrice = 0

    var productsArray = []
    for (var i = 0; i < cartProducts.length; i++) {
        var product = cartProducts[i]
        var productTitle = product.getElementsByClassName('product-name')[0].innerHTML
        var productPrice = product.getElementsByClassName('product-price')[0]
        var productQuantity = product.getElementsByClassName('form-control')[0]
        var productImage = product.getElementsByClassName('cart-image-source')[0].src
        var parsedPrice = parseFloat(productPrice.innerHTML.replace('$', ''))
        var parsedQuantity = productQuantity.value
        totalPrice += (parsedPrice * parsedQuantity)
        var product =
        {
            title: productTitle,
            quantity: parsedQuantity,
            price: parsedPrice,
            imageSrc: productImage

        }
        productsArray.push(product)
    }
    totalPrice = Math.round(totalPrice * 100) / 100
    var totalElementContainer = document.getElementsByClassName('cart-total')[0]
    totalElementContainer.getElementsByClassName('price')[0].innerText = '$' + totalPrice

    localStorage.setItem('cart', JSON.stringify(productsArray));
}

//Function to update the total price when retrieve cart items from local storage
function storageCartTotalUpdate() {
    var cartProductsEncloser = document.getElementsByClassName('products scrollable')[0]
    var cartProducts = cartProductsEncloser.getElementsByClassName('product-mini')
    var totalPrice = 0

    for (var i = 0; i < cartProducts.length; i++) {
        var product = cartProducts[i]
        var productPrice = product.getElementsByClassName('product-price')[0]
        var productQuantity = product.getElementsByClassName('form-control')[0]
        var parsedPrice = parseFloat(productPrice.innerHTML.replace('$', ''))
        var parsedQuantity = productQuantity.value
        totalPrice += (parsedPrice * parsedQuantity)
    }
    totalPrice = Math.round(totalPrice * 100) / 100
    var totalElementContainer = document.getElementsByClassName('cart-total')[0]
    totalElementContainer.getElementsByClassName('price')[0].innerText = '$' + totalPrice
}

// Function to 
function toProductDetail(event) {
    var targetProductImage = event.target
    var targetProduct = targetProductImage.parentElement.parentElement.parentElement
}

