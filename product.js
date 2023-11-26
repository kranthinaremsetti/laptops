const mainImage = document.querySelector('.image-gallery img');
        const thumbnails = document.querySelectorAll('.thumbnails img');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src;
                mainImage.alt = this.alt;
            });
        });