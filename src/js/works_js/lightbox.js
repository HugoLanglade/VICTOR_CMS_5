document.addEventListener('DOMContentLoaded', function () {
  const boutonsGrands = document.querySelectorAll('.bouton_grand');
  const articles = document.querySelectorAll('.descriptif_projets');
  const lightboxContainer = document.createElement('div');
  lightboxContainer.className = 'custom-lightbox';
  document.body.appendChild(lightboxContainer);

  const lightboxImage = document.createElement('img');
  lightboxImage.style.webkitUserSelect = 'none'; // Add this line to disable image selection
  const leftArrow = document.createElement('div');
  const rightArrow = document.createElement('div');

const closeImage = document.createElement('img');
closeImage.src = '/assets/images/close_button.png'; // Replace with the actual path to your close image
closeImage.className = 'close-image';
lightboxContainer.appendChild(closeImage);

  leftArrow.className = 'arrow left-arrow';
  rightArrow.className = 'arrow right-arrow';

  leftArrow.style.backgroundImage = "url('/assets/images/fleche_left.png')";
  rightArrow.style.backgroundImage = "url('/assets/images/fleche_right.png')";

  lightboxContainer.appendChild(leftArrow);
  lightboxContainer.appendChild(lightboxImage);
  lightboxContainer.appendChild(rightArrow);

  lightboxContainer.appendChild(leftArrow);
  lightboxContainer.appendChild(lightboxImage);
  lightboxContainer.appendChild(rightArrow);

  let currentArticleIndex = 0;
  let currentIndex = 0;

  boutonsGrands.forEach(function (boutonGrand, index) {
    boutonGrand.addEventListener('click', function () {
      currentArticleIndex = index;
      currentIndex = 0;
      showLightbox();
    });
  });

  articles.forEach(function (article, index) {
    const images = article.querySelectorAll('.image');
    images.forEach(function (image, i) {
      image.addEventListener('click', function () {
        currentArticleIndex = index;
        currentIndex = i;
        showLightbox();
      });
    });
  });

  function showLightbox() {
    const images = articles[currentArticleIndex].querySelectorAll('.image');
    lightboxImage.src = images[currentIndex].src;
    lightboxContainer.style.display = 'flex';

    leftArrow.addEventListener('click', function (event) {
      event.stopPropagation();
      navigateLeft(images);
    });

    rightArrow.addEventListener('click', function (event) {
      event.stopPropagation();
      navigateRight(images);
    });

    lightboxContainer.addEventListener('click', hideLightbox);

// Append the close button to the lightboxContainer
lightboxContainer.appendChild(closeImage);

closeImage.addEventListener('click', hideLightbox);
  
  }

  function hideLightbox() {
    lightboxContainer.style.display = 'none';

    leftArrow.removeEventListener('click', navigateLeft);
    rightArrow.removeEventListener('click', navigateRight);
    lightboxContainer.removeEventListener('click', hideLightbox);
  }

  function navigateLeft(images) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
  }

  function navigateRight(images) {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImage.src = images[currentIndex].src;
  }
});
