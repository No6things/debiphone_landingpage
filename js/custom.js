jQuery(document).ready(function () {


    jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
    jQuery('body').waitForImages(function() {
        jQuery(".page-mask").delay(1200).fadeOut('slow');
        jQuery('body').css('overflowY','auto');
    });


/*-------------------------------------------------*/
/* =  Animated content
/*-------------------------------------------------*/

    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );

    wow.init();

/*==========================*/
/* Sticky Navigation
/*==========================*/

    jQuery("#navigation").sticky({topSpacing:0});


/* ==============================================
Drop Down Menu Fade Effect
=============================================== */

    $('.nav-toggle').hover(function() {
        'use strict';
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
        }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
     });

    $('#navigation .nav .dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });



/*==========================*/
/* Navigation Scrolling
/*==========================*/


    jQuery('.nav').onePageNav({ //gives error on console
            filter: ':not(.external)',
            begin: function() {
            console.log("start")
            },
            end: function() {
            console.log("stop")
            }
        });


    var navigationHeight = jQuery("#navigation").outerHeight();

    jQuery('.align-center a, .caption-inside a, .top-logo a, .video-section a').click(function(){
        jQuery('html, body').animate({
            scrollTop: jQuery( $.attr(this, 'href') ).offset().top - navigationHeight + 44
        }, 800, 'easeInQuad');

        /* Fix jumping of navigation. */
        setTimeout(function() {
            jQuery(window).trigger('scroll');
        }, 900);

        return false;
    });





/*==========================*/
/* FullScreen Slider
/*==========================*/

    jQuery(function (){
        jQuery('#fullscreen-slider').maximage({
            cycleOptions:{
                fx: 'fade',
                speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
                timeout: 0,
                prev: '#slider_left',
                next: '#slider_right',
                pause: 1,
                before: function(last,current){
                    jQuery('.slide-content').fadeOut().animate({top:'500px'},{queue:false, easing: 'easeOutQuad', duration: 750});
                    jQuery('.slide-content').fadeOut().animate({top:'-500px'});
                },
                after: function(last,current){
                    jQuery('.slide-content').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 650});
                }
            },



            onFirstImageLoaded: function(){
                //jQuery('#cycle-loader').delay(1000).hide();
                jQuery('#fullscreen-slider').delay(1000).fadeIn('slow');
                jQuery('.slide-content').fadeIn().animate({top:'0'});
                jQuery('.slide-content a').bind('click',function(event){
                    var $anchor = jQuery(this);
                    jQuery('html, body').stop().animate({
                    scrollTop: jQuery($anchor.attr('href')).offset().top -44
                    }, 1500,'easeInOutExpo');
                    event.preventDefault();
                    });
            }
        });

    });




/*----------------------------------------------------*/
/*  Parallax section
/*----------------------------------------------------*/
    //Calculating page width
    pageWidth = jQuery(window).width();

    //Parallax
    jQuery(window).bind('load', function () {
        if(pageWidth > 980) {
            parallaxInit();
        }
    });

    function parallaxInit() {
        jQuery('.landing-left').parallax("30%", 0.1);
        jQuery('.testimonial-wrap').parallax("30%", 0.1);
        jQuery('.vector-wrap').parallax("30%", 0.1);
        jQuery('.quote-wrap').parallax("30%", 0.1);
        jQuery('.subscription-wrap').parallax("30%", 0.1);
        jQuery('.image-parallax').parallax("50%", 0.1);

    }



    /*----------------------------------------------------*/
    /*  CUSTOM EMAIL SUBSCRIPTION
    /*----------------------------------------------------*/
    $("#sendgrid-buttom")
      .click(function (e) {
        e.preventDefault();
        var email = $("#email").val();
        var name = $("#name").val();
        var message = $("#message").val();
        var subscriberData = {
          email: email,
          name: name
        };

        var subject = 'Subscribed to Debiphone';

        var text = "A new user subscribed to Debiphone's newsletter is trying to contact you: \n"  + name+ "\n "+message;

        var dataString ='api_user=debiphone'+'&api_key=deb1t4ndo'+ '&to=debiphone@support.com' + '&toname=Debiphone' + '&subject=' + subject + '&from='+email + '&text=' + text ;

        var dataString2 ='api_user=debiphone'+'&api_key=deb14ndo'+'&list=Debiphone' + '&data=' + JSON.stringify(subscriberData);

        function isValidEmail(email) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(email);
        };

        if (isValidEmail(email)) {
          $.ajax({
            type: "POST",
            url: "https://api.sendgrid.com/api/newsletter/lists/email/add.json",
            data: dataString2,
            beforeSend: function () {
              $(".chat")
                .LoadingOverlay("show", {
                  image: '/img/flat-loader.gif'
                });
            },
            complete: function () {
              var notymsg;
              $.ajax({
                type: "POST",
                url: "https://api.sendgrid.com/api/mail.send.json",
                data: dataString,
                complete: function () {
                  $(".chat")
                    .LoadingOverlay("hide");
                  $("#name")
                    .val('');
                  $("#email")
                    .val('');
                  $("#message")
                      .val('');
                  if   ($(".chat").hasClass("chat-es")){
                    notymsg="¡Tu mensaje se ha enviado exitosamente!";
                  }else{
                    notymsg="Your message has been sent!";
                  }

                  var n = noty({
                    text: notymsg,
                    type: 'success',
                    animation: {
                      open: 'animated bounceInLeft deez', // Animate.css class names
                      close: 'animated bounceOutLeft deez', // Animate.css class names
                      easing: 'swing', // unavailable - no need
                      speed: 500 // unavailable - no need
                    }
                  });
                }
              });
            }
          });
        } else {
          if   ($(".chat").hasClass("chat-es")){
            notymsg="¡Correo Invalido";
          }else{
            notymsg="Invalid Email!";
          }
          var n = noty({
            text: notymsg,
            type: 'error',
            animation: {
              open: 'animated bounceInLeft deez', // Animate.css class names
              close: 'animated bounceOutLeft deez', // Animate.css class names
              easing: 'swing', // unavailable - no need
              speed: 500 // unavailable - no need
            }
          });
        }
      });


