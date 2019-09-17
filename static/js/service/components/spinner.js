/**
 * @ Author: Keen
 * @ Create Time: 2019-09-17
 * @ Description: 스피너JS
 */


var spinnerControl = (function(){

    var targetElement = document.querySelector('.spinner-ring-wrap');

    var init = function() {
        makeHTML();
    }

    var makeHTML = function() {
        var spinnerHTML = '<div class="spinner-ring-wrap"><div class="spinner-ring"><div></div><div></div><div></div><div></div></div></div>';

        document.body.insertAdjacentHTML('beforeend', spinnerHTML);
    }

    var show = function() {
        animateAdd('.spinner-ring-wrap');
    }

    var hide = function() {
        animateRemove('.spinner-ring-wrap');
    }

    return {
        init: init,
        show: show,
        hide: hide
    }
})();

// spinnerControl.init();