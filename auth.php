<?php
session_start(); // Start the session for message handling

include "RestAPI/authenticate_user.php"

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="assets/css/styles/auth.css">
    <script src="https://kit.fontawesome.com/2e52580f0a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>

    <?php if ($message) : ?>
        <script>
            Swal.fire({
                icon: 'info', // Change this to 'success', 'error', 'warning', or 'question' depending on the message type
                title: 'Notification',
                text: "<?php echo addslashes($message); ?>",
                confirmButtonText: 'OK'
            });
        </script>
    <?php endif; ?>

    <div class="login">
        <h2>Sign In</h2>
        <form method="POST" action="auth.php">
            <div class="input-container">
                <input class="input-field" type="email" id="login-email" name="login-email" placeholder="Email" required>
                <label for="login-email" class="form-label">Email</label>
            </div>
            <div class="input-container">
                <input class="input-field" type="password" id="login-password" name="password" placeholder="Password" required>
                <label for="login-password" class="form-label">Password</label>
                <span id="toggle-login-password" style="cursor: pointer;">
                    <i class="fa-regular fa-eye-slash" style="color: #EFEFEF;" id="login-eye-icon"></i>
                </span>
            </div>
            <button type="submit" name="login">Sign in</button>
        </form>
        <p class="forgot-password">Forgot Password?</p>
    </div>

    <div class="signup">
        <h2>Create Account</h2>
        <form method="POST" action="auth.php" id="signup-form">
            <div class="input-container">
                <input class="input-field" type="email" id="signup-email" name="signup-email" placeholder="Email" required>
                <label for="signup-email" class="form-label">Email</label>
            </div>
            <div class="input-container">
                <input class="input-field" type="password" id="signup-password" name="password" placeholder="Password" required oninput="validatePassword()">
                <label for="signup-password" class="form-label">Password</label>
            </div>
            <div class="input-container">
                <input class="input-field" type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required oninput="validatePassword()">
                <label for="confirm_password" class="form-label">Confirm Password</label>
                <span id="toggle-confirm-password" style="cursor: pointer;">
                    <i class="fa-regular fa-eye-slash" style="color: #EFEFEF;" id="confirm-eye-icon"></i>
                </span>
            </div>
            <div id="password-requirements" style="display: none;">
                <ul>
                    <li id="length" class="requirement">At least 8 characters</li>
                    <li id="uppercase" class="requirement">At least 1 uppercase letter</li>
                    <li id="lowercase" class="requirement">At least 1 lowercase letter</li>
                    <li id="number" class="requirement">At least 1 number</li>
                    <li id="special" class="requirement">At least 1 special character</li>
                </ul>
            </div>

            <button type="submit" name="signup" id="signup-button" disabled>Create</button>
        </form>
    </div>

    <script type="text/javascript" src="assets/js/modules/sign-upValidation.js"></script>
</body>

</html>
