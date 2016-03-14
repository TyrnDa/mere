'use strict';

app.controller('CreditListCtrl', ['$scope','$rootScope', function($scope, $rootScope) {
    // nothing

    $rootScope.title = "授信系统-商户列表";
    $rootScope.menuUl = false;//首页与列表禁止显示小菜单


    updateScreenWidth();



    $('.big-catalog-focus').removeClass('big-catalog-focus');//去除大菜单所有焦点
    $('.wrap').removeClass('menu-animation');

    $('.credit-list').addClass('big-catalog-focus');//给list页面选项添加焦点


    selectAnima();




}]);







