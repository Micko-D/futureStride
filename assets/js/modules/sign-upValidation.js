function validatePassword() {
    const password = document.getElementById('signup-password').value;
    const checklist = document.getElementById('password-requirements');
    const signupButton = document.getElementById('signup-button');

    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[~`!@#$%^&*()\-_+={}[\]|\\;:"<>,./?]/.test(password)
    };

    // Update checklist items
    document.getElementById('length').className = requirements.length ? 'requirement valid' : 'requirement';
    document.getElementById('uppercase').className = requirements.uppercase ? 'requirement valid' : 'requirement';
    document.getElementById('lowercase').className = requirements.lowercase ? 'requirement valid' : 'requirement';
    document.getElementById('number').className = requirements.number ? 'requirement valid' : 'requirement';
    document.getElementById('special').className = requirements.special ? 'requirement valid' : 'requirement';

    // Show or hide checklist based on input
    if (password === '') {
        checklist.style.display = 'none';
    } else {
        checklist.style.display = Object.values(requirements).every(req => req) ? 'none' : 'block';
    }

    // Enable or disable the submit button
    const allValid = Object.values(requirements).every(req => req);
    signupButton.disabled = !allValid;
}

// Toggle password visibility function
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}

// Event listeners for toggling password visibility
document.getElementById('toggle-login-password').addEventListener('click', () => {
    togglePasswordVisibility('login-password', 'login-eye-icon'); // Ensure the correct ID is used
});

document.getElementById('toggle-confirm-password').addEventListener('click', () => {
    togglePasswordVisibility('confirm_password', 'confirm-eye-icon'); // Ensure the correct ID is used
});

// Call validatePassword whenever the password input changes
document.getElementById('signup-password').addEventListener('input', validatePassword);
document.getElementById('confirm_password').addEventListener('input', validatePassword);
