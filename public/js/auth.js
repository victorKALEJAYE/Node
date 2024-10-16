// Simple validation for passwords (e.g., password confirmation)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = form.querySelector("input[name='username']");
    const password = form.querySelector("input[name='password']");

    form.addEventListener("submit", function (event) {
        // Example of simple validation (you can customize)
        if (password.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();  // Prevent form submission
        }
    });
});
