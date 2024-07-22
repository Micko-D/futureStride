<?php

include 'config/config.php';
include 'classes/User.php';

$database = new Database();
$db = $database->getConnection();
$user = new User($db);

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['signup'])) {
        $user->password = $_POST['password'];
        $user->email = $_POST['signup-email'];
        $confirm_password = $_POST['confirm_password'];

        if ($user->password !== $confirm_password) {
            $_SESSION['message'] = 'Passwords do not match.';
        } elseif ($user->signup()) {
            $_SESSION['message'] = 'Sign up successful! You can now login.';
        } else {
            $_SESSION['message'] = 'Email already exist. Ty to login.';
        }

        header("Location: auth.php"); // Redirect to the same page
        exit();
    } elseif (isset($_POST['login'])) {
        $user->email = $_POST['login-email'];
        $user->password = $_POST['password'];

        if ($user->login()) {
            $_SESSION['user_id'] = $user->id;
            header("Location: shop.php"); // Redirect to shop.php
            exit();
        } else {
            $_SESSION['message'] = 'Invalid email or password.';
        }

        header("Location: auth.php"); // Redirect to the same page
        exit();
    }
}

// Display messages
if (isset($_SESSION['message'])) {
    $message = $_SESSION['message'];
    unset($_SESSION['message']); // Clear message after displaying
}

?>