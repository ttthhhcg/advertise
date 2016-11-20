jQuery.noConflict();

(function($) {



  var $body = jQuery('body');



  var touchM = "ontouchstart" in window;



  if(touchM) jQuery('.folioThumb').css({'opacity': '1 !important'});



  jQuery(function(){



    /* Various jQuery plugins initializations */



    if(jQuery('.toggle').length > 0) jQuery('.toggle').each(function(){jQuery(this).toggle();});

    if(jQuery('.tabs').length > 0) jQuery('.tabs').each(function(){jQuery(this).tabs(jQuery(this).find('div.tabsContent'))});

    if(jQuery('.twitterList').length > 0) jQuery('.twitterList').twitter(jQuery('.twitterUser').text(),1);



    /* Fullscreen video */

    if(jQuery('#fullScreenVideo').length > 0) {



          function resizeVideo(){



              var vW = 0, vH = 0, vT = 0, vL = 0, ratio = 640/360, winW = jQuery(window).width(), winH = jQuery(window).height() - 140;



              if(ratio <= winW/winH){

                  vW = Math.ceil(winW);

                  vH = Math.ceil(vW / ratio);

                  vT = Math.round((winH - vH)/2);

              } else {

                  vH = Math.ceil(winH);

                  vW = Math.ceil(vH * ratio);

                  vL = Math.round((winW - vW)/2);

              }



              jQuery('#fullScreenVideo').css({'width': vW, 'height': vH, 'top': vT+70, 'left': vL});

              jQuery('#fullScreenVideo_media').css({'width': vW, 'height': vH});



          }



      var player = jQuery('video').mediaelementplayer({

        alwaysShowControls: true,

        iPadUseNativeControls: false,

        iPhoneUseNativeControls: false,

        AndroidUseNativeControls: false,

        enableKeyboard: true,

        pluginPath: theme_objects.base + '/js/mediaelement/',

        success:function(mediaelement){

              jQuery('#fullScreenVideo').css('display', 'block');

              resizeVideo();

              mediaelement.play();

        }

      });



      player.bind('pause', function(){

            jQuery('#playPause a').removeClass('paused');

      })



      player.bind('play', function(){

            jQuery('#playPause a').addClass('paused');

      })



          function resizeVideo(){



              var vW = 0, vH = 0, vT = 0, vL = 0, ratio = 640/360, winW = jQuery(window).width(), winH = jQuery(window).height() - 140;



              if(ratio <= winW/winH){

                  vW = Math.ceil(winW);

                  vH = Math.ceil(vW / ratio);

                  vT = Math.round((winH - vH)/2);

              } else {

                  vH = Math.ceil(winH);

                  vW = Math.ceil(vH * ratio);

                  vL = Math.round((winW - vW)/2);

              }



              jQuery('#fullScreenVideo').css({'width': vW, 'height': vH, 'top': vT+70, 'left': vL});

              jQuery('.mejs-container.mejs-video').css({'width': vW, 'height': vH});



          }



          jQuery(window).bind('resize', resizeVideo);



          if(touchM)

            jQuery('#playPause').children('a').addClass('paused');



    }



    /* Posts & Pages slider */



    if(jQuery('#postSlider').length > 0){

        jQuery("#postSlider").slides({

        effect: 'fade',

        pagination: false,

        next: 'sliderBtnNext',

        prev: 'sliderBtnPrev',

        generatePagination: false,

        customPagination: 'sliderPagination',

        crossfade:true

      });

    }



    /* Images roll over effect */



    jQuery('img.imgFrame').hover(function(){

      jQuery(this).stop().animate({'opacity': .8}, 200);

    }, function(){

      jQuery(this).stop().animate({'opacity': 1}, 200);

    });



    /* Input replacement & roll over */



    jQuery('input, textarea').each(function(){



      if(!jQuery(this).hasClass('submit') && jQuery(this).attr('id') != 'submit'){

        jQuery(this).attr('data-value', jQuery(this).val())

          .focus(function(){

            jQuery(this).addClass('focusInput');

            if(jQuery(this).val() == jQuery(this).attr('data-value')){

              jQuery(this).val('');

            } else {

              jQuery(this).select();

            }

          })

          .blur(function(){

            jQuery(this).removeClass('focusInput');

            if(jQuery(this).val() == ''){

              jQuery(this).val(jQuery(this).attr('data-value'));

            }

          });

      }



    });



    /* Contact form handling */



    if(jQuery('#contact').length > 0){



      var $name = jQuery('#formName');

      var $email = jQuery('#formEmail');

      var $message = jQuery('#formMessage');

      var $error = jQuery('#contact p.contactError');



      jQuery('#submit').click(function(){



        var ok = true;

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;



        if($name.val().length < 3 || $name.val() == $name.data('value')){

          showError($name);

          ok = false;

        }



        if($email.val() == '' || $email.val() == $email.data('value') || !emailReg.test($email.val())){

          showError($email);

          ok = false;

        }



        if($message.val().length < 5 || $message.val() == $message.data('value')){

          showError($message);

          ok = false;

        }



        function showError($input){

          $input.val($input.data('value'));

          $input.addClass('contactErrorBorder');

          $error.fadeIn();

        }



        if(ok){



          jQuery('#contact form').fadeOut();



          $.ajax({

            type: 'POST',

            url: theme_objects.base + '/contact-form.php',

            data: 'name=' + $name.val() + '&email=' + $email.val() + '&message=' + $message.val() + '&send_to=' + theme_objects.email,

            success: function(){

              jQuery('#contact').html(theme_objects.formsuccess).hide().fadeIn();

            }

          });



        }



        return false;



      });



      $name.focus(function(){resetError(jQuery(this))});

      $email.focus(function(){resetError(jQuery(this))});

      $message.focus(function(){resetError(jQuery(this))});



      function resetError($input){

        $input.removeClass('contactErrorBorder');

        $error.fadeOut();

      }



    }



  });



  /* Links roll over effect */

  jQuery('a').each(function(){

    if(!jQuery(this).data('filter') && !jQuery(this).parent().parent().parent().hasClass('pagination'))

      jQuery(this).hoverFadeColor();

  })



  /* Social icons roll over effect */

  if(!jQuery('html').hasClass('ie8'))

    jQuery('.socialList li a').each(function(){

      jQuery(this).parent().append(jQuery(this).clone());

      jQuery(this).addClass('socialHover').css('backgroundPosition', ' -18px ' + jQuery(this).css('backgroundPosition').slice(jQuery(this).css('backgroundPosition').indexOf('-'), jQuery(this).css('backgroundPosition').indexOf('px', jQuery(this).css('backgroundPosition').indexOf('-'))) + 'px');

      jQuery(this).parent().hover(function(){

        jQuery(this).find('.socialHover').stop().animate({'opacity': 1}, 300, 'linear');

      }, function(){

        jQuery(this).find('.socialHover').stop().animate({'opacity': 0}, 300, 'linear');

      });

    });



  /* Page holder Interaction */





  if(!$body.hasClass('page-template-template-slideshow-php'))

    jQuery('.minimize').minimize(jQuery(this));



  /* Sidebar Interaction */



  var mobile = (jQuery(document).width() < 640 ? true : false);

  var smaller = (jQuery(document).width() < 360 ? true : false);

  var $sidebar = jQuery('#sidebar');

  var $topFooter = jQuery('#topFooter');

  var $bottomFooter = jQuery('#bottomFooter');

  var $content = jQuery('#content > div');

  var $close = jQuery('#close');

  //var $rightFooter = jQuery('#topFooter div.right');

  var $supersized = jQuery('#supersizedControls');

  var $fSlide = jQuery('.page-template-template-slideshow-php section.galleryContent');



  if($body.hasClass('page-template-template-slideshow-php') && $body.hasClass('Stick')) $.topBoss = 'opened';



  if($body.hasClass('Stick'))

    $body.addClass('topBoss');



  var sidebarOpened = true;

  $close.click(function(){

    if(!mobile){

      if(sidebarOpened){

        closeSidebar();

        $.topBoss = 'closed';

        $body.removeClass('topBoss');

      } else {

        openSidebar();

        $.topBoss = 'opened';

        $body.addClass('topBoss');

      }

    } else {

      //console.log(sidebarOpened);

      if(!$sidebar.hasClass('mobileSidebar')){

        $sidebar.addClass('mobileSidebar');

      } else {

        $sidebar.removeClass('mobileSidebar');

      }

    }

    return false;

  });



  if(!sidebarOpened) {

    if($.cookie('sidebar_cookie_2') == 'opened' || $.cookie('sidebar_cookie_2') == 'null')

      initSidebar('opened');

    else if($.cookie('sidebar_cookie_2') == 'closed')

      initSidebar('closed');

  }



  function initSidebar(type){



    if(type == 'opened' && !mobile){

      $sidebar.css('marginLeft', 0);

      $topFooter.css('marginLeft', 280);

      //$rightFooter.css('marginRight', 20);

      $bottomFooter.css('marginLeft', -270);

      $content.css('marginLeft', 280);

      $supersized.css('left', 280);

      $fSlide.css('left', 280);

    } else if(type =='closed' && !mobile){

      $sidebar.css('marginLeft', -270);

      $topFooter.css('marginLeft', 0);

      //$rightFooter.css('marginRight', 20);

      $bottomFooter.css('marginLeft', 0);

      $content.css('marginLeft', 0);

      $supersized.css('left', 0);

      $fSlide.css('left', 0);

    }

  }



  function closeSidebar(){

    $.cookie('sidebar_cookie_2', 'closed', {expires:7, path: '/'});

    $close.addClass('openIcon');

    if(!mobile){

      $sidebar.stop().animate({'marginLeft': -270}, 600, 'swing');

      //$topFooter.stop().animate({'marginLeft': 0}, 600, 'swing');

      //rightFooter.stop().animate({'marginRight': 20}, 600, 'swing');

      $bottomFooter.stop().animate({'marginLeft': 0}, 600, 'swing');

      $content.stop().animate({'marginLeft': 0}, 600, 'swing');

      $supersized.stop().animate({'left': 0}, 600, 'swing');

      $fSlide.stop().animate({'left': 0}, 600, 'swing');

    } else {

      /* if(smaller)

        $sidebar.css('marginTop', '-90px !important');

      else

        $sidebar.css('marginTop', '-40px !important'); */

    }

    setTimeout(function(){

      sidebarOpened = false;

    }, 600);

  }

  function openSidebar(){

    $close.removeClass('openIcon');

    $.cookie('sidebar_cookie_2', 'opened', {expires:7, path: '/'});

    if(!mobile){

      $sidebar.stop().animate({'marginLeft': 0}, 600, 'swing');

      //$topFooter.stop().animate({'marginLeft': 280}, 600, 'swing');

      //$rightFooter.stop().animate({'marginRight': 20}, 600, 'swing');

      $bottomFooter.stop().animate({'marginLeft': 0}, 600, 'swing');

      $content.stop().animate({'marginLeft': 280}, 600, 'swing');

      $supersized.stop().animate({'left': 280}, 600, 'swing');

      $fSlide.stop().animate({'left': 280}, 600, 'swing');

    } else {

      //$sidebar.css('marginTop', '0 !important');

    }

    setTimeout(function(){

      sidebarOpened = true;

    }, 600);

  }



  var autoCloseI;



  var autoCloseSidebar = $body.hasClass('Stick') ? false : true;



  if(!autoCloseSidebar && !mobile) $fSlide.css('left', 280);



  if(autoCloseSidebar) {

    jQuery(document).mousemove(function(event){

      $.cookie('mouse_cookie', event.pageX, {path: '/'});

      if(jQuery(document).width() > 640)

        if(event.pageX < 40 && !sidebarOpened){

          //clearTimeout(autoCloseI);

          //openSidebar();

        } else if(event.pageX > 300 && sidebarOpened){

          clearTimeout(autoCloseI);

          closeSidebar();

        }

    });



    autoCloseI = setTimeout(function(){

      if(parseInt($.cookie('mouse_cookie')) > 280)

        closeSidebar();

    }, 1000);



  }



  if(mobile){

    jQuery('.footer').children('div').children('div').each(function(){

      jQuery(this).css({'paddingLeft': '50%', 'marginLeft': -jQuery(this).width()/2})

    });

  } else {

    jQuery('.footer').children('div').children('div').each(function(){

      jQuery(this).css({'paddingLeft': 'auto', 'marginLeft': 'auto'})

    });

  }



  /* Check for videos & fix blog navigation */



  var videoOn1 = jQuery('.post #postSlider .slides_container iframe').length > 0;

  var videoFiles1 = jQuery('.post #postSlider .slides_container div');

  var videoOn2 = jQuery('.page #postSlider .slides_container iframe').length > 0;

  var videoFiles2 = jQuery('.page #postSlider .slides_container div');



  /* Init portfolio */



  if(jQuery('#portfolio').length > 0) jQuery('#portfolio').marsPortfolio(autoCloseSidebar);

  if(jQuery('#gallery').length > 0) jQuery('#gallery').marsGallery(autoCloseSidebar);



  /*Handle responsive menu */



  jQuery('#responsiveMenu select').styledSelect().bind('change', function(){

    document.location.href = jQuery(this).find('option:selected').data('href');

  });



  var fR = true, $logo = jQuery('#logo');

  if(smaller) $logo.css({'width': $logo.width(), 'marginLeft': -$logo.width()/2});

  jQuery(window).resize(function(){



    if(jQuery(document).width() < 360 && fR){

      fR = false;

      smaller = true;

      $logo.css({'width': $logo.width(), 'marginLeft': -$logo.width()/2});

    } else if(jQuery(document).width() >= 360) {

      fR = true;

      smaller = false;

      $logo.css({'width': 'auto', 'marginLeft': '0'});

    }



    if(jQuery('#mobileCheck').css('display') == 'block')

      mobile = true;

    else

      mobile = false;



    if(mobile){

      $fSlide.css('left',0);

      if(!sidebarOpened){

        $sidebar.stop().css('marginLeft', 0);

        /* if(smaller)

          $sidebar.css('marginTop', -90);

        else

          $sidebar.css('marginTop', -40); */

      } else {

        $sidebar.css('marginTop', 0);

      }

    } else {

      if(autoCloseSidebar) {

        sidebarOpened=false;

        $sidebar.css('marginTop', 0);

        if(!sidebarOpened){

          $sidebar.css('marginLeft', -270);

          $topFooter.css('marginLeft', 0);

        //  $rightFooter.css('marginRight', 20);

          $bottomFooter.css('marginLeft', 0);

          $content.css('marginLeft', 0);

          $supersized.css('left', 0);

          $fSlide.css('left', 0);

        } else {

          $sidebar.css('marginLeft', 0);

          $topFooter.css('marginLeft', 280);

        //  $rightFooter.css('marginRight', 20);

          $bottomFooter.css('marginLeft', 0);

          $content.css('marginLeft', 280);

          $supersized.css('left', 280);

          $fSlide.css('left', 280);

        }

      }

    }



    if($.topBoss == 'closed' && !mobile && !autoCloseSidebar){

      sidebarOpened=false;

      // $sidebar.css('marginTop', 90);

      $sidebar.css('marginLeft', -270);

      $topFooter.css('marginLeft', 0);

    //  $rightFooter.css('marginRight', 20);

      $bottomFooter.css('marginLeft', 0);

      $content.css('marginLeft', 0);

      $supersized.css('left', 0);

      $fSlide.css('left', 0);

    }



    if($.topBoss == 'opened' && !autoCloseSidebar) $fSlide.css('left', 280);



    if(videoOn1)

      videoFiles1.css('width', jQuery('.post').innerWidth()-100);

    if(videoOn2)

      videoFiles2.css('width', jQuery('.contentHolder').innerWidth()-100);



    if(mobile){

      jQuery('.footer').children('div').children('div').each(function(){

        jQuery(this).css({'paddingLeft': '50%', 'marginLeft': -jQuery(this).width()/2})

      });

    } else {

      jQuery('.footer').children('div').children('div').each(function(){

        jQuery(this).css({'paddingLeft': '0', 'marginLeft': 'auto'})

      });

    }



  });



  jQuery('#top').click(function(){

    jQuery('html,body').animate({scrollTop: 0}, 500, 'easeInQuad');

    return false;

  });



  /* Rework IE8 background */

  if(jQuery('html').hasClass('ie8')){



    var curBg = $body.attr('style');



    if(curBg != undefined && curBg != null && curBg != ''){



          curBg = curBg.split('(');

          curBg = curBg[1].split(')');



      $body.css('background-image', 'none !important');



      var $ie8back = $body.append('<div id="#ie8back"></div>');



      $ie8back.css({

              "filter" : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+curBg[0]+"', sizingMethod='scale')",

              "-ms-filter" : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+curBg[0]+"', sizingMethod='scale')",

              "width" : "100%",

              "height" : "100%",

              "postion" : "fixed",

              "backgroundImage" : ""



              });



        }



  }



  /* Setup fullscreen slideshow page template */



  if($body.hasClass('page-template-template-slideshow-php')){

    jQuery('#content').append('<ul id="supersized"></ul>');


    var imgArray = new Array();

    jQuery('#projectSlides').children('img').each(function(){



      imgArray.push({

        image: jQuery(this).attr('src'),

        title: jQuery(this).attr('title')

      })



    });



    var fitPortrait = $body.hasClass('Fit') ? 1 : 0;



    $.supersized({

      slides: imgArray,

      transition: 1,

      transition_speed: 1000,

      horizontal_center: 12,

      image_protect: 0,

      fit_portrait: fitPortrait,

      fit_landscape: 0

    });

  }



  /* Setup iPad motion */


/*
  if(touchM){

    jQuery('#sidebar').touchSwipe(function(dir){

      if(jQuery(window).width() > 640){

        if(dir == 'right')

          openSidebar();

        else if(dir == 'left')

          closeSidebar();

      }

    })

  }
*/


  if(touchM)
    jQuery('input').onfocus = function() {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }

    /* Created dropdowns in header and filter portfolio based on these change functions  */
    if($("#body").hasClass('page-template-template-videoportfolio-php') || $("#body").hasClass('page-template-template-portfolio-php')) {
      jQuery('#content > div').stop().animate({'marginLeft': 0}, 600, 'swing');
    }

    jQuery('#filterReset').on('click', function(event) {
      event.preventDefault();
        jQuery("#frame-style, #panel-material, #lighting, #venues, #logos, #price-range").prop('selectedIndex', 0);
        jQuery('#portfolio').find('a').fadeIn().removeClass('filtered');
    });

    jQuery("#frame-style, #panel-material, #lighting, #venues, #logos, #price-range").on('change', function(){
    switch(this.id) {
          case 'frame-style':
            jQuery("#panel-material, #lighting, #venues, #logos, #price-range").prop('selectedIndex', 0);
            break;
          case 'panel-material':
            jQuery("#frame-style, #lighting, #venues, #logos, #price-range").prop('selectedIndex', 0);
            break;
          case 'lighting':
            jQuery("#frame-style, #panel-material, #venues, #logos, #price-range").prop('selectedIndex', 0);
            break;
          case 'venues':
            jQuery("#frame-style, #panel-material, #lighting, #logos, #price-range").prop('selectedIndex', 0);
            break;
          case 'logos':
            jQuery("#frame-style, #panel-material, #lighting, #venues, #price-range").prop('selectedIndex', 0);
            break;
          case 'price-range':
            jQuery("#frame-style, #panel-material, #lighting, #venues, #logos").prop('selectedIndex', 0);
    }
        var txt = "";
        txt = txt + $(this).val().replace(/\$/g, "").replace(/\,/g,"");
        filterOptions(txt);
    })

  jQuery("#panel-material").on('change', function(){
        txt = $(this).val();
        filterOptions(txt);
    })

    jQuery("#lighting").on('change', function(){
        txt = $(this).val();
        filterOptions(txt);
    })

    jQuery("#venues").on('change', function(){
        txt = $(this).val();
        filterOptions(txt);
    })

    jQuery("#logos").on('change', function(){
        txt = $(this).val();
        filterOptions(txt);
    })

    jQuery("#price-range").on('change', function(){
        txt = $(this).val();
        filterOptions(txt);
    })


    /* Filter options function inputs the value from the select option and checks if it is
        a value in the dataTypeArray.  If true, filtering occurs, if not, nothing is filtered. */
    function filterOptions(tags) {
      $('#portfolio').find('a').fadeOut();
      var dataTypeArray = new Array();
      var dataTypes = $('#portfolio > a').each(function() {
      var dt = $(this).attr('data-type');
      dts = dt.split(" ");
      for(i=0, ii=dts.length; i<ii; i++) {
          dataTypeArray.push(dts[i]);
        }
      });

      if($.inArray(tags, dataTypeArray) !== -1) {
        $('#portfolio').find('a').filter(".folioItem[data-type~=" + tags + "]").addClass('filtered').fadeIn();
      } else {
        $('#portfolio').find('a').fadeOut().addClass('filtered');
      }
    }
    /* End filtering functions */




  /*var newList = $('.navPostHolder').html();

  console.log(newList);

  var newContainer = $('#menu-item-1298 .sub-menu');

  $(newContainer).addClass('productsNav');

  finishedList = $(newContainer).empty().html(newList);

  console.log(finishedList);*/



})(jQuery);


