'use strict';


app.controller('CreditInfoCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.title = "授信系统-授信信息";
    $rootScope.menuUl = true;

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    $rootScope.menuItemFocus = 'font-color-bleck';
    creditReady();//ready运行加载选项
    pageHrefMenuDel();

    //样式控制
    updateColor(1);//menu-item小菜单的焦点选择


    updateScreenWidth();

    selectAnima();
}]);


app.controller('MidInfoCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.title = "授信系统-商编信息";
    $rootScope.menuUl = true;//是否显示左侧小菜单

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    creditReady();//ready运行加载选项
    pageHrefMenuDel();

    updateColor(2);//menu-item小菜单的焦点选择

    updateScreenWidth();

    selectAnima();
}]);


app.controller('UpdateApplicationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.title = "授信系统-修改申请";
    $rootScope.menuUl = true;//是否显示左侧小菜单

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    creditReady();//ready运行加载选项

    updateColor(3);//menu-item小菜单的焦点选择
    selectAnima();
}]);


app.controller('UpdateMidCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.title = "授信系统-商编管理";
    $rootScope.menuUl = true;//是否显示左侧小菜单

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    creditReady();//ready运行加载选项

    updateColor(4);//menu-item小菜单的焦点选择
    selectAnima();
}]);


app.controller('AddAmountCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.title = "授信系统-新增额度";
    $rootScope.menuUl = true;//是否显示左侧小菜单

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    creditReady();//ready运行加载选项
    updateColor(5);//menu-item小菜单的焦点选择
    selectAnima();
}]);


app.controller('MerchantStatisticsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.title = "授信系统-商户统计信息";
    $rootScope.menuUl = true;//是否显示左侧小菜单

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    creditReady();//ready运行加载选项
    updateColor(6);//menu-item小菜单的焦点选择

}]);

app.controller('MidStatisticsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.title = "授信系统-商编统计信息";
    $rootScope.menuUl = true;//是否显示左侧小菜单

    if ($('#showMenu').hasClass('showMenu')) {
        showMenu();//显示左侧菜单
    }

    creditReady();//ready运行加载选项


    updateColor(7);//menu-item小菜单的焦点选择

}]);


