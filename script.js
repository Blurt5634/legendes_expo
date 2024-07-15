document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.row img');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');
    const textBox = document.getElementById('textBox');
    const frenchButtonOpening = document.getElementById('frenchButtonOpening');
    const englishButtonOpening = document.getElementById('englishButtonOpening');
    const openingPage = document.getElementById('openingPage');
    const galleryPage = document.getElementById('galleryPage');
    let currentLanguage = 'fr';

    function updateText() {
        images.forEach(image => {
            const text = image.getAttribute(`data-text-${currentLanguage}`);
            image.setAttribute('data-text', text);
        });
    }

    frenchButtonOpening.addEventListener('click', () => {
        currentLanguage = 'fr';
        openingPage.style.display = 'none';
        galleryPage.style.display = 'flex';
        updateText();
    });

    englishButtonOpening.addEventListener('click', () => {
        currentLanguage = 'en';
        openingPage.style.display = 'none';
        galleryPage.style.display = 'flex';
        updateText();
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImg.src = image.src;
            textBox.textContent = image.getAttribute('data-text');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayImg.src = '';
        textBox.textContent = '';
    });
});
