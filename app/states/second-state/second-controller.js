class SecondStateController {
    constructor($state) {
        console.log('This is the second state controller');
        this.$state = $state;
    }

    buttonCallback() {
        this.$state.go('app');
    }
}

SecondStateController.$inject = ['$state'];

export default SecondStateController;
