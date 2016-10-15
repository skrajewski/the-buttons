'use strict';

var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('explore', {
        url: '/explore',
        templateUrl: 'views/explore.html',
        controller: 'ExploreController'
    }).state('playground', {
        url: '/playground',
        templateUrl: 'views/playground.html',
        controller: 'PlaygroundController as PC'
    });

    $urlRouterProvider.otherwise('/');
}]);

app.controller('ExploreController', ['$scope', function ($scope) {}]);

app.controller('PlaygroundController', ['$scope', function ($scope) {
    var randomProperty = function randomProperty(obj) {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    this.randomize = function () {
        this.type = randomProperty(this.types);
        this.variant = randomProperty(this.variants);
        this.size = randomProperty(this.sizes);
        this.thickness = randomProperty(this.thicknesses);
        this.rounding = randomProperty(this.roundings);
    };

    this.types = {
        "Default": "",
        "Secondary": "button-secondary",
        "Success": "button-success",
        "Warning": "button-warning",
        "Danger": "button-danger"
    };

    this.variants = {
        "Normal": "",
        "Filled": "button-filled",
        "Light": "button-light"
    };

    this.sizes = {
        "Small": "button-small",
        "Normal": "",
        "Large": "button-large"
    };

    this.thicknesses = {
        "Thin": "button-thin",
        "Normal": "",
        "Fat": "button-fat"
    };

    this.roundings = {
        "Sharp": "button-sharp",
        "Normal": "",
        "Rounded": "button-rounded"
    };

    this.disabled = false;

    this.randomize();
}]);