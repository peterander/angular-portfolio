'use strict';

/* Services */

portfolioApp.factory('AjaxService', function AjaxService ($q, $http) {
	return {
		http: function(ajaxParams) {
			var deferred = $q.defer();

			$http(ajaxParams)
				.success(function (data, status, headers, config) {
					deferred.resolve({
						success: true,
						status: status,
						message: data
					});
				})
				.error(function (data, status, headers, config) {
					deferred.reject({
						success: false,
						status: status,
						message: "Http Error"
					});
				});

			return deferred.promise;
		}
	}
});