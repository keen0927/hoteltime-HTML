/**
 * @ Author: Keen
 * @ Create Time: 2019-09-17
 * @ Description: 검색홈 공통 JS
 */

// 애니메이트 Fade In 효과
var animateAdd = function(element) {
    $(element).addClass('display-block');
    setTimeout(function(){
        $(element).addClass('opacity-1');
    },150);
}

// 애니메이트 Fade Out 효과
var animateRemove = function(element, duration) {
    var duration = duration || 400;
    $(element).removeClass('opacity-1');
    setTimeout(function(){
        $(element).removeClass('display-block');
    },duration);
}

// 윈도우 상단으로
var windowScrollTop = function() {
    window.scrollTo(0,0);
}

// 모달 컨트롤 : modalControl.open('모달테스트');
var modalControl = (function() {
    var targetModal = document.querySelector('.modal-wrap');

    var open = function(message) {
        $('.modal-content-body__regular').text(message);
        targetModal.classList.add('show');
        setTimeout(function(){
            targetModal.classList.add('fade-in');
        },0);
    }

    var close = function() {
        targetModal.classList.remove('fade-in');
        setTimeout(function(){
            targetModal.classList.remove('show');
        },400);
    }

    return {
        open: open,
        close: close
    }
})();

// 윈도우 ONLOAD 함수
window.onload = function() {
    spinnerControl.hide(); // 스피너 숨김
    keywordControl.keywordVisibleControl.show(); // 키워드 보임
    TabControl.init; // 탭 초기화
    $('.search-home-container').addClass('opacity-1'); // 전체화면 보임
}