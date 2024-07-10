<?php
header('Access-Control-Allow-Origin: *'); // This allows all origins
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Specify methods allowed
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept'); // Specify headers allowed

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $reason = htmlspecialchars($_POST['reason']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'goodbyemeteor@gmail.com';  // Change this to your email address
    $subject = 'New Form Submission';
    $body = "You have received a new message from: $name\nEmail: $email\nReason: $reason\nMessage: $message";
    $headers = 'From: webmaster@example.com' . "\r\n";  // Change this to the appropriate From address

    if(mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Thank you for contacting us, ' . $name]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}

file_put_contents('debug.txt', print_r($_POST, true));

?>
