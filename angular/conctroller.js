'use strict';

/* Controllers */

app.controller('DashboardCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = '开始';

    $rootScope.title = "卡得万利授信系统";
    $rootScope.menuUl = false;//首页与列表禁止显示小菜单


    //当回到首页时去掉所有改变。
    $('.big-catalog-focus').removeClass('big-catalog-focus');//去除大菜单所有焦点
    $('.wrap').removeClass('menu-animation');//回到首页时去除菜单区域与内容区域显示
    $('.menu-wrap').removeClass('menu-animation');
    $('.menu-ctrl').removeClass('menu-ctrl-true');
    $('.line1').removeClass('anima');
    $('.line3').removeClass('anima');
    setTimeout(function(){$('.line2').removeClass('anima')},500);

    menuAnimaDel();

}]);


