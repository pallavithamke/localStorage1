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
    $scope.submitdata=function () {
        myservices.unarray.push($scope.user)
        localStorage.setItem('name',JSON.stringify($scope.user.name));
        localStorage.setItem('email',JSON.stringify($scope.user.email));


        
    }  ;



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













