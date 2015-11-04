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
	$state.go("home");
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
  $(document).ready(function(){
    
    var offersCopy;
    var isLeftOffer = true;
    $(".offers").hover(function(){
      var offers = ["towing", "repair","service","buy"]
      var offerName = $(this).attr("data-img")
     
      $( this ).addClass( "big" );


      var i = offers.indexOf(offerName);
      offers.splice(i,1)

    //do what you need here

        $(".offers").not(this).each( function(i, offer){

          $(offer).children("img").attr("src", "img/"+offers[i]+".jpg") 
          $(".offerImage").each(function(i, image){
            $(image).attr("src","img/"+offerName+".jpg")
          })
 
          if (isLeftOffer) {
            $(offer).children("div.imagesContainer, p").addClass("toRight");
            var img = $("<img>");  img.attr('src', "img/"+offers[i]+".jpg");

          }else{
            $(offer).children("div.imagesContainer").addClass("toLeft")
           // $(offer).children("p").addClass("toLeft")
          }

        })//each
    },function(){
       var offers = ["towing", "repair","service","buy"]
       $(".offers").each( function(i, offer){
          $(offer).children("img").attr("src", "img/"+offers[i]+".svg") 
          $(offer).children("div.imagesContainer, p").removeClass("toRight toLeft")
        })
       isLeftOffer = !isLeftOffer;
        $( this ).removeClass( "big" ); 
       
    })
  })
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
});

app.controller('navCtrl', function($scope , $location) {
	  $scope.isActive = function(route) {
      return route === $location.path();
    };
});