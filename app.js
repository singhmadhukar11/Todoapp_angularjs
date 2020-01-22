var app = angular.module("myapp", []);
app.controller("HelloController", ["$rootScope", "$scope", "$http", function ($rootScope, $scope, $http) {

    // -----------------------------------------ANGULAR JS COAD---------------------------------------------------------
    $scope.listData = [];

    $scope.addDataDetails = (credentials) => {
        var dataDetails = {
            id: $scope.listData.length + 1,
            email: credentials.email,
            password: credentials.password,
            address: credentials.address,
            address2: credentials.address2,
            city: credentials.city,
            zip: credentials.zip
        };
        $scope.listData.push(dataDetails);
        clearField();
    };

    let clearField = () => {
        $scope.credentials.email = '';
        $scope.credentials.password = '';
        $scope.credentials.address = '';
        $scope.credentials.address2 = '';
        $scope.credentials.city = '';
        $scope.credentials.zip = '';
    };

    $scope.deleteRowData = (data) => {
        $scope.index = $scope.listData.indexOf(data);
        $scope.listData.splice($scope.index, 1);
        console.log("Deleted Sucessfully" + data)
    };

    $scope.editRowData = (data) => {
        console.log("Data edited", data)
    };

}]);
