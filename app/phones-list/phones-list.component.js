angular.
module('PhonesApp').
component('phonesList', {
    templateUrl: 'phones-list/phones-list.template.html',
    controller: ['$http',
        function PhonesListController($http) {
            var self = this;
            self.orderProp = 'age';

            $http.get('phones/phones.json').then(function(response) {
                self.phones = response.data;
            });
    }]
});
