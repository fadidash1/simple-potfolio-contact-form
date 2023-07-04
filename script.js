// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Store the dark mode preference in localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Check if dark mode preference is set and apply the appropriate class to the body
const darkModePreference = localStorage.getItem("darkMode");
if (darkModePreference === "enabled") {
  document.body.classList.add("dark-mode");
}
// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form values
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create the email parameters
  const templateParams = {
    to_name: 'Recipient Name',
    from_name: name,
    message: message
  };

  // Send email using EmailJS
  emailjs
    .send(
      "service_49zi2ug",
      "template_zpgfg4r",
      templateParams,
      "Pm8iCSZlTEn3qPxHoQb_4"
    )
    .then(
      function (response) {
        alert("Email sent successfully!");
        contactForm.reset();
      },
      function (error) {
        console.error("Email sending failed:", error);
        alert(
          "An error occurred while sending the email. Please try again later."
        );
      }
    );
}