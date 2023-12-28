  function changeLanguage(language) {
        if (language === 'en') {
            document.querySelector('.english').style.display = 'block';
            document.querySelector('.français').style.display = 'none';
        } else if (language === 'fr') {
            document.querySelector('.english').style.display = 'none';
            document.querySelector('.français').style.display = 'block';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Assuming these classes exist in your HTML
        var enBtn = document.querySelector('.en_btn');
        var frBtn = document.querySelector('.fr_btn');

        enBtn.addEventListener('click', function () {
            changeLanguage('en');
        });

        frBtn.addEventListener('click', function () {
            changeLanguage('fr');
        });
    });