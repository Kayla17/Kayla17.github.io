$(function () {
    $('.fadein .slide:gt(0)').hide();
    setInterval(function () {
        $('.fadein .slide:first-child').fadeOut(1000)
     .next('.slide').fadeIn(1000)
     .end().appendTo('.fadein');
    },
  4000);
});