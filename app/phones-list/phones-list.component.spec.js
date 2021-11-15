'use strict';

describe('phonesList', function() {

    // Load the module that contains the `phonesList` component before each test
    beforeEach(module('phonesList'));

    // Test the controller
    describe('controller', function() {
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            ctrl = $componentController('phonesList');
        }));

        it('should create a `phones` model with 3 phones', function() {
            expect(ctrl.phones.length).toBe(3);
        });

        it('should set a default value for the `orderProp` model', function() {
            expect(ctrl.orderProp).toBe('age');
        });

    });

});
