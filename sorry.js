// Fade-in effect for sections as they come into view
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1, // Trigger animation when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
