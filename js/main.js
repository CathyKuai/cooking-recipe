// 當畫面元素載入完成後，執行以下...
//$(document).ready(function () {
//    ......
//});

//但以上可以省略成下面那樣！

$(function () {
    // 當.ingredients裡面的li，被點擊時，執行以下...
    $('.ingredients>li').click(function () {
        $(this).toggleClass('done');
        //this代表被點擊的那個
    });
});
