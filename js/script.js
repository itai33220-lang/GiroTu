/* ==========================================
   GiroTu Website - Custom JavaScript
   ========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    /* ==========================================
       Smooth Scrolling for Navigation Links
       ========================================== */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default for anchor links on the same page
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 100;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    /* ==========================================
       Active Navigation Link on Scroll
       ========================================== */
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    /* ==========================================
       Scroll Animations - Intersection Observer
       ========================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in classes
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    animatedElements.forEach(element => observer.observe(element));

    /* ==========================================
       Form Validation
       ========================================== */
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                handleFormSubmit(form);
            }

            form.classList.add('was-validated');
        });
    });

    /* ==========================================
       Handle Form Submission
       ========================================== */
    function handleFormSubmit(form) {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // Show success message
            showAlert('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');

            // Reset form
            form.reset();
            form.classList.remove('was-validated');
        }, 2000);
    }

    /* ==========================================
       Show Alert Messages
       ========================================== */
    function showAlert(type, message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show alert-custom`;
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

        // Insert alert at the top of the form or page
        const container = document.querySelector('.container') || document.body;
        container.insertBefore(alertDiv, container.firstChild);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    /* ==========================================
       Filter Functionality (for Experiences Page)
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            const cards = document.querySelectorAll('.experience-card');
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    setTimeout(() => card.classList.add('visible'), 100);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================
       Initialize Tooltips
       ========================================== */
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    /* ==========================================
       Initialize Popovers
       ========================================== */
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    /* ==========================================
       Counter Animation (for statistics)
       ========================================== */
    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = Math.round(end);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    // Observe counter elements
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-count'));
                animateCounter(target, 0, endValue, 2000);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    /* ==========================================
       Mobile Menu Toggle Enhancement
       ========================================== */
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            // Add animation class
            navbarCollapse.classList.toggle('show-animation');
        });
    }

    /* ==========================================
       Back to Top Button
       ========================================== */
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Add CSS for back to top button
    const style = document.createElement('style');
    style.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 40px;
      left: 40px;
      width: 60px;
      height: 60px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    
    .back-to-top:hover {
      background: var(--primary-dark);
      transform: translateY(-5px);
    }
    
    @media (max-width: 991px) {
      .back-to-top {
        width: 55px;
        height: 55px;
        bottom: 30px;
        left: 30px;
        font-size: 1.4rem;
      }
    }
    
    @media (max-width: 767px) {
      .back-to-top {
        width: 50px;
        height: 50px;
        bottom: 20px;
        left: 20px;
        font-size: 1.3rem;
      }
    }
    
    @media (max-width: 576px) {
      .back-to-top {
        bottom: 15px;
        left: 15px;
      }
    }
  `;
    document.head.appendChild(style);

    // Show/hide back to top button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* ==========================================
       Image Lazy Loading Fallback
       ========================================== */
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    /* ==========================================
       Carousel Auto-play Enhancement
       ========================================== */
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        // Pause carousel on hover
        carousel.addEventListener('mouseenter', function () {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.pause();
            }
        });

        // Resume carousel on mouse leave
        carousel.addEventListener('mouseleave', function () {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.cycle();
            }
        });
    });

    /* ==========================================
       Modal Enhancement
       ========================================== */
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function () {
            // Focus first input when modal opens
            const firstInput = modal.querySelector('input, textarea, select');
            if (firstInput) {
                firstInput.focus();
            }
        });
    });

    /* ==========================================
       Search Functionality (if needed)
       ========================================== */
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchableItems = document.querySelectorAll('.searchable-item');

            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    /* ==========================================
       Price Calculator (for private tours)
       ========================================== */
    const priceCalculator = document.querySelector('.price-calculator');
    if (priceCalculator) {
        const guestsInput = priceCalculator.querySelector('#guests');
        const durationSelect = priceCalculator.querySelector('#duration');
        const totalPriceElement = priceCalculator.querySelector('#total-price');

        function calculatePrice() {
            const basePrice = 100;
            const guests = parseInt(guestsInput.value) || 1;
            const duration = parseInt(durationSelect.value) || 1;
            const total = basePrice * guests * duration;
            totalPriceElement.textContent = `$${total}`;
        }

        if (guestsInput && durationSelect && totalPriceElement) {
            guestsInput.addEventListener('input', calculatePrice);
            durationSelect.addEventListener('change', calculatePrice);
            calculatePrice(); // Initial calculation
        }
    }

    /* ==========================================
       Date Picker Enhancement
       ========================================== */
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        input.setAttribute('min', today);
    });

    /* ==========================================
       Newsletter Subscription
       ========================================== */
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';

            // Simulate API call
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Subscribe';
                showAlert('success', 'Thank you for subscribing to our newsletter!');
                this.reset();
            }, 1500);
        });
    }

    /* ==========================================
       Initialize on Page Load
       ========================================== */
    console.log('GiroTu Website Loaded Successfully');

    // Trigger initial animations
    updateActiveNavLink();

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});

/* ==========================================
   Window Resize Handler
   ========================================== */
let resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        // Handle responsive adjustments here if needed
        console.log('Window resized');
    }, 250);
});

/* ==========================================
   Page Visibility API (pause animations when tab is hidden)
   ========================================== */
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Pause animations/videos when page is hidden
        const videos = document.querySelectorAll('video');
        videos.forEach(video => video.pause());
    } else {
        // Resume when page is visible
        const videos = document.querySelectorAll('video[autoplay]');
        videos.forEach(video => video.play());
    }
});
