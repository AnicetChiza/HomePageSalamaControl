jQuery(function($){
    const $header = $('.header');
    $(window).scroll(function(event){
        const $current = $(this).scrollTop();
        if($current > 560){
            $header.addClass('header-color');
        }
        else{
            $header.removeClass('header-color');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scroll = document.querySelector('.top-icon');
    scroll.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
});

//Pour notre Menu HAMBURGER
const menu = document.querySelector('.menu-icons');
const exit = document.querySelector('.menu-container');

menu.addEventListener('click', () =>{
    menu.classList.toggle('menu-mobile');
    exit.classList.toggle('menu-mobile');
})

document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () =>{
    menu.classList.remove('menu-mobile');
    exit.classList.remove('menu-mobile');
}))