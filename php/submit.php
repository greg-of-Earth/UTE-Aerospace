<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $reason = htmlspecialchars($_POST['reason']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'your_email@example.com';  // Change this to your email address
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
?>
