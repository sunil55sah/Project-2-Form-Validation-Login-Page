// Step 1: Select elements from the DOM
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginBtn");
const message = document.getElementById("message");

// Step 2: Add click event listener to login button
loginButton.addEventListener("click", validateForm);

// Step 3: Function for form validation
function validateForm() {
  // Step 4: Get the input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Step 5: Check if fields are empty
  if (username === "" && password === "") {
    message.textContent = "Please enter username and password.";
    message.style.color = "red";
  } else if (username === "") {
    message.textContent = "Username cannot be empty.";
    message.style.color = "red";
  } else if (password === "") {
    message.textContent = "Password cannot be empty.";
    message.style.color = "red";
  } else {
    message.textContent = "Login successful!";
    message.style.color = "green";
  }
}
