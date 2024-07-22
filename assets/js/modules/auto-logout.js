// Set the session timeout duration in milliseconds (10 minutes = 600,000 ms)
const sessionTimeout = 600000; // 10 minutes

let logoutTimer;

function startLogoutTimer() {
    // Clear any existing timer
    clearTimeout(logoutTimer);

    // Start a new timer
    logoutTimer = setTimeout(logoutUser, sessionTimeout);
}

function resetLogoutTimer() {
    // Reset the timer on user interaction
    clearTimeout(logoutTimer);
    startLogoutTimer();
}

function logoutUser() {
    // Perform logout actions, such as redirecting to logout script
    window.location.href = 'end_session.php'; // Replace with your logout script URL
}

// Start the initial timer when the page loads
document.addEventListener('DOMContentLoaded', startLogoutTimer);

// Reset the timer on user interaction events
window.addEventListener('click', resetLogoutTimer);
window.addEventListener('mousemove', resetLogoutTimer);
window.addEventListener('keypress', resetLogoutTimer);
window.addEventListener('scroll', resetLogoutTimer);