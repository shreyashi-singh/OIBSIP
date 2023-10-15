document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = "user";
  const password = "password";

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === username && enteredPassword === password) {
    alert("Login successful");
  } else {
    alert("Login failed. Please check your username and password.");
  }
});
