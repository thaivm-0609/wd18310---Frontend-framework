window.ListController = function ($scope, $http) {
    var apiUrl = "http://localhost:3000/products";

    //khai báo hàm
    $scope.getList = function () {
        $http.get(apiUrl).then(function ($response) {
            $scope.products = $response.data;
        })
    }

    $scope.getList(); //gọi hàm
}
