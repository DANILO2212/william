const image = document.getElementById('clickableImage');
const dame = document.getElementById('dame');
        const message = document.getElementById('message');
        let size = 150; // Initial size in pixels
        const maxSize = 500; // Maximum size in pixels
        const minSize = 150; // Minimum size in pixels
        const increment = 10; // Size increment per click
        const decrement = 5; // Size decrement when not clicking
        let growing = false; // Flag to track if the image is growing

        function growImage() {
            if (size < maxSize) {
                size += increment;
                image.style.width = size + 'px';
                message.style.display = 'none';
                dame.style.display = 'inline-block';
            }
            
                
             else {
                size = 500;
                    
                    dame.style.display = 'none';
                setInterval(() => {
                    image.style.display = 'none';
                    message.style.display = 'flex';
                    
                }, 500);

            }
        }

        function shrinkImage() {
            if (!growing && size > minSize) {
                size -= decrement;
                image.style.width = size + 'px';
               
            }
            
        }

        image.addEventListener('mousedown', () => {
            growing = true;
            growImage();
        });

        image.addEventListener('mouseup', () => {
            growing = false;
        });

        image.addEventListener('mouseleave', () => {
            growing = false;
        });

        setInterval(shrinkImage, 100); // Shrink the image every 100ms when not growing