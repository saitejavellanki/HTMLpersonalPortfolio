const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const homeSection = document.getElementById('home');

    // Function to check if the button should be shown
    function toggleScrollToTopButton() {
        // Check if we've scrolled past the home section
        const homeHeight = homeSection.offsetHeight;
        
        if (window.scrollY > homeHeight) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleScrollToTopButton);

    // Add click event to scroll to top
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});