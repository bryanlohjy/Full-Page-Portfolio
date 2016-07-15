// Canvas Text Height Vert Center
$(document).ready(function(){
    $('.vertText').css({
        top : ($(window).height() - $('.vertText').outerHeight()) / 2
    });


    $(window).resize(function() {
        $('.vertText').css({
            top : ($(window).height() - $('.vertText').outerHeight()) / 2
        });
    });
});