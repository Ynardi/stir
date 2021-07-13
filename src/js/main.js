$(document).ready(function(){
    const team= $('#team')
    team.owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        center: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000

    });
    const effective= $('#effective')
    effective.owlCarousel({
        items: 1.2,
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    const creators= $('#creators')
    creators.owlCarousel({
        margin: 65,
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
})
