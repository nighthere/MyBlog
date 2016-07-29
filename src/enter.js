require('./css/index.css');

var routerApp = angular.module('routerApp', ['ui.router',require('oclazyload')]);
routerApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
   //其他的界面 跳转到首页
    $urlRouterProvider.otherwise('/index/d3');

    $stateProvider
        // 首页 ========================================
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
            //js 文件
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

        // 首页的子页面
        .state('index.d3',{
            url: '/:d3',
            templateProvider: function($q) {
                var deferred = $q.defer();
                require.ensure(['./views/skillChildHtml/d3/d3.html'], function(require) {
                    var template = require('./views/skillChildHtml/d3/d3.html');
                    deferred.resolve(template);
                }, 'd3-tpl');
                return deferred.promise;
            },
            controller: 'D3Controller', //控制器名称 可以使用controller As ** 语法
            //js 文件
            resolve: {
                'app.main': function($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure(['./views/skillChildHtml/d3/d3'], function() {
                        var mod = require('./views/skillChildHtml/d3/d3');       //要异步加载的模块 (视图模块)
                        $ocLazyLoad.load({
                            name: 'app.d3' //模块名称
                        });
                        deferred.resolve(mod.controller); //输出控制器
                    }, 'd3-ctl');
                    return deferred.promise;
                }
            }
        })

        // cocos2d 页面
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
        // 那些年 ======
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
