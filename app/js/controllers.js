'use strict';

/* Controllers */

portfolioApp.controller('ArtCtrl', ['$scope', 'ArtService', '$http',
	function($scope, ArtService, $http) {
		$http.get('art/art.json').success(function(data) {
			$scope.art = data;		
		});
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
	$scope.upVote = function(riff){
		if(!riff.rank){
			riff.rank=0;
		}
		riff.rank++;
	};
	$scope.downVote = function(riff){
		if(!riff.rank){
			riff.rank=0;
		}
		riff.rank--;
	};
	$scope.predicate = "-rank";
	$scope.riffs = [
		{'number': '1',
		 'title': 'Wildwood Flower',
		 'instrument': 'Banjo',
		 'duration': '00:33',
		 'url': '',
		 'rank': 0},
		{'number': '2',
		 'title': 'Picking',
		 'instrument': '12-string',
		 'duration': '00:27',
		 'url': '',
		 'rank': 0},
		{'number': '3',
		 'title': 'Bendy',
		 'instrument': 'Telecaster',
		 'duration': '00:45',
		 'url': '',
		 'rank': 0},
		{'number': '4',
		 'title': 'Clawhammer',
		 'instrument': 'Banjo',
		 'duration': '00:38',
		 'url': '',
		 'rank': 0},
		{'number': '5',
		 'title': 'Open',
		 'instrument': '12-string',
		 'duration': '00:32',
		 'url': '',
		 'rank': 0},
		{'number': '6',
		 'title': 'Hammer-on',
		 'instrument': 'Telecaster',
		 'duration': '00:19',
		 'url': '',
		 'rank': 0},
	];
});