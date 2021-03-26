// スライダー
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:2500,
    dots:true,
});

// googleMap
function initMap() {
    var latlng = new google.maps.LatLng( 34.647177, 135.431217 );
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: latlng
    });
    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
  }

  // グローバルメニュー
function navFunc() {
    document.querySelector('html').classList.toggle('open');
  }
  $(function() {
    $('#nav-button').click(function() {
      $(this).toggleClass('active');
  
      if ($(this).hasClass('active')) {
        $('.nav').addClass('active');
      } else {
        $('.nav').removeClass('active');
      }
    });
    $('.nav a').click(function() {
      $('#nav-button').trigger('click');
    });
  });


  function showScroll() {
                    
    var element = document.getElementsByClassName('wrap2');
    if(!element) return; // 要素がなかったら処理をキャンセル
                        
    var showTiming = window.innerHeight > 900 ? 600 : 300; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset; //スクロール量を取得
    var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
                      
    for(var i=0;i<element.length;i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  }
  showScroll();
  window.addEventListener('scroll', showScroll);

// lunch menuのふわっと表示
  function showElementAnimation() {
                    
    var element = document.getElementsByClassName('main-area');
    if(!element) return; // 要素がなかったら処理をキャンセル
                        
    var showTiming = window.innerHeight > 900 ? 600 : 400; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset; //スクロール量を取得
    var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
                      
    for(var i=0;i<element.length;i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);

  $('.go-top').click(function () {
    $('body,html').animate({
      scrollTop:0
    },800);
    return false;
  });