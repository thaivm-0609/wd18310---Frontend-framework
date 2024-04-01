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

    $scope.onEdit = function (id) {
        $location.path(`/edit/${id}`)
    }

    $scope.onDelete = function (id) {
        if (confirm('Are you sure?')) {
            $http.delete(`${apiUrl}/${id}`).then(function (response) {
                if (response.status == 200) {
                    alert('Đã xoá');
                    $scope.getList();
                }
            })
        }
    }
}
