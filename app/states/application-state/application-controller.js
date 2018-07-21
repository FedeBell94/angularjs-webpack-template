class ApplicationController {
    constructor($state) {
        console.log('This is the application state controller');
        this.$state = $state;
    }

    buttonCallback() {
        this.$state.go('secondState');
    }
}

ApplicationController.$inject = ['$state'];

export default ApplicationController;
