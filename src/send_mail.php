<?php

########### CONFIG ###############

$recipient = 'obermma@gmail.com';
$redirect = 'index.html';

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'];
        $headers = "From:  noreply@magdalena-obermayr.developerakademie.com";

        mail($recipient, $subject, 'Absender: '. $_POST['email'] . "\r\n\r\n\r\n". $_POST['message'], $headers);
        header("Location: " . $redirect); 
        //echo 'Mail sent successfully. Thank you ' . $_POST['name'] . ', for getting in contact with me.';

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
