$(document).ready(function(){
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:`<button type='button' class='slick-prev pullleft'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next pullright'><ion-icon name="arrow-forward-outline"></ionicon></button>`
    });
});
    $(document).ready(function(){
    $('.laps').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    prevArrow:`<button type='button' class='slick-prev pullleft'><ion-icon name="chevron-back-outline"></ionicon></button>`,
    nextArrow:`<button type='button' class='slick-next pullright'><ion-icon name="chevron-forward-outline"></ionicon></button>`
    });
    });