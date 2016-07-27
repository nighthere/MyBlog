webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(7);

	var routerApp = angular.module('routerApp', ['ui.router']);
	routerApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/home');

	    $stateProvider
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('home', {
	            url: '/home',
	            template: 'home',
	            /*templateUrl: 'partial-home.html'*/
	        })

	        // nested list with custom controller
	        .state('home.list', {
	            url: '/list',
	            template: 'I could sure use a drink right now.',
	            controller: ["$scope", function($scope) {
	                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
	            }]
	        })

	        // nested list with just some random string data
	        .state('home.paragraph', {
	            url: '/paragraph',
	            template: 'I could sure use a drink right now.'
	        })

	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	        .state('about', {
	            url: '/about',
	            /*template: 'I could sure use a drink right now.'*/
	            templateUrl: './views/home.html'
	        });

	}]);


/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div>main</div>";

/***/ }
]);