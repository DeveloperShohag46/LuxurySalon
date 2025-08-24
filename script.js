    // Original JavaScript
    function calculateSum(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    // Minified JavaScript
    function a(b,c){let d=b+c;return d}

// Before-After Image Slider Logic

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.before-after-container');

    containers.forEach(container => {
        const beforeImage = container.querySelector('.before-image');
        const handle = container.querySelector('.slider-handle');
        const line = container.querySelector('.slider-line');
        const beforeBadge = container.querySelector('.before-badge');
        const afterBadge = container.querySelector('.after-badge');

        let isDragging = false;
        const tolerance = 5; // Tolerance in pixels to handle full-screen visibility

        // Function to handle the slider movement
        const handleMove = (event) => {
            if (!isDragging) return;

            // Get the container's bounding rectangle to calculate relative position
            const rect = container.getBoundingClientRect();

            // Get the x-coordinate of the pointer (mouse or touch)
            let clientX = event.clientX;
            if (event.touches) {
                clientX = event.touches[0].clientX;
            }

            // Calculate the new position relative to the container
            let newX = clientX - rect.left;

            // Clamp the position to be within the container's bounds
            if (newX < 0) newX = 0;
            if (newX > rect.width) newX = rect.width;

            // Update the width of the before image and the position of the handle/line
            beforeImage.style.width = `${newX}px`;
            handle.style.left = `${newX}px`;
            line.style.left = `${newX}px`;

            // Logic to hide/show badges based on slider position
            // Hide 'Before' badge if slider is at the very beginning
            if (newX <= tolerance) {
                beforeBadge.style.opacity = '0';
            } else {
                beforeBadge.style.opacity = '1';
            }

            // Hide 'After' badge if slider is at the very end
            if (newX >= rect.width - tolerance) {
                afterBadge.style.opacity = '0';
            } else {
                afterBadge.style.opacity = '1';
            }
        };

        const startDrag = (event) => {
            isDragging = true;
            container.classList.add('cursor-grabbing');
            // Add global listeners to ensure the drag continues even if the pointer leaves the container
            document.addEventListener('mousemove', handleMove);
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchmove', handleMove);
            document.addEventListener('touchend', endDrag);
            // Prevent default to avoid image dragging on some browsers
            event.preventDefault();
        };

        const endDrag = () => {
            isDragging = false;
            container.classList.remove('cursor-grabbing');
            // Clean up global listeners
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', endDrag);
        };

        // Add event listeners to the handle
        handle.addEventListener('mousedown', startDrag);
        handle.addEventListener('touchstart', startDrag);
    });
});

//Whatsapp and GoTo Top Logic

document.addEventListener('DOMContentLoaded', () => {
    const goTopBtn = document.getElementById('go-top-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappWidgetContainer = document.getElementById('whatsapp-widget-container');
    const widgetCloseBtn = document.getElementById('widget-close-btn');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');

    // --- Go Top Button Logic ---
    const showGoTopButton = () => {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
            goTopBtn.classList.add('show');
        } else {
            goTopBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', showGoTopButton);

    goTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- WhatsApp Widget Logic ---
    // Function to toggle the widget's visibility by adding/removing a class
    const toggleWidget = () => {
        whatsappWidgetContainer.classList.toggle('widget-open');
    };

    whatsappBtn.addEventListener('click', toggleWidget);
    widgetCloseBtn.addEventListener('click', toggleWidget);

    // Redirect to WhatsApp with user's message
    sendBtn.addEventListener('click', () => {
        const prefilledMessage = "Hi! How can we help you?";
        const userMessage = userInput.value.trim();
        const fullMessage = `${userMessage}`;

        // Replace '1234567890' with your actual WhatsApp number
        const phoneNumber = '60132426101';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        if (userMessage) {
            window.open(whatsappUrl, '_blank');
        } else {
            alert("Please type a message before sending.");
        }
    });

    // Handle Enter key in the input field
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendBtn.click();
        }
    });

    // Helper function to show alerts without blocking
    const alert = (message) => {
        const existingAlert = document.getElementById('custom-alert');
        if (existingAlert) existingAlert.remove();

        const alertDiv = document.createElement('div');
        alertDiv.id = 'custom-alert';
        alertDiv.className = 'fixed inset-x-0 top-4 mx-auto w-fit bg-red-500 text-white px-6 py-3 rounded-full shadow-lg z-[9999] transition-all duration-300 transform scale-0 opacity-0';
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.classList.add('scale-100', 'opacity-100');
        }, 10);

        setTimeout(() => {
            alertDiv.classList.remove('scale-100', 'opacity-100');
            setTimeout(() => alertDiv.remove(), 300);
        }, 3000);
    };

    // Remove the previous initial hidden state, as it's now handled by CSS
    // whatsappWidgetContainer.classList.add('scale-0');
});




