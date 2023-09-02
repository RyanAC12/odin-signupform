// Initialize DOM Elements
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const passwordMatch = document.querySelector('#password_match')

// Function to check if password fields match
function checkPasswords() {
if (password.value !== confirmPassword.value) {
    passwordMatch.textContent = 'Passwords must match.'
}
else {
    passwordMatch.textContent = ''
}
}

// Run the function when the user types into confirm password field
confirmPassword.addEventListener('input', checkPasswords);