 //Including ngSanitize ensures html links get properly sanitized
 var app = angular.module("app", ["ngSanitize"]);
 //If you use this code instead no html links get displayed 
 //var app = angular.module("app", []);

 app.controller("mainController2", function ($scope) {

   $scope.lists = [{
     text: 'stock see',
     done: false
   }, {
     text: 'recharge',
     done: false
   }, {
     text: 'Contact Dinesh',
     done: false
   }];

   $scope.remaining  = function(){
     let count = 0;
     angular.forEach( $scope.lists , function(obj) {
       count += !obj.done ? 1 : 0;
     });
     return count;
   };

   $scope.addList = function () {
     $scope.lists.push({
       text: $scope.taskname,
       done: false
     });     
     $scope.taskname = "";
   }
 });