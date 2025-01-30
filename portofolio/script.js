// Smooth scroll and navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .experience-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Active navigation on scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < (sectionTop + sectionHeight)) {
            const id = section.getAttribute('id');
            document.querySelector(`.nav-links a[href="#${id}"]`).classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href="#${id}"]`).classList.remove('active');
        }
    });
});

// Form handling
const form = document.querySelector('form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        new FormData(form);
        form.reset();
        alert('Message sent successfully!');
    });
}