// Data for the website
const services = [
    {
        name: "✨ Haircuts & Styling",
        price: "$150",
        duration: "90 minutes",
        description: "Precision cutting with personalized styling using premium products",
        features: ["Consultation", "Wash & Cut", "Professional Styling", "Finishing Products"]
    },
    {
        name: "✨ Treatments & Coloring",
        price: "$250",
        duration: "3 hours",
        description: "Expert color transformation with luxury color systems",
        features: ["Color Consultation", "Custom Color Mix", "Professional Application", "Gloss Treatment"]
    },
    {
        name: "✨ Premium Packages",
        price: "$120",
        duration: "60 minutes",
        description: "Deep conditioning treatment for ultimate hair health",
        features: ["Hair Analysis", "Custom Treatment", "Scalp Massage", "Heat Therapy"]
    }
];

const teamMembers = [
    {
        name: "Sophia Williams",
        role: "Bridal Specialist",
        specialty: "Bridal & Special Events",
        experience: "10+ years",
        bio: "Sophia creates stunning bridal looks that photograph beautifully and last all day. Her romantic and elegant styling has been featured in numerous wedding publications.",
        image: "https://theuntoldpath.com/wp-content/uploads/2025/08/Gemini_Generated_Image_s0gz19s0gz19s0gz.png",
        certifications: ["Bridal Beauty Certified", "Updo Specialist", "Airbrush Certified"]
    },
    {
        name: "Isabella Rodriguez",
        role: "Master Stylist & Creative Director",
        specialty: "Color Specialist",
        experience: "15+ years",
        bio: "Isabella brings international expertise from Paris and Milan, specializing in avant-garde color techniques and precision cutting. Her artistic vision has earned recognition in top fashion magazines.",
        image: "https://theuntoldpath.com/wp-content/uploads/2025/08/a-cinematic-portrait-photograph-of-a-you_ZJNS-femQYaPDtbJ39_GeA_g3mdywl1TvK2yF-gVqMYmA.jpeg",
        certifications: ["Vidal Sassoon Advanced", "L'Oréal Master Colorist", "Redken Certified"]
    },
    {
        name: "Marcus Chen",
        role: "Senior Stylist",
        specialty: "Men's Grooming",
        experience: "12+ years",
        bio: "Marcus is renowned for his expertise in men's styling and grooming. His precision and attention to detail have made him the go-to stylist for executives and celebrities.",
        image: "https://theuntoldpath.com/wp-content/uploads/2025/08/a-young-korean-woman-with-long-wavy-blac_zMOGiMS8Tkm483F1m5Z47g_DcmrGmfnTxeUj2Aedkd66Q.jpeg",
        certifications: ["Barber Institute Certified", "American Crew Specialist", "Aveda Trained"]
    }

];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Fashion Executive",
        content: "Isabella transformed my hair beyond my wildest dreams. The color is absolutely stunning and the cut is perfection. I've never felt more confident!",
        rating: 5,
        image: "https://theuntoldpath.com/wp-content/uploads/2025/08/469067128_1349575656031068_2222109960255578739_n.jpg"
    },
    {
        name: "Michael Davis",
        role: "Business Owner",
        content: "Marcus is a true artist. His attention to detail and professionalism is unmatched. I wouldn't trust my hair to anyone else.",
        rating: 5,
        image: "https://theuntoldpath.com/wp-content/uploads/2025/08/Gemini_Generated_Image_s0gz19s0gz19s0gz.png"
    },
    {
        name: "Emily Chen",
        role: "Bride",
        content: "Sophia made my wedding day absolutely perfect. My hair looked flawless from morning until night. She's incredibly talented and professional.",
        rating: 5,
        image: "https://theuntoldpath.com/wp-content/uploads/2025/08/ToDu3sJWSamyVelx2hqCSw.webp"
    }
];

