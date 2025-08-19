<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required_fields = ['firstName', 'lastName', 'phone', 'email'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Missing required field: $field"]);
        exit();
    }
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email format']);
    exit();
}

// Sanitize input data
$firstName = htmlspecialchars(trim($data['firstName']));
$lastName = htmlspecialchars(trim($data['lastName']));
$phone = htmlspecialchars(trim($data['phone']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$businessType = htmlspecialchars(trim($data['businessType'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

// Email configuration
$to = 'form@mybusinessvaluation.com.au';
$subject = 'New Business Valuation Inquiry';
$from_email = 'noreply@mybusinessvaluation.com.au'; // Use your domain
$from_name = 'Business Valuation Website';

// Create HTML email content
$html_body = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .info-table th, .info-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        .info-table th { background-color: #f2f2f2; font-weight: bold; }
        .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
        .footer { font-size: 12px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class='header'>
        <h2>New Business Valuation Inquiry</h2>
    </div>
    <div class='content'>
        <h3>Client Information</h3>
        <table class='info-table'>
            <tr><th>Name</th><td>$firstName $lastName</td></tr>
            <tr><th>Phone</th><td>$phone</td></tr>
            <tr><th>Email</th><td><a href='mailto:$email'>$email</a></td></tr>
            <tr><th>Business Type</th><td>$businessType</td></tr>
        </table>
        
        <h3>Message</h3>
        <div class='message-box'>
            " . nl2br($message) . "
        </div>
        
        <div class='footer'>
            <p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>
            <p><strong>IP Address:</strong> " . $_SERVER['REMOTE_ADDR'] . "</p>
            <p>This inquiry was submitted through the business valuation website contact form.</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = array(
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    "From: $from_name <$from_email>",
    "Reply-To: $email",
    'X-Mailer: PHP/' . phpversion()
);

// Send email
$mail_sent = mail($to, $subject, $html_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Log successful submission (optional)
    error_log("Contact form submission: $firstName $lastName ($email)");
    
    echo json_encode([
        'success' => true, 
        'message' => 'Email sent successfully'
    ]);
} else {
    error_log("Failed to send contact form email for: $firstName $lastName ($email)");
    
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'error' => 'Failed to send email. Please try again or contact us directly.'
    ]);
}
?>
