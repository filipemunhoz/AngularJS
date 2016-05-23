angular.module("customFilters", [])
	.filter("unique", function () {
		return function (data, propertyName) {
			if (angular.isArray(data) && angular.isString(propertyName)) {
				var results = [];
				var keys = {};
				for (var i = 0; i < data.length; i++) {
					var val = data[i][propertyName];
					if (angular.isUndefined(keys[val])) {
						keys[val] = true;
						results.push(val);
					}
				}
				return results;
			} else {
				return data;
			}
		}
	})

	.filter("uniqueDate", function ($filter) {
		return function (data, propertyName) {
			//console.log(angular.isArray(data) + " - " + angular.isNumber(propertyName));
			if (angular.isArray(data) ) {
				var results = [];
				var keys = {};
					
				for (var i = 0; i < data.length; i++) {
					//var val = data[i][propertyName];
					
					var val = $filter('date')(new Date(data[i][propertyName] * 1000), 'dd/MM/yyyy', 'UTC');
					//console.log(prop);
					if (angular.isUndefined(keys[val])) {
					//console.log(val);
						keys[val] = true;
						results.push(val);						
					}
				}
				//console.log(results.length);
				return results;
			} else {
				return data;
			}
		}
	})	 
	
	.filter('timestampToDate', function ($filter) {
	    return function (data, propertyName) {
			if (angular.isArray(data) && angular.isString(propertyName)) {
				var results = [];
				for (var i = 0; i < data.length; i++) {
					var prop = $filter('date')(new Date(data[i][propertyName] * 1000), 'dd/MM/yyyy', 'UTC');
				console.log(data[i][propertyName]);
					if(results.indexOf(prop) === -1) {
					   console.log(prop);
					   results.push(prop);
					}
				}		 
				return results;
			} else {
				return data;
			}
	    };
	})	 	
