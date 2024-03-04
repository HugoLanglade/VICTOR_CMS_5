function rearrangeListItems() {
    var list = document.querySelector('.liste_expos');
    var lis = Array.from(list.querySelectorAll('li'));

    var currentYear;
    var currentMonth;

    lis.sort(function(a, b) {
        var yearA = parseInt(a.getAttribute('data-year'));
        var yearB = parseInt(b.getAttribute('data-year'));
        var monthA = parseInt(a.getAttribute('data-month'));
        var monthB = parseInt(b.getAttribute('data-month'));

        if (yearA === yearB) {
            return monthB - monthA;
        }

        return yearB - yearA;
    });

    lis.forEach(function(li) {
        var year = li.getAttribute('data-year');
        var month = li.getAttribute('data-month');

        if (year && month) {
            if (year !== currentYear) {
                currentYear = year;
                var h1 = Array.from(list.querySelectorAll('h1')).find(function(h) {
                    return h.textContent.trim() === currentYear;
                });

                if (h1) {
                    h1.insertAdjacentElement('afterend', li);
                }
            } else {
                if (month !== currentMonth) {
                    currentMonth = month;
                    var h1 = Array.from(list.querySelectorAll('h1')).find(function(h) {
                        return h.textContent.trim() === currentYear;
                    });

                    if (h1) {
                        h1.insertAdjacentElement('afterend', li);
                    }
                }
            }
        }
    });
}

// Call the function after the page is loaded
window.onload = function() {
    rearrangeListItems();
};
