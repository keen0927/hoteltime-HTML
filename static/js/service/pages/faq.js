/**
 * @ Author: Keen
 * @ Create Time: 2019-08-21
 * @ Description: 자주묻는질문 JS
 */

var faqControl = (function () {

    // Initialize
    var init = function(){
        navigation.init('dark');
        handleListClick();
    }

    // 토글 컨트롤
    var handleFaqToggle = function (e) {
        var eventTarget = e.currentTarget;
        var faqItemContent = eventTarget.nextElementSibling;
        var gnbHeight = 56;

        eventTarget.classList.contains('faq-item-title__on') ?
            close() :
            open();

        function open() {
            eventTarget.classList.add('faq-item-title__on');
            faqItemContent.classList.add('faq-item-content__on');

            var eventPositionY = eventTarget.offsetTop - gnbHeight;

            setTimeout(function(){
                window.scrollTo({
                    top: eventPositionY,
                    left: 0,
                    behavior: 'smooth'
                });
            },400);
        }

        function close() {
            eventTarget.classList.remove('faq-item-title__on');
            faqItemContent.classList.remove('faq-item-content__on');
        }
    }


    // 클릭 이벤트 주입
    var handleListClick = function () {
        var faqListLength = document.querySelectorAll('.faq-item-title').length;

        for (i = 0; i < faqListLength; i++) {
            document.querySelectorAll('.faq-item-title')[i].addEventListener('click', handleFaqToggle);
        }
    }

    return {
        init: init
    }
})();

faqControl.init();