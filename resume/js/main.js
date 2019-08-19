
function main() {

  (function () {
    'use strict';

    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function () {

      //在页面滑动的时候，如果“语言切换按钮”未显示，则显示3S
      if ($('.lang').is(':hidden')) {
        $('.lang').show(1000, function () {
          setTimeout(function () {
            $('.lang').hide();
          }, 3000);
        });
      }

      var scrollTop = $(this).scrollTop();
      var topDistance = $('header').height() - $('nav').height();

      if ((topDistance) < scrollTop) {
        $('#nav').attr("class", 'affix');
      }
      else {
        $('#nav').attr("class", 'affix-top');
      }

    });

    setTimeout(function () {
      $(".lang").css("display", "none");
    }, 3000);

    $('body').scrollspy({ target: '#nav', offset: 100 });

    // skills chart
    $(document).ready(function (e) {
      //var windowBottom = $(window).height();
      var index = 0;
      $(document).scroll(function () {
        var top = $('#skills').height() - $(window).scrollTop();
        if (top < -300) {
          if (index == 0) {

            $('.chart').easyPieChart({
              easing: 'easeOutBounce',
              onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
              }
            });

          }
          index++;
        }
      });
      //console.log(nagativeValue)
    });


    // Portfolio isotope filter
    $(window).load(function () {
      var $container = $('.portfolio-items');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function () {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });


    // CounterUp
    $(document).ready(function ($) {
      if ($("span.count").length > 0) {
        $('span.count').counterUp({
          delay: 10, // the delay time in ms
          time: 1500 // the speed time in ms
        });
      }
    });

    // Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
      social_tools: false
    });

  }());


}
main();