/**
 * @ Author: Keen
 * @ Create Time: 2019-09-09
 * @ Description: 검색결과
 */

var searchResultControl = (function () {

    var isAddEvent = false;

    var gnbScrollAnimate = function () {

        var windowHeight = window.innerHeight,
            searchResultHeight = document.querySelector('.search-result').offsetHeight;

        if (windowHeight > searchResultHeight) return;

        window.addEventListener('scroll', function () {
            var getScrollTop = window.scrollY;
            var setMinScrollY = 20;

            if (getScrollTop > setMinScrollY) {

                if (isAddEvent === true) return;

                scrollAnimate.add();

            } else {
                scrollAnimate.remove()
            }
        });
    }

    // 스크롤
    var scrollAnimate = {
        add: function () {
            isAddEvent = true;
            $('.search-result-navigation').addClass('search-result-navigation__active');
        },
        remove: function () {
            isAddEvent = false;
            $('.search-result-navigation').removeClass('search-result-navigation__active');
        }
    }

    // 퀵필터 토글 UI
    var quickFilterButtonToggle = function () {
        var targetElements = document.querySelector('.search-result-quickfilter-swiper');

        targetElements.addEventListener('click', function (e) {

            var target = e.target;

            if (target && document.getElementsByTagName('button')) {

                if (target.classList.value === 'active') {
                    target.classList.remove('active');
                } else {
                    target.classList.add('active');
                }
            }
        });
    }

    // 검색결과 Visible 컨트롤
    var resultVisibleControl = {
        show: function() {
            animateAdd('.search-result');
            animateRemove('.search-home');
            init();
        },
        hide: function() {
            animateRemove('.search-result');
            animateAdd('.search-home');
        },
        reset: function() {
            // 리셋
        }
    }

    // Initialize
    var init = function () {
        gnbScrollAnimate();
        quickFilterButtonToggle();
    }

    return {
        init: init,
        resultVisibleControl: resultVisibleControl
    }

})();