var mainApp = angular.module("angularApp", ['ngSanitize']);

mainApp.controller("theInfoBase", function ($scope) {
  //load info items and org items
  if (typeof motorBikeFullViews != "undefined") {
    $scope.motorBikes = motorBikeFullViews.motorBikes;
    $scope.currentMotorBikeId = $scope.motorBikes[0].id;
  }
 
  if (typeof motorbikeHierarchy != "undefined") {
    $scope.folders = motorbikeHierarchy.folders;
  }
 
  if (typeof motorbikeIndex != "undefined") {
    $scope.transmissions = motorbikeIndex.transmissions;
  }
 
  if (typeof motorBikeAssociations != "undefined") {
    $scope.associations = motorBikeAssociations.associations;  }
 
  if (typeof motorBikeSequences != "undefined") {
    $scope.sequences = motorBikeSequences.sequences;
  }

  //set the initial values of page display variables we use
  //$scope.navType = "index"
  $scope.pageType = "home"

  //define page display functions
  $scope.setCurrentMotorBikeId = function (motorbikeId) {
    $scope.currentMotorBikeId = motorbikeId;
  };
  $scope.setCurrentNavType = function (navType) {
    $scope.navType = navType;
  };
  $scope.setCurrentPageNavAndMotorBike = function (pageType, navType, motorBikeId) {
    $scope.pageType = pageType;
    $scope.navType = navType;
    $scope.currentMotorBikeId= motorBikeId;
  };
  $scope.setCurrentPageAndNav = function (pageType,navType) {
    $scope.pageType = pageType;
    $scope.navType = navType;
  };


});
