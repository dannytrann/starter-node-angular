angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})

		.when('/staff', {
			templateUrl: 'views/staff.html',
			controller: 'StaffController'
		})

		.when('/services', {
			templateUrl: 'views/services.html',
			controller: 'ServiceController'
		})

        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductController'
        })
        .when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'PortfolioController'
        });
	$locationProvider.html5Mode(true);

}]);