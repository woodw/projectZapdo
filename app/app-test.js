describe('zapdoController', function(){
    beforeEach(module('zapdoModule'));

    it('should have all scope people', inject(function($controller){
        var scope = {};

        var ctrl = $controller('zapdoController', {$scope: scope});

        expect(scope.person.length).toBe(2);
    }));
    
});