document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for demonstration
        alert("Form submitted!");
    });
});