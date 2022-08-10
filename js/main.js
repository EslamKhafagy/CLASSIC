/*global $, console, alert*/

$(document).ready(function () {
    
    'use strict';
    
    // header resize
    
    var myHeader = $('.header');

    myHeader.height($(window).height());
    
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        $('.slider').each(function () {
     
            $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2);
        });
        
    });
    

   // move of activation
    
    $('.link li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
    // Adjust Slider
    
    $('.slider').each(function () {
     
        $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2);
    });
        
    // slider    
    $('.slider').bxSlider({
        pager : false
    });
    
    // Smoth Scroll 
    
    $('.link li a').click(function () {
                
        $('html, body').animate({
            scrollTop: $(this).data('value').offset().top
        }, 1000);
        // $(this).data('value')
    });
    
    // Auto Slider
    
    (function autoSlider() {
        
        $('.sli .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(500, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn(500);
                    
                    autoSlider();
                    
                });
            } else {
                
                $(this).delay(3000).fadeOut(500, function () {
                    
                    $(this).removeClass('active');
                    $('.sli div').eq(0).addClass('active').fadeIn(500);
                    
                    autoSlider();
                });
            }
        });
    }());
    
// Suffle Plugin
    $('#Container').mixItUp();
// Adjust Scroll 
    $("body").niceScroll({
        cursorcolor:"#19bd9b",
        cursorwidth:"10px",
        cursorborderradius:0,
        cursorborder:"none",
    });
    $(".do-nicescrol4").niceScroll(".wrap"); 
    
    
});
