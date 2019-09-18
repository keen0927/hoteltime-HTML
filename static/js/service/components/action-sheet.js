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
            remove: 300,
            reset: 550,
        };

    var show = function(element) {

        if ( isAnimate === true ) return;

        isAnimate = true;

        $('body').addClass('preventScrollY');
        $(element).addClass('action-sheet__show');

        setTimeout(function(){
            $('.action-sheet-dim', $(element)).addClass('action-sheet-dim__fade-in');
        },duration.fadeIn);

        setTimeout(function(){
            $('.action-sheet-element', $(element)).addClass('action-sheet-element__scroll-up');
        },duration.scrollUp);

        document.querySelector('.action-sheet-dim').addEventListener('click',function(){
            close(element);
        });

        setTimeout(function(){
            isAnimate = false;
        },duration.reset);
    }

    var close = function(element) {

        if ( isAnimate === true ) return;

        isAnimate = true;

        $('body').removeClass('preventScrollY');
        setTimeout(function(){
            $('.action-sheet-element', $(element)).removeClass('action-sheet-element__scroll-up');
            $('.action-sheet-dim', $(element)).removeClass('action-sheet-dim__fade-in');
        },0);

        setTimeout(function(){
            $(element).removeClass('action-sheet__show');
        },duration.remove);

        document.querySelector('.action-sheet-dim').removeEventListener('click',function(){
            close(element);
        });

        setTimeout(function(){
            isAnimate = false;
        },duration.reset);
    }

    return {
        show: show,
        close: close
    }

})();