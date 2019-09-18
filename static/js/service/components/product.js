/**
 * @ Author: Keen
 * @ Create Time: 2019-08-16 09:58:03
 * @ Description: 제휴점 리스트 UI 컨트롤
 * @ zpl://screen?sid=5d3027970335ea8e378331e7&pid=5d1d633794d7ed78bcacd6f8
 */

var productList = (function(){

    // Initialize
    function init() {
        productShow('.product-panorama-wrap');
        // toggleFavorite(); 찜기능 추후 고도화때 업데이트
    }

    function productShow(elementWrapClass) {

        if (typeof elementWrapClass !== 'string') throw new TypeError("대상의 클래스 명을 추가해주세요 예)'.product-panorama-wrap'");

        document.querySelector(elementWrapClass).classList.add('show');
    }

    // 찜버튼 토글
    // function toggleFavorite() {
    //     var targetElements = document.querySelectorAll('.product-favorite'),
    //         activeClass = 'product-favorite__active';

    //     for ( i = 0 ; i <= targetElements.length ; i++ ) {

    //         if (targetElements[i] === undefined) return;

    //         targetElements[i].addEventListener('click',function(){
    //             if(this.classList.contains(activeClass)) {
    //                 this.classList.remove(activeClass);
    //                 return;
    //             }
    //             this.classList.add(activeClass);
    //         });
    //     }
    // }

    // 인피니티 스크롤
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
        infiniteScroll: infiniteScroll
    }
})();

productList.init();
productList.infiniteScroll();