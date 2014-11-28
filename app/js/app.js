'use strict';

/* App Module */

var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to this state
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
      	.state('art', {
          url: "/art",
          templateUrl: "partials/art.html"
        })
        .state('travels', {
          url: "/travels",
          templateUrl: "partials/travels.html"
        })
        .state('riffs', {
          url: "/riffs",
          templateUrl: "partials/riffs.html"
        })
        .state('state1', {
          url: "/state1",
          templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
          url: "/list",
          templateUrl: "partials/state1.list.html",
          controller: function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
          }
        })
        .state('state2', {
          url: "/state2",
          templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
          url: "/list",
          templateUrl: "partials/state2.list.html",
          controller: function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
          }
        });
});
