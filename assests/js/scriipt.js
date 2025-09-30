// Navigation
let currentPage = 'home';

function navigateToPage(pageId) {
    event.preventDefault();
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('section-hidden');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.remove('section-hidden');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    currentPage = pageId;
}

// Mobile menu toggle
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Hide form, show success message
        document.getElementById('formContent').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('formContent').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    if (!navLinks.contains(event.target) && !mobileBtn.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set home page as active
    navigateToPage('home');
});