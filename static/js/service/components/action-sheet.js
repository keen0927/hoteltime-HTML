/**
 * @ Author: Keen
 * @ Create Time: 2019-09-03
 * @ Description: 액션시트
 */

var actionSheet = (function(){

    var isAnimate = false, // 애니메이션 중복 노출 방지 변수
        duration = {
            fadeIn: 10,
            scrollUp: 100,
            dimAddEvent: 1000,
            fadeOut: 100,
            remove: 300
        }

    // function hi() {
    //     reset(element);
    // }

    // TODO: 액션시트 다시만들어야함..

    var show = function(element) {

        if ( isAnimate === true ) return;

        isAnimate = true;

        var targetElement = document.querySelector(element);
        var targetDim = document.querySelectorAll(element + ' .action-sheet-dim')[0];
        var targetSheet = document.querySelectorAll(element + ' .action-sheet-element')[0];

        document.body.classList.add('preventScrollY');
        targetElement.classList.add('action-sheet__show');

        var hi = function() {
            reset(element);
        }

        targetDim.addEventListener('click',hi);

        // targetDim.addEventListener('click',close());
        // targetDim.addEventListener('touchstart',function(){
        //     console.log('이벤트 주입');
        //     reset(element);
        // });

        setTimeout(function(){
            targetDim.classList.add('action-sheet-dim__fade-in');
        },duration.fadeIn);

        setTimeout(function(){
            targetSheet.classList.add('action-sheet-element__scroll-up');
        },duration.scrollUp);

        // setTimeout(function(){
        //     targetDim.addEventListener('touchstart',function(){
        //         reset(element);
        //     });
        // },duration.dimAddEvent);

        // setTimeout(function(){
        //     isAnimate = false;
        //     console.log('펄스 적용');
        // },2000);
    }

    var close = function(element) {
        reset(element);
    }

    var reset = function(element) {
        var targetElement = document.querySelector(element);
        var targetDim = document.querySelectorAll(element + ' .action-sheet-dim')[0];
        var targetSheet = document.querySelectorAll(element + ' .action-sheet-element')[0];

        // targetDim.removeEventListener('click',ddd,false);

        var hi = function() {
            reset(element);
        }

        targetDim.removeEventListener('click',hi);

        targetSheet.classList.remove('action-sheet-element__scroll-up');
        document.body.classList.remove('preventScrollY');

        console.log('RESET');

        // targetDim.removeEventListener('touchstart',function(){
        //     console.log('이벤트 제거');
        //     reset(element);
        // });

        setTimeout(function(){
            targetDim.classList.remove('action-sheet-dim__fade-in');
        },duration.fadeOut);

        setTimeout(function(){
            targetElement.classList.remove('action-sheet__show');
        },duration.remove);

        setTimeout(function(){
            isAnimate = false;
        },300);
    }

    return {
        show: show,
        close: close
    }

})();