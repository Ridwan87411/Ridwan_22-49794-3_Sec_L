// Counter
let count = 0;
function increment() {
  count++;
  document.getElementById("count").innerText = count;
}
function decrement() {
  count--;
  document.getElementById("count").innerText = count;
}
 
// BMI Calculator
function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("bmiResult");
 
  if (!height || !weight) {
    result.innerText = "Please enter both height and weight.";
    return;
  }
 
  const bmi = weight / ((height / 100) ** 2);
  result.innerText = `Your BMI is ${bmi.toFixed(2)}`;
}
 
// Change Text Color
function changeTextColor() {
  const color = document.getElementById("colorInput").value;
  const box = document.getElementById("colorBox");
  box.style.color = color;
}
 
// Form Validation
function validateForm() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("strengthMsg");
 
  if (password.length < 8) {
    msg.textContent = "Password must be at least 8 characters.";
    return false;
  }
 
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
 
  if (!hasNumber || !hasSpecial) {
    msg.textContent = "Password must include numbers and special characters.";
    return false;
  }
 
  if (password !== confirm) {
    msg.textContent = "Passwords do not match.";
    return false;
  }
 
  msg.style.color = "green";
  msg.textContent = "Success! Form submitted.";
  return true;
}