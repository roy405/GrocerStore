if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pageReady)
}
else {
    pageReady()
}

function pageReady() {
    console.log('localstorage', localStorage.getItem('cart'))

    var localStorageProducts = JSON.parse(localStorage.getItem('cart'))
    if (localStorageProducts !== null) {
        var cartPersistance = JSON.parse(localStorage.getItem('cart'))
        console.timeLog(cartPersistance)
        generateOrderInfo(cartPersistance)
    }
}

function generateOrderInfo(productsArray) {
    var subtotal = document.getElementsByClassName('summary-total-price ls-s')[0]
    var newTotal = 0
    for (var i = 0; i < productsArray.length; i++) {
        product = productsArray[i]
        product_price = product.price * parseInt(product.quantity)
        rounded_price = Math.round(product_price * 100) / 100
        var checkoutRow = document.createElement('tr')
        checkoutRow.classList.add('product-row')
        var checkoutProducts = document.getElementsByClassName('table-body-checkout')[0]
        var checkoutComponents = `
        <td class="product-name"><input type="hidden" value=${product.title}/>${product.title}<span class="product-quantity">×&nbsp;${product.quantity}</span></td>
        <td class="product-total text-body">$${rounded_price}</td>`
        checkoutRow.innerHTML = checkoutComponents
        checkoutProducts.append(checkoutRow)
        newTotal += rounded_price
    }
    rounded_Total = Math.round(newTotal * 100) / 100
    subtotal.innerHTML = "$" + rounded_Total

    var shipping_type = document.querySelector('input[name="shipping"]:checked');

    console.log(shipping_type.value)
    localStorage.setItem('orderTotal', newTotal)
}