'use strict';

/* App Module */


var app = angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'ui.bootstrap'
]).run(function($rootScope, $route) {
    $rootScope.urlList = function(type, name, value, skip, limit) {
        var url = type;
        if(name == 'where'){
            url += JSON.stringify(value);
        }else{
            url += value;
        }

        return url;
    };

    $rootScope.$on('$routeUpdate', function(event, current) {
        if(current.params.reload) {
            $route.reload();
        }
    });


});



app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { $routeProvider
    .when('/dashboard', {
        templateUrl: 'template/dashboard.html',
        controller: 'DashboardCtrl'
    })
    .when('/creditList', {//商户列表
        templateUrl: 'template/credit_list.html',
        controller: 'CreditListCtrl'
    })
    .when('/credit/:id/creditInfo', {//授信信息
        templateUrl: 'template/creditInfo.html',
        controller: 'CreditInfoCtrl'
    })
    .when('/credit/:id/midInfo', {//商编信息
        templateUrl: 'template/midInfo.html',
        controller: 'MidInfoCtrl'
    })
    .when('/credit/:id/updateApplication', {//修改申请
        templateUrl: 'template/updateApplication.html',
        controller: 'UpdateApplicationCtrl'
    })
    .when('/credit/:id/updateMid', {//增删商编
        templateUrl: 'template/updateMid.html',
        controller: 'UpdateMidCtrl'
    })
    .when('/credit/:id/addAmount', {//新增额度
        templateUrl: 'template/addAmount.html',
        controller: 'AddAmountCtrl'
    })
    .when('/credit/:id/merchantStatistics', {//商户统计信息
        templateUrl: 'template/merchantStatistics.html',
        controller: 'MerchantStatisticsCtrl'
    })
    .when('/credit/:id/midStatistics', {//商编统计信息
        templateUrl: 'template/midStatistics.html',
        controller: 'MidStatisticsCtrl'
    })
    .otherwise({
        redirectTo: '/dashboard'
    });
}]);