/*----------------------------------------------------*/
/*  CUSTOM EMAIL UNSUBSCRIPTION
/*----------------------------------------------------*/
$("#unsubscribe-buttom")
  .click(function (e) {
    e.preventDefault();
    var email = $("#email-un").val();
    var message = $("#message-un").val();


    var subject = 'Unsubscribed to Debiphone';

    var text = "An user has unsubscribed to Debiphone's newsletter:\n"  + email+ "\n "+message;

    var dataString ='api_user=debbiphone'+'&api_key=deb1t4ndo'+'&list=Debiphone' + '&email=' + email;

    var dataString2 ='api_user=debiphone'+'&api_key=deb1t4ndo'+ '&to=debiphone@support.com' + '&toname=Debiphone' + '&subject=' + subject + '&from=debiphone@support.com' + '&text=' + text ;


    function isValidEmail(email) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(email);
    };

    if (isValidEmail(email)) {
      $.ajax({
        type: "POST",
        url: "https://api.sendgrid.com/api/newsletter/lists/email/delete.json",
        data: dataString,
        beforeSend: function () {
          $(".unsubscribe-form")
            .LoadingOverlay("show", {
              image: '/img/flat-loader.gif'
            });
        },
        complete: function () {
            var notymsg;
            $.ajax({
              type: "POST",
              url: "https://api.sendgrid.com/api/unsubscribes.add.json",
              data: dataString
            });
            $.ajax({
              type: "POST",
              url: "https://api.sendgrid.com/api/mail.send.json",
              data: dataString2,
              complete: function () {
                $(".unsubscribe-form")
                  .LoadingOverlay("hide");
                  $("#email-un")
                    .val('');
                  $("#message-un")
                      .val('');
                  if   ($(".chat").hasClass("chat-es")){
                    notymsg="¡Ya no recibiras m&aacute;s correos de Debiphone!";
                  }else{
                    notymsg="You wont be receiving Debiphone newsletter anymore!";
                  }
                  var n = noty({
                    text: notymsg,
                    type: 'success',
                    animation: {
                      open: 'animated bounceInLeft deez', // Animate.css class names
                      close: 'animated bounceOutLeft deez', // Animate.css class names
                      easing: 'swing', // unavailable - no need
                      speed: 500 // unavailable - no need
                    }
                  });
                }
              });


        }
      });
    } else {
      if   ($(".chat").hasClass("chat-es")){
        notymsg="¡Correo Invalido";
      }else{
        notymsg="Invalid Email!";
      }
      var n = noty({
        text: notymsg,
        type: 'error',
        animation: {
          open: 'animated bounceInLeft deez', // Animate.css class names
          close: 'animated bounceOutLeft deez', // Animate.css class names
          easing: 'swing', // unavailable - no need
          speed: 500 // unavailable - no need
        }
      });
    }
  });


