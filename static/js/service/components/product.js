/**
 * @ Author: Keen
 * @ Create Time: 2019-08-16 09:58:03
 * @ Description: 제휴점 리스트 UI 컨트롤
 * @ zpl://screen?sid=5d3027970335ea8e378331e7&pid=5d1d633794d7ed78bcacd6f8
 */

var productList = (function(){

    var getWindowWidth = window.innerWidth;

    // Initialize
    function init() {
        productShow('.product-panorama-wrap');
        toggleFavorite();
        productPriceAreaSet();
    }

    // Infinite Scroll용 Reset
    function reset() {
        console.log('reset');
        toggleFavorite();
        productPriceAreaSet();
    }

    // 이미지사이즈 셋팅
    function imageSizeSet() {
            var calculateImageHeight = Math.floor(((getWindowWidth - 40) / 16) * 9);

        return {
            getHeight: function() {
                return calculateImageHeight;
            },
            getWindowWidth: function() {
                return getWindowWidth;
            }
        }
    }

    function productShow(elementWrapClass) {

        if (typeof elementWrapClass !== 'string') throw new TypeError("대상의 클래스 명을 추가해주세요 예)'.product-panorama-wrap'");

        var handlerImage = imageSizeSet(),
            panoramaImageHeight = handlerImage.getHeight();

        // document.querySelectorAll('.product-panorama-image').forEach(function(element){
        //     element.style.height = panoramaImageHeight + 'px';
        // });

        document.querySelector(elementWrapClass).classList.add('show');
    }

    // 찜버튼 토글
    function toggleFavorite() {
        var targetElements = document.querySelectorAll('.product-favorite'),
            activeClass = 'product-favorite__active';

        for ( i = 0 ; i <= targetElements.length ; i++ ) {

            if (targetElements[i] === undefined) return;

            targetElements[i].addEventListener('click',function(){
                if(this.classList.contains(activeClass)) {
                    this.classList.remove(activeClass);
                    return;
                }
                this.classList.add(activeClass);
            });
        }
    }

    // 가격표 UI 컨트롤 - 가격 영역 내 자리가 부족하면 실시간 정보 미노출
    function productPriceAreaSet() {

        var targetElements = document.querySelectorAll('.product-price-info__left'),
            productWrapWidth = document.querySelector('.product-price-area').offsetWidth;

        if (getWindowWidth <= 320) return; // 320px 이하 대응

        for ( i = 0 ; i <= targetElements.length ; i++ ) {

            if (targetElements[i] === undefined) return;

            var nextElement = targetElements[i].nextElementSibling,
                getWidthLeftElement = targetElements[i].offsetWidth,
                getWidthRightElement = nextElement.offsetWidth,
                calculateWidth = getWidthLeftElement + getWidthRightElement + 20;

            if (calculateWidth >= productWrapWidth) nextElement.style.display = 'none';
        }
    }

    function infiniteScroll() {

        var windowHeight = window.innerHeight;
        var isLoadding = false;
        var threshold = windowHeight * 2;

        window.addEventListener('scroll',function(){

            if(isLoadding === true) return;

            if ( (windowHeight + window.scrollY) >= document.body.offsetHeight - threshold) {

                isLoadding = true;

                this.setTimeout(function(){
                    // 테스트용
                    var productListHTML = '<li style="border: 1px solid #888;background-color: #f2f2f2;height:500px;">인피니티 스크롤</li><li style="border: 1px solid #888;background-color: #f2f2f2;height:500px;">인피니티 스크롤</li><li style="border: 1px solid #888;background-color: #f2f2f2;height:500px;">인피니티 스크롤</li>';

                    $('.product-panorama-wrap').append(productListHTML);

                    isLoadding = false;
                },200);
            }
        });
    }

    return {
        init: init,
        reset: reset,
        infiniteScroll: infiniteScroll
    }
})();

productList.init();
productList.infiniteScroll();