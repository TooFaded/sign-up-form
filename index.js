
//Handles password error
document.getElementById("signupForm").addEventListener("submit", function(event) {
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        confirmPasswordError.textContent = ""; // Clear error message
    }
});