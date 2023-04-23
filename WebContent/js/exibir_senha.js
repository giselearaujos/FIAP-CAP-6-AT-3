// exibir/ocultar senha

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const showButton = document.getElementById("show_eye");
  const hideButton = document.getElementById("hide_eye");
  hideButton.classList.remove("d-none");
  
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  showButton.classList.toggle("d-none");
  hideButton.classList.toggle("d-none");
}
