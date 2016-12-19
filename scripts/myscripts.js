var app = angular.module("twitterApp", ["ngRoute", "ngTweets"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html"
    })
    .when("/wwe", {
        templateUrl : "partials/wwe.html",
        controller : "wweCtrl"
    })
    .when("/ufo", {
        templateUrl : "partials/ufo.html",
        controller : "ufoCtrl"
    });
});

app.controller("wweCtrl", function ($scope, $http, tweets) {
    
    tweets.get({
        widgetId: '810674639173255169'
    }).success(function(data){
        $scope.feed = data;
        console.log(data);
    });
});
app.controller("ufoCtrl", function ($scope, $http, tweets) {
    
    tweets.get({
        widgetId: '810700768659537920'
    }).success(function(data){
        $scope.feed = data;
        console.log(data);
    });
});
