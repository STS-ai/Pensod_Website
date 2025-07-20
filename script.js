// Smooth scrolling for navigation links
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

// Header scroll effect
const header = document.querySelector('.fixed-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation classes when elements come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.problem-item, .feature, .value-block, .blog-post, .benefit-item').forEach(el => {
    observer.observe(el);
});

// Language switching functionality
function changeLanguage(lang) {
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = languageConfig[lang].direction;
    
    // Update font family
    document.body.style.fontFamily = languageConfig[lang].fontFamily;
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update RTL-specific styles
    updateRTLStyles(lang);
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update language switcher
    document.getElementById('languageSelect').value = lang;
}

// Function to update RTL-specific styles
function updateRTLStyles(lang) {
    const isRTL = languageConfig[lang].direction === 'rtl';
    
    // Update text alignment for specific sections
    document.querySelectorAll('.hero-content, .problem-card, .feature, .benefit-item, .blog-post, .contact-form').forEach(element => {
        element.style.textAlign = languageConfig[lang].textAlign;
    });
    
    // Update flex directions for RTL
    document.querySelectorAll('.problem-grid, .tech-features, .benefits-grid, .blog-slider').forEach(element => {
        element.style.flexDirection = isRTL ? 'row-reverse' : 'row';
    });
    
    // Update container alignment
    document.querySelectorAll('.container').forEach(element => {
        element.style.margin = '0 auto';
    });
    
    // Update form elements
    document.querySelectorAll('input, textarea').forEach(element => {
        element.style.textAlign = languageConfig[lang].textAlign;
    });
    
    // Update navigation
    document.querySelectorAll('nav ul').forEach(element => {
        element.style.flexDirection = isRTL ? 'row-reverse' : 'row';
    });
}

// Initialize language switcher
function initializeLanguageSwitcher() {
    // Create language switcher if it doesn't exist
    if (!document.querySelector('.language-switcher')) {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <select id="languageSelect" onchange="changeLanguage(this.value)">
                <option value="en">English</option>
                <option value="he">עברית</option>
            </select>
        `;
        document.body.appendChild(switcher);
    }
}

// Initialize language based on user preference or browser language
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language switcher
    initializeLanguageSwitcher();
    
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = storedLang || (browserLang === 'he' ? 'he' : 'en');
    
    // Add Heebo font for Hebrew
    if (initialLang === 'he') {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
    
    changeLanguage(initialLang);
    
    // Add event listener to language switcher
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
}); 