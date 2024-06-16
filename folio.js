const toggleButtons = document.querySelectorAll('.toggle-btn');
const toggleContents = document.querySelectorAll('.tog_content > div');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        toggleButtons.forEach(btn => {
            if (btn === button) {
                btn.classList.add('active'); // Add 'active' class to the clicked button
            } else {
                btn.classList.remove('active'); // Remove 'active' class from other buttons
            }
        });
        toggleContents.forEach(content => {
            if (content.classList.contains(target)) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
const contactLink = document.querySelector('.contact-link');
const footerContact = document.querySelector('.footer-section.contact-info');

contactLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to footer
    footerContact.scrollIntoView({
        behavior: 'smooth'
    });

    // Add box shadow to footer contact box for 2-3 seconds
    footerContact.classList.add('show-box-shadow');
    setTimeout(() => {
        footerContact.classList.remove('show-box-shadow');
    }, 3000); // 3000 milliseconds = 3 seconds
});