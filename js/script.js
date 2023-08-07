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

// 前方一致、aタグhref属性文字列先頭"#"がクリックで発火
  $('a[href^="#"]').on('click', function() {

    // console.log($(this).attr("href"));
    // console.log($(this).prop("href"));
    
    // 行き先
    let dest;
    
    // クリックされたhref属性から"#~~~"を代入
    const href = $(this).attr("href");
    //          "#" = ページトップ
    if (href == '#') {
      
      dest = $('html');
    } else {
      
      //           = #~~~
      dest = $(href);
    };
    
    //                 トップからの距離
    const pos = dest.offset().top;
    
    //        animate({css},           duration, easing, f())
    $('html').animate({'scrollTop': pos}, 550, 'swing', function() {

      // console.log('scroll!');
    });
    return false;
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
    $('#modal').fadeIn(200);
    $('#modal').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    return false;
  });
  // modal off
  $('#modal').on('click', function() {
    $(this).fadeOut();
    $('body').css('overflow', 'visible');
  });
  
  
  // about section fadein
  $(window).on('scroll', function() {
    $('.link').each(function() {
      // console.log(index);
      // console.log(element);
      // $('.link').each(function(href) {
        // console.log('href= ' +href);
        // });
        // console.log(this);
        let headhref = $(this).attr("href");
        // console.log('headhref:' + headhref);
        let coor = $(headhref).offset().top;
        // console.log('coor:' + coor);
        let windowH = $(window).height();
        // console.log('windowH:' + windowH);
        let point = coor - windowH * 4 / 5;
        // console.log('point: ' + point);
        let Href = $(this).attr('href');
        // console.log('Href= ' + Href);
        if ($(window).scrollTop() > point) {
          $(Href).css({
        'opacity': '1',
          });
        } else {
          $(headhref).css({
            'opacity': '0',
          });
        }
      });
      // return false;
  });
  
// darkmode
  $('.dark').on('click', function() {
    $('body').toggleClass('bg');
    $('.nav-pc').toggleClass('navdk');
    $('p, h1, .link').toggleClass('chardk');
  });

// to top hide
  $(window).on('scroll', function() {
    if (($(this).scrollTop()) >= 250) {
      $('.toTop, .dark').css({
        'opacity': '1',
      });

    } else {
      $('.toTop, .dark').css({
        'opacity': '0',
      });
    };

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

// scroll px
  $('#scr').text($(this).scrollTop() + 'px');
  });



});

