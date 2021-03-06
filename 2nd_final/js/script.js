// Wow
$(function() {
    new WOW().init();
});

// header

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 648) {
            $('.header').addClass('is-scrolled');
        } else {
            $('.header').removeClass('is-scrolled');
        }
    });
});

// swiper

$(function() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            768: {
                spaceBetween: 40,
            }
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });
});

// Back to Top

$(function() {
    var topIcon = $('.toTop');
    topIcon.hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topIcon.fadeIn(300);
        } else {
            topIcon.fadeOut(300);
        }
    });
});

// Drawer

$(function() {
    $('.drawer-icon').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('.drawer-content').toggleClass('is-active');
        $('.drawer-background').toggleClass('is-active');
        $('.main').toggleClass('is-active');
    });
});

// move in page link

$(function() {
    $('a[href^="#"]').on('click', function() {
        var header = $('.header').innerHeight();
        var speed = 300;
        var id = $(this).attr("href");
        var target = $("#" == id ? "html" : id);
        var position = 0;
        if (id != '#') {
            position = $(target).offset().top - header;
        }
        $("html, body").animate(
            {scrollTop: position
            },
            speed
        );
        return false;
    });
}); 

// FAQs

$(function() {
    $('.qa-box-q').on('click',function() {
        $(this).next().slideToggle();
        $(this).children('.qa-bars').toggleClass('qa-open');
    });
});

// contact

$(function() {
    // submit ????????????disabled
    $('.submit-btn').prop("disabled", true);

    // ?????????????????????
    $('form input:required').change(function() {
        // ??????????????????????????????
        let flag = true;
        // ???????????????????????????????????????
        $('form input:required').each(function(e) {
            // ??????????????????????????????false(disabled)
            if($('form input:required').eq(e).val() === "") {
                flag = false;
            }
            // ?????????????????????
            if(flag) {
                // submit???????????????
                $('.submit-btn').prop("disabled", false);
            }
            // ?????????????????????
            else {
                // false(disabled)
                $('.submit-btn').prop("disabled", true);
            }
        });
    });
});