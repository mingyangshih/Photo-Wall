$(document).ready(function(){
    // masonry option
    
    var $container = $('.grid');
    $container.imagesLoaded(function(){
        $container.masonry({
            itemSelector : '.grid-item',
            columnWidth : 30,
            percentPosition: true,
            gutter: 5 
        })
    })
    var $life = $('.photo-wrap');
    $life.imagesLoaded(function(){
        $life.masonry({
            itemSelector : '.item',
            columnWidth : 30,
            percentPosition: true,
            gutter: 5  
        })
    })
    
    // light box
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'positionFromTop':50,
        'fitImagesInViewport':true,
        'wrapAround':true
    });

    //type effetc
    $('.titleh1').t({
        // typing speed in milliseconds
        speed: 75,
        speed_vary: true
    });
    $('.japan').t({
        // typing speed in milliseconds
        speed: 75,
        speed_vary: true
    })
    $('.life').t({
        // typing speed in milliseconds
        speed: 75,
        speed_vary: true
    })
    
    $('.fb').addClass('fab fa-facebook-square');
    
    $('.git').addClass('fab fa-github-square');
})

let app = new Vue({
    el:'#footer',
    data:{
        message:' 2018 Ming-Yang Shih'
    }
});

