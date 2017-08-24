'use strict';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4Es14riZUivXRs7ZZZCeFzNU9qktIj2M",
  authDomain: "contactlist-427ea.firebaseapp.com",
  databaseURL: "https://contactlist-427ea.firebaseio.com",
  projectId: "contactlist-427ea",
  storageBucket: "contactlist-427ea.appspot.com",
  messagingSenderId: "1013079431224"
};
firebase.initializeApp(config);

angular.module('myApp.contacts', ['ngRoute', 'firebase'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contacts', {
      templateUrl: 'contacts/contacts.html',
      controller: 'ContactsCtrl'
    });
  }])

  .controller('ContactsCtrl', ['$scope', '$firebaseArray', '$log', function ($scope, $firebaseArray, $log) {
    //reading data from student table
    var ref = firebase.database().ref('student');
    $scope.contacts = $firebaseArray(ref);


    //data adding
    $scope.addContact = function () {
      console.log("calling submit add contact");
      firebase.database().ref("/student/" + new Date().getTime()).set({
        id: new Date().getTime(),
        name: $scope.name,
        email: $scope.email,
        phone: $scope.phone
      }).then(function (ref) {
        // var id = ref.key();
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
        // console.log(id);
      });
    }

  }]);
