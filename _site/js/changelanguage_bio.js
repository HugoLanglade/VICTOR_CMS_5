var w = window.innerWidth;

function isMaxWidth992() {
    return w <= 992; // Use the variable w to check window width
}

// Function to change the language
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    updateBioVisibility();
}

// Toggle bio visibility based on screen width and language
function updateBioVisibility() {
    const language = document.documentElement.lang;
    if (isMaxWidth992()) {
        // On smaller screens, hide bios based on language
        if (language === 'fr') {
            document.querySelector('.bio_fr').style.display = 'flex';
            document.querySelector('.bio_en').style.display = 'none';
        } else if (language === 'en') {
            document.querySelector('.bio_fr').style.display = 'none';
            document.querySelector('.bio_en').style.display = 'flex';
        }
    } else {
        // On larger screens, show both bios
        document.querySelector('.bio_fr').style.display = 'flex';
        document.querySelector('.bio_en').style.display = 'flex';
    }
}

// Initial check on page load
updateBioVisibility();

// Add event listener for window resize
window.addEventListener('resize', function () {
    w = window.innerWidth; // Update the window width variable on resize
    updateBioVisibility();
});
