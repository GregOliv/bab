<?php

$secretKey = '6LesSJYoAAAAABYg3uzZkagyNMuorKbbf5UXhfqK'; // Replace with your actual reCAPTCHA secret key

if(isset($_POST['token']) && !empty($_POST['token'])){
    $token = $_POST['token'];

    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secretKey,
        'response' => $token
    ];

    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $json = json_decode($result, true);

    if ($json['success']) {
        // reCAPTCHA verification succeeded
        echo json_encode(['success' => true]);
    } else {
        // reCAPTCHA verification failed
        echo json_encode(['success' => false]);
    }
} else {
    // Token not provided
    echo json_encode(['success' => false, 'error' => 'Token not provided']);
}
