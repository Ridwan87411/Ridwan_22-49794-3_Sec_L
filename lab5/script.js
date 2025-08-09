document.getElementById('registrationForm').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value);

  // Validation
  let messages = [];

  // Full name must be at least 3 characters
  if (name.length < 3) {
    messages.push("Full name must be at least 3 characters.");
  }

  // Email must match basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messages.push("Enter a valid email address.");
  }

  // Age must be between 10 and 100
  if (isNaN(age) || age < 10 || age > 100) {
    messages.push("Enter a valid age between 10 and 100.");
  }

  // Show alert and prevent form submission if errors exist
  if (messages.length > 0) {
    e.preventDefault();
    alert(messages.join("\n"));
  }
});
