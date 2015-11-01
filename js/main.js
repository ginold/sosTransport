var app = angular.module('sosTrance', []);


app.controller('mainCtrl', function($scope) {

});

app.controller('navCtrl', function($scope) {
	$scope.nav = function(section){
		console.log(section)
	}
});