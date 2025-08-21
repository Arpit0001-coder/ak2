// DOM Elements
const subtitle = document.getElementById('subtitle');
const surpriseBtn = document.getElementById('surpriseBtn');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const wishBtn = document.getElementById('wishBtn');
const wishNumber = document.getElementById('wishNumber');
const wishDisplay = document.getElementById('wishDisplay');
const confettiContainer = document.getElementById('confetti-container');

// Typewriter effect for subtitle
const typewriterText = "Tum meri zindagi ka sabse khoobsurat hissa ho.";
let typewriterIndex = 0;

function typewriterEffect() {
    if (typewriterIndex < typewriterText.length) {
        subtitle.textContent += typewriterText.charAt(typewriterIndex);
        typewriterIndex++;
        setTimeout(typewriterEffect, 100);
    }
}

// Start typewriter effect after page loads
window.addEventListener('load', () => {
    setTimeout(typewriterEffect, 1000);
});

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Confetti Animation
function createConfetti() {
    const colors = ['#ff69b4', '#9370db', '#ffb6c1', '#ffd700', '#ff1493', '#da70d6'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentElement) {
                    confetti.remove();
                }
            }, 4000);
        }, i * 20);
    }
}

// Surprise button click handler
surpriseBtn.addEventListener('click', () => {
    createConfetti();
    
    // Add button animation
    surpriseBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        surpriseBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Show success message
    showSuccessMessage();
});

// Success message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div class="success-content">
            <span class="success-icon">🎉</span>
            <p>Happy Birthday Aastha! 🎂💖</p>
        </div>
    `;
    document.body.appendChild(message);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 4000);
}

// Music controls
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<span class="music-icon">🔇</span>';
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Audio playback failed:', error);
            showAudioMessage();
        });
        musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
        isMusicPlaying = true;
    }
});

// Show message about enabling audio
function showAudioMessage() {
    const message = document.createElement('div');
    message.className = 'audio-message';
    message.innerHTML = `
        <div class="audio-message-content">
            <p>🎵 Enable audio to enjoy romantic background music</p>
            <button onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    document.body.appendChild(message);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);
}

// Wish Generator
const wishes = [
    "Khuda tumhe utni khushiyan de jitni tum meri zindagi mein laayi ho.",
    "May your laughter echo longer than any worry.",
    "Tumhari har khwahish puri ho, tumhari har dua qabool ho.",
    "May your smile light up every room you enter.",
    "Tumhari zindagi mein khushi ka saath ho, pyaar ka saath ho.",
    "May you always find reasons to smile and laugh.",
    "Tumhari har din naya sa lagta hai, har pal khoobsurat ho.",
    "May your heart always be filled with love and joy.",
    "Tumhari muskaan ne mere dil ko jeet liya, aise hi muskurati raho.",
    "May your birthday be as special as you are to me."
];

wishBtn.addEventListener('click', () => {
    const number = parseInt(wishNumber.value);
    
    if (number >= 1 && number <= 10) {
        const wish = wishes[number - 1];
        wishDisplay.innerHTML = `<p class="wish-text">"${wish}"</p>`;
        
        // Add sparkle effect
        addWishSparkles();
        
        // Auto-check promises after showing wish
        setTimeout(() => {
            autoCheckPromises();
        }, 1000);
    } else {
        wishDisplay.innerHTML = '<p class="wish-text">Please enter a number between 1 and 10! ✨</p>';
    }
});

// Add sparkles to wish
function addWishSparkles() {
    const sparkles = ['✨', '💖', '🎂', '💕', '🎉'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('span');
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.cssText = `
                position: absolute;
                font-size: 20px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 100;
                animation: wishSparkle 2s ease-out forwards;
            `;
            
            wishDisplay.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentElement) {
                    sparkle.remove();
                }
            }, 2000);
        }, i * 200);
    }
}

// Auto-check promises with animation
function autoCheckPromises() {
    const promises = document.querySelectorAll('.promise-checkbox');
    
    promises.forEach((promise, index) => {
        setTimeout(() => {
            promise.checked = true;
            promise.parentElement.style.background = 'rgba(255, 182, 193, 0.3)';
            promise.parentElement.style.transform = 'translateX(15px)';
            
            // Add heart animation
            addPromiseHeart(promise.parentElement);
        }, index * 800);
    });
}

