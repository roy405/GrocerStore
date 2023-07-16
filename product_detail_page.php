<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <title>Grocer</title>

    <link rel="icon" type="image/png" href="images/brand-logomaster.png">

    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css">

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="js/product-detail.js" async> </script>
</head>

<body>
    <div class="page-wrapper">
        <?php
        include 'header.php';

        $product_title = $_GET['product_title'];
        $product_price = $_GET['product_price'];
        $product_stock = $_GET['product_stock'];
        $product_category = $_GET['product_category'];
        $product_subcategory = $_GET['product_subcategory'];
        $product_image = $_GET['product_image'];
        $product_desc = $_GET['product_desc'];

        echo "<main class='main single-product'>
        <nav class='breadcrumb-nav'>
            <div class='container'>
                <div class='product-navigation'>
                    <ul class='breadcrumb'>
                        <li><a href='home.php'>Home</a></li>
                        <li><a href='product-simple.html'>Products</a></li>
                        <li></li>
                    </ul>
                    <div class='product-image-nav'>
                        <a href='#' class='product-nav product-nav-prev'>
                            <figure>
                                <img src='images/products/product-single/navigation/prev.jpg' width='100' height='100' alt='nav-prev'>
                            </figure>
                            <i class='p-icon-arrow-long-left'></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <div class='page-content'>
            <div class='container'>
                <div class='product product-single product-simple row mb-8'>
                    <div class='col-md-7'>
                        <div class='product-gallery'>
                            <div class='product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1 gutter-no'>
                                <figure class='product-image'>
                                    <img src='$product_image' alt='1' width='800' height='1000'>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-5'>
                        <div class='product-details'>
                            <h1 class='product-name'>$product_title</h1>
                            <p class='product-price mb-1'>
                                <ins class='new-price'>$product_price</ins>
                            </p>
                            <p class='product-short-desc'>$product_desc
                            </p>
                            <ul class='list list-circle'> 
                                <li><i class='far fa-circle'></i><b>Category:</b> $product_category</li>
                                <li><i class='far fa-circle'></i><b>Subcategory:</b> $product_subcategory</li>
                                <li><i class='far fa-circle'></i><b>Stock:</b> $product_stock</li>
                            </ul>
                            <div class='product-form product-qty pt-1'>
                                <div class='product-form-group'>
                                    <div class='input-group'>
                                        <button class='quantity-minus p-icon-minus-solid'></button>
                                        <input class='quantity form-control' type='number' min='1' max='20'>
                                        <button class='quantity-plus p-icon-plus-solid'></button>
                                    </div>
                                    <button class='btn-product-icon btn-cart'><i class='p-icon-cart-solid'></i>ADD TO CART</button>
                                </div>
                            </div>
                            <hr class='product-divider'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>";

        include 'footer.php';
        ?>

    </div>
    <?php include 'mobilemenuandfooter.php' ?>
    </div>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>