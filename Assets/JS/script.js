$(".navbar-burger").on("click", function(){ 
    $(this).toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");     
})

// bulmaCarousel.attach('#carousel-demo', {
//     slidesToScroll: 1,
//     slidesToShow: 4 
// });

$(".linkedIn").on("click", function(){  
    window.location.href="https://www.linkedin.com/in/zachary-meadows-102681145/";
})

$(".gitHub").on("click", function(){  
    window.location.href="https://github.com/zachmdws";
})