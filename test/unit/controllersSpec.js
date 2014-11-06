 'use strict';
 
 /* jasmine specs for controllers go here */
describe('Portfolio controllers', function() {
 
  describe('ArtCtrl', function(){

    beforeEach(module('portfolioApp'));
 
    it('should create "art" model with 6 art', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ArtCtrl', {$scope:scope});

      expect(scope.art.length).toBe(6);
    }));
 
  });
 });