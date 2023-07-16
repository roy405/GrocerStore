<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <title>Grocer</title>

    <link rel="icon" type="image/png" href="images/brand-logomaster.png">

    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css">

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="js/orderCompletion.js" async> </script>
</head>

<body>
    <div class="page-wrapper">
        <?php include 'header.php';

        $order_date = date('d-m-Y');
        $order_number = rand(0, 9999);
        $first_name = $_POST['first-name'];
        $last_name = $_POST['last-name'];
        $company = $_POST['company-name'];
        $address1 = $_POST['address1'];
        $address2 = $_POST['address2'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zip = $_POST['zip'];
        $phone = $_POST['phone'];
        $email = $_POST['email-address'];
        $shipping = $_POST['shipping'];
        $card_number = $_POST['card-number'];
        $expiry = $_POST['expiry'];
        $cvv = $_POST['cvv'];

        echo "<main class='main order'>
        <div class='page-content pt-8 pb-10 mb-10'>
            <div class='container mt-7'>
                <div class='order-message'>
                    <h3 class='icon-box-title'>Thank you. Your Order has been received.</h3>
                </div>
                <div class='order-results row cols-xl-6 cols-md-3 cols-sm-2 mt-10 pt-2 mb-4'>
                    <div class='overview-item'>
                        <span>Order number</span>
                        <label>$order_number</label>
                    </div>
                    <div class='overview-item'>
                        <span>Status</span>
                        <label>Processing</label>
                    </div>
                    <div class='overview-item'>
                        <span>Date</span>
                        <label>$order_date</label>
                    </div>
                    <div class='overview-item'>
                        <span>Email:</span>
                        <label>$email</label>
                    </div>
                    <div class='overview-item'>
                        <span>Total:</span>
                        <label id='order-total'>$</label>
                    </div>
                    <div class='overview-item'>
                        <span>Payment method:</span>
                        <label>Cash on delivery</label>
                    </div>
                </div>
                <h2 class='detail-title mb-6'>Order Details</h2>
                <div class='order-details'>
                <table class='order-details-table'>
                <thead>
                            <tr class='summary-subtotal'>
                            <td>
                            <h3 class='summary-subtitle'>Your Order</h3>
                            </td>
                            <td></td>
                            </tr>
                            </thead>
                             <tbody class='order-final-tbody'>
                                <tr>
                                <td class='product-subtitle'>Product</td>
                                <td></td>
                                </tr>
                            </tbody>
                            </table>
                                <table class='order-details-table'> 
                            <thead> 
                            </thead>
                            <tbody>
                                <tr class='summary-subtotal'>
                                <td>
                                    <h4 class='summary-subtitle'>Total:</h4>
                                </td>
                                <td>
                                 <p class='summary-total-price'>$325.99</p>
                                </td>
                            </tr>
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
        </main>";

        // ============== THIS IS THE MAILER FUNCTION ================ //

        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;

        require 'PHPMailer-master/src/Exception.php';
        require 'PHPMailer-master/src/PHPMailer.php';
        require 'PHPMailer-master/src/SMTP.php';
        

        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'grocer.mail45@gmail.com';
        $mail->Password = 'ovvivnrxnjglndgg';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('grocer.mail45@gmail.com');
        $mail->addAddress($email);
        $mail->isHTML(true);

        $mail->Subject = "GrocerStore Delivery order: $order_number - Confirmation ";
        $mail->Body = " 
        Hi $first_name $last_name, <br>

        Thank you for your order. We will confirm your Delivery window on the day and advise when your driver is due to arrive. <br>

        <b>Order No:</b> $order_number<br>
        <b>Order Date:</b> $order_date<br>
        <b>Address:</b> $address1 $address2, $city, $state, $zip,<br>
 
        The delivery personnel might contact you at $phone<br>

        <b>Please do not reply to this email.</b><br>

        |Grocer Inc. © 2023. All Rights Reserved|
        ";
        $mail->send();

        echo "email sent successfully!";


        include 'footer.php';
        ?>
    </div>
    <?php include 'mobilemenuandfooter.php' ?>
    </div>
    </div>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>

