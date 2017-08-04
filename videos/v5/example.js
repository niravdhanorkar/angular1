var myApp =  angular.module('myApp',[]);
myApp.controller('thecontroller',function($scope, $log, $filter){
  $scope.name='nd';
  $scope.mission ='do something..';
  $scope.getName=function(){
    return "N Dhanorkar";
  }
  $scope.getName();
  console.log($scope);

  //will use services $log, $scope, $filter
  //name is "nd"
  $log.info($scope.name);
  $scope.changedName = $filter('uppercase')($scope.name);
  $log.info($scope.changedName);


});