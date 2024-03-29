window.EditController = function ($scope,$http,$routeParams) {
    var apiUrl = 'http://localhost:3000/products';
    var id = $routeParams.id;

    //khởi tạo hàm
    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) { //json-server trả dữ liệu thành công
                $scope.p = response.data; //gán dữ liệu trả về vào biến p
            }
        })
    }

    $scope.getDetail(); //gọi hàm
}