'use strict';

/* Controllers */

var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('ArtCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('art/art.json').success(function(data) {
			$scope.art = data;		
	});
}]);

portfolioApp.controller('TravelsCtrl', function($scope) {
	$scope.travels = [
		{'name': 'China',
		 'description': 'Visited in 2007. Stayed in Beijing.'},
		{'name': 'Japan',
		 'description': 'Visited in 2007. Stayed in Tokyo.'},
		{'name': 'England',
		 'description': 'Visited as a kid. Went to London.'},
		{'name': 'France',
		 'description': 'Visited in 2005. Toulouse and Paris.'},
		{'name': 'Singapore',
		 'description': 'Visited in 2014.'},
		{'name': 'India',
		 'description': 'Visited in 2014. Tamil Nadu and Kerala.'},
	];
});

portfolioApp.controller('RiffsCtrl', function($scope) {
	$scope.riffs = [
		{'number': '1',
		 'title': 'Wildwood Flower',
		 'instrument': 'Banjo',
		 'duration': '00:33',
		 'url': ''},
		{'number': '2',
		 'title': 'Picking',
		 'instrument': '12-string',
		 'duration': '00:27',
		 'url': ''},
		{'number': '3',
		 'title': 'Bendy',
		 'instrument': 'Telecaster',
		 'duration': '00:45',
		 'url': ''},
		{'number': '4',
		 'title': 'Clawhammer',
		 'instrument': 'Banjo',
		 'duration': '00:38',
		 'url': ''},
		{'number': '5',
		 'title': 'Open',
		 'instrument': '12-string',
		 'duration': '00:32',
		 'url': ''},
		{'number': '6',
		 'title': 'Hammer-on',
		 'instrument': 'Telecaster',
		 'duration': '00:19',
		 'url': ''},
	];
});