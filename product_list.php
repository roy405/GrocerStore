<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <title>Grocer - Products</title>

    <link rel="icon" type="image/png" href="images/brand-logomaster.png">

    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css">

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="js/actions.js" async> </script>
</head>

<body>
    <?php
    $path = 'json/grocerProducts.json';
    $jsonString = file_get_contents($path);
    $jsonData = json_decode($jsonString, true);
    ?>
    <div class="page-wrapper">
        <?php include 'header.php'; ?>
        <main class="main">

            <div class="container-fluid">
                <nav class="breadcrumb-nav has-border">
                    <ul class="breadcrumb">
                        <li><a href="demo1.html">Home</a></li>
                        <li>Products</li>
                    </ul>
                </nav>
                <div class="page-content mb-10 shop-page shop-horizontal">
                    <nav class="toolbox toolbox-horizontal sticky-toolbox sticky-content fix-top">
                        <aside class="sidebar sidebar-fixed shop-sidebar">
                            <div class="sidebar-overlay"></div>
                            <a class="sidebar-close" href="#"><i class="p-icon-times"></i></a>
                            <div class="sidebar-content toolbox-left">
                                <div class="toolbox-item select-menu">
                                    <a class="select-menu-toggle" href="#">Select Price</a>
                                    <ul class="filter-items filter-price">
                                        <li><a>$0.00 - $10.00</a></li>
                                        <li><a>$10.00 - $25.00</a></li>
                                        <li><a>$25.00 - $50.00</a></li>
                                        <li><a>$50.00 - $75.00</a></li>
                                        <li><a>$75.00 - $100.00</a></li>
                                        <li><a>$100.00 - $200.00</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </nav>
                    <div class="row product-wrapper cols-lg-6 cols-md-4 cols-sm-3 cols-2">
                        <?php
                        foreach ($jsonData as $product) {
                            $product_title = $product['title'];
                            $product_price = $product['price'];
                            $product_stock = $product['stock'];
                            $product_category = $product['category'];
                            $product_subcategory = $product['subcategory'];
                            $product_image = $product['filename'];
                            $product_desc = $product['description'];
                            echo " <div class='product-wrap'>
                                        <div class='product text-center product-with-qty'>
                                            <figure class='product-media'>
                                                <a href='product_detail_page.php?product_title=$product_title&product_price=$product_price&product_stock=$product_stock&product_category=$product_category&product_subcategory=$product_subcategory&product_image=$product_image&product_desc=$product_desc'>
                                                    <img class='grocer-product-image' src='$product_image' alt='product' width='295' height='369' />
                                                </a>
                                                 <div class='product-action-vertical'>
                                                    <a href='#' class='btn-product-icon btn-cart' data-toggle='modal' data-target='#addCartModal' title='Add to Cart'>
                                                         <i class='p-icon-cart-solid'></i>
                                                    </a>
                                                </div>
                                            </figure>
                                            <div class='product-details'>
                                                <h5 class='product-name'>
                                                    <a>$product_title</a>
                                                </h5>
                                                <span class='product-price'>
                                                <span class='new-price'>$$product_price</span>
                                                </span>
                                                <span class='product-unit'>
                                                    (250 g) -
                                                </span>
                                                <div class='product-action'>
                                                    <label class='product-stock'>Stock:</label>
                                                    <span class='product-stock'>$product_stock</span>
                                                </div>
                                                <div class='product-action'>
                                                    <label class='product-category'>Category:</label>
                                                    <span class='product-category-span'>$product_category</span>
                                                </div>
                                                <div class='product-action'>
                                                    <label class='product-subcategory'>Subcategory:</label>
                                                    <span class='product-subcategory-span'>$product_subcategory</span>
                                                </div>
                                                <div class='product-action'>
                                                    <div class='product-quantity'>
                                                        <button class='quantity-minus p-icon-minus-solid'></button>
                                                        <input class='quantity' type='number' min='1' max='20'>
                                                        <button class='quantity-plus p-icon-plus-solid'></button>
                                                    </div>
                                                    <a class='btn-product btn-cart' data-toggle='modal' data-target='#addCartModal'
                                                        itle='Add to cart'><i class='p-icon-cart-solid'></i><span>Add to cart</span></a>
                                                </div>
                                            </div>
                                         </div>
                                    </div>";
                        }
                        ?>
                    </div>
                </div>
            </div>
    </div>
    </main>
    <?php include 'footer.php'; ?>
    </div>
    <?php include 'mobilemenuandfooter.php'; ?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>