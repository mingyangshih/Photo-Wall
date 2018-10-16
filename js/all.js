$(document).ready(function(){
    // masonry option
    var $container = $('#container');
    $container.imagesLoaded(function(){
        $container.masonry({
            itemSelector : '.item',
            columnWidth : 30 
        })
    })
    // var $life = $('#lifemoment');
    // $life.imagesLoaded(function(){
    //     $life.masonry({
    //         itemSelector : '.item',
    //         columnWidth : 30 
    //     })
    // })
    
    // light box
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'positionFromTop':50,
        'fitImagesInViewport':true,
        'wrapAround':true
    });

    //type effetc
    $('#title').t({
        // typing speed in milliseconds
        speed: 75,
        speed_vary: true
    });
    $('#japan').t({
        // typing speed in milliseconds
        speed: 75,
        speed_vary: true
    })
    $('#life').t({
        // typing speed in milliseconds
        speed: 75,
        speed_vary: true
    })
    
    $('.fb').addClass('fab fa-facebook-square');
})



