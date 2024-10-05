document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle with Persistence
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Parallax Scrolling Effect (applies on screens wider than 768px)
    if (window.innerWidth >= 768) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close the menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Handle Book Reading Mode
    const readBookButton = document.getElementById('read-book');
    const bookReaderSection = document.getElementById('book-reader');
    const bookFrame = document.getElementById('book-frame');
    const closeBookButton = document.getElementById('close-book');

    if (readBookButton) {
        readBookButton.addEventListener('click', function () {
            const bookURL = '/Book/1. Web Design Basics Author Bhoj University.pdf';
            bookFrame.src = bookURL;
            bookReaderSection.classList.remove('hidden');
            bookReaderSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (closeBookButton) {
        closeBookButton.addEventListener('click', function () {
            bookReaderSection.classList.add('hidden');
            bookFrame.src = ''; // Clear the iframe src
        });
    }

    // Authentication Links Handling
    const authLinks = document.getElementById('auth-links');
    const userInfo = document.getElementById('user-info');
    const usernameSpan = document.getElementById('username');
    const logoutLink = document.getElementById('logout-link');
    const downloadLinks = document.querySelectorAll('.book-actions a[download]');
    
    const username = localStorage.getItem('username');
    
    if (username) {
        usernameSpan.textContent = `Welcome, ${username}`;
        authLinks.classList.add('hidden');
        userInfo.classList.remove('hidden');
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('username');
            location.reload();
        });
    }

    downloadLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (!username) {
                e.preventDefault();
                alert('Please log in to download this book.');
                window.location.href = 'login.html';
            }
        });
    });

    // Login Form Handling
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === "user@example.com" && password === "password123") {
                localStorage.setItem('username', 'JohnDoe');
                window.location.href = 'index.html';
            } else {
                alert('Invalid login credentials');
            }
        });
    }

    // Responsive Font Size Adjustment (optional)
    function adjustFontSize() {
        if (window.innerWidth < 768) {
            document.body.style.fontSize = '16px';
        } else {
            document.body.style.fontSize = '18px';
        }
    }

    window.addEventListener('resize', adjustFontSize);
    adjustFontSize(); // Adjust on initial load
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
