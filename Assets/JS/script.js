$(".navbar-burger").on("click", function(){ 
    $(this).toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");     
})

// bulmaCarousel.attach('#carousel-demo', {
//     slidesToScroll: 1,
//     slidesToShow: 4 
// });

$(".linkedIn").on("click", function(){  
    window.open("https://www.linkedin.com/in/zachary-meadows-102681145/", "_blank");
})

$(".gitHub").on("click", function(){  
    window.open("https://github.com/zachmdws", "_blank");
})