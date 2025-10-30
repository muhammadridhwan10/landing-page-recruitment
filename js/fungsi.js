const jobs = [
    {
        id: 1,
        title: "Software Developer - Digital Factory",
        company: "ptpn1",
        companyName: "PTPN I",
        companyLogo: "/image/ptpn1.png",
        category: "technology",
        location: "Jakarta Selatan",
        type: "contract",
        majors: ["Teknik Informatika", "Sistem Informasi", "Ilmu Komputer", "Teknik Komputer"],
        applyLink: "https://recruitment.ptpn1.co.id/software-developer"
    },
    {
        id: 2,
        title: "ODS Bidang Keuangan",
        company: "ptpn3",
        companyName: "PTPN III",
        companyLogo: "/image/ptpn3.png",
        category: "finance",
        location: "Jakarta Selatan",
        type: "contract",
        majors: ["Akuntansi", "Manajemen Keuangan", "Ekonomi"],
        applyLink: "https://recruitment.ptpn3.co.id/ods-keuangan"
    },
    {
        id: 3,
        title: "ODS Bidang Operational",
        company: "ptpn3",
        companyName: "PTPN III",
        companyLogo: "/image/ptpn3.png",
        category: "engineering",
        location: "Jakarta Selatan",
        type: "contract",
        majors: ["Agroteknologi", "Agronomi", "Teknik Pertanian", "Teknik Mesin", "Teknik Elektro"],
        applyLink: "https://recruitment.ptpn3.co.id/ods-operational"
    },
    {
        id: 4,
        title: "ODS Bidang Umum",
        company: "ptpn3",
        companyName: "PTPN III",
        companyLogo: "/image/ptpn3.png",
        category: "administration",
        location: "Jakarta Selatan",
        type: "contract",
        majors: ["Semua Jurusan"],
        applyLink: "https://recruitment.ptpn3.co.id/ods-umum"
    },
    {
        id: 5,
        title: "ODS Bidang Keuangan",
        company: "ptpn4",
        companyName: "PTPN IV",
        companyLogo: "/image/ptpn4.png",
        category: "finance",
        location: "Jakarta Selatan",
        type: "contract",
        majors: ["Akuntansi", "Manajemen Keuangan", "Ekonomi"],
        applyLink: "https://recruitment.ptpn4.co.id/ods-keuangan"
    },
    {
        id: 6,
        title: "ODS Bidang Umum",
        company: "ptpn4",
        companyName: "PTPN IV",
        companyLogo: "/image/ptpn4.png",
        category: "administration",
        location: "Jakarta Selatan",
        type: "contract",
        majors: ["Hukum", "Psikologi", "Komunikasi", "Manajemen", "Administrasi Bisnis"],
        applyLink: "https://recruitment.ptpn4.co.id/ods-umum"
    },
    {
        id: 7,
        title: "ODS Bidang Keuangan",
        company: "sgn",
        companyName: "SGN",
        companyLogo: "/image/sgn.png",
        category: "finance",
        location: "Surabaya",
        type: "contract",
        majors: ["Akuntansi", "Manajemen Keuangan", "Ekonomi"],
        applyLink: "https://recruitment.sgn.co.id/ods-keuangan"
    },
    {
        id: 8,
        title: "Software Developer - Digital Factory",
        company: "sgn",
        companyName: "SGN",
        companyLogo: "/image/sgn.png",
        category: "technology",
        location: "Surabaya",
        type: "contract",
        majors: ["Teknik Informatika", "Sistem Informasi", "Ilmu Komputer", "Teknik Komputer"],
        applyLink: "https://recruitment.sgn.co.id/software-developer"
    }
];


let filteredJobs = [...jobs];
let currentFilter = '';

