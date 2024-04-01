window.EditController = function ($scope,$http,$routeParams,$location) {
    var apiUrl = 'http://localhost:3000/products';
    var id = $routeParams.id;

    //khởi tạo hàm
    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) { //json-server trả dữ liệu thành công
                $scope.p = response.data; //gán dữ liệu trả về vào biến p
                $scope.inputValue = {
                    name: response.data.name,
                    description: response.data.description,
                }
            }
        })
    }

    $scope.getDetail(); //gọi hàm

    $scope.onUpdate = function () {
        var updatedPro = {
            ...$scope.inputValue
        }

        $http.put(
            `${apiUrl}/${id}`,
            updatedPro
        ).then(function (response) {
            if(response.status == 200) {
                $location.path('/list');
            }
        })
    }
}