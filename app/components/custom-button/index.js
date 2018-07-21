import angular from 'angular';
import Controller from './custom-button-controller';
import Component from './custom-button-component';
// TODO css, scss
// TODO service
// import './custom-button.scss';

const dependencies = [
];

export default angular
    .module('customButton', dependencies)
    .controller('CustomButtonController', Controller)
    .component('customButton', Component);

