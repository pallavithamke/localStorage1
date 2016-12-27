/**
 * Created by ADMIN on 27-12-2016.
 */
var app=angular.module('app',['ngRoute','ngStorage']);
app.config(function  ($routeProvider) {
    $routeProvider
        .when('/',{
        templateUrl:'home.html',
        controller:'homectrl'
    })
        .when('/storage',{
            templateUrl:'storage.html',
            controller:'storagectrl'

        })
        .when('/form',{
            templateUrl:'form.html',
            controller:'formctrl'
        })
    
});
app.controller("homectrl",function () {

});
app.controller("storagectrl",function ($scope,$localStorage,myservices) {
    $scope.user={};


    $scope.submitdata=function() {
        debugger;
        if($scope.user.check===true){

            localStorage.setItem('name', JSON.stringify($scope.user.name));
            localStorage.setItem('email', JSON.stringify($scope.user.email));
            $scope.user={};
            alert("Yooh, your name and email is saved in the storege.");
        }
        else {
            $scope.user={};
            alert("your name and email is not saved in the storege.");
        }


    };

    $scope.returnname = localStorage.getItem('name');
    $scope.returnemail = localStorage.getItem('email');
    $scope.user.name=JSON.parse($scope.returnname);
    $scope.user.email=JSON.parse($scope.returnemail);





});
app.controller("formctrl",function ($scope,$localStorage,myservices) {
    $scope.user={};
    $scope.submitdata=function () {
        myservices.unarray.push($scope.user)
        localStorage.setItem('name',JSON.stringify($scope.user.name));
        localStorage.setItem('email',JSON.stringify($scope.user.email));



    }  ;

});
app.service('myservices',function ($localStorage) {
  this.unarray=[];
    }

);

app .directive('headerDirective',function() {
    return{
        restrict:'AEC',
        templateUrl:'headerdirective.html'

    };
});













