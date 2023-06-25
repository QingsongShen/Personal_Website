<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


function send_message($stage, $userName, $emailAddress, $userComments,$commentTime){
	//Create an instance; passing `true` enables exceptions
	$mail = new PHPMailer(true);
	if ($stage){
		try {
		    //Server settings
		    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		    $mail->isSMTP();                                            //Send using SMTP
		    $mail->Host       = 'smtp.163.com';                     //Set the SMTP server to send through
		    $mail->CharSet = "UTF-8";
		    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		    $mail->Username   = 'sqs_admin@163.com';                     //SMTP username
		    $mail->Password   = 'LIBIQJPRPFVQDOSW';                               //SMTP password
		    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		    //Recipients
		    $mail->setFrom('sqs_admin@163.com', 'resume_admin');
		    $mail->addAddress('sqsgoodluck@qq.com', 'sqs');     //Add a recipient
		    // $mail->addAddress('ellen@example.com');               //Name is optional
		    // $mail->addReplyTo('info@example.com', 'Information');
		    // $mail->addCC('cc@example.com');
		    // $mail->addBCC('bcc@example.com');

		    //Attachments
		    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
		    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

		    //Content
		    $mail->isHTML(true);                                  //Set email format to HTML
		    $mail->Subject = '收到一条新留言！';
		    $mail->Body    = <<<START

		    <h3>收到一条来自【{$userName}】的留言信息，请及时处理！！</h3>
		    <h3>邮箱：</h3><span>{$emailAddress}</span>
		    <h3>评论：</h3><span>{$userComments}</span>
		    <h3>时间：</h3><span>{$commentTime}</span>

START;
		    $mail->AltBody = "收到一条来自：{$userName}，邮箱为：{$emailAddress}的信息：{$userComments}，请及时处理";

		    $mail->send();
		    echo 'Message has been sent';
		} catch (Exception $e) {
	    	// echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	    	$error = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
			}

		}
	return $error;
}


// LIBIQJPRPFVQDOSW

