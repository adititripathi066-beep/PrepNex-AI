
// =====================================
// PREPNEX AI - JAVASCRIPT
// =====================================

// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// 2. CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const goal = document.getElementById("goal").value;

  if (!name || !email || !goal) {
    showMessage("Please fill in all the fields.", "error");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  showMessage(
    `Thank you, ${name}! Your demo request has been submitted successfully.`,
    "success"
  );

  contactForm.reset();
});

// 3. DISPLAY FORM MESSAGE
function showMessage(message, type) {
  formMessage.textContent = message;

  if (type === "success") {
    formMessage.style.color = "#4ade80";
  } else {
    formMessage.style.color = "#f87171";
  }
}
