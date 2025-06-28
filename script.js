document.getElementById('down-arrow').addEventListener('click', function() {
    // إظهار القسم السفلي عند الضغط على السهم
    const moreContent = document.getElementById('more-content');
    moreContent.classList.add('visible');
    moreContent.scrollIntoView({ behavior: 'smooth' });
});

// أنميشن تلقائي لظهور الصور
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.images img').forEach((img, i) => {
        img.style.opacity = 0;
        setTimeout(() => {
            img.style.transition = 'opacity 1s';
            img.style.opacity = 1;
        }, 400 + i * 300);
    });
});

// عند إظهار القسم السفلي، أضف كلاس visible
const moreContent = document.getElementById('more-content');
if (moreContent) {
    moreContent.classList.remove('visible');
}
