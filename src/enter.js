require('./css/index.css');
require('./views/home.html');

var routerApp = angular.module('routerApp', ['ui.router',require('oclazyload')]);
routerApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('index', {
            url: '/index',
            /*template: 'I could sure use a drink right now.'*/
            templateProvider: function($q) {
                var deferred = $q.defer();
                require.ensure(['./views/skillChildHtml/skill.html'], function(require) {
                    var template = require('./views/skillChildHtml/skill.html');
                    deferred.resolve(template);
                }, 'login-tpl');
                return deferred.promise;
            },
            controller: 'SkillController', //控制器名称 可以使用controller As ** 语法
            resolve: {
                'app.main': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['./views/skillChildHtml/skill'], function() {
                        var mod = require('./views/skillChildHtml/skill');       //要异步加载的模块 (视图模块)
                        $ocLazyLoad.load({
                            name: 'app.skill' //模块名称
                        });
                        deferred.resolve(mod.controller); //输出控制器
                    }, 'skill-ctl');
                    return deferred.promise;
                }
            }
        })

        // nested list with custom controller
        .state('game', {
            url: '/game',
            /*template: 'I could sure use a drink right now.'*/
            templateProvider: function($q) {
                var deferred = $q.defer();
                require.ensure(['./views/game/game.html'], function(require) {
                    var template = require('./views/game/game.html');
                    deferred.resolve(template);
                }, 'login-tpl');
                return deferred.promise;
            },
            controller: 'Game', //控制器名称 可以使用controller As ** 语法
            resolve: {
                'app.main': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['./views/game/game'], function() {
                        var mod = require('./views/game/game');       //要异步加载的模块 (视图模块)
                        $ocLazyLoad.load({
                            name: 'app.game' //模块名称
                        });
                        deferred.resolve(mod.controller); //输出控制器
                    }, 'game-ctl');
                    return deferred.promise;
                }
            }
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('thatYears', {
            url: '/thatYears',
            /*template: 'I could sure use a drink right now.'*/
            templateProvider: function($q) {
                var deferred = $q.defer();
                require.ensure(['./views/thatYears/thatYears.html'], function(require) {
                    var template = require('./views/thatYears/thatYears.html');
                    deferred.resolve(template);
                }, 'login-tpl');
                return deferred.promise;
            },
            controller: 'ThatYear', //控制器名称 可以使用controller As ** 语法
            resolve: {
                'app.main': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['./views/thatYears/thatYears'], function() {
                        var mod = require('./views/thatYears/thatYears');       //要异步加载的模块 (视图模块)
                        $ocLazyLoad.load({
                            name: 'app.thatYears' //模块名称
                        });
                        deferred.resolve(mod.controller); //输出控制器
                    }, 'thatYear-ctl');
                    return deferred.promise;
                }
            }
        });

}]);
