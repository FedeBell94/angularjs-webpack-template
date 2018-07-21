import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ApplicationController from './application-controller';
import applicationRoute from './application-route';
import components from '../../components';
import states from '../index';


const dependencies = [
    ...components,
    ...states,
    uiRouter,
];

const app = angular
    .module('custom-module', dependencies)
    .controller('ApplicationController', ApplicationController)
    .config(applicationRoute);

export default app;