function displayJobs(jobsToDisplay) {
    const container = document.getElementById('job-container');

    if (jobsToDisplay.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Tidak ada lowongan yang sesuai</h3>
                <p>Belum ada lowongan tersedia untuk perusahaan ini</p>
            </div>
        `;
        return;
    }

    container.innerHTML = jobsToDisplay.map(job => `
        <div class="job-card-compact">
            <div class="job-card-header">
                <h3 class="job-card-title">${job.title}</h3>
                <img src="${job.companyLogo}" alt="${job.companyName}" class="company-logo-card">
            </div>
            
            <div class="job-card-meta">
                <span class="meta-item">📍 ${job.location}</span>
                <span class="meta-item">💼 ${job.type === 'fulltime' ? 'Full Time' : job.type === 'contract' ? 'Contract' : 'Internship'}</span>
            </div>
            
            <div class="job-card-majors">
                <span class="majors-label">Jurusan:</span>
                <div class="majors-tags">
                    ${job.majors.map(major => `<span class="major-tag">${major}</span>`).join('')}
                </div>
            </div>
            
            <button class="apply-button" onclick="openApplyModal('${job.companyName}', '${job.title}', '${job.location}')">
                Lamar Sekarang →
            </button>
        </div>
    `).join('');
}
function filterByCompany(companyCode) {
currentFilter = companyCode;

document.querySelectorAll('.company-tab').forEach(tab => {
    tab.classList.remove('active');
});
event.target.classList.add('active');

if (companyCode === '') {
    filteredJobs = [...jobs];
} else {
    filteredJobs = jobs.filter(job => job.company === companyCode);
}

displayJobs(filteredJobs);
}

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

displayJobs(jobs);

let slideIndex = 0;
let slideInterval;

function showSlides() {
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

slides.forEach(slide => slide.classList.remove('active'));
dots.forEach(dot => dot.classList.remove('active'));

slideIndex++;
if (slideIndex >= slides.length) {
    slideIndex = 0;
}

slides[slideIndex].classList.add('active');
dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
slideIndex = n;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

slides.forEach(slide => slide.classList.remove('active'));
dots.forEach(dot => dot.classList.remove('active'));

slides[slideIndex].classList.add('active');
dots[slideIndex].classList.add('active');

clearInterval(slideInterval);
slideInterval = setInterval(showSlides, 4000);
}

slideInterval = setInterval(showSlides, 4000);

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {

if (e.keyCode == 123) return false;
if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(String.fromCharCode(e.keyCode))) return false;
if (e.ctrlKey && ['U', 'S', 'H', 'A', 'P'].includes(String.fromCharCode(e.keyCode))) return false;

if (e.metaKey && e.altKey && ['I', 'J', 'C'].includes(String.fromCharCode(e.keyCode))) return false;
if (e.metaKey && ['U', 'S', 'H', 'A', 'P'].includes(String.fromCharCode(e.keyCode))) return false;
if (e.metaKey && e.shiftKey && ['I', 'J', 'C'].includes(String.fromCharCode(e.keyCode))) return false;

if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') return false;
};

(function() {
const element = new Image();
Object.defineProperty(element, 'id', {
    get: function () {
        alert('⚠️ Developer Tools terdeteksi! Halaman akan ditutup.');
        window.location.href = 'about:blank';
    }
});
console.log(element);
})();

function animateCounter(element, target, duration = 2000, suffix = '') {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target.toString().includes('.');
    
    element.classList.add('counting');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
            element.classList.remove('counting');
        } else {
            if (isDecimal) {
                element.textContent = current.toFixed(2) + suffix;
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }
    }, 16);
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation untuk stats
                if (entry.target.classList.contains('stats-grid')) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe semua section yang perlu animasi
    const elementsToObserve = document.querySelectorAll(`
        .stats-grid,
        .feature-card,
        .flow-step,
        .job-card,
        .vm-item
    `);

    elementsToObserve.forEach(el => observer.observe(el));
}

function animateStats() {
    const statsNumbers = document.querySelectorAll('.stat-number');
    const statsLuas = document.querySelectorAll('.stat-luas');
    
    statsNumbers.forEach(stat => {
        const text = stat.textContent.trim();
        let target = 0;
        let suffix = '';
        
        if (text.includes('K+')) {
            target = parseFloat(text.replace('K+', '')) * 1000;
            suffix = 'K+';
            animateCounterWithFormat(stat, target / 1000, 'K+', 2000);
        } else if (text.includes('+')) {
            target = parseInt(text.replace('+', ''));
            suffix = '+';
            animateCounter(stat, target, 2000, suffix);
        } else {
            target = parseInt(text);
            animateCounter(stat, target, 2000);
        }
    });
    
    statsLuas.forEach(stat => {
        const text = stat.textContent.trim();
        
        if (text.includes('Juta')) {
            const target = parseFloat(text.replace(' Juta', ''));
            animateCounterDecimal(stat, target, ' Juta', 2000);
        }
    });
}

function animateCounterDecimal(element, target, suffix, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    element.classList.add('counting');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toFixed(2) + suffix;
            clearInterval(timer);
            element.classList.remove('counting');
        } else {
            element.textContent = current.toFixed(2) + suffix;
        }
    }, 16);
}

function animateCounterWithFormat(element, target, suffix, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    element.classList.add('counting');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target) + suffix;
            clearInterval(timer);
            element.classList.remove('counting');
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function setupLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.classList.add('animated');
            }
        }, 100);
    });
}

let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', () => {
    setupLazyLoading();
    setupScrollAnimations();
    setupActiveNavigation();
    setupLoadingAnimation();
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });
});

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    setupActiveNavigation();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Modal Functions
function openApplyModal(company, position, location) {
    const modal = document.getElementById('applyModal');
    const modalCompany = document.getElementById('modalCompany');
    const modalPosition = document.getElementById('modalPosition');
    const modalLocation = document.getElementById('modalLocation');
    
    modalCompany.textContent = company;
    modalPosition.textContent = position;
    modalLocation.textContent = location;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('applyModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Close button
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    setupScrollAnimations();
    setupActiveNavigation();
    setupLoadingAnimation();
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });
});