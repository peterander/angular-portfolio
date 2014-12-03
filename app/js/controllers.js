'use strict';

/* Controllers */

portfolioApp.controller('ArtCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('art/art.json').success(function(data) {
			$scope.art = data;		
		});
}]);

portfolioApp.controller('TravelsCtrl', function($scope) {
	$scope.travels = [
		{
		 'name': 'China',
		 'description': 'Visited in 2007. Stayed in Beijing.',
		 'gallery': [
		 	'http://lorempixel.com/300/300/food/1/',
		 	'http://lorempixel.com/300/300/food/2/',
		 	'http://lorempixel.com/300/300/food/3/'
		 ]
		},
		{
		 'name': 'Japan',
		 'description': 'Visited in 2007. Stayed in Tokyo.',
		 'gallery': [
		 	'http://lorempixel.com/300/300/food/2/',
		 	'http://lorempixel.com/300/300/food/3/',
		 	'http://lorempixel.com/300/300/food/4/'
		 ]
		},
		{
		 'name': 'England',
		 'description': 'Visited as a kid. Went to London.',
		 'gallery': [
		 	'http://lorempixel.com/300/300/food/3/',
		 	'http://lorempixel.com/300/300/food/4/',
		 	'http://lorempixel.com/300/300/food/5/'
		 ]
		},
		{
		 'name': 'France',
		 'description': 'Visited in 2005. Toulouse and Paris.',
		 'gallery': [
		 	'http://lorempixel.com/300/300/food/4/',
		 	'http://lorempixel.com/300/300/food/5/',
		 	'http://lorempixel.com/300/300/food/6/'
		 ]
		},
		{
		 'name': 'Singapore',
		 'description': 'Visited in 2014. Went all over.',
		 'gallery': [
		 	'http://lorempixel.com/300/300/food/5/',
		 	'http://lorempixel.com/300/300/food/6/',
		 	'http://lorempixel.com/300/300/food/7/'
		 ]
		},
		{
		 'name': 'India',
		 'description': 'Visited in 2014. Tamil Nadu and Kerala.',
		 'gallery': [
		 	'http://lorempixel.com/300/300/food/6/',
		 	'http://lorempixel.com/300/300/food/7/',
		 	'http://lorempixel.com/300/300/food/8/'
		 ]
		}
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
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'riffs/camera-shutter-click-06.mp3';
	$scope.playRiff = function(riff){
		riff.isPlaying = true;
		$scope.audio.play();
	}
	$scope.pauseRiff = function(riff){
		riff.isPlaying = false;
		$scope.audio.pause();
	}
	$scope.audio.addEventListener('ended', function() {
		$scope.$apply(function() {
			$scope.pauseRiff();
		});
	});
    // $scope.isPlaying = false;
    // $scope.audio = document.createElement('audio');
    // $scope.audio.src = 'riffs/camera-shutter-click-06.mp3';
    // $scope.playRiff = function(riff) {
	   //  $scope.audio.play();
	   //  $scope.isPlaying = true;
    // };
    // $scope.pauseRiff = function(riff) {
	   //  $scope.audio.pause();
	   //  $scope.isPlaying = false;
    // };
    // $scope.audio.addEventListener('ended', function() {
	   //  $scope.$apply(function() {
	   //    $scope.pauseRiff()
	   //  });
    // });
	$scope.riffs = [
		{'number': '1',
		 'title': 'Wildwood Flower',
		 'instrument': 'Banjo',
		 'duration': '00:33',
		 'url': 'riffs/camera-shutter-click-06.mp3',
		 'rank': 0},
		{'number': '2',
		 'title': 'Picking',
		 'instrument': '12-string',
		 'duration': '00:27',
		 'url': 'riffs/electric-drill-1.mp3',
		 'rank': 0},
		{'number': '3',
		 'title': 'Bendy',
		 'instrument': 'Telecaster',
		 'duration': '00:45',
		 'url': 'riffs/electric-drill-2.mp3',
		 'rank': 0},
		{'number': '4',
		 'title': 'Clawhammer',
		 'instrument': 'Banjo',
		 'duration': '00:38',
		 'url': 'riffs/freezer-hum-1.mp3',
		 'rank': 0},
		{'number': '5',
		 'title': 'Open',
		 'instrument': '12-string',
		 'duration': '00:32',
		 'url': 'riffs/grass-trimmer-1.mp3',
		 'rank': 0},
		{'number': '6',
		 'title': 'Hammer-on',
		 'instrument': 'Telecaster',
		 'duration': '00:19',
		 'url': 'riffs/hammering-2.mp3',
		 'rank': 0},
	];
});