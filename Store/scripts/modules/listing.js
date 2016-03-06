angular.module('listing.module', ['listing.services', 'listing.filters'])
.controller('listingCtrl', ['$scope', 'data', '$rootScope', function ($scope, data, $rootScope) {
    'use strict';
    $scope.title = "Eve Market";
    $scope.setData = function (data) {
        $scope.articles = data.articles;
        console.log($scope.articles);
    }
    data.get('scripts/data/articles.js', $scope.setData);
    $scope.viewLimit = 4;
    $scope.viewMore = function (num) {
        $scope.viewLimit += num;
    }
    $scope.descending = true;
    $scope.filters = {
        query: "",
        tags: [
            {
                label: "Market",
                selected: false
            },
            {
                label: "Jobs",
                selected: false
            },
            {
                label: "Corps",
                selected: false
            },
            {
                label: "PVP",
                selected: false
            },
            {
                label: "Other",
                selected: false
            }
        ]
    }
}])
.controller('testCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.dataFromRoot = $rootScope.testValue;
}])
.run(['$rootScope', function ($rootScope) {
    $rootScope.testValue = "Practiced by meepo";
}]);
