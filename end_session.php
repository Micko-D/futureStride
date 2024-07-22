<?php
session_start(); // Start or resume session

// Unset all session variables
$_SESSION = [];

// Destroy the session
session_destroy();

// Redirect to login page or any appropriate page after logout
header("Location: auth.php");
exit();
?>
