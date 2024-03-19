var appTheme = function () {
    var LOCAL_STORAGE_STATE = "isDark";
    var IS_BLACK = localStorage.getItem(LOCAL_STORAGE_STATE) === 'true';
    var DOM_ELEMENT = $(".kd-mode");

    function setTheme() {
        DOM_ELEMENT.attr('data-is-dark', IS_BLACK);
        localStorage.setItem(LOCAL_STORAGE_STATE, IS_BLACK);
    }

    function switchTheme() {
        IS_BLACK = !IS_BLACK;
        setTheme()
    }

    function init() {
        setTheme();
        $(".switch-btn").click(switchTheme);
    }

    return {
        init: init
    }

}();

$(document).ready(function () {
    appTheme.init();
});
