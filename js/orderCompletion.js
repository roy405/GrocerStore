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
        generateOrderInfo(cartPersistance)
    }
}

function generateOrderInfo(productsArray) {
    var subtotal = document.getElementsByClassName('summary-total-price')[0]
    var newTotal = 0
    for (var i = 0; i < productsArray.length; i++) {
        product = productsArray[i]
        product_price = product.price * parseInt(product.quantity)
        rounded_price = Math.round(product_price * 100) / 100
        var checkoutRow = document.createElement('tr')
        var checkoutProducts = document.getElementsByClassName('order-final-tbody')[0]
        var checkoutComponents =`
            <tr>
                <td class='product-name'>${product.title} <span><i class='p-icon-times'></i> ${product.quantity}</span></td>
                <td class='product-price'>$${rounded_price}</td>
            </tr>`
        checkoutRow.innerHTML = checkoutComponents
        checkoutProducts.append(checkoutRow)
        newTotal += rounded_price
    }
    rounded_Total = Math.round(newTotal * 100) / 100
    subtotal.innerHTML = "$" + rounded_Total
    document.getElementById('order-total').innerHTML = "$" + rounded_Total
    localStorage.clear();
}