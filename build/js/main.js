var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('explore', {
            url: '/explore',
            templateUrl: 'views/explore.html',
            controller: 'ExploreController'
        })

    $urlRouterProvider.otherwise('/');
}]);

app.controller('ExploreController', ['$scope', function ($scope) {
    
}]);
