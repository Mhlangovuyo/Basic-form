document.addEventListener("DOMContentLoaded", function () {
    // Function to validate the form on submission
    document.getElementById("registrationForm").onsubmit = function (event) {
        event.preventDefault(); // Prevent form from submitting by default
        let isValid = true;
        
        // Clear previous error messages
        document.querySelectorAll(".error").forEach(error => error.innerText = "");
        document.getElementById("successMessage").innerText = "";

        // Get form values
        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const ipaddress = document.getElementById("ip").value.trim();

        // Validate each field
        if (name === "") {
            setError("name", "Full Name is required.");
            isValid = false;
        }
        
        if (username === "") {
            setError("username", "Username is required.");
            isValid = false;
        }

        if (!validateEmail(email)) {
            setError("email", "Please enter a valid email address.");
            isValid = false;
        }

        if (!validateMobile(mobile)) {
            setError("mobile", "Please enter a valid mobile number.");
            isValid = false;
        }

        if (password === "") {
            setError("password", "Password is required.");
            isValid = false;
        } else if (password !== confirmPassword) {
            setError("confirmPassword", "Passwords do not match.");
            isValid = false;
        }

        if (!validateIP(ipaddress)) {
            setError("ip", "Please enter a valid IP address.");
            isValid = false;
        }

        // Display success message if the form is valid
        if (isValid) {
            document.getElementById("successMessage").innerText = "Registration successful!";
        }
    };

    // Utility functions

    function setError(fieldId, message) {
        document.getElementById(`${fieldId}Error`).innerText = message;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateMobile(mobile) {
        const mobilePattern = /^\d{7,15}$/; // Allows only numbers and a length between 7-15 digits
        return mobilePattern.test(mobile);
    }

    function validateIP(ip) {
        const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipPattern.test(ip);
    }
});
