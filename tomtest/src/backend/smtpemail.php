<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function sendVerificationEmail($toEmail, $code) {
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Username = 'blazorappemail120@gmail.com';
        $mail->Password = 'yxwconfukbybotcj';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->SMTPAuth = true;

        $mail->setFrom('blazorappemail120@gmail.com', 'TSRTEST');
        $mail->addAddress($toEmail);

        $mail->isHTML(true);
        $mail->Subject = 'Your Verification Code';
        $mail->Body    = "<h1>Your code is: $code</h1><p>This code expires in 10 minutes.</p>";

        $mail->send();
        return true;

    } catch (Exception $e) {
        return false;
    }
    }
