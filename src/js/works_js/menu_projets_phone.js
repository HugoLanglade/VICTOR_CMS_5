document.addEventListener("DOMContentLoaded", function () {
    // Function to check if the screen width is less than a certain value (for mobile)
    function isMobile() {
      return window.innerWidth <= 992; // Adjusted width to match your media query
    }
  
    // Function to handle the click event on the article in the container_gauche
    function handleArticleClick(event, articleId) {
      if (isMobile()) {
        event.preventDefault(); // Prevent the default behavior of the anchor link
        // Toggle visibility of container_gauche, container_droite, header, and container_droite
        const containerGauche = document.querySelector(".container_gauche");
        const containerDroite = document.querySelector(".container_droite");
        const header = document.querySelector("header");
  
        if (containerGauche.style.display !== "none") {
          containerGauche.style.display = "none";
          containerDroite.style.display = "flex";
          header.style.display = "none";
          document.querySelector(".container_gauche").style.display = "none";
          containerGauche.style.width = "100vw";
        }
      }
    }
  
    // Attach click event listeners to your articles
    const articles = document.querySelectorAll(".liste_expos li");
  
    articles.forEach((article) => {
      article.addEventListener("click", function (event) {
        const articleId = this.getAttribute("data-article-id");
        handleArticleClick(event, articleId);
      });
    });
  
    // Add click event listener to the icon link
    const iconLink = document.getElementById("iconLink");
    if (iconLink) {
      iconLink.addEventListener("click", function (event) {
        if (isMobile()) {
          // Mobile behavior: toggle visibility of container_gauche and container_droite
          event.preventDefault(); // Prevent the default behavior of the anchor link
          window.location.href = "works.html";
        } else {
          // Desktop behavior: redirect to index.html
          window.location.href = "index.html";
        }
      });
    }
    
  });
  