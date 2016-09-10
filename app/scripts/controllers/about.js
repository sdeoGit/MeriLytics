'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AboutCtrl', function ($scope) {


    $scope.product = [{
      name: "Soap",
      price: "10",
      unit: 0
    }, {
        name: "Oil",
        price: "20",
        unit: 0
      }, {
        name: "Mobile",
        price: "8000",
        unit: 0
      }, {
        name: "CPU",
        price: "4000",
        unit: 0
      }];

    $scope.total = function () {
      var total = 0;
      angular.forEach($scope.product, function (item) {
        total += item.unit * item.price;
      })

      return total;
    }

  });
