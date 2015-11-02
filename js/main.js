var app = angular.module('sosTrance', ['ui.router']) 
.config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'html/home.html',
        controller: 'HomeCtrl'
      })
   .state('offer', {
        url: '/offer',
        templateUrl: 'html/offer.html',
        controller: 'OfferCtrl'
      })
  .state('cars', {
        url: '/cars',
        templateUrl: 'html/cars.html',
        controller: 'CarsCtrl'
      })
  .state('about', {
        url: '/about',
        templateUrl: 'html/about.html',
        controller: 'AboutCtrl'
      })
   .state('contact', {
        url: '/contact',
        templateUrl: 'html/contact.html',
        controller: 'ContactCtrl'
      })
    })


app.controller('mainCtrl', function($scope,$state) {
	$state.go("home")
  $(document).ready(function(){
    $(".flag").hover(
      function() {
        $( this ).addClass( "animated pulse" );
      }, function() {
        $( this ).removeClass( "animated pulse" );
      });
    $( ".telNumber").hover(
      function() {
        $( this ).addClass( "animated pulse" );
      }, function() {
        $( this ).removeClass( "animated pulse" );
      });
  })

});
app.controller('HomeCtrl', function($scope) {

});
app.controller('ContactCtrl', function($scope) {
  $scope.phone = {
    poland : "+48 29392389"
  }
});
app.controller('AboutCtrl', function($scope) {

});
app.controller('CarsCtrl', function($scope) {

});
app.controller('OfferCtrl', function($scope) {

});

app.controller('navCtrl', function($scope , $location) {
	  $scope.isActive = function(route) {
      return route === $location.path();
    };
});