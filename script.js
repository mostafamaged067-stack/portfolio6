// Select all sections by their IDs
const sections = document.querySelectorAll("section");

// Options for the observer
const options = {
  threshold: 0.2 // يظهر التأثير لما 20% من السيكشن يبان
};

// Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // علشان ميتكررش كل مرة
    }
  });
}, options);

// Apply observer on each section
sections.forEach(section => {
  observer.observe(section);
});
// End of script.js