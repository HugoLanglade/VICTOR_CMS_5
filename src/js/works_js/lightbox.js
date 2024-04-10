document.addEventListener('DOMContentLoaded', function () {
    var boutonsGrands = document.querySelectorAll('.bouton_grand');
    var articles = document.querySelectorAll('.descriptif_projets');
    var lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'custom-lightbox';
    document.body.appendChild(lightboxContainer);
    var lightboxImage = document.createElement('img');
    lightboxImage.style.webkitUserSelect = 'none'; // Add this line to disable image selection
    var leftArrow = document.createElement('div');
    var rightArrow = document.createElement('div');
    var closeImage = document.createElement('img');
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
    var currentArticleIndex = 0;
    var currentIndex = 0;
    [].forEach.call(boutonsGrands, function (boutonGrand, index) {
      boutonGrand.addEventListener('click', function () {
        currentArticleIndex = index;
        currentIndex = 0;
        showLightbox();
      });
    });
    [].forEach.call(articles, function (article, index) {
      var images = article.querySelectorAll('.image');
      [].forEach.call(images, function (image, i) {
        image.addEventListener('click', function () {
          currentArticleIndex = index;
          currentIndex = i;
          showLightbox();
        });
      });
    });
    function showLightbox() {
      var images = articles[currentArticleIndex].querySelectorAll('.image');
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
