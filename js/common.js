$(function(){
  // script 영역 event 사용 예
  $(window).scroll(function(){
    // 공통변수 선언
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop();

    // chage background
    $(".slide").each(function(){
      // console.log($(this).attr("data-background"))
      // console.log($(this).offset())
      let thisOffset = $(this).offset();
      let bodyBg = $(this).data("background");
      console.log(bodyBg)
      // console.log($(this).offset().top+','+thisScrollTop)
      if( thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight ){
        $("body").css("background-color",bodyBg);
        $(this).addClass("on");
      }else{
        $(this).removeClass("on");
      }
    })

    // navivation fixed
    const navBar = $("nav");
    // console.log('window height :'+wHeight+',현재 스크롤 탑의 값 :'+thisScrollTop)
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });
});
