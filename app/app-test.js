describe('zapdoController', function(){
    beforeEach(module('zapdoModule'));

    it('should have all scope people', inject(function($controller){
        var scope = {};

        var ctrl = $controller('zapdoController', {$scope: scope});

        expect(scope.properties.person.length).toBe(2);
    }));

    it('should have scope name', inject(function($controller){
        var scope = {};

        var ctrl = $controller('zapdoController', {$scope: scope});

        expect(scope.properties.name).toBe('Zapdo');
    }));
});