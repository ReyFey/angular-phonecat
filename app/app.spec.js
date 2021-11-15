describe('PhonesListController', function() {

    beforeEach(module('PhonesApp'));

    it('should create a `phones` model with 3 phones', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhonesListController', {$scope: scope});

        expect(scope.name).toBe('world');
        expect(scope.phones.length).toBe(3);
    }));

});