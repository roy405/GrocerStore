<header class="header">
    <div class="header-top">
        <div class="container">
            <div class="header-left">
                <a href="#" class="call">
                    <i class="p-icon-phone-solid"></i>
                    <span>+61 454231223</span>
                </a>
                <span class="divider"></span>
                <a href="#" class="contact">
                    <i class="p-icon-map"></i>
                    <span>29 Thompson St, Lidcombe, NSW 2141</span>
                </a>
            </div>
            <div class="header-right">
                <div class="social-links">
                    <a href="#" class="social-link fab fa-facebook-f" title="Facebook"></a>
                    <a href="#" class="social-link fab fa-twitter" title="Twitter"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="header-middle has-center sticky-header fix-top sticky-content">
        <div class="container">
            <div class="header-left">
                <a href="#" class="mobile-menu-toggle" title="Mobile Menu">
                    <i class="p-icon-bars-solid"></i>
                </a>
                <a href="index.php" class="logo">
                    <img src="images/brand-logomaster.png" alt="logo" width="110" height="20">
                </a>
            </div>
            <div class="header-center">
                <nav class="main-nav">
                    <ul class="menu">
                        <li class="active">
                            <a href="index.php">Home</a>
                        </li>
                        <li>
                            <a href="product_list.php">Products</a>
                        </li>
                        <li>
                            <a href="#">Orders</a>
                        </li>
                        <li>
                            <a>Help</a>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Store Finder</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-right">
                <div class="header-search hs-toggle">
                    <a class="search-toggle" href="#" title="Search">
                        <i class="p-icon-search-solid"></i>
                    </a>
                    <form action="#" class="form-simple">
                        <input type="search" autocomplete="off" placeholder="Search in..." data-search>
                        <button class="btn btn-search" type="submit">
                            <i class="p-icon-search-solid"></i>
                        </button>
                    </form>
                </div>
                <div class="dropdown login-dropdown off-canvas">
                    <a class="login-toggle" href="ajax/login.html" data-toggle="login-modal">
                        <span class="sr-only">login</span>
                        <i class="p-icon-user-solid"></i>
                    </a>
                    <div class="canvas-overlay"></div>
                    <a href="#" class="btn-close"></a>
                    <div class="dropdown-box scrollable">
                        <div class="login-popup">
                            <div class="form-box">
                                <div class="tab tab-nav-underline tab-nav-boxed">
                                    <ul class="nav nav-tabs nav-fill mb-4">
                                        <li class="nav-item">
                                            <a class="nav-link active lh-1 ls-normal" href="#signin">Login</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link lh-1 ls-normal" href="#register">Register</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="signin">
                                            <form action="#">
                                                <div class="form-group">
                                                    <input type="text" id="singin-email" name="singin-email" placeholder="Username or Email Address" required="">
                                                    <input type="password" id="singin-password" name="singin-password" placeholder="Password" required="">
                                                </div>
                                                <div class="form-footer">
                                                    <div class="form-checkbox">
                                                        <input type="checkbox" id="signin-remember" name="signin-remember">
                                                        <label for="signin-remember">Remember
                                                            me</label>
                                                    </div>
                                                    <a href="#" class="lost-link">Lost your password?</a>
                                                </div>
                                                <button class="btn btn-dark btn-block" type="submit">Login</button>
                                            </form>
                                            <div class="form-choice text-center">
                                                <label>or Login With</label>
                                                <div class="social-links social-link-active ">
                                                    <a href="#" title="Facebook" class="social-link social-facebook fab fa-facebook-f"></a>
                                                    <a href="#" title="Google" class="social-link social-twitter fab fa-google"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="register">
                                            <form action="#">
                                                <div class="form-group">
                                                    <input type="text" id="register-first-name" name="register-first-name" placeholder="First Name" required="">
                                                    <input type="text" id="register-last-name" name="register-last-name" placeholder="Last Name" required="">
                                                    <input type="text" id="register-username" name="register-username" placeholder="Username" required="">
                                                    <input type="email" id="register-email" name="register-email" placeholder="Your Email Address" required="">
                                                    <input type="text" id="register-phone" name="register-phone" placeholder="Phone" required="">
                                                    <input type="password" id="register-password" name="register-password" placeholder="Password" required="">
                                                </div>
                                                <div class="form-footer mb-5">
                                                    <div class="form-checkbox">
                                                        <input type="checkbox" id="register-agree" name="register-agree" required="">
                                                        <label for="register-agree">I
                                                            agree to the
                                                            privacy policy</label>
                                                    </div>
                                                </div>
                                                <button class="btn btn-dark btn-block" type="submit">Register</button>
                                            </form>
                                            <div class="form-choice text-center">
                                                <label class="ls-m">or Register With</label>
                                                <div class="social-links social-link-active ">
                                                    <a href="#" title="Facebook" class="social-link social-facebook fab fa-facebook-f"></a>
                                                    <a href="#" title="Google" class="social-link social-twitter fab fa-google"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button title="Close (Esc)" type="button" class="mfp-close"><span>×</span></button>
                        </div>
                    </div>
                </div>
                <div class="dropdown cart-dropdown off-canvas mr-0 mr-lg-2">
                    <a href="#" class="cart-toggle link">
                        <i class="p-icon-cart-solid">
                            <span class="cart-count"></span>
                        </i>
                    </a>
                    <div class="canvas-overlay"></div>
                    <div class="dropdown-box">
                        <div class="canvas-header">
                            <h4 class="canvas-title">Shopping Cart</h4>
                            <a href="#" class="btn btn-dark btn-link btn-close">close<i class="p-icon-arrow-long-right"></i><span class="sr-only">Cart</span></a>
                        </div>
                        <div class="products scrollable">
                            <!--<div class="product product-mini">
                                <figure class="product-media">
                                    <a href="product-simple.html">
                                        <img class="cart-image-source" src="images/cart/product.jpg" alt="product" width="84" height="105" />
                                    </a>
                                    <a href="#" title="Remove Product" class="btn-remove">
                                        <i class="p-icon-times"></i><span class="sr-only">Close</span>
                                    </a>
                                </figure>
                                <div class="product-detail">
                                    <a href="product.html" class="product-name">Peanuts</a>
                                    <div class="price-box">
                                        <div class="input-group">
                                            <button class="quantity-minus p-icon-minus-solid"></button>
                                            <input class="quantity form-control" type="number" min="1" max="20">
                                            <button class="quantity-plus p-icon-plus-solid"></button>
                                        </div>
                                        <span class="product-price">$12.00</span>
                                    </div>
                                </div>

                            </div>
                            <div class="product product-mini">
                                <figure class="product-media">
                                    <a href="product-simple.html">
                                        <img src="images/cart/product.jpg" alt="product" width="84" height="105" />
                                    </a>
                                    <a href="#" title="Remove Product" class="btn-remove">
                                        <i class="p-icon-times"></i><span class="sr-only">Close</span>
                                    </a>
                                </figure>
                                <div class="product-detail">
                                    <a href="product.html" class="product-name">Prime Beef</a>
                                    <div class="price-box">
                                        <div class="input-group">
                                            <button class="quantity-minus p-icon-minus-solid"></button>
                                            <input class="quantity form-control" type="number" min="1" max="20">
                                            <button class="quantity-plus p-icon-plus-solid"></button>
                                        </div>
                                        <span class="product-price">$16.00</span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="cart-total">
                            <label>Subtotal:</label>
                            <span class="price"></span>
                        </div>
                        <div class="cart-action">
                            <a class="btn btn-outline btn-dim mb-2">Delete
                                Cart</a>
                            <button onclick="location.href = 'checkout.php';" class="btn btn-dim" style="width: 310px;"><span>Go To Checkout</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>