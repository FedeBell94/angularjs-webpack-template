import template from './second.html';

function secondRouteConfig($stateProvider) {
    $stateProvider
        .state('secondState', {
            url: '/second-state',
            template,
            controller: 'SecondStateController',
            controllerAs: '$ctrl',
        });
}

export default [
    '$stateProvider',
    secondRouteConfig,
];
