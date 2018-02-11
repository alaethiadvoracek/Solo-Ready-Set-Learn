 let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial' ]);
 myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .warnPalette('red')
      .accentPalette('grey')
      .backgroundPalette('grey');
    // .dark();
  });
myApp.config(function($routeProvider) {
    console.log('config loaded');
    //CLIENT SIDE ROUTES
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
    .otherwise(
        { redirectTo: '/home'}
    )//end redirect
});//end app config