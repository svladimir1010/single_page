$(function() {

    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 3000;
    var translateWidth = 0;
    var navBtnId = 0;

    // var switchInterval = setInterval(nextSlide, slideInterval);
    // $('#viewPort').hover(function(){
    // 	clearInterval(switchInterval);
    // },function() {
    // 	switchInterval = setInterval(nextSlide, slideInterval);
    // });

    function firstclick() {

        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1

        $('.left').removeClass('pasiv').addClass('activ');
        $('.center').removeClass('activ').addClass('pasiv');
        $('.right').removeClass('activ').addClass('pasiv');

        $('.activ').mouseover(function() {
            $('.info').css('display', 'block')
        });
        $('.activ').mouseout(function() {
            $('.info').css('display', 'none')
        });
        $('.activ').attr('src', 'img/homepage-activ.png');
        $('.pasiv').attr('src', 'img/btn-pasiv.png');
        $('.pasiv').mouseover(function() {
            $('.info2').css('display', 'none')
        });
    };

    function secondclick() {

        translateWidth = -$('#viewPort').width();
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
        $('.center').removeClass('pasiv').addClass('activ');
        $('.left').removeClass('activ').addClass('pasiv');
        $('.right').removeClass('activ').addClass('pasiv');
        $('.activ').mouseover(function() {
            $('.info2').css('display', 'block')
        });
        $('.activ').mouseout(function() {
            $('.info2').css('display', 'none')
        });
        $('.activ').attr('src', 'img/homepage-activ.png');
        $('.pasiv').attr('src', 'img/btn-pasiv.png');
        $('.pasiv').mouseover(function() {
            $('.info').css('display', 'none')
        });
    };

    function treeclick() {
        translateWidth = -$('#viewPort').width() * 2;
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
        $('.right').removeClass('pasiv').addClass('activ');
        $('.left').removeClass('activ').addClass('pasiv');
        $('.center').removeClass('activ').addClass('pasiv');
        $('.activ').attr('src', 'img/homepage-activ.png');
        $('.pasiv').attr('src', 'img/btn-pasiv.png');
        $('.pasiv').mouseover(function() {
            $('.info2').css('display', 'none')
        });
    }

    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
            firstclick();
        } else {
            translateWidth = -$('#viewPort').width() * (slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;

        }
        if (slideNow === 2) {
            slideNow--;
            secondclick();

        } else if (slideNow === 3) {
            slideNow--;
            treeclick();
        }
    };

    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -$('#viewPort').width() * (slideCount - 1);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = slideCount;
            treeclick();
            slideNow--;
        } else {
            translateWidth = -$('#viewPort').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
        }
        if (slideNow === 2) {
            slideNow--;
            secondclick();
        } else if (slideNow === 1) {
            slideNow--;
            firstclick();
        }
    } // prevSlide

    $('#next-btn').click(function() {
        nextSlide();
    });
    $('#prev-btn').click(function() {
        prevSlide();
    });
    // клик по стрелке эволюшн
  // =======================================================================  
    if(window.matchMedia('(max-width: 1024px)').matches){
  $('.evolution').click(function(e) {
e.preventDefault();
    })
} 
 if(window.matchMedia('(min-width: 1024px)').matches) {
 		$('.evolution').click(function() {
         secondclick();
     })
 }
// ==========================================================================

    // $('.evolution').click(function() {
    	
    //     secondclick();
    // })
    // добавим соединительную линию межу 1 и 2
    $('#nav-btns .first').after("<hr width='100%' class='line'/>");
    // линию между 2 и 3
    $('#nav-btns .second').after("<hr width='100%' class='line'/>");
    // показать инфо при наведении
    $('.activ').mouseover(function() {
        $('.info').css('display', 'block')
    });
    // спрятать инфо при отведении мышки
    $('.activ').mouseout(function() {
        $('.info').css('display', 'none')
    });
    // клик по первой кнопке
    $('.left').click(function() {
        firstclick();
    });
    // клик по центральной кнопке
    $('.center').click(function() {
        secondclick();
    });
    // клик по правой кнопке
    $('.right').click(function() {
        treeclick();
    });



if(window.matchMedia('(max-width: 1024px)').matches)
{
  // do functionality on screens smaller than 768px
  $('.evolution').click(function() {
       return false;
    })
   
}

});