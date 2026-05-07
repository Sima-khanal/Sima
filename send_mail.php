<?php
// send_mail.php
// Receives POSTed contact form data, sends an email to the site owner, and returns JSON.

header('Content-Type: application/json; charset=utf-8');

$to = 'seemakhanal608@gmail.com';

// Helper: read POST value safely
function post_val(string $key): string {
    return isset($_POST[$key]) ? trim((string)$_POST[$key]) : '';
}

$firstName   = post_val('first_name');
$lastName    = post_val('last_name');
$email       = post_val('email');
$projectType = post_val('project_type');
$message     = post_val('message');

$errors = [];

if ($firstName === '') $errors[] = 'First name is required.';
if ($lastName === '') $errors[] = 'Last name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email is required.';
if ($projectType === '') $errors[] = 'Project type is required.';
if ($message === '') $errors[] = 'Message is required.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'error' => implode(' ', $errors)
    ]);
    exit;
}

$fullName = $firstName . ' ' . $lastName;

$subject = 'New Contact Form: ' . $projectType;

// Build a readable email body
$bodyLines = [
    'You have received a new message from the SIMA KHANAL website.',
    '',
    'Name: ' . $fullName,
    'Email: ' . $email,
    'Project Type: ' . $projectType,
    '',
    'Message:',
    $message,
    '',
    '---',
    'Sent from: https://your-site-url (contact form)'
];

$body = implode("\n", $bodyLines);

// Headers
// Note: Some hosting configurations ignore the From/Reply-To. This is still fine.
$fromHeader = 'From: no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$replyToHeader = 'Reply-To: ' . $email;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    $fromHeader,
    $replyToHeader
];

// Send email
$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
    exit;
}

http_response_code(500);
echo json_encode([
    'success' => false,
    'error' => 'Email could not be sent. Please check PHP mail configuration.'
]);
exit;

