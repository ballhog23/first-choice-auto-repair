<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified.
$recipient = 'recipient@any.com';

// Replace smtp_username with your Amazon SES SMTP user name.
$usernameSmtp = 'youruser';

// Replace smtp_password with your Amazon SES SMTP password.
$passwordSmtp = 'yourpass';

// $configurationSet = 'ConfigSet';

$host = 'yourhostserver';
$port = 587;

// The subject line of the email
$subject = 'POTENTIAL CUSTOMER';

$altBody = 'NEVER CLICK ANY LINKS!!!!!!';


if (isset($_POST['submit'])) {
    require_once './vendor/autoload.php';

    $mail = new PHPMailer(true);

    $bodyText =  htmlentities(stripslashes($_POST['flname'] . "\r\n" . 
                              $_POST['phone'] . "\r\n" .
                              $_POST['email'] . "\r\n" .
                              $_POST['userServicesReq']));

// Replace sender@example.com with your "From" address.
// This address must be verified with Amazon SES.
$sender = 'youremail@any.com';
$senderName = 'your name';

    try {
        // Specify the SMTP settings.
        $mail->isSMTP();
        $mail->setFrom($sender, $senderName);
        $mail->Username   = $usernameSmtp;
        $mail->Password   = $passwordSmtp;
        $mail->Host       = $host;
        $mail->Port       = $port;
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = 'tls';
        // $mail->addCustomHeader('X-SES-CONFIGURATION-SET');

        // Specify the message recipients.
        $mail->addAddress($recipient);
        // You can also add CC, BCC, and additional To recipients here.

        // Specify the content of the message.
        $mail->isHTML($isHtml = false);
        $mail->Subject    = $subject;
        $mail->Body    = $altBody . "\n" . $bodyText;
        $mail->Send() 
        echo "Email sent!", PHP_EOL;
        // redirect
        header('Location: https://www.firstchoiceautotx.com/', true, 301);

    } catch (phpmailerException $e) {
        echo "An error occurred.", PHP_EOL; //Catch errors from PHPMailer.
    } catch (Exception $e) {
        echo "Email not sent." . "<br />" .
        "<a href='index.html'>Click here to return home, please.</a>", PHP_EOL; //Catch errors from Amazon SES.
    }
}
