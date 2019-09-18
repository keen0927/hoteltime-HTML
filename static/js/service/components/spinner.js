/**
 * @ Author: Keen
 * @ Create Time: 2019-09-17
 * @ Description: 스피너JS
 */

var spinnerControl = (function(){

    var targetElement = $('.spinner-ring-wrap');

    // 초기화
    var init = function() {
        makeHTML();
    }

    // HTML 생성
    var makeHTML = function() {
        var spinnerHTML = '<div class="spinner-ring-wrap"><div class="spinner-ring"><div></div><div></div><div></div><div></div></div></div>';

        document.body.insertAdjacentHTML('beforeend', spinnerHTML);
    }

    var show = function() {
        targetElement.addClass('display-block');
        setTimeout(function(){
            targetElement.addClass('opacity-1');
        },100);
    }

    var hide = function() {
        targetElement.removeClass('opacity-1');
        setTimeout(function(){
            targetElement.removeClass('display-block');
        },400);
    }

    return {
        init: init,
        show: show,
        hide: hide
    }
})();