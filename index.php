<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <title>Grocer - Home</title>

    <link rel="icon" type="image/png" href="images/brand-logomaster.png">

    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css">

    <link rel="stylesheet" type="text/css" href="vendor/owl-carousel/owl.carousel.min.css">

    <link rel="stylesheet" type="text/css" href="css/grocer.css">

    <script src="js/actions.js" async> </script>
</head>

<body class="home">
    <div class="page-wrapper">

        <?php include 'header.php'; ?>

        <!-- End Header -->
        <main class="main">
            <div class="page-content">
                <section class="intro-section">
                    <div class="intro-slider owl-carousel owl-theme owl-nav-arrow row animation-slider cols-1 gutter-no mb-8" data-owl-options="{
                                'nav': true,
                                'dots': false,
                                'loop': false,
                                'items': 1,
                                'responsive': {
                                    '0': {
                                        'nav': false,
                                        'autoplay': true
                                    },
                                    '768': {
                                        'nav': true
                                    }
                                }
                            }">
                        <div class="banner banner-fixed banner1">
                            <figure>
                                <img src="images/grocery3.jpg" alt="banner" width="1903" height="600" style="background-color: #f8f6f6;">
                            </figure>
                            <div class="banner-content y-50 pb-1">
                                <h4 class="banner-subtitle title-underline2 font-weight-normal text-dim slide-animate appear-animate" data-animation-options="{
                                                'name': 'fadeInUpShorter',
                                                'delay': '.2s'
                                            }">
                                    <span>FROM FARM TO TABLE</span>
                                </h4>
                                <h3 class="banner-title text-dark lh-1 mb-7 slide-animate appear-animate" data-animation-options="{
                                                'name': 'fadeInUpShorter',
                                                'delay': '.4s'
                                            }">
                                    Fresh Produce
                                </h3>
                                <a href="shop.html" class="btn btn-dark slide-animate appear-animate" data-animation-options="{
                                                'name': 'fadeInUpShorter',
                                                'delay': '.6s'
                                            }">Shop now<i class="p-icon-arrow-long-right"></i></a>
                            </div>
                        </div>
                        <div class="banner banner-fixed banner2">
                            <figure>
                                <img src="images/grocery2.jpg" alt="banner" width="1903" height="600" style="background-color: #F3F2EE;">
                            </figure>
                            <div class="banner-content y-50 pb-1">
                                <h4 class="banner-subtitle title-underline2 font-weight-normal text-dim slide-animate appear-animate" data-animation-options="{
                                                'name': 'fadeInUpShorter',
                                                'delay': '.2s'
                                            }">
                                    <span>Prices Dropped!</span>
                                </h4>
                                <h3 class="banner-title text-dark mb-5 mb-sm-9 slide-animate appear-animate" data-animation-options="{
                                                'name': 'fadeInLeftShorter',
                                                'delay': '.4s'
                                            }">
                                    Across The Isle
                                </h3>
                                <a href="shop.html" class="btn btn-dark mr-2 mr-xs-6 slide-animate appear-animate" data-animation-options="{
                                                'name': 'fadeInLeftShorter',
                                                'delay': '.6s'
                                            }">Shop
                                    now<i class="p-icon-arrow-long-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="owl-carousel owl-theme owl-box-border row cols-md-3 cols-sm-2 cols-1 appear-animate" data-owl-options="{
                                                'nav': false,
                                                'dots': false,
                                                'loop': false,
                                                'responsive': {
                                                    '0': {
                                                        'items': 1,
                                                        'autoplay': true
                                                    },
                                                    '576': {
                                                        'items': 2,
                                                        'autoplay': true
                                                    },
                                                    '768': {
                                                        'items': 3,
                                                        'dots': false
                                                    }
                                                }
                                            }">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="p-icon-shipping-solid"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h4 class="icon-box-title">FREE SHIPPING & RETURN</h4>
                                    <p>Free shipping on orders over $99</p>
                                </div>
                            </div>
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="p-icon-quality"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h4 class="icon-box-title">QUALITY GUARANTEED</h4>
                                    <p>We offer high quality of products</p>
                                </div>
                            </div>
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="p-icon-fax2"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h4 class="icon-box-title">SECURE PAYMENT</h4>
                                    <p>We ensure secure payment!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="container mt-10 pt-7 mb-7 appear-animate">
                    <h2 class="title-underline2 text-center mb-2"><span>Featured Products</span></h2>
                    <div class="tab tab-nav-center product-tab product-tab-type2">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#canned">
                                    <figure>
                                        <img src="images/grocer-products/categories/canned-food.jpg" width="160" height="130" alt="Nav img" />
                                    </figure>
                                    <div class="nav-title">Beverages</div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#fruits2">
                                    <figure>
                                        <img src="images/grocer-products/categories/fruit-basket.jpg" width="110" height="110" alt="Nav img" />
                                    </figure>
                                    <div class="nav-title">Fruits</div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#coffees">
                                    <figure>
                                        <img src="images/grocer-products/categories/coffee-brands.png" width="160" height="160" alt="Nav img" />
                                    </figure>
                                    <div class="nav-title" style="margin-top: 30px">Coffees</div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#meats">
                                    <figure>
                                        <img src="images/grocer-products/categories/meat-produce.png" width="160" height="130" alt="Nav img" />
                                    </figure>
                                    <div class="nav-title" style="margin-top: 25px">Meats</div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#vegetables">
                                    <figure>
                                        <img src="images/grocer-products/categories/veggies.jpg" width="160" height="130" alt="Nav img" />
                                    </figure>
                                    <div class="nav-title" style="margin-top: 10px">Vegetables</div>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="canned">
                                <div class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2" data-owl-options="{
                                            'items': 4,
                                            'nav': false,
                                            'dots': true,
                                            'margin': 20,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '768': {
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }">
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Coca-Cola.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                Coca-Cola
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Sprite.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Sprite
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Pepsi.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Pepsi
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->


                                </div>
                            </div>
                            <div class="tab-pane" id="fruits2">
                                <div class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2" data-owl-options="{
                                            'items': 4,
                                            'nav': false,
                                            'dots': true,
                                            'margin': 20,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '768': {
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }">
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Banana.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Fresh Banana
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <span class="price">$42.00</span>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Orange.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                                <label class="product-label label-sale">-40%</label>
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Fresh Orange
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <del class="old-price">$28.00</del>
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Grapes.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                                <label class="product-label label-sale">38%</label>
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Grapes
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$10.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Apple.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                                <label class="product-label label-sale">-24%</label>
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Apple
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$16.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->


                                </div>
                            </div>
                            <div class="tab-pane" id="coffees">
                                <div class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2" data-owl-options="{
                                            'items': 4,
                                            'nav': false,
                                            'dots': true,
                                            'margin': 20,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '768': {
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }">
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/French_Roast_Coffee.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                                <label class="product-label label-sale">-40%</label>
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    French Roast Coffee Beans
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="meats">
                                <div class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2" data-owl-options="{
                                            'items': 4,
                                            'nav': false,
                                            'dots': true,
                                            'margin': 20,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '768': {
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }">
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Chicken_Breast.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:0%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Chicken Breast Fillet
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$36.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->


                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Beef.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Prme Beef
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <del class="old-price">$28.00</del>
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Turkey_Legs.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Turkey Legs
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$16.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->



                                </div>
                            </div>
                            <div class="tab-pane" id="vegetables">
                                <div class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2" data-owl-options="{
                                            'items': 4,
                                            'nav': false,
                                            'dots': true,
                                            'margin': 20,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '768': {
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                        }">
                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Capsicum.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:20%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Capsicum
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <ins class="new-price">$12.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Cauliflower.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Cauliflower
                                                </a>
                                            </h5>
                                            <span class="product-price">

                                                <ins class="new-price">$36.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Carrot.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-label-group">
                                            </div>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Carrot
                                                </a>
                                            </h5>
                                            <span class="product-price">

                                                <ins class="new-price">$16.00</ins>
                                            </span>
                                        </div>
                                    </div>
                                    <!-- End .product -->

                                    <div class="product shadow-media text-center">
                                        <figure class="product-media">
                                            <a href="#">
                                                <img src="images/grocer-products/specifics/Tomato.jpg" alt="product" width="295" height="369" />
                                            </a>
                                            <div class="product-action-vertical">
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="product-simple.html#content-reviews" class="rating-reviews">(12)</a>
                                            </div>
                                            <h5 class="product-name">
                                                <a href="product-simple.html">
                                                    Tomato
                                                </a>
                                            </h5>
                                            <span class="product-price">
                                                <span class="price">$42.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <?php include 'footer.php'; ?>
    </div>
    <?php include 'mobilemenuandfooter.php'; ?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/owl-carousel/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>