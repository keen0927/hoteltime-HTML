/**
 * @ Author: Keen
 * @ Create Time: 2019-09-02
 * @ Description: 이벤트 리스트 JS
 */

var eventModalControl = (function() {

    var targetModalElement = document.querySelector('.modal-wrap');

    // 열기
    var open = function() {

        reset();

        targetModalElement.classList.add('show');
        setTimeout(function(){
            targetModalElement.classList.add('fade-in');
        },0);
    }

    // 초기화
    var reset = function() {
        // 타이틀 초기화
        // modal-content-body__regular 초기화

        // AJAX 작업 Initialize
    }

    // 닫기
    var close = function() {
        targetModalElement.classList.remove('fade-in');
        setTimeout(function(){
            targetModalElement.classList.remove('show');
        },400);
    }

    return {
        open: open,
        close: close,
    }

})();