const faqs = [
    {
        question: "How far in advance should I book my appointment?",
        answer: "We recommend booking 2-3 weeks in advance for regular services and 4-6 weeks for color services or special events. For bridal services, we suggest booking 3-6 months ahead."
    },
    {
        question: "What should I expect during my first visit?",
        answer: "Your first visit includes a comprehensive consultation where we discuss your hair goals, lifestyle, and maintenance preferences. We'll analyze your hair condition and recommend the best services for you."
    },
    {
        question: "Do you offer hair care product recommendations?",
        answer: "Our stylists will recommend professional products specifically chosen for your hair type and the services you receive. We carry premium brands and offer take-home care instructions."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We understand emergencies happen and will work with you when possible."
    },
    {
        question: "Do you offer consultations for major hair changes?",
        answer: "Yes, we offer complimentary consultations for significant changes like dramatic cuts or color transformations. This ensures we're aligned on your vision before your appointment."
    }
];

const blogPosts = [
    {
        title: "2025 Hair Color Trends: What's Hot This Season",
        excerpt: "Discover the latest color trends that are taking the hair world by storm, from dimensional brunettes to lived-in blondes.",
        category: "Trends",
        date: "March 15, 2025",
        image: "https://cdn-kfjnl.nitrocdn.com/dzlwQVtbKqNMhKyfvsdzDFIULqPRYfEb/assets/images/optimized/rev-53b878f/www.natulique.com/wp-content/uploads/2024/10/Top-5-Hair-Colour-Trends-1.jpg"
    },
    {
        title: "The Ultimate Guide to Hair Care Between Salon Visits",
        excerpt: "Learn professional tips and tricks to maintain your salon-fresh look at home with the right products and techniques.",
        category: "Hair Care",
        date: "April 10, 2025",
        image: "https://images.unsplash.com/photo-1717160675489-7779f2c91999?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Bridal Hair: Timeless Styles for Your Special Day",
        excerpt: "Explore elegant bridal hairstyles that photograph beautifully and complement your wedding dress perfectly.",
        category: "Bridal",
        date: "May 5, 2025",
        image: "https://images.unsplash.com/photo-1581674210501-c760093514e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const products = [
    {
        id: 1,
        name: "Luxury Hydrating Shampoo",
        price: "$45",
        category: "Hair Care",
        description: "Premium sulfate-free shampoo enriched with argan oil and keratin for ultimate hydration and shine.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6Y1BLa4qoAmy_OP7TYiu_A0-9l3EkhT7CQ&s",
        ingredients: ["Argan Oil", "Keratin", "Vitamin E", "Coconut Extract"],
        benefits: ["Deep Hydration", "Color Protection", "Frizz Control", "Shine Enhancement"],
        usage: "Apply to wet hair, massage gently into scalp and hair, rinse thoroughly. Follow with conditioner for best results."
    },
    {
        id: 2,
        name: "Intensive Repair Mask",
        price: "$65",
        category: "Treatment",
        description: "Professional-grade hair mask that repairs damage and restores elasticity for healthier, stronger hair.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_QxrxMjs2DXHa0PCwyOZlKPqkpq93IjBOQ&s",
        ingredients: ["Protein Complex", "Hyaluronic Acid", "Botanical Oils", "Amino Acids"],
        benefits: ["Damage Repair", "Strength Building", "Moisture Lock", "Elasticity Restore"],
        usage: "Apply to clean, damp hair. Leave for 10-15 minutes, then rinse thoroughly. Use weekly for best results."
    },
    {
        id: 3,
        name: "Thermal Protection Spray",
        price: "$35",
        category: "Styling",
        description: "Heat-activated spray that protects hair from thermal damage while adding volume and shine.",
        image: "https://m.media-amazon.com/images/I/61fBfLnhyjL._SL1500_.jpg",
        ingredients: ["Heat Shield Complex", "Silk Proteins", "UV Filters", "Antioxidants"],
        benefits: ["Heat Protection", "Volume Boost", "UV Shield", "Frizz Control"],
        usage: "Spray evenly on damp hair before blow-drying or using heat styling tools. Do not rinse."
    },
    {
        id: 4,
        name: "Signature Hair Oil",
        price: "$55",
        category: "Treatment",
        description: "Lightweight finishing oil that adds incredible shine and smoothness without weighing hair down.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAftm7L9ev9I-d_Td0TtynEr4cvr1lTVkcdg&s",
        ingredients: ["Moroccan Argan", "Jojoba Oil", "Vitamin Complex", "Essential Oils"],
        benefits: ["Instant Shine", "Smooth Finish", "Flyaway Control", "Nourishment"],
        usage: "Apply 1-2 drops to palms, rub together, and smooth over dry hair focusing on mid-lengths and ends."
    }
];

const locations = [
    {
        name: "Downtown Flagship",
        address: "123 Luxury Avenue, Downtown District",
        phone: "(555) 123-4567",
        hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
        image: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Uptown Boutique",
        address: "456 Elite Street, Uptown Quarter",
        phone: "(555) 234-5678",
        hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
        image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Westside Studio",
        address: "789 Premium Plaza, Westside Mall",
        phone: "(555) 345-6789",
        hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
        image: "https://images.unsplash.com/photo-1595944024804-733665a112db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

// State variables
let currentSlide = 0;
let currentTestimonial = 0;
let activeTeamTab = 0;
let isAutoPlay = true;
let isDark = false;
let isMenuOpen = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    initializeWebsite();
    startAutoSlider();
    startTestimonialSlider();
});


function toggleMobileDropdown() {
    const dropdown = document.getElementById('mobile-dropdown');
    const isOpen = dropdown.style.opacity === '1';
    dropdown.style.opacity = isOpen ? '0' : '1';
    dropdown.style.pointerEvents = isOpen ? 'none' : 'auto';
    dropdown.style.transform = isOpen ? 'translateY(10px)' : 'translateY(0)';
}

// Place this script after your DOMContentLoaded event

document.addEventListener('DOMContentLoaded', function () {
    const dropdownGroup = document.querySelector('.group');
    const dropdownMenu = dropdownGroup.querySelector('.dropdown-menu');
    let dropdownTimeout;

    dropdownGroup.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.pointerEvents = 'auto';
        dropdownMenu.style.transform = 'translateY(0)';
    });

    dropdownGroup.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.pointerEvents = 'none';
            dropdownMenu.style.transform = 'translateY(10px)';
        }, 100); // 200ms delay before hiding
    });
});