(function($) {

  jQuery('.toggle').children('li').eq(0).addClass('opened');

})(jQuery);

/*luan*/

// jQuery(document).ready(function(){

//  var offset = jQuery("#page").offset();

//    var topPadding = 93;

// /* alert(offset.top); */

//    jQuery(window).scroll(function() {



//      if (jQuery(window).scrollTop() < topPadding) {

//        jQuery("#sidebar").css('top',topPadding-jQuery(window).scrollTop());



//      } else {

//        jQuery("#sidebar").css('top',0);



//      }

//    });

// });

/* Our Portfolio Page */

jQuery(document).ready(function(){

  // Disabling all other siblings of folioItems to prevent pointer action.

  jQuery('.folioItem').on('click', function(event) {

    if ( jQuery('.openedP').length > 0 ) {

      jQuery(this)
        .addClass('disabledCurrent')
          .siblings('.folioItem')
            .addClass('disabledSiblings');

    }

  });

  // Remove class if clicked on the outside div.

  jQuery('#portfolio #projectHover.hasButtons').on('click', function(event) {

    if ( jQuery('#content .portfolio').length > 0 ) {

      jQuery('.folioItem')
        .removeClass('disabledCurrent')
        .removeClass('disabledSiblings');

    }

  });

  // Remove class if clicked on the close button.
  function removeClassFolioItem(){
    jQuery('.folioItem')
      .removeClass('disabledCurrent')
      .removeClass('disabledSiblings');
  }

  jQuery('#content').on('click', '.portfolio .actionButton.close', function(event) {
    removeClassFolioItem();
  });

  jQuery('#content').on('click', '.videoportfolio .actionButton.close', function(event) {
    removeClassFolioItem();
  });

  var pageWindow = jQuery(window);
  var pageDocument = jQuery(document);

  // Portfolio loading.
  pageWindow.load(function() {
    jQuery('#load-overlay').hide();
  });

  pageWindow.scroll(function() {
    if ( ( pageWindow.scrollTop() + pageWindow.height() ) >= pageDocument.height() - 47 ) {
      jQuery('#load-overlay img').addClass('fixed').addClass('end');
    } else if ( pageWindow.scrollTop() > 100 ) {
      jQuery('#load-overlay img').addClass('fixed').removeClass('end');
    } else {
      jQuery('#load-overlay img').removeClass('fixed').removeClass('end');
    }
  });

});
