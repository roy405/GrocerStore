# GrocerStore
A web based ecommerce application designed to cater to the requirements of a Grocery Store using Vanilla JS and PHP.

# File Structure:

The files for the Website consists of mainly 5 PHP pages
 - index.php
 - product_list.php
 - product_detail_page.php
 - checkout.php
 - order_completion.php

The other 3: header, footer and mobilemenu are used as components for code reuse and hence are not
actual HTML pages.
The PHPMailer-master module is used to implement the mailing functionality. 
JSON folder consists of a JSON file with list of all products.
CSS, JS and Images are all provided in the respective folders and consists of a number of vendor 
files because of the use of template.

Functionalities:

 - Upon loading up the website, the user is presented with the index.php or homepage. This page is simply for visuals and intended as a landing page.
   The user can navigate to the products list page from the navigation bar, can view the cart (right tab) from here as well along with the categories tab (left tab) which 
   also utilized as a menu in the case of different screen sizes. 

 - The product_list_page.php consists of all the products in a grid format with images and various details provided. The products are read from a JSON file by using php file
   reading and json decoding functions and looped into the main area of the page. Here, the user can interact with the categories section and filter the products. Also, the 
   users can interact with the price filter and search box to filter products in real time. (The search box only works with lower case letters and product names at this stage) '
   Upon adding products to the cart, the user can see the products in the right hand pane and interact with the cart to change the quantity or delete each specific item. The
   user can also delete all items currently in cart by pressing the delete cart button.

 - User can also click on a specific product image and go to the detail page where detailed information is shown about the specific product. Users are capable of adding
   the product to the card with select quantity here as well. 

 - Upon clicking the checkout, the user is taken to the checkout page where the user is prompted to input all user related information in the checkout form displated. 
   Validations are added into the fields. Moreover, price and items information is also shown in this page. 

 - After clicking Place Order, the order is placed and the  user is taken to a order completion site where they are provided with all the details along with a generated order number
   and an email is sent to them to the respective email provided in the checkout form.

 - The shopping cart is persisted even if the user closes the tab or even the browser. This is done through utilization of the local storage of the browser.

 - The application does not consist of any database, but most other functionalities across the requirements have been implemented in a step-by-step manner. 

