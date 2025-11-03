// Contact form (no backend, just a demo)
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formMessage').textContent =
        "Thank you for contacting us! We will get back to you soon.";
      form.reset();
    });
  }
});