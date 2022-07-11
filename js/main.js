$(function() {
  const ham = $('.hamburger');
  const nav = $('.navi');
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); 
    nav.toggleClass('active'); 
  });

  $('.navi a').on('click', function(){
    if(nav.hasClass('active')){
      ham.toggleClass('active'); 
      nav.toggleClass('active'); 
    }
  })

  
});