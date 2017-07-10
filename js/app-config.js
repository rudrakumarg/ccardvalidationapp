app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/dashboard', {
		templateUrl: 'views/cardetails.html',
		controller: 'cardCtrl',
		controllerAs: 'cdCtrl'
	}).otherwise({
		redirectTo: '/dashboard'
	});
}]);