document.addEventListener("DOMContentLoaded", function () {
  const containerGauche = document.querySelector(".container_gauche");
  const containerDroite = document.querySelector(".container_droite");

  let currentState = "gauche"; // Initial state

  function isMobile() {
    return window.matchMedia("(max-width: 992px)").matches;
  }

  // Initially hide the right column on page load for mobile devices
  if (isMobile()) {
    containerDroite.classList.add("mobile-hidden");
  }

  // Add a click event to the links in the left column
  const links = document.querySelectorAll(".liste_expos a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (isMobile()) {
        event.preventDefault();

        // Update the state based on the current container
        currentState = currentState === "gauche" ? "droite" : "gauche";

        // Show the right column when a link is clicked
        containerGauche.style.display = currentState === "droite" ? "none" : "flex";
        containerDroite.style.display = currentState === "droite" ? "flex" : "none";

        // Hide the left column after a short delay to ensure visibility change
        setTimeout(() => {
          containerGauche.style.display = currentState === "droite" ? "none" : "flex";
        }, 500);

        // Update the content of the main container
        const url = link.getAttribute("href");
        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            // Extract .container_droite content from the fetched HTML
            const containerDroiteContent = new DOMParser()
              .parseFromString(html, "text/html")
              .querySelector(".container_droite");

            // Update the content of the main container
            containerDroite.innerHTML = "";
            containerDroite.appendChild(containerDroiteContent);

            // Show the main container and remove the mobile-hidden class
            containerDroite.classList.remove("mobile-hidden");
          });
      }
    });
  });
});
