const jobs = [
{
    id: 1,
    title: "Software Developer - Digital Factory",
    company: "ptpn1",
    companyName: "PTPN I",
    category: "technology",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Bertanggung jawab dalam pengembangan sistem digital internal perusahaan, termasuk pengembangan aplikasi berbasis web dan mobile, integrasi API, serta otomatisasi proses bisnis.",
    tags: ["Software Development", "Sistem Informasi", "Tek. Informatika", "Ilmu Komputer"],
    posted: "1 hari yang lalu"
},
{
    id: 2,
    title: "ODS Bidang Keuangan",
    company: "ptpn4",
    companyName: "PTPN IV",
    category: "finance",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Melakukan analisis dan pelaporan keuangan, perencanaan anggaran, serta mendukung implementasi sistem keuangan yang efisien di unit kerja PTPN IV.",
    tags: ["Keuangan", "Akuntansi", "Reporting", "Budgeting"],
    posted: "1 hari yang lalu"
},
{
    id: 3,
    title: "ODS Umum",
    company: "ptpn4",
    companyName: "PTPN IV",
    category: "administration",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Mengelola kegiatan administrasi umum, termasuk logistik, pengarsipan dokumen, dan dukungan operasional perusahaan.",
    tags: ["Hukum", "Psikologi", "Komunikasi", "Manajemen"],
    posted: "1 hari yang lalu"
},
{
    id: 4,
    title: "ODS Bidang Keuangan",
    company: "sgn",
    companyName: "SGN",
    category: "finance",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Melaksanakan fungsi keuangan dan akuntansi di SGN, termasuk pengelolaan kas, pencatatan transaksi, dan penyusunan laporan keuangan.",
    tags: ["Keuangan", "Akuntansi", "Reporting", "Budgeting"],
    posted: "1 hari yang lalu"
},
{
    id: 5,
    title: "Software Developer - Digital Factory",
    company: "sgn",
    companyName: "SGN",
    category: "technology",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Mengembangkan aplikasi digital untuk mendukung transformasi digital SGN, berfokus pada efisiensi proses bisnis dan pengalaman pengguna.",
    tags: ["Software Development", "Sistem Informasi", "Tek. Informatika", "Ilmu Komputer"],
    posted: "1 hari yang lalu"
},
{
    id: 6,
    title: "ODS Bidang Keuangan",
    company: "ptpn3",
    companyName: "PTPN III",
    category: "finance",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Bertanggung jawab atas perencanaan, pengawasan, dan pelaporan keuangan di lingkungan PTPN III sesuai standar akuntansi dan kebijakan perusahaan.",
    tags: ["Keuangan", "Akuntansi", "Reporting", "Budgeting"],
    posted: "1 hari yang lalu"
},
{
    id: 7,
    title: "ODS Bidang Operational",
    company: "ptpn3",
    companyName: "PTPN III",
    category: "engineering",
    location: "Jakarta Selatan",
    type: "fulltime",
    description: "Bertanggung jawab dalam mendukung operasional di bidang tanaman dan teknik, memastikan kegiatan produksi berjalan sesuai target dan standar kualitas.",
    tags: ["Tanaman", "Teknik"],
    posted: "1 hari yang lalu"
},
{
        id: 8,
        title: "ODS Bidang Umum",
        company: "ptpn3",
        companyName: "PTPN III",
        category: "administration",
        location: "Jakarta Selatan",
        type: "fulltime",
        description: "Melaksanakan fungsi administrasi umum di berbagai unit kerja, mendukung kegiatan operasional dan koordinasi antar departemen.",
        tags: ["Semua Jurusan"],
        posted: "1 hari yang lalu"
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
    <div class="job-card" onclick="window.location.href='#apply-${job.id}'">
        <div class="job-header">
            <div class="job-title">
                <h3>${job.title}</h3>
                <span class="company-badge">${job.companyName}</span>
            </div>
        </div>
        <div class="job-meta">
            <div class="job-meta-item">
                📍 ${job.location}
            </div>
            <div class="job-meta-item">
                💼 ${job.type === 'fulltime' ? 'Full Time' : job.type === 'contract' ? 'Contract' : 'Internship'}
            </div>
            <div class="job-meta-item">
                🕐 ${job.posted}
            </div>
        </div>
        <div class="job-description">
            ${job.description}
        </div>
        <div class="job-tags">
            ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    </div>
`).join('');
}

function filterByCompany(companyCode) {
currentFilter = companyCode;

// Update active tab
document.querySelectorAll('.company-tab').forEach(tab => {
    tab.classList.remove('active');
});
event.target.classList.add('active');

// Filter jobs
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

document.addEventListener('DOMContentLoaded', () => {
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