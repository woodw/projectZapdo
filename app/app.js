var zapdoModule = angular.module('zapdoModule', []);

zapdoModule.controller('zapdoController', function zapdoController($scope){

    $scope.properties = {
        person: [
            {name: 'Bill'},
            {name: 'Larry'}
        ],
        name: 'Zapdo'
    };
});