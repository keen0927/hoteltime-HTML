/**
 * @ Author: Keen
 * @ Create Time: 2019-09-05
 * @ Description: 검색어 JS
 */

var keywordControl = (function () {

    // 탭메뉴 인스턴스 생성
    var keywordTab = new TabControl('.js-keyword-tab', {
        direction: 'center'
    });

    // 스와이퍼 인스턴스 생성
    var keywordSwiper = new Swiper('.js-keyword-swiper', {
        spaceBetween: 10,
        on: {
            // 초기화
            init: function () {
                $('.search-home-keyword').addClass('show');
                $('.gradient-box ul li').eq(0).show();
                setTimeout(function(){
                    swiperSetMinHeight();
                },0);
            }
        }
    });

    var keywordElementControl = {
        showSwiper: function() {
            $('.keyword-autocomplete-wrap').hide();
            $('.keyword-swiper-wrap').show();
        },
        showAutocomplete: function() {
            $('.keyword-swiper-wrap').hide();
            $('.keyword-autocomplete-wrap').show();
        }
    }

    $('.js-search-input').on('change keyup paste',function(){
        keywordElementControl.showAutocomplete();
    });

    // 스와이퍼 변경시 탭메뉴 변경
    keywordSwiper.on('slideChange', function () {
        var activeIndex = keywordSwiper.activeIndex;
        tabElement = $('.js-keyword-tab .tab-item');
        tabElement.eq(activeIndex).click();
        $('.gradient-box ul li').hide();
        $('.gradient-box ul li').eq(activeIndex).fadeIn();
        window.scrollTo(0,0);
    });

    // 탭버튼 눌르면 인덱스값 얻어서 스와이퍼 변경되기
    $('.js-keyword-tab .tab-item').each(function (i) {
        $(this).click(function () {
            keywordSwiper.slideTo(i);
        });
    });

    // 인풋 클리어 추가
    function inputAddResetButton(element) {
        var buttonHTML = '<button type="button" class="button-cancel"><span>취소</span></button>';

        $(buttonHTML).insertAfter(element);

        if ($(element).val()) {
            $('.js-search-input').addClass('input-element__add-reset-button');
            $('.button-cancel').show();
        }

        $(element).on('focus keyup', function () {
            if ($(this).val() === "") {
                $('.js-search-input').removeClass('input-element__add-reset-button');
                $('.button-cancel').hide();
            } else {
                $('.js-search-input').addClass('input-element__add-reset-button');
                $('.button-cancel').show();
            }
        });

        // 리셋버튼 클릭시
        $('.button-cancel').click(function () {
            $(element).val('');
            $(element).focus();

            // 추가로직 필요
            // keywordElementControl.showSwiper();
            // $('.keyword-autocomplete-wrap li').remove();
        });
    }

    // Swiper 카드 높이 설정
    function swiperSetMinHeight() {
        var documentHeight = window.innerHeight,
            navHeight = document.querySelector('.search-navigation').offsetHeight,
            keywordTabHeight = document.querySelector('.js-keyword-tab').offsetHeight,
            gradientHeight = document.querySelector('.gradient-box').offsetHeight,
            swiperHeight = $('.search-home-keyword').height(),
            popularHeight = $('.swiper-popular-keyword').height(),
            recentlyHeight = $('.swiper-recently-keyword').height(),
            diffHeight = popularHeight >= recentlyHeight ? popularHeight : recentlyHeight,
            totalHeight = navHeight + swiperHeight + keywordTabHeight,
            calcHeight = documentHeight - (navHeight + keywordTabHeight + gradientHeight);

        if (totalHeight > documentHeight) {
            $('.js-keyword-swiper .swiper-slide').css('min-height',diffHeight + gradientHeight + 'px');
        } else {
            $('.js-keyword-swiper .swiper-slide').css('min-height',calcHeight + 'px');
        }
    }

    // 최근 검색어 삭제
    function handleRemoveItem(element) {
        if (typeof element !== 'string') {
            throw new TypeError(element + ' is not a string');
        }
        var element = element || console.error('타겟 엘리먼트 필요');
        var targetElements = document.querySelectorAll('.swiper-recently-keyword li button');

        for (i = 0; i < targetElements.length; i++) {
            targetElements[i].addEventListener('click', function (e) {
                var thisParent = e.currentTarget.parentNode;
                var speed = 370;

                thisParent.classList.add('js-item__fadeout');
                setTimeout(function () {
                    thisParent.remove();
                }, speed)
            });
        }
    }

    // 최근 검색어 높이 정렬
    $('.swiper-recently-keyword li').each(function(){
        $('small',this).parent().addClass('js-has-small');
    });

    // 최근 검색어 전체 삭제
    function handleRemoveItemAll() {
        var speed = 370;

        $('.swiper-recently-keyword li').addClass('js-item__fadeout');
        setTimeout(function () {
            $('.swiper-recently-keyword li').remove();
        }, speed);
    }

    var init = (function(){
        inputAddResetButton('.js-search-input');
        handleRemoveItem('.search-recently-keyword');
    })();

    return {
        handleRemoveItemAll: handleRemoveItemAll
    }

})();