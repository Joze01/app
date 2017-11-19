"use strict";

angular.module("ngapp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/main");

    $stateProvider


    .state("main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        title: "OPINAPP",
        controller: "MainController",
        controllerAs: "main"
    })


    .state("propuesta", {
        url: "/propuesta",
        templateUrl: "app/components/propuesta/main.html",
        title: "OPINAPP | Propuestas",
        controller: "propuestaController",
        controllerAs: "propuesta"
    })


    .state("detalle", {
        url: "/detalle",
        templateUrl: "app/components/propuestaDetalle/main.html",
        title: "OPINAPP | Detalle",
        controller: "detallecontroller",
        controllerAs: "detalle"
    });





}]);
