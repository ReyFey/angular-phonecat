'use strict';

// Define the `PhonesApp` module
var PhonesApp = angular.module('PhonesApp', []);

// Define the `PhonesListController` controller on the `PhonesApp` module
PhonesApp.controller('PhonesListController', function PhonesListController($scope) {
    $scope.name = 'PhonesApp';
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});