// Add heart animation to promises
function addPromiseHeart(promiseElement) {
    const heart = document.createElement('span');
    heart.innerHTML = '💖';
    heart.style.cssText = `
        position: absolute;
        right: 20px;
        font-size: 1.5rem;
        animation: promiseHeart 1.5s ease-out forwards;
    `;
    
    promiseElement.style.position = 'relative';
    promiseElement.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentElement) {
            heart.remove();
        }
    }, 1500);
}

// Create floating hearts animation
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💝', '💗', '💓'];
    const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ff1493', '#ff69b4'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createHeart(hearts[i % hearts.length], colors[i % colors.length]);
        }, i * 200);
    }
}

function createHeart(emoji, color) {
    const heart = document.createElement('div');
    heart.innerHTML = emoji;
    heart.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 15}px;
        color: ${color};
        left: ${Math.random() * 100}%;
        top: 100vh;
        pointer-events: none;
        z-index: 100;
        animation: floatUp 4s ease-out forwards;
    `;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentElement) {
            heart.remove();
        }
    }, 4000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes wishSparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes promiseHeart {
        0% {
            transform: scale(0) translateY(0);
            opacity: 0;
        }
        50% {
            transform: scale(1.2) translateY(-20px);
            opacity: 1;
        }
        100% {
            transform: scale(1) translateY(-40px);
            opacity: 0;
        }
    }
    
    .success-message {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3000;
        animation: slideDown 0.5s ease-out;
    }
    
    .success-content {
        background: linear-gradient(45deg, #ff69b4, #9370db);
        color: white;
        padding: 20px 30px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
        backdrop-filter: blur(10px);
        font-weight: 600;
    }
    
    .success-icon {
        font-size: 24px;
    }
    
    .audio-message {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3000;
        animation: slideDown 0.5s ease-out;
    }
    
    .audio-message-content {
        background: rgba(255, 105, 180, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 5px 20px rgba(255, 105, 180, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .audio-message button {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    if (stars && twinkling) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
        twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', () => {
    // Add entrance animations for elements
    const elements = document.querySelectorAll('.timeline-content, .letter-content, .wish-generator, .promises-content');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
});

// Add some extra floating hearts on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        createFloatingHearts();
    }, 3000);
});

// Add subtle mouse movement effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const twinkling = document.querySelector('.twinkling');
    if (twinkling) {
        twinkling.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
});

// Add heart beat effect to the main title
const mainTitle = document.querySelector('.main-title');
if (mainTitle) {
    setInterval(() => {
        mainTitle.style.transform = 'scale(1.02)';
        setTimeout(() => {
            mainTitle.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Add some romantic quotes that change periodically
const romanticQuotes = [
    "Tum meri roshni ho, jo andheron ko mita deti hai.",
    "Tumhari hasi mere din ka sabse khoobsurat pal hai.",
    "Main chahta hoon tum hamesha muskurati raho.",
    "Aaj ke din main tumse ek vaada karta hoon.",
    "Happy Birthday, meri zindagi. ❤️"
];

let currentQuoteIndex = 0;

function changeQuote() {
    const subtitle = document.getElementById('subtitle');
    if (subtitle) {
        subtitle.style.opacity = '0';
        setTimeout(() => {
            subtitle.textContent = romanticQuotes[currentQuoteIndex];
            subtitle.style.opacity = '1';
            currentQuoteIndex = (currentQuoteIndex + 1) % romanticQuotes.length;
        }, 500);
    }
}

// Change quote every 15 seconds
setInterval(changeQuote, 15000);

// Add some extra sparkle effects
function addSparkles() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: fixed;
        font-size: 20px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        z-index: 100;
        animation: sparkle 2s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentElement) {
            sparkle.remove();
        }
    }, 2000);
}

// Add sparkles periodically
setInterval(addSparkles, 4000);

// Add CSS for sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add fade-in effect for sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});

// Add click effect for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Add some extra romantic touches
window.addEventListener('load', () => {
    // Add floating hearts periodically
    setInterval(createFloatingHearts, 8000);
    
    // Add sparkles periodically
    setInterval(addSparkles, 5000);
}); 