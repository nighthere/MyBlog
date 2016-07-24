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

	/**
	 * Created by 永夜 on 2016/7/23.
	 */
	__webpack_require__(6);

	//定义路由
	var routerOne = angular.module('routerApp',['angular-ui-router']);
	routerOne.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider ){
	    /* 使用when来对一些不合法的路由进行重定向 */
	   // $urlRouterProvider.when('', '/main');
	    /* 通过$stateProvider的state()函数来进行路由定义 */
	    $stateProvider.state('main', {
	        url: '/main',
	        templateUrl: './views/main.html'
	    }).state('a', {
	        url: '/a',
	        template: '<h1>This is an inline template</h1>'
	    }),state('b', {
	        url: '/b',
	        template: '<h1>This is an inline template</h1>'
	    })

	    /*$stateProvider.state('404', {
	        url: '/404',
	        templateUrl: '404.html'
	    })*/
	}]);

	console.log('router');


/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);