"use strict";

angular.module("ngapp").controller("detallecontroller", function (shared, $state, $scope, $http, $mdSidenav, $mdComponentRegistry, $sessionStorage) {

    var ctrl = this;

    this.auth = shared.info.auth;

    this.toggle = angular.noop;

    this.title = $state.current.title;

    this.isOpen = function () { return false };
    $mdComponentRegistry
        .when("left")
        .then(function (sideNav) {
            ctrl.isOpen = angular.bind(sideNav, sideNav.isOpen);
            ctrl.toggle = angular.bind(sideNav, sideNav.toggle);
        });

    this.toggleRight = function () {
        $mdSidenav("left").toggle()
            .then(function () {
            });
    };

    this.close = function () {
        $mdSidenav("right").close()
            .then(function () {
            });
    };

    if ($sessionStorage.proposalId != null) {
        // $http.get("http://192.168.43.233/opinapp/api/propuestas/" + $sessionStorage.proposalId)
        $http.get("/detalle.json")
            .success(function (data) {
                $scope.proposal = data[0];
                console.log($scope.proposal);
            });
    }
});
