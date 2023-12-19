document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.descriptif_projets');
  
    articles.forEach(function (article) {
      const photoContainer = article.querySelector('.photos');
      const backButton = article.querySelector('.bouton_back');
      const forwardButton = article.querySelector('.bouton_forward');
      
      backButton.addEventListener('click', function () {
        const initialScrollLeft = photoContainer.scrollLeft;
        // Find the width of the currently displayed image
        const currentImage = getCurrentImage(photoContainer);
        const scrollAmount = currentImage.offsetWidth;
        // Scroll back by the width of the current image
        photoContainer.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
        const finalScrollLeft = photoContainer.scrollLeft;
        console.log(`Back Button Clicked. Initial ScrollLeft: ${initialScrollLeft}, Final ScrollLeft: ${finalScrollLeft}`);
      });
  
      forwardButton.addEventListener('click', function () {
        const initialScrollLeft = photoContainer.scrollLeft;
        // Find the width of the currently displayed image
        const currentImage = getCurrentImage(photoContainer);
        const scrollAmount = currentImage.offsetWidth;
        // Scroll forward by the width of the current image
        photoContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
        const finalScrollLeft = photoContainer.scrollLeft;
        console.log(`Forward Button Clicked. Initial ScrollLeft: ${initialScrollLeft}, Final ScrollLeft: ${finalScrollLeft}`);
      });
    });
  
    // Function to get the currently displayed image
    function getCurrentImage(container) {
      const scrollPosition = container.scrollLeft;
      const images = container.querySelectorAll('.image');
      let currentImage = null;
  
      // Find the first image whose left edge is beyond the current scroll position
      for (const image of images) {
        if (image.offsetLeft > scrollPosition) {
          currentImage = image;
          break;
        }
      }
  
      // If no such image is found, use the last image
      if (!currentImage) {
        currentImage = images[images.length - 1];
      }
  
      return currentImage;
    }
  });
  