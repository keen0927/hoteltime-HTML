/**
 * @ Author: Keen
 * @ Create Time: 2019-09-17
 * @ Description: 검색홈 공통 JS
 */

var animateAdd = function(element) {
    $(element).addClass('display-block');
    setTimeout(function(){
        $(element).addClass('opacity-1');
    },100);
}

var animateRemove = function(element, duration) {
    var duration = duration || 400;
    $(element).removeClass('opacity-1');
    setTimeout(function(){
        $(element).removeClass('display-block');
    },duration);
}

var windowScrollTop = function() {
    window.scrollTo(0,0);
}

// 스피너 초기화
spinnerControl.init();
// spinnerControl.show();

// keywordControl.keywordVisibleControl.hide();


// 초기화
// 샘플 : 기검색어와 최근검색어에 ajax로 item을 먼저 붙인후 하단 메서드 실행. (setTimeout은 제거)
setTimeout(function(){
    keywordControl.keywordVisibleControl.show();
    TabControl.init;
    // searchResultControl.resultVisibleControl.show();
},200);