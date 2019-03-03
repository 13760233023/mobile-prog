//屏幕自适应大小
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        if (windowWidth >= 750) {
            html.style.fontSize = '100px';
        } else {
            html.style.fontSize = windowWidth / 7.5 + 'px';
        }
        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';
    }, false);
})();
    /**
* 前提条件，设置当前设备屏幕为750px
* 根据1rem=100px;
* 如：font-size:.25rem;   等同 0.25 * html.style.fontSize
*      在宽度为750的设备下，字体大小为0.25 * 100 = 25px
* 只需要管750px下的视图
*/

