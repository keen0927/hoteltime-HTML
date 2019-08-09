var navigation = (function(){

    var elementNavigation = document.querySelector('.navigation'),
        elementVirtualDom = document.querySelector('.virtual-element'),
        blurPosition = 97;

    // InitialState
    function init(type) {

        if (type === undefined) throw new TypeError('type을 지정해주세요 "dark" , "light"');
        if (typeof type !== 'string') throw new TypeError('type은 string입니다. "dark" , "light" 타입중 하나를 인자로 넣어주세요');

        windowScrollEventExecute(handleScrollEvent);
        typeSetting(type);
    }

    // 백그라운드 컨트롤
    function handleScrollEvent() {
        var windowScrollY = window.scrollY;
        var windowScrollYcalc = windowScrollY * 0.01;

        windowScrollY <= blurPosition ?
            elementVirtualDom.style.opacity = windowScrollYcalc
            :
            elementVirtualDom.style.opacity = blurPosition;
    }

    // 스크롤 이벤트 등록
    function windowScrollEventExecute(fn) {
        window.addEventListener('scroll', fn);
    }

    // 텍스트 컬러 Opacity 수정
    function handleColorOpacity() {
        var elementNavigationLight = document.querySelector('.navigation__light'),
            windowScrollY = window.scrollY,
            colorConvert = 255 - (windowScrollY * 2),
            defaultColor = 'rgba(6,12,20,0.8)';

        windowScrollY <= blurPosition ?
            elementNavigationLight.style.color = 'rgba('+ colorConvert +','+ colorConvert + ','+ colorConvert+',1)'
            :
            elementNavigationLight.style.color = defaultColor;
    }

    function typeSetting(type) {
        switch(type) {
            case 'light':
                    elementNavigation.classList.add('navigation__light');
                    windowScrollEventExecute(handleColorOpacity);
                break;
            case 'dark':
                    elementNavigation.classList.add('navigation__dark');
                break
            default:
                return;
        }

        elementNavigation.classList.add('show');
    }

    return {
        init: init
    }
})();

navigation.init('light');
// navigation.init('dark');