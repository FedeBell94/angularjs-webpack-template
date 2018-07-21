import template from './custom-button.html';

export default {
    bindings: {
        content: '@',
        onButtonClick: '&',
    },
    controller: 'CustomButtonController',
    require: { },
    template
};
