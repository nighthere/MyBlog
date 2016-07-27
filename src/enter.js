require('./css/index.css');
require('./views/home.html');

var routerApp = angular.module('routerApp', ['ui.router',require('oclazyload')]);
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
        .state('animation', {
            url: '/list',
            template: 'I could sure use a drink right now.',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
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
            templateProvider: function($q) {
                var deferred = $q.defer();
                require.ensure(['./views/novelChild/novel.html'], function(require) {
                    var template = require('./views/novelChild/novel.html');
                    deferred.resolve(template);
                }, 'login-tpl');
                return deferred.promise;
            },
            controller: 'AboutController', //控制器名称 可以使用controller As ** 语法
            resolve: {
                'app.main': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['./views/novelChild/novel'], function() {
                        var mod = require('./views/novelChild/novel'); //要异步加载的模块 (视图模块)
                        $ocLazyLoad.load({
                            name: 'app.novel' //模块名称
                        });
                        deferred.resolve(mod.controller); //输出控制器
                    }, 'novel-ctl');
                    return deferred.promise;
                }
            }
        });

}]);
