const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 100,
    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

});