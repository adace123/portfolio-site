 $(document).ready(() => {
 
    $('.projects div a').mouseenter(function(e) {
        $(this).find('.project').css({
            'transform': 'rotateY(180deg)'
        })
    })
    
    $('.projects div a').mouseleave(function(e) {
        $(this).find('.project').css({
            'transform': 'rotateY(0deg)'
        })
    })

 });
