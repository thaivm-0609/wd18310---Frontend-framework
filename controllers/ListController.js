window.ListController = function ($scope,$http,$location) {
    var apiUrl = "http://localhost:3000/products";

    //khai báo hàm
    $scope.getList = function () {
        $http.get(apiUrl).then(function ($response) {
            $scope.products = $response.data;
        })
    }

    $scope.getList(); //gọi hàm

    $scope.onDetail = function (id) {
        //C1: $location.path('/detail/'+id);
        $location.path(`/detail/${id}`);
    }
}
