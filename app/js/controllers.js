'use strict';

/* Controllers */

portfolioApp.controller('ArtCtrl', ['$scope', 'ArtService', '$http',
	function($scope, ArtService, $http) {
		$http.get('art/art.json').success(function(data) {
			$scope.art = data;		
	});
	// $scope.art = ArtService.get();
}]);

portfolioApp.factory('ArtService', ['$http',
	function($http){
		return {
			get: function(){
				$http.get('art/art.json').success(function(data) {
					return data;		
				});
			}
		};
}]);

portfolioApp.controller('TravelsCtrl', function($scope) {
	$scope.travels = [
		{'name': 'China',
		 'description': 'Visited in 2007. Stayed in Beijing.',
		 'imgUrl': 'http://lorempixel.com/64/64/city/1'},
		{'name': 'Japan',
		 'description': 'Visited in 2007. Stayed in Tokyo.',
		 'imgUrl': 'http://lorempixel.com/64/64/city/2'},
		{'name': 'England',
		 'description': 'Visited as a kid. Went to London.',
		 'imgUrl': 'http://lorempixel.com/64/64/city/3'},
		{'name': 'France',
		 'description': 'Visited in 2005. Toulouse and Paris.',
		 'imgUrl': 'http://lorempixel.com/64/64/city/4'},
		{'name': 'Singapore',
		 'description': 'Visited in 2014. Went all over.',
		 'imgUrl': 'http://lorempixel.com/64/64/city/5'},
		{'name': 'India',
		 'description': 'Visited in 2014. Tamil Nadu and Kerala.',
		 'imgUrl': 'http://lorempixel.com/64/64/city/6'},
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