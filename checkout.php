<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <title>Grocer - Checkout</title>

    <link rel="icon" type="image/png" href="images/brand-logomaster.png">

    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css">

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="js/checkout.js" asynx> </script> 
</head>

<body>
    <div class="page-wrapper">
        <?php include 'header.php' ?>
        <!-- End Header -->
        <main class="main checkout">
            <div class="page-content pt-8 pb-10 mb-4">
                <div class="container mt-7">

                    <form action="order_completion.php" id="checkoutForm" class="form" method="post">
                        <div class="row">
                            <div class="col-lg-7 mb-6 mb-lg-0 check-detail">
                                <div>
                                    <a href="product_list.php" class="btn btn-dark btn-link btn-close"><i class="p-icon-arrow-long-left"></i>Go Back<span class="sr-only">Cart</span></a>
                                </div>
                                <h3 class="title text-left mt-3 mb-6">Shipping Details</h3>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <label>First Name<span style="color:red;">*</span></label>
                                        <input type="text" class="form-control" name="first-name" required />
                                    </div>
                                    <div class="col-xs-6">
                                        <label>Last Name<span style="color:red;">*</span></label>
                                        <input type="text" class="form-control" name="last-name" required />
                                    </div>
                                </div>
                                <label>Company Name (optional)</label>
                                <input type="text" class="form-control" name="company-name" />
                                <label>Street Address<span style="color:red;">*</span></label>
                                <input type="text" class="form-control" name="address1" placeholder="House number and street name" required />
                                <input type="text" class="form-control" name="address2" placeholder="Apartment, suite, unit, etc. (optional)" required />
                                <div class="row">
                                    <div class="col-xs-6">
                                        <label>Town / City <span style="color:red;">*</span></label>
                                        <input type="text" class="form-control" name="city" required />
                                    </div>
                                    <div class="col-xs-6">
                                        <label>State / Country<span style="color:red;">*</span></label>
                                        <input type="text" class="form-control" name="state" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <label>Postcode / ZIP<span style="color:red;">*</span></label>
                                        <input type="text" class="form-control" name="zip" required />
                                    </div>
                                    <div class="col-xs-6">
                                        <label>Phone<span style="color:red;">*</span></label>
                                        <input type="text" class="form-control" name="phone" required />
                                    </div>
                                </div>
                                <label>Email Address<span style="color:red;">*</span></label>
                                <input type="text" class="form-control" name="email-address" required />
                            </div>
                            <aside class="col-lg-5 sticky-sidebar-wrapper  pl-lg-6">
                                <div class="sticky-sidebar" data-sticky-options="{'bottom': 50}">
                                    <div class="summary pt-5">
                                        <h3 class="title">Your Order</h3>
                                        <table class="order-sidebar">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-body-checkout"></tbody>
                                        </table>

                                        <div class="summary-subtotal">
                                            </div>
                                            <div class="sumnary-shipping shipping-row-last">
                                                <div colspan="2" class="pb-3">
                                                    <h4 class="summary-subtitle pb-3">Calculate Shipping</h4>
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="free-shipping" name="shipping" class="custom-control-input">
                                                            <label class="custom-control-label" for="free-shipping">Free
                                                                shipping</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="local_pickup" name="shipping" class="custom-control-input">
                                                            <label class="custom-control-label" for="local_pickup">Local
                                                                pickup</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="flat_rate" name="shipping" class="custom-control-input" checked="">
                                                            <label class="custom-control-label" for="flat_rate">Flat
                                                                rate: $5.00</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="summary-subtotal">
                                                <div>
                                                    <h4 class="summary-subtitle">Total</h4>
                                                </div>
                                                <div>
                                                    <p class="summary-total-price ls-s">$290.00</p>
                                                </div>
                                            </div>


                                        <div class="payment accordion radio-type pb-5">
                                            
                                            <h4 class="summary-subtitle ls-m pb-3">Payment Methods</h4>
                                            <div class="card">
                                                <div class="card-header">
                                                    <a href="#collapse1" class="collapse">Card
                                                    </a>
                                                    <div class="row">
                                                        <label>Card Number</label>
                                                        <input type="text" class="form-control" name="card-number" />
                                                        <div class="col-xs-6">
                                                            <label>Expiry</label>
                                                            <input type="text" class="form-control" name="expiry" />
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <label>CVV</label>
                                                            <input type="text" class="form-control" name="cvv" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="collapse1" class="expanded" style="display: block;">
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <a href="#collapse2" class="expand">Cash
                                                        on delivery</a>
                                                </div>
                                                <div id="collapse2" class="collapsed">
                                                </div>
                                            </div>
                                            <input type="hidden" id="cartArray" name="cartArray" value=""/>
                                        </div><a><button type="submit" id="c-btn" class="btn btn-dim btn-block mt-6">Place Order</button></a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </form>



                </div>
            </div>
        </main>
        <?php include 'footer.php' ?>
    </div>
    <?php include 'mobilemenuandfooter.php' ?>
    </div>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        let localStorageProducts = JSON.parse(localStorage.getItem('cart'));

        $(document).ready(function(){
            $('#c-btn').click(function() {
                $.post( $('#checkoutForm').attr("action"),
                    $('cartArray').val(JSON.stringify(localStorageProducts)),
                    function(info){ $('')}
                )
            })
        })
    </script>
</body>

</html>