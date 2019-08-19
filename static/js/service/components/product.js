/**
 * @ Author: Keen
 * @ Create Time: 2019-08-16 09:58:03
 * @ Description: 제휴점 리스트 UI 컨트롤
 */


var productList = (function(){
    console.log('11');

    function init() {
        targetShow('.product-panorama-wrap');
    }

    function imageSizeSet() {
        var getWindowWidth = window.innerWidth;
        var calculateImageHeight = Math.floor(((getWindowWidth - 40) / 16) * 9);

        return {
            getHeight: function() {
                return calculateImageHeight;
            }
        }
    }

    function targetShow(elementWrapClass) {

        if (typeof elementWrapClass !== 'string') throw new TypeError("대상의 클래스 명을 추가해주세요 예)'.product-panorama-wrap'");

        var handlerImage = imageSizeSet();
        var panoramaImageHeight = handlerImage.getHeight();

        document.querySelectorAll('.product-panorama-image').forEach(function(element){
            element.style.height = panoramaImageHeight + 'px';
        });

        document.querySelector(elementWrapClass).classList.add('show');
    }

    return {
        init: init
    }
})();


productList.init();

// navigation.init('light');
