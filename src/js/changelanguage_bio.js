function changeLanguage(language) {
    document.documentElement.lang = language;

    if (language === 'fr') {
        document.querySelector('.bio_fr').style.display = 'block';
        document.querySelector('.bio_en').style.display = 'none';
    } else if (language === 'en') {
        document.querySelector('.bio_fr').style.display = 'none';
        document.querySelector('.bio_en').style.display = 'flex';
    }
}

function isMaxWidth992() {
    return window.matchMedia("(max-width: 992px)").matches;
}

// Toggle bio visibility based on screen width
function toggleBioVisibility() {
    if (isMaxWidth992()) {
        // Hide both bios initially
        document.querySelector('.bio_fr').style.display = 'flex';
        document.querySelector('.bio_en').style.display = 'none';
    } else {
        // Show the default language bio when screen width is greater than 992px
        document.querySelector('.bio_fr').style.display = 'flex';
        document.querySelector('.bio_en').style.display = 'flex';
    }
}

// Initial check on page load
toggleBioVisibility();

// Add event listener for window resize
window.addEventListener('resize', toggleBioVisibility);