/*----------------------------------------------------*/
/*  Scroll To Top Section
/*----------------------------------------------------*/
    jQuery(document).ready(function () {

        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        });

        jQuery('.scrollup').click(function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

/*----------------------------------------------------*/
/*  Scroll Chat
/*----------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery('.scrollchat').click(function () {
/*-------------------Chat Open-------------------------*/
        if (jQuery('.chat').hasClass("chat-active")) {
          console.log("chat should undo scroll");
          jQuery(".chat").removeClass("chat-active");
          jQuery(".chat").animate({bottom: "-300px"},"slow");
          jQuery(".scrollchat > i").fadeOut("slow", function(){
            jQuery(this).removeClass("fa-angle-down")
            .addClass("fa-angle-up")
            .fadeIn();
          });
          return false;
        }
/*--------------------Chat Close------------------------*/
        console.log("chat should scroll top");
        jQuery(".chat").addClass("chat-active");
        if (jQuery('.chat').hasClass("slideInUp")) {
          jQuery(".chat").animate({bottom: "0px"});
        }else{
          jQuery(".chat").addClass("animated slideInUp");
        }
        jQuery(".scrollchat > i").fadeOut("slow", function(){
          jQuery(this).removeClass("fa-angle-up")
          .addClass("fa-angle-down")
          .fadeIn();
        });
        return false;
    });
});


/*----------------------------------------------------*/
/*  Accordion Section
/*----------------------------------------------------*/

    jQuery('.accordionMod').each(function (index) {
        var thisBox = jQuery(this).children(),
            thisMainIndex = index + 1;
        jQuery(this).attr('id', 'accordion' + thisMainIndex);
        thisBox.each(function (i) {
            var thisIndex = i + 1,
                thisParentIndex = thisMainIndex,
                thisMain = jQuery(this).parent().attr('id'),
                thisTriggers = jQuery(this).find('.accordion-toggle'),
                thisBoxes = jQuery(this).find('.accordion-inner');
            jQuery(this).addClass('panel');
            thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
            thisTriggers.wrap('<div class=\"panel-heading\" />');
            thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + thisParentIndex + '_' + thisIndex);
        });
        jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
        jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
        jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
        jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
        jQuery('.accordionMod .accordion-toggle').click(function () {
            if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
                jQuery(this).removeClass('current');
                jQuery(this).find('.icon').removeClass('iconActive');
            } else {
                jQuery(this).addClass('current');
                jQuery(this).find('.icon').addClass('iconActive');
            }
            jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
            jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
        });
    });

/*----------------------------------------------------*/
/*  Carousel Section
/*----------------------------------------------------*/


    jQuery('.bxslider').carousel({interval: false, wrap: false});

    jQuery('.bxslider').carousel({interval: 5000, pause: "hover"});

});



/*----------------------------------------------------*/
/*  BxSlider
/*----------------------------------------------------*/


jQuery(document).ready(function(){

    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }

    jQuery('.fullwidth-slider').bxSlider({
        mode: "fade",
        pager: false,
        auto: true,
        pause: 10000,
        autoStart: true,
        controls: false,
        autoDirection: false,
        autoHover: true,
        maxSlides:1,
        slideMargin: 50,

        onSlideBefore: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
            ($slideElement).find('.slide-caption').hide().animate({top:'-100px'});
        },
        onSlideAfter: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
        },

    });

    jQuery('.support-slider').bxSlider({
        mode: "fade",
        pager: false,
        auto: true,
        pause: 4000,
        autoStart: true,
        controls: false,
        autoDirection: false,
        autoHover: true,
        maxSlides:1,

        onSlideBefore: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeOut().animate({rigth:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
            ($slideElement).find('.slide-caption').hide().animate({rigth:'-100px'});
        },
        onSlideAfter: function($slideElement) {
            ($slideElement).find('.slide-caption').fadeIn().animate({left:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
        },

    });

    jQuery('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');


    if( ( onMobile === false ) && ( jQuery('.parallax-slider').length ) ) {

        skrollr.init({
            edgeStrategy: 'set',
            smoothScrolling: false,
            forceHeight: false
        });

    }


    jQuery('.text-slide').bxSlider({
        controls: false,
        adaptiveHeight: true,
        pager: false,
        auto:true,
        mode:'fade',
        pause: 3000,
    });


});

 /* ==============================================
Firefox anchor fix
=============================================== */
    $(document).ready(function(){
        if ( $.browser.mozilla ) {
        var h = window.location.hash;
        if (h) {
            var headerH = $('#navigation').outerHeight();
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

                event.preventDefault();
        }

    }
    });
