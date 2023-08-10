// slick
$(window).ready(function() {
  $('#carouselSection').slick({
    autoplay: true,
    infinite: true,
    fade: true,
    speed: 1100,
    autoplayspeed: 1500,
    swipe: false,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    arrows: false,
    // cssEase: 'linear',
    // dots: true,
  });
});

// welcome fadein
// load されたら
$(window).on('load', function() {

  $('#topImg').animate({'opacity': 1}, 1500, 'swing', function(){
    // console.log('welcome');
  });
  // print position
  // $('html').each(function() {
    // let pos = $(this).offset();
    // console.log(pos);
  // });
});


// --------------------
$(function() {
// inpage link scroll
// 前方一致、aタグhref属性文字列先頭"#"がクリックで発火
  $('a[href^="#"]').on('click', function() {

    // console.log($(this).attr("href"));
    
    // 行き先
    let dest;
    // クリックされたhref属性から"#~~~"を代入
    const href = $(this).attr("href");
    const bottom = (($('html').height()) - ($(window).height()));
    // console.log(bottom);
    //          "#" = ページトップ
    if (href == '#') {
      dest = $('html');
    // click contact jump buttom
    } else if (href == "#contact") {
      $('html').animate({'scrollTop': bottom}, 1000, 'swing', function(){});
      return false;
    } else {
      //           = #~~~
      dest = $(href);
    };
    //                 トップからの距離
    const pos = dest.offset().top -50;
    
    //        animate({css},           duration, easing, f())
    $('html, body').animate({'scrollTop': pos}, 1000, 'swing', function() {

      // console.log('scroll!');
    });
    return false;
  });

// scroll
  $(window).on('scroll', function() {
    
// section fadein
    $('.link').each(function() {
      // console.log(index);
      // console.log(element);
      // $('.link').each(function(href) {
        // console.log('href= ' +href);
        // });
        // console.log(this);
        const headhref = $(this).attr('href');
        const coor = $(headhref).offset().top;
        const windowH = $(window).height();
        const point = coor - windowH * 3 / 4;
        // console.log('headhref:' + headhref);
        // console.log('coor:' + coor);
        // console.log('windowH:' + windowH);
        // console.log('point: ' + point);
        if ($(window).scrollTop() > point) {
          $(headhref).css({
            'opacity': '1',
          });
        } else {
          $(headhref).css({
            'opacity': '0',
          });
        }
      });
    // print scroll px
    $('#scr').text($(this).scrollTop() + 'px');
    // print window height
    $('#width').text('w:' + $(window).width() + 'px');
    $('#height').text('h:' + $(window).height() + 'px');
    
  });
// btn show hide
  $(window).on('scroll', function() {
    const windowH = $(window).height();
    const scroll = $(window).scrollTop();
    const term = (windowH >= 500) && (scroll >= (windowH / 3));
    const spterm = (windowH < 500) && (scroll >= (windowH));

    // console.log('windowH ' +windowH);
    // console.log('scroll ' +scroll);
    // console.log('term ' +term);

    if (spterm) {
      $('.toTop, .dark').css({
        'opacity': '1',
      });
      
    } else if (term){
      $('.toTop, .dark').css({
        'opacity': '1',
      });
    }else {
      $('.toTop, .dark').css({
        'opacity': '0',
      });
    };
  });

// toTop , dark mode hover
  $('.toTop, .dark').on('mouseover', function() {
    $(this).css({
      'backgroundColor': '#00e0e0',
    });
  });
  
  $('.toTop, .dark').on('mouseout', function() {
    $(this).css({
      'backgroundColor': '#505050',
    });
  });

// modal on
  $('.pic').on('click', function() {
    // console.log($(this).attr('class'));
    // console.log($(this).attr('src'));
    // console.log($(this).attr('name'));
    // console.log($(this).attr('alt'));
    // console.log($(this).prop('class'));
    // console.log($(this).prop('src'));
    // console.log($(this).prop('name'));
    // console.log($(this).prop('alt'));
    const gallery = $(this).attr('src');
    $('#modalPic').attr('src', gallery);
    $('#modal').fadeIn(300);
    $('#modal').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    return false;
  });
  // modal off
  $('#modal').on('click', function() {
    $(this).fadeOut(300);
    $('body').css('overflow', 'visible');
  });
  
  
  
// darkmode
  $('.dark').on('click', function() {
    $('body').toggleClass('bg');
    $('.logoBox, .nav-pc').toggleClass('boxdk');
    $('p, h1, .link, .logo, .copy').toggleClass('chardk');
  });



});
