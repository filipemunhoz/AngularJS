angular.module("previsaoTempo")
	.constant("productListActiveClass", "btn-primary")
	.constant("productListPageCount", 3)
	.controller("previsaoListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount) {
		
		var selectedCategory = null;
		
		$scope.selectedPage = 1;
		$scope.pageSize = productListPageCount;
		
		$scope.selectCategory = function (newCategory) {
			//console.log(newCategory);
			selectedCategory = newCategory; //$filter('date')(new Date(newCategory * 1000), 'dd/MM/yyyy', 'UTC');			
			$scope.selectedPage = 1;
		}
	 
		$scope.selectPage = function(newPage){
			$scope.selectedPage = newPage;
		}
		
		$scope.categoryFilterFn = function (item) {
			var category = $filter('date')(new Date(item.dt * 1000), 'dd/MM/yyyy', 'UTC');
			return selectedCategory == null || category == selectedCategory;
		}
		
		$scope.getCategoryClass = function(category){			
			return selectedCategory == category ? productListActiveClass : "";
		}
 
		$scope.getPageClass = function (page) {
			return $scope.selectedPage == page ? productListActiveClass : "";
		}		
	});
