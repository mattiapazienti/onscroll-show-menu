(function ($) {
    
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
   
   
// SCROLL PART   
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
$('body').bind(mousewheelevt, function(e){

    var evt = window.event || e //equalize event object     
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if(delta > 0) {
          $('#nav').slideDown(300);  
    }
    else{
        $('#nav').slideUp(300);
    }   
});

    
})(jQuery);
