
// スライド訂正前
// $(function(){
//     $('#slider').slick({
//       speed: 1000,
//       dots: true,
//       centerMode: true,
//       variableWidth: true,
//       prevArrow: '<button class="slide-arrow"></button>',
//       nextArrow: '<button class="slide-arrow"></button>'
//     });
//   });
//  スライド訂正前ここまで

// 訂正後
$(function () {
    $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        dots: true,
        centerMode: true,
        centerPadding: "13%",
        variableWidth: true,
        slideToShow: 1,
        focusOnSelect: true,
        speed: 1800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false
                }
            }
        ]
    });
  });

// 上部へ戻る
$(function(){
    $(".back").click(function(){
        $('body , html').animate({scrollTop : 0}, 500);
        return faluse;
    });
});