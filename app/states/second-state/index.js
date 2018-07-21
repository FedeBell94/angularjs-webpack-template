import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SecondStateController from './second-controller';
import secondStateRoute from './second-route';
import components from '../../components';


const dependencies = [
    ...components,
    uiRouter,
];

const app = angular
    .module('second-state', dependencies)
    .controller('SecondStateController', SecondStateController)
    .config(secondStateRoute);

export default app;
