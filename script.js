AOS.init({
    once: false,
    offset: 50,
});


document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId && targetId !== 'index.html' && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (targetId === '#top-of-page' || targetId === 'index.html') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});


const playVideoButton = document.getElementById('playVideoButton');
if (playVideoButton) {
    playVideoButton.addEventListener('click', () => {
        const videoUrl = 'https://www.youtube.com/watch?v=SiMX4xf_a34';
        window.open(videoUrl, '_blank');
        console.log('Watch Video button clicked!');
    });
}


const gallerySwiper = new Swiper('.gallery-carousel', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    on: {
        init: function() {
            AOS.refresh();
        },
        slideChangeTransitionEnd: function() {
            AOS.refresh();
        }
    }
});

console.log('Reviews section is ready for carousel implementation.');