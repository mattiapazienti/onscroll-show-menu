(function ($) {
    
    // TOGGLE MENU
    wrapper = $('body');
    el = wrapper.find('.mobile'); 
    act = el.children().children();
    act.children().not('a').hide();
    act.click(function() {
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).children().not('a').slideUp('slow');
        } else {
            $(this).addClass('open');
            $(this).children().not('a').slideDown('slow');
            $(this).siblings().removeClass('open');
            $(this).siblings().children().not('a').slideUp('slow');
        }
    });
   
   
    // SCROLL PART - ONLY DESKTOP - FOR MOBILE CHECK REPO
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF
    $('body').bind(mousewheelevt, function(e){

        var evt = window.event || e   
        evt = evt.originalEvent ? evt.originalEvent : evt;           
        var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta 

        if(delta > 0) {
            $('#nav').slideDown(300);  
        }
        else{
            $('#nav').slideUp(300);
        }   
    });

    
})(jQuery);
