var zapdoModule = angular.module('zapdoModule', []);

zapdoModule.controller('zapdoController', function zapdoController($scope){
    $scope.person = [
        {name:'Bill'},
        {name:'Larry'}
    ];
});