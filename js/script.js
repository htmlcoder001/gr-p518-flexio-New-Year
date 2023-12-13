var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');




$(function () {
    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        let rul = document.getElementById(_href.slice(1));
        if (!rul) {
            _href = "#order_form";
        }

        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });
    $(".fadepopup input").click(function () {
        $('.eeee, .fadepopup').css('display', 'none');
    });
});

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('#boxes').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();

    let el = $('#roulette');
    if (!el) {
        el = $('#order_form')
    }
    let top = el.offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});


