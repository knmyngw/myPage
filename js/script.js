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
    // 底付きさせない
    const bottom = (($('html').height()) - ($(window).height()));
    // console.log(bottom);
    //          "#" = ページトップ
    if (href == '#') {
      dest = $('html');
    } else if (href == "#contact") {
      // click contact jump buttom
      $('html').animate({'scrollTop': bottom}, 1000, 'swing', function(){});
      return false;
    } else {
      //           = #~~~
      dest = $(href);
    };
    //                 トップからの距離
    const pos = dest.offset().top ;
    
    //        animate({css},           duration, easing, f())
    $('html, body').animate({'scrollTop': pos}, 1000, 'swing', function() {

      // console.log('scroll!');
    });
    return false;
  });

// scroll
  $(window).on('scroll', function() {
    
// inBox slide & fadein
    $('.Box').each(function() {
      const pos = $(this).offset().top;
      const boxH = $(this).height();
      const windowH = $(window).height();
      const windowW = $(window).width();
      const scroll = $(window).scrollTop();
      const printBox = scroll >= (pos - windowH * .7);
      const goLeftBox = scroll >= (pos + boxH - windowH * .7);
      const spprint = scroll >= (pos - windowH * .35);
      const spgoLeft = scroll >= (pos + boxH - windowH * .35);
      console.log(printBox)
      console.log(goLeftBox)
      console.log(windowW)
      if (windowW >= 500) {
        if (goLeftBox) {
          $(this).children('.inBox').css({
            'opacity': '0',
            'left': '-100%',
            'z-index': '1100'
          })
        } else if (printBox) {
          $(this).children('.inBox').css({
            'opacity': '1',
            'left': '0',
            'z-index': '1200'
          })
        } else {
          $(this).children('.inBox').css({
            'opacity': '0',
            'left': '100%',
            'z-index': '1100'
          })
        }
      } else {
        if (spgoLeft) {
          $(this).children('.inBox').css({
            'opacity': '0',
            'left': '-100%',
            'z-index': '1100'
          })
        } else if (spprint) {
          $(this).children('.inBox').css({
            'opacity': '1',
            'left': '0',
            'z-index': '1200'
          })
        } else {
          $(this).children('.inBox').css({
            'opacity': '0',
            'left': '100%',
            'z-index': '1100'
          })
        }
      }
    });
  
  // head line show hide
    $('section').each(function() {
      const pos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const sectionH = $(this).height();
      const windowH = $(window).height();
      const windowW = $(window).width();
      const showHeadLine = (scroll >= pos - windowH * .7);
      const hideHeadLine = (scroll >= pos + sectionH - windowH * .7);
      const spshowHeadLine = (scroll >= pos - windowH * .35);
      const sphideHeadLine = (scroll >= pos + sectionH - windowH * .35);
      const headLine = ($(this).children('h1'));
      // console.log($(this).attr('class') + ' show ' + showHeadLine);
      // console.log($(this).attr('class') + ' hide ' + hideHeadLine);
      // console.log($(this).children('h1').text());

      if (windowW >= 500) {
        if (hideHeadLine) {
          $(headLine).css({
            'opacity': '0',
            'top': '60vh',
          })
        } else if (showHeadLine) {
          $(headLine).css({
            'opacity': '1',
            'top': '65vh',
          })
        } else {
          $(headLine).css({
            'opacity': '0',
            'top': '70vh',
          })
        }

      } else {
        if (sphideHeadLine) {
          $(headLine).css({
            'opacity': '0',
            'top': '60vh',
          })
        } else if (spshowHeadLine) {
          $(headLine).css({
            'opacity': '1',
            'top': '65vh',
          })
        } else {
          $(headLine).css({
            'opacity': '0',
            'top': '70vh',
          })
        }
      }
    });
    
// btn show hide
  // $(window).on('scroll', function() {
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
// ---------- scroll event end ----------


// modal open
  $('.pic').on('click', function() {
    const file = $(this).attr('src');
    $('#modalPic').attr('src', file);
    $('#modal').fadeIn(300);
    $('#modal').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    const comment = $(this).attr('alt');
    // console.log(comment);
    $('.comment').text(comment);
    $('.toTop, .dark').css('opacity', '0');
    return false;
  });
  // modal close
  $('#modal').on('click', function() {
    $(this).fadeOut(300);
    $('body').css('overflow', 'visible');
  });

  // toTop , dark mode hover
  $('.toTop, .dark').on('mouseover', function() {
    $(this).css({
      'backgroundColor': '#00d0f0',
    });
  });
  
  $('.toTop, .dark').on('mouseout', function() {
    $(this).css({
      'backgroundColor': '#505050',
    });
  });
    
// darkmode
  $('.dark').on('click', function() {
    $('body').toggleClass('bg');
    $('.logoBox, .nav-pc').toggleClass('boxdk');
    $('p, h1, header a, .copy').toggleClass('chardk');
  });

// print px
  // $('#scr').text($(window).scrollTop());
  // $('#width').text('width ' + $(window).width());
  // $('#height').text('height ' + $(window).height());


});