function initializeWebsite() {
    populateServices();
    populateTeam();
    populateTestimonials();
    populateFAQs();
    populateBlog();
    populateProducts();
    populateLocations();
    setupEventListeners();
    populateFormOptions();
}

function updateActiveMenu() {
    const sections = ['home', 'about', 'services', 'portfolio', 'team', 'contact'];
    const scrollPos = window.scrollY + 100; // Offset for header height

    const bookSection = document.getElementById('book');
    const contactSection = document.getElementById('contact');
    const teamSection = document.getElementById('team');
    const bookNowBtn = document.querySelector('.btn-primary.mobile-hidden');

    // Helper: get section bottom
    function getSectionBottom(section) {
        return section ? section.offsetTop + section.offsetHeight : 0;
    }

    // If in Contact section
    if (contactSection && scrollPos >= contactSection.offsetTop - 100 && scrollPos < getSectionBottom(contactSection)) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#contact') {
                link.classList.add('active');
            }
        });
        if (bookNowBtn) bookNowBtn.classList.remove('outline-book');
        return;
    }

    // If in Book section (but not Contact)
    if (bookSection && scrollPos >= bookSection.offsetTop - 100 && (!contactSection || scrollPos < contactSection.offsetTop - 100)) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        if (bookNowBtn) bookNowBtn.classList.add('outline-book');
        return;
    }

    // If after Team and before Book
    if (
        teamSection &&
        bookSection &&
        scrollPos >= getSectionBottom(teamSection) - 100 &&
        scrollPos < bookSection.offsetTop - 100
    ) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        if (bookNowBtn) bookNowBtn.classList.remove('outline-book');
        return;
    }

    // If after Contact (bottom of page)
    if (contactSection && scrollPos >= getSectionBottom(contactSection) - 100) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        if (bookNowBtn) bookNowBtn.classList.remove('outline-book');
        return;
    }

    // Otherwise, activate the current section menu item
    let activeSection = null;
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
            activeSection = sections[i];
        }
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (activeSection && link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
    if (bookNowBtn) bookNowBtn.classList.remove('outline-book');
}

window.addEventListener('scroll', updateActiveMenu);
window.addEventListener('DOMContentLoaded', updateActiveMenu);

