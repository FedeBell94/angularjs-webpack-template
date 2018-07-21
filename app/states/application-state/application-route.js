import template from './application.html';

function applicationRouteConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/test',
            template,
            controller: 'ApplicationController',
            controllerAs: '$ctrl',
        });

    $urlRouterProvider.otherwise('/test');
}

export default [
    '$stateProvider',
    '$urlRouterProvider',
    applicationRouteConfig,
];
