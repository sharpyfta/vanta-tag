const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = [];
const STAR_COUNT = 300;

// Initialize stars
for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2,
        speed: Math.random() * 0.5 + 0.1,
        alpha: Math.random()
    });
}

// Animate stars
function animateStars() {
    ctx.clearRect(0, 0, width, height);

    // Draw nebula gradient overlay
    const nebula = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width);
    nebula.addColorStop(0, 'rgba(64,0,128,0.3)');
    nebula.addColorStop(0.5, 'rgba(128,0,255,0.1)');
    nebula.addColorStop(1, 'rgba(0,0,0,0.8)');
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, width, height);

    // Draw stars
    stars.forEach(star => {
        star.x -= star.speed;
        if (star.x < 0) star.x = width;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

animateStars();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});
