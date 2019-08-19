// 토스트 팝업
var toastPopup = (function(){

    var duration = 2500;

    function show(message, bottomSpace) {
        if (document.querySelector('.popup-toast') !== null) return;
        if (message === undefined) throw new TypeError('토스트팝업 메세지를 인자값에 추가 해주세요. type: string');
        if (typeof message !== 'string') throw new TypeError('메세지는 string입니다.');

        makeHTML(message, bottomSpace);
    }

    function makeHTML(message, bottomSpace) {

        var classArg = bottomSpace === true ? 'popup-toast__bottom-space': '' ;

        var toastHTML = '<div class="popup-toast ' + classArg + '"><div>' + message + '</div></div>';

        document.body.insertAdjacentHTML('beforeend', toastHTML);

        setTimeout(function(){
            document.querySelector('.popup-toast').classList.add('show');
        },10);

        setTimeout(function(){
            document.querySelector('.popup-toast').classList.remove('show');
        },duration);

        setTimeout(function(){
            document.querySelector('.popup-toast').remove();
        },duration + 300);
    }

    return {
        show: show
    }

})();

// 샘플
// toastPopup.show('테스트용');
// toastPopup.show('테스트용', true);
// 2번째 인자값은 윈도우 높이값 & 하단에 버튼이나 다른 컨텐츠로 가려져서 안보일때 보이도록 하는 옵션임.