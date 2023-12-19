document.addEventListener("DOMContentLoaded", function () {
    var articles = document.querySelectorAll('.container_droite .descriptif_projets');

    // Find the most recent article
    var mostRecentArticle = getMostRecentArticle(articles);

    // Show only the most recent article
    articles.forEach(function (article) {
        article.style.display = 'none';
    });

    if (mostRecentArticle) {
        mostRecentArticle.style.display = 'block';
    }

    // Add click event listeners to the links
    var links = document.querySelectorAll('.liste_expos li a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link
            var articleId = link.parentElement.dataset.articleId;
            showArticle(articleId);
        });
    });
});

function getMostRecentArticle(articles) {
    var mostRecentArticle = null;
    var maxDate = "0000-00";  // Initialize with a low date

    articles.forEach(function (article) {
        var date = article.dataset.year + '-' + article.dataset.month;
        if (date > maxDate) {
            maxDate = date;
            mostRecentArticle = article;
        }
    });

    return mostRecentArticle;
}

function showArticle(articleId) {
    // Hide all articles
    var articles = document.querySelectorAll('.container_droite .descriptif_projets');
    articles.forEach(function (article) {
        article.style.display = 'none';
    });

    // Show the selected article
    var selectedArticle = document.getElementById(articleId);
    if (selectedArticle) {
        selectedArticle.style.display = 'block';
    }
}
