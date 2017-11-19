"use strict";

angular.module("ngapp").controller("propuestaController", function(shared, $state, $scope, $mdSidenav, $mdComponentRegistry){

    var ctrl = this;

    this.auth = shared.info.auth;

    this.toggle = angular.noop;

    this.title = $state.current.title;

    $scope.provincias = [{
      codProvincia: "02",
      nombre: "Albacete"
    }, {
      codProvincia: "03",
      nombre: "Alicante/Alacant"
    }, {
      codProvincia: "04",
      nombre: "Almería"
    }, {
      codProvincia: "01",
      nombre: "Araba/Álava"
    }, {
      codProvincia: "33",
      nombre: "Asturias"
    }, {
      codProvincia: "05",
      nombre: "Ávila"
    }, {
      codProvincia: "06",
      nombre: "Badajoz"
    }, {
      codProvincia: "52",
      nombre: "Melilla"
    }];




    this.isOpen = function() { return false };
    $mdComponentRegistry
    .when("left")
    .then( function(sideNav){
      ctrl.isOpen = angular.bind( sideNav, sideNav.isOpen );
      ctrl.toggle = angular.bind( sideNav, sideNav.toggle );
    });

    this.toggleRight = function() {
    $mdSidenav("left").toggle()
        .then(function(){
        });
    };

    this.close = function() {
    $mdSidenav("right").close()
        .then(function(){
        });
    };
});
