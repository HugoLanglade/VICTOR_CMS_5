document.addEventListener("DOMContentLoaded", function () {
    function isMobile() {
      return window.innerWidth <= 992;
    }
  
    function handleArticleClick(event, articleId) {
      if (isMobile()) {
        event.preventDefault();
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
  
    const articles = document.querySelectorAll(".liste_expos li");
  
    articles.forEach((article) => {
      article.addEventListener("click", function (event) {
        const articleId = this.getAttribute("data-numero_article");
        handleArticleClick(event, articleId);
  
        // Dynamically determine the destination based on the clicked article
        const destination = `/works.njk#${articleId}`;
        window.location.href = destination;
      });
    });
  
    const iconLink = document.getElementById("iconLink");
  
    if (iconLink) {
      iconLink.addEventListener("click", function (event) {
        if (isMobile()) {
          event.preventDefault();
          console.log("revient à works");
          window.location.href = "/works.njk";
        } else {
            console.log("revient à index");
          window.location.href = "/index.html";
        }
      });
    }
  
    // Handle regular navigation (e.g., using browser's back button)
    window.addEventListener("popstate", function (event) {
      if (event.state && event.state.articleId) {
        // If there is articleId in the state, handle the navigation accordingly
        const destination = `/works.njk#${event.state.articleId}`;
        window.location.href = destination;
      }
    });
  });
  