
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    
    errorMessage.textContent = "";

    
    if (username === "") {
        errorMessage.textContent = "Username is required.";
        return false;  
    }

    if (password === "") {
        errorMessage.textContent = "Password is required.";
        return false;  
    }

    
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;  
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        errorMessage.textContent = "Username must be a valid email address.";
        return false;  
    }

   
    return true;
}
