 let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial' ]);
 //config for angular material theme 
 myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .warnPalette('red')
      .accentPalette('grey')
      .backgroundPalette('grey');
  });//end config
  
//CLIENT SIDE ROUTES
myApp.config(function($routeProvider) {
    console.log('config loaded');
    $routeProvider 
    .when('/home', {
        templateUrl: '/views/home.html', 
        controller: "HomeController as vm"
    })
    .when('/alphabet', {
        templateUrl: '/views/abc.html',
        controller: 'AlphabetController as vm'
    })//end alphabet
    .when('/numbers', {
        templateUrl: '/views/numbers.html', 
        controller: "NumbersController as vm"
    })//end numbers
    .when('/colors', {
        templateUrl: '/views/colors.html', 
        controller: "ColorsController as vm"
    })//end colors
    .when('/shapes', {
        templateUrl: '/views/shapes.html', 
        controller: "ShapesController as vm"
    })//end shapes
    .when('/games', {
        templateUrl: '/views/game.html', 
        controller: "GameController as vm"
    })//end shapes
    .otherwise(
        { redirectTo: '/home'}
    )//end re-direct
});//end app config