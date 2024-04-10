document.addEventListener("DOMContentLoaded", function () {
  let linkClicked = sessionStorage.getItem("linkClicked") === "true"; // Retrieve linkClicked status from sessionStorage

  function isMobile() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return screenWidth <= 992;
  }

  // Function to handle layout based on screen width and link click
  function handleLayout() {
    const containerGauche = document.querySelector(".container_gauche");
    const containerDroite = document.querySelector(".container_droite");

    if (isMobile() && !linkClicked) {
      console.log("Mobile without click");
      containerDroite.style.display = "none";
      containerGauche.style.display = "flex";
    } else {
      console.log("Mobile with click or Desktop");
      containerDroite.style.display = "flex";
      containerGauche.style.display = "flex";
    }

    // If the page is loaded via link click, adjust containers accordingly
    if (linkClicked) {
      containerGauche.style.display = "none";
      containerDroite.style.display = "flex";
    }
  }

  // Call handleLayout to initialize layout based on screen width
  handleLayout();

  if (isMobile()) {
    // Add a click event to the links in the left column
    const links = document.querySelectorAll(".liste_expos a");

    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Access the href attribute of the clicked link
        const articleLink = link.getAttribute("href");

        // Now you can use articleLink to perform whatever action you need,
        // such as redirecting to the corresponding article
        window.location.href = articleLink;

        console.log("Link clicked:", articleLink);

        // Set linkClicked to true to indicate link click
        linkClicked = true;

        // Store linkClicked status in sessionStorage
        sessionStorage.setItem("linkClicked", "true");

        // Call handleLayout to adjust layout
        handleLayout();
      });
    });

    // Add a click event to the iconLinks
    const iconLinks = document.querySelectorAll(".iconLink");

    iconLinks.forEach((iconLink) => {
      iconLink.addEventListener("click", function () {
        // Reset linkClicked to false when iconLink is clicked
        linkClicked = false;
        sessionStorage.removeItem("linkClicked"); // Remove linkClicked from sessionStorage
        handleLayout();
      });
    });
  }

  // Resize event listener to handle layout changes
  window.addEventListener('resize', function() {
    // Reset linkClicked to false when resizing
    linkClicked = false;
    sessionStorage.removeItem("linkClicked"); // Remove linkClicked from sessionStorage
    handleLayout();
  });
});
