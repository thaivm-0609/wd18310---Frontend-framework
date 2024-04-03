window.AddController = function ($scope,$http,$location) {
    var apiUrl = 'http://localhost:3000/products';

    $scope.onSubmit = function() {
        var newProduct = {
            ...$scope.inputValue,
        }

        //khởi tạo biến để kiểm tra hợp lệ
        var invalid = false;
        //nếu trường name bỏ trống
        if (!$scope.inputValue  
            || !$scope.inputValue.name 
            || $scope.inputValue.name.length < 6
        ) {
            invalid = true;
        }

        //nếu trường description bỏ trống
        if (!$scope.inputValue || !$scope.inputValue.description) {
            invalid = true;
        }

        if (!invalid) {
            $http.post(apiUrl,newProduct).then(function (response) {
                if (response.status == 201) {
                    $location.path('/list');
                }
            })
        }
    }
}