document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message. We will get back to you soon!');

        // Clear the form
        e.target.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