function populateServices() {
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = services.map(service => `
                <div class="card hover-lift glass-effect" style="border-color: var(--primary);">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-semibold">${service.name}</h3>
                        <span class="badge">${service.price}</span>
                    </div>
                    <p class="text-base mb-4" style="color: var(--muted-foreground);">${service.description}</p>
                    <div class="flex items-center mb-4 text-sm" style="color: var(--muted-foreground);">
                        <i class="fas fa-clock mr-2"></i>
                        ${service.duration}
                    </div>
                    <div class="space-y-2 mb-6">
                        ${service.features.map(feature => `
                            <div class="flex items-center text-sm">
                                <i class="fas fa-check-circle mr-2" style="color: var(--primary);"></i>
                                ${feature}
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn-primary w-full" onclick="scrollToSection('book')">Book Service</button>
                </div>
            `).join('');
}



function populateTeam() {
    const teamTabs = document.getElementById('team-tabs');
    const teamContent = document.getElementById('team-content');

    // Populate tabs
    teamTabs.innerHTML = teamMembers.map((member, index) => `
                <button class="team-tab ${index === 0 ? 'active' : ''}" onclick="switchTeamTab(${index})">
                    ${member.name.split(' ')[0]}
                </button>
            `).join('');

    // Populate content
    teamContent.innerHTML = teamMembers.map((member, index) => `
                <div class="team-content ${index === 0 ? 'active' : ''}">
                    <div class="card overflow-hidden">
                        <div class="grid lg:grid-cols-2 gap-8">
                            <div class="p-8">
                                <img src="${member.image}" alt="${member.name}" class="w-full h-96 object-cover rounded-lg mb-6">
                            </div>
                            <div class="p-8">
                                <h3 class="text-3xl font-bold mb-2">${member.name}</h3>
                                <p class="text-lg mb-2" style="color: var(--primary);">${member.role}</p>
                                <p class="mb-4" style="color: var(--muted-foreground);">${member.specialty} • ${member.experience}</p>
                                <p class="text-base mb-6 leading-relaxed">${member.bio}</p>
                                <div class="space-y-4">
                                    <h4 class="font-semibold text-lg">Certifications</h4>
                                    <div class="flex flex-wrap gap-2">
                                        ${member.certifications.map(cert => `
                                            <span class="badge" style="background: var(--primary); opacity: 1; color: white;">${cert}</span>
                                        `).join('')}
                                    </div>
                                </div>
                                <button class="btn-primary mt-6" onclick="scrollToSection('book')">
                                    Book with ${member.name.split(' ')[0]}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
}

function populateTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonialDots = document.getElementById('testimonial-dots');

    testimonialsContainer.innerHTML = testimonials.map((testimonial, index) => `
                <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
                    <div class="card text-center p-8">
                        <i class="fas fa-quote-left text-4xl mb-6" style="color: var(--primary);"></i>
                        <p class="text-xl mb-6 italic leading-relaxed">"${testimonial.content}"</p>
                        <div class="flex items-center justify-center space-x-4">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full object-cover">
                            <div>
                                <h4 class="font-semibold text-lg">${testimonial.name}</h4>
                                <p style="color: var(--muted-foreground);">${testimonial.role}</p>
                                <div class="flex justify-center mt-2">
                                    ${Array(testimonial.rating).fill().map(() => `
                                        <i class="fas fa-star" style="color: var(--primary);"></i>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

    testimonialDots.innerHTML = testimonials.map((_, index) => `
                <button class="slider-dot ${index === 0 ? 'active' : ''}" onclick="changeTestimonial(${index})"></button>
            `).join('');
}

function populateFAQs() {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = faqs.map((faq, index) => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(${index})">
                        <h3 class="text-lg font-semibold">${faq.question}</h3>
                        <i class="fas fa-chevron-down transition-transform duration-300" id="faq-icon-${index}"></i>
                    </div>
                    <div class="faq-answer" id="faq-answer-${index}">
                        <p style="color: var(--muted-foreground);" class="leading-relaxed">${faq.answer}</p>
                    </div>
                </div>
            `).join('');
}

function populateBlog() {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = blogPosts.map(post => `
                <div class="card overflow-hidden hover-lift">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <span class="badge mb-4" style="background: var(--accent); opacity: 1; color: var(--foreground);">${post.category}</span>
                        <h3 class="text-xl font-semibold mb-3">${post.title}</h3>
                        <p class="mb-4 leading-relaxed" style="color: var(--muted-foreground);">${post.excerpt}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm" style="color: var(--muted-foreground);">${post.date}</span>
                            <button class="text-sm hover:underline" style="color: var(--primary);">
                                Read More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function populateProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = products.map(product => `
                <div class="card overflow-hidden hover-lift cursor-pointer" onclick="openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover" style="border-radius: 10px;">
                    <div class="p-6">
                        <span class="badge mb-4" style="background: var(--accent); opacity: 1; color: var(--foreground);">${product.category}</span>
                        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                        <p class="text-sm leading-relaxed mb-4" style="color: var(--muted-foreground);">${product.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold" style="color: var(--primary);">${product.price}</span>
                            <button class="btn-primary text-sm px-4 py-2">View Details</button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function populateLocations() {
    const locationsGrid = document.getElementById('locations-grid');
    locationsGrid.innerHTML = locations.map(location => `
                <div class="card overflow-hidden hover-lift">
                    <img src="${location.image}" alt="${location.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-3">${location.name}</h3>
                        <div class="space-y-2 text-sm" style="color: var(--muted-foreground);">
                            <div class="flex items-start">
                                <i class="fas fa-map-marker-alt mr-2 mt-0.5" style="color: var(--primary);"></i>
                                ${location.address}
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-phone mr-2" style="color: var(--primary);"></i>
                                ${location.phone}
                            </div>
                            <div class="flex items-start">
                                <i class="fas fa-clock mr-2 mt-0.5" style="color: var(--primary);"></i>
                                ${location.hours}
                            </div>
                        </div>
                        <button class="btn-primary w-full mt-4" onclick="scrollToSection('book')">
                            Book at This Location
                        </button>
                    </div>
                </div>
            `).join('');
}

function populateFormOptions() {
    const serviceSelect = document.getElementById('service-select');
    const stylistSelect = document.getElementById('stylist-select');

    serviceSelect.innerHTML = '<option value="">Select a service</option>' +
        services.map(service => `<option value="${service.name}">${service.name}</option>`).join('');

    stylistSelect.innerHTML = '<option value="">No preference</option>' +
        teamMembers.map(member => `<option value="${member.name}">${member.name}</option>`).join('');
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Mobile menu toggle
    document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);

    // Autoplay toggle
    document.getElementById('autoplay-toggle').addEventListener('click', toggleAutoplay);

    // Form submissions
    document.getElementById('booking-form').addEventListener('submit', handleBookingSubmit);
    document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
    document.getElementById('newsletter-form').addEventListener('submit', handleNewsletterSubmit);

    // Navigation links (desktop and mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            scrollToSection(target);
            if (isMenuOpen) toggleMobileMenu();
        });
    });

    // Mobile dropdown items (services)
    document.querySelectorAll('#mobile-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            scrollToSection(target);
            if (isMenuOpen) toggleMobileMenu();
        });
    });
}

// Slider functions
function changeSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % 3;
    changeSlide(nextIndex);
}

function startAutoSlider() {
    setInterval(() => {
        if (isAutoPlay) {
            nextSlide();
        }
    }, 5000);
}

// Testimonial functions
function changeTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('#testimonial-dots .slider-dot');

    slides[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');

    currentTestimonial = index;

    slides[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

function nextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(nextIndex);
}

function startTestimonialSlider() {
    setInterval(() => {
        nextTestimonial();
    }, 6000);
}

// Team functions
function switchTeamTab(index) {
    const tabs = document.querySelectorAll('.team-tab');
    const contents = document.querySelectorAll('.team-content');

    tabs[activeTeamTab].classList.remove('active');
    contents[activeTeamTab].classList.remove('active');

    activeTeamTab = index;

    tabs[activeTeamTab].classList.add('active');
    contents[activeTeamTab].classList.add('active');
}

// FAQ functions
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    answer.classList.toggle('active');
    icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Product modal functions
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');

    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-price').textContent = product.price;
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-usage').textContent = product.usage;

    document.getElementById('modal-product-ingredients').innerHTML = product.ingredients.map(ingredient =>
        `<span class="badge" style="background: var(--muted); color: var(--foreground);">${ingredient}</span>`
    ).join('');

    document.getElementById('modal-product-benefits').innerHTML = product.benefits.map(benefit =>
        `<div class="flex items-center text-sm">
                    <i class="fas fa-check-circle mr-2" style="color: var(--primary);"></i>
                    ${benefit}
                </div>`
    ).join('');

    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// Utility functions
function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById('theme-icon').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    document.getElementById('mobile-menu').classList.toggle('active', isMenuOpen);
    document.getElementById('mobile-menu-icon').className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
}

function toggleAutoplay() {
    isAutoPlay = !isAutoPlay;
    document.getElementById('autoplay-icon').className = isAutoPlay ? 'fas fa-pause' : 'fas fa-play';
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
        toggleMobileMenu();
    }
}

// Form handlers
function handleBookingSubmit(e) {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
}

// Close modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('product-modal');
    if (e.target === modal) {
        closeProductModal();
    }
});