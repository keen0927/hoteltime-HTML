/**
 * @ Author: Keen
 * @ Create Time: 2019-09-03
 * @ Description: 필터 JS
 */

var filterControl = (function(){

    // 투숙인원 설정
    var handleCountPerson = function(initialValue) {

        var count = initialValue,
            minPerson = 2,
            maxPerson = 10,
            targetCountElement = document.querySelector('.js-count-person'),
            targetIncrement = document.querySelector('.js-increment-person'),
            targetDecrement = document.querySelector('.js-decrement-person');

        function handleIncrement() {
            if (count === maxPerson - 1) targetIncrement.setAttribute('disabled','disabled');
            if (targetDecrement.disabled) targetDecrement.removeAttribute('disabled','disabled');
            count++;
            refreshCount(count);
        }

        function handleDecrement() {
            if (count === minPerson + 1) targetDecrement.setAttribute('disabled','disabled');
            if (targetIncrement.disabled) targetIncrement.removeAttribute('disabled','disabled')
            count--;
            refreshCount(count);
        }

        function refreshCount(count) {
            count === maxPerson
                ? targetCountElement.innerHTML = count + '명 이상'
                : targetCountElement.innerHTML = count + '명';
        }

        targetIncrement.addEventListener('click',handleIncrement);
        targetDecrement.addEventListener('click',handleDecrement);
    }

    // 가격정보 컨트롤
    var handlePriceRange = function() {
        $(".filter-range").slider({
            range: true,
            min: 0,
            max: 100,
            step: 1,
            values: [0, 100],
            slide: function(event, ui) {
                if ((ui.values[0] + 1) > ui.values[1]) return false;
                $(".js-range-price").val(ui.values[0] + " ~ " + ui.values[ 1 ] + "만원" );
            }
        });

        // 초기 값
        $(".js-range-price").val('모든 가격');
    }

    // 버튼 토글
    var handleButtonToggle = function() {
        $('.filter-group-field .btn').each(function(){
            $(this).click(function(){
                $(this).toggleClass('btn__active');
            });
        });
    }

    // 필터 버튼 체크 아이콘 컨트롤
    var filterButtonIcon = {
        Add: function() {
            $('.global-button-filter button').addClass('global-button-filter__active');
        },
        remove: function() {
            $('.global-button-filter button').removeClass('global-button-filter__active');
        }
    }

    // 필터 적용
    var filterAdapt = function() {
        filterButtonIcon.Add();
        filterVisibleControl.hide();
    }

    // 초기화
    var init = function() {
        handlePriceRange();
        handleButtonToggle();
        handleCountPerson(2); // 초기값 2만원 확인
        handleCloseSortSheet();
    }

    // 정렬 > 라디오값 변경시 액션시트 닫기 (radio onchange시)
    var handleCloseSortSheet = function() {
        $('input[name="filter-sort"]').each(function(){
            $(this).change(function(){
                $('.js-filter-align').text($(this).data('placeholder'));
                setTimeout(function(){
                    actionSheet.close('.js-action-sheet-sort');
                },50);
            });
        });
    }

    // 스크롤 위치 저장
    var saveWindowScrollY = undefined;

    // 필터 Visible 컨트롤
    var filterVisibleControl = {
        show: function() {
            var detectWindowScrollY = window.scrollY;
            saveWindowScrollY = detectWindowScrollY;
            $('.search-result').removeClass('display-block');
            setTimeout(function(){
                $('.search-result').removeClass('opacity-1');
            },200);
            $('.search-filter').addClass('display-block');
            windowScrollTop();
            setTimeout(function(){
                $('.search-filter').addClass('opacity-1');
            },50);
        },
        hide: function() {
            $('.search-filter').removeClass('display-block');
            setTimeout(function(){
                $('.search-filter').removeClass('opacity-1');
            },200);
            $('.search-result').addClass('display-block');
            window.scrollTo(0,saveWindowScrollY);
            setTimeout(function(){
                $('.search-result').addClass('opacity-1');
            },100);
        },
        reset: function() {
            // 리셋
        }
    }

    return {
        init: init,
        filterVisibleControl: filterVisibleControl,
        filterAdapt: filterAdapt
    }
})();

filterControl.init();