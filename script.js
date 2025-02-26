const button = document.getElementById("toggleButton");
const body = document.body;

button.addEventListener("click", function() {
    body.classList.toggle("light-mode"); // Toggle the 'dark-mode' class

    // Change button text based on the current mode
    if (body.classList.contains("light-mode")) {
        button.textContent = "Switch to Dark Mode"; 
        section.style.color = "black";
    } else {
        button.textContent = "Switch to Light Mode"; // If light mode is active
    }
});

// Parallax Effect
document.addEventListener("mousemove", function(event) {
    document.querySelectorAll(".parallax-wrap span").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Automatic Carousel
document.addEventListener("DOMContentLoaded", function () {
    let index = 1;
    const totalSlides = 5; // Total number of slides

    setInterval(() => {
        document.getElementById(`page${index}cb`).checked = true;
        index = index % totalSlides + 1; // Loop back to first slide after the last
    }, 3000); // Change slide every 3 seconds
});

// Redirection for "REGISTE-SE CTA" label
document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll('.link-label');
    const registrationUrl = 'https://leon211.casino/registration';

    labels.forEach(label => {
        label.addEventListener('click', () => {
            window.open(registrationUrl, '_blank'); 
        });
    });
});

document.getElementById("registerButton").addEventListener("click", function() {
    window.open("https://leon211.casino/registration", "_blank"); // Opens the link in a new tab
});

