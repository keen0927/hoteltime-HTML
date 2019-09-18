/**
 * @ Author: Keen
 * @ Create Time: 2019-09-04
 * @ Description: 탭 JS
 */

var TabControl = function (element, option) {

    // 엘리먼트 지정
    var targetElement = document.querySelector(element);
    var direction = undefined;
    var elementInkBar = undefined;
    var itemOffsetX = [];
    var paddingHorizon = 32; // padding 좌우 16 + 16

    // 옵션
    if (option) {
        // direction : (left와 center만 존재)
        if (option.direction === "left" || option.direction === "center") {
            direction = option.direction;
            targetElement.classList.add('tab-wrap__' + direction);
        } else {
            console.error('정렬은 "left" 와 "center"중 하나 입니다');
        }
    }

    // 클릭 이벤트
    var handleClick = function () {
        var tabItems = document.querySelectorAll(element + ' .tab-item');
        var tabItemsLength = tabItems.length;

        for (i = 0; i < tabItemsLength; i++) {
            var offsetX = tabItems[i].offsetLeft;
            itemOffsetX.push(offsetX);

            tabItems[i].addEventListener('click', function () {
                var _thisOffsetX = Math.ceil(this.getBoundingClientRect().x);
                var _thisWidth = this.offsetWidth - paddingHorizon;

                elementInkBar.style.transform = 'translateX(' + _thisOffsetX + 'px)';
                elementInkBar.style.width = _thisWidth + 'px';
                document.querySelector('.tab-item__active').classList.remove('tab-item__active');
                this.classList.add('tab-item__active');
            });
        }
    }

    // 잉크바 HTML 생성
    var insertInkBar = function () {
        var inkBarHTML = '<span class="tab-ink-bar"></span>';
        var inkBarWidthInit = document.querySelectorAll(element + ' .tab-item')[0].offsetWidth;

        document.querySelector(element + ' .tab-inner').insertAdjacentHTML('beforeend', inkBarHTML);
        elementInkBar = document.querySelector(element + ' .tab-ink-bar');
        elementInkBar.style.width = (inkBarWidthInit - paddingHorizon) + "px";
        elementInkBar.style.transform = 'translateX(' + itemOffsetX[0] + 'px)';
    }

    // onload
    var show = function() {
        targetElement.classList.add('js-tab-wrap__show');
    }

    // 초기화
    var init = function () {
        handleClick();
        insertInkBar();
        show();
    };

    return {
        init: init()
    }
};