
        // Initialize Lucide Icons
        lucide.createIcons();

        // Loading Screen
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 700);
        });

        // Sticky Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });

        // Parallax Effect for Hero
        const heroBg = document.getElementById('heroBg');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        });

        // Reveal Animations using Intersection Observer
        const observerOptions = {
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
        }

        mobileMenuBtn.onclick = toggleMenu;
        closeMenuBtn.onclick = toggleMenu;
        mobileLinks.forEach(link => link.onclick = toggleMenu);

        // Simple Gallery Lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const galleryImages = document.querySelectorAll('.gallery-img');

        galleryImages.forEach(img => {
            img.onclick = () => {
                lightboxImg.src = img.src;
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
            };
        });

        lightbox.onclick = () => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
        };

        // Smooth Scrolling for all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                
                // If the link is just "#", we scroll to the top
                if (targetId === '#') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }

                // If the link points to a valid ID on the page
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
