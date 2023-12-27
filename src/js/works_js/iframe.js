        // Delay execution until the Vimeo player script is loaded
        var checkVimeoInterval = setInterval(function () {
            if (typeof Vimeo !== 'undefined') {
                clearInterval(checkVimeoInterval); // Stop checking

                var iframeSrc = document.querySelector('.vimeo-container iframe').getAttribute('src');

                if (iframeSrc === "#") {
                    // Hide the vimeo-container
                    document.querySelector('.vimeo-container').style.display = 'none';

                    // Remove the vimeo-container from the DOM after a delay
                    setTimeout(function () {
                        var vimeoContainer = document.querySelector('.vimeo-container');
                        vimeoContainer.parentNode.removeChild(vimeoContainer);
                    }, 100);
                }
            }
        }, 100); // Check every 100 milliseconds