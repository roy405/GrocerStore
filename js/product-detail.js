if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', pageReady)
}
else {
    pageReady()
}

function pageReady() {

    console.log("localstorage", localStorage.getItem('cart'))

    var localStorageProducts = JSON.parse(localStorage.getItem('cart'))
    var checkoutButton = document.getElementsByClassName('btn-dim')[1]

    if (localStorageProducts === null || localStorageProducts.length === 0) {
        checkoutButton.disabled = true
    }

    if (localStorageProducts !== null) {
        var cartPersistance = JSON.parse(localStorage.getItem('cart'))
        console.log(cartPersistance)
        getCart(cartPersistance)
        storageCartTotalUpdate()
    }

    var removeCartItem = document.getElementsByClassName('btn-remove')
    for (var i = 0; i < removeCartItem.length; i++) {
        var button = removeCartItem[i]
        button.addEventListener('click', cartItemRemoveHandler)
    }

    var deleteAllCartItemButton = document.getElementsByClassName('mb-2')[0]
    deleteAllCartItemButton.addEventListener('click', removeAllCartProducts)

    var quantityInputs = document.getElementsByClassName('form-control')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var productDetailAddBtn = document.getElementsByClassName('btn-cart')[0]
    productDetailAddBtn.addEventListener('click', getProductInfo)

    var searchInput = document.querySelector("[data-search]")
    console.log(searchInput)
    searchInput.addEventListener("input", e => {
        const value = e.target.value;
        console.log(value)
        var productList = document.getElementsByClassName('cols-2')[0].children
        for (var i = 0; i < productList.length; i++) {
            console.log(productList[i])
            var productTitle = productList[i].getElementsByClassName('product-name')[0].children[0].innerHTML
            var lowerCaseProductTitle = productTitle.toLowerCase();
            console.log(productTitle)
            const isVisible = lowerCaseProductTitle.includes(value)
            console.log(isVisible)
            productList[i].classList.toggle("hide", !isVisible)
        }
    })

    var deleteAllCartItemButton = document.getElementsByClassName('mb-2')[0]
    deleteAllCartItemButton.addEventListener('click', removeAllCartProducts)

    var categoryList = document.getElementsByClassName('subcat')
    const subListItems = document.querySelectorAll('.subcat li');

    for (let i = 0; i < subListItems.length; i++) {
        let eventHandle = subListItems[i]
        eventHandle.addEventListener('click', e => {
            let listText = eventHandle.children[0].innerHTML
            let productList = document.getElementsByClassName('cols-2')[0].children
            for (let j = 0; j < productList.length; j++) {
                let productSubcat = productList[j].getElementsByClassName('product-subcategory-span')[0].innerHTML
                const isVisible = productSubcat.includes(listText)
                productList[j].classList.toggle("hide", !isVisible)
            }
        })
    }
}



// Function to handle quantity increment in the cart input fields.
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 || input.value > 20) {
        input.value = 1
    }
    updateCartTotal()
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

// Function to fetch all products user has added to cart : LocalStorage
function getCart(productsArray) {

    document.getElementsByClassName('btn-dim')[1].disabled = false
    for (var i = 0; i < productsArray.length; i++) {
        product = productsArray[i]
        var cartRow = document.createElement('div')
        cartRow.classList.add('product', 'product-mini')
        var cartProducts = document.getElementsByClassName('products scrollable')[0]
        var cartProductTitles = cartProducts.getElementsByClassName('product-name')
        console.log(product.imageSrc)
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
                        <span class="product-price">$${product.price}</span>
                    </div>
                </div>`
        cartRow.innerHTML = cartRowContents
        cartProducts.append(cartRow)
        cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', cartItemRemoveHandler)
        cartRow.getElementsByClassName('form-control')[0].addEventListener('change', quantityChanged)
    }
}

function getProductInfo(event){
    var button = event.target
    var detailProduct = button.parentElement.parentElement.parentElement.parentElement
    var productTitle = detailProduct.getElementsByClassName('product-name')[0].innerHTML
    var productPrice = detailProduct.getElementsByClassName('new-price')[0].innerText
    var productImageSource = detailProduct.parentElement.getElementsByClassName('product-image')[0].children[0].src
    console.log(productImageSource)
    var productQuantity = detailProduct.getElementsByClassName('form-control')[0].value
    addDetailProductToCart(productTitle, productPrice, productImageSource, productQuantity)
    updateCartTotal()
    // var productName = document.getElementsByClassName('product-name')[0].innerHTML
    // var productPrice = document.getElementsByClassName('new-price')[0].innerHTML
    // var productImage = ""
    // var productQty = document.getElementsByClassName('form-control')[0].value
}

// Function add product to cart from product detail page
function addDetailProductToCart(productName, productPrice, productImageSource, productQty) {
    console.log(productQty)
    document.getElementsByClassName('btn-dim')[1].disabled = false
    var cartRow = document.createElement('div')
    cartRow.classList.add('product', 'product-mini')
    var cartProducts = document.getElementsByClassName('products scrollable')[0]
    var cartProductTitles = cartProducts.getElementsByClassName('product-name')
    for (var i = 0; i < cartProductTitles.length; i++) {
        if (cartProductTitles[i].innerHTML == productName) {
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
                <a href="product.html" class="product-name">${productName}</a>
                <div class="price-box">
                    <div class="input-group">
                        <button class="quantity-minus p-icon-minus-solid"></button>
                        <input class="quantity form-control" type="number" min="1" max="20" value=${productQty}>
                        <button class="quantity-plus p-icon-plus-solid"></button>
                    </div>
                    <span class="product-price">$${productPrice}</span>
                </div>
            </div>`
    cartRow.innerHTML = cartRowContents
    cartProducts.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', cartItemRemoveHandler)
    cartRow.getElementsByClassName('form-control')[0].addEventListener('change', quantityChanged)
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