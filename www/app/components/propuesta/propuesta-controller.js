"use strict";

angular.module("ngapp").controller("propuestaController", function(shared, $state, $scope, $mdSidenav, $mdComponentRegistry){

    var ctrl = this;

    this.auth = shared.info.auth;

    this.toggle = angular.noop;

    this.title = $state.current.title;

 

    $scope.todos = [
      {
        what: 'Hacienda',
        who: 'Ley de Pensiones',
        when: '3:08PM',
        notes: " Descripción breve acerca de la reforma"
      },
      {
        what: 'Dirección General de centros penales',
        who: 'Ley penitenciaria',
        when: '3:08PM',
        notes: " Descripción breve acerca de la reforma"
      },
      {
        what: 'Tribunal Supremo Electoral',
        who: 'Ley de partidos políticos',
        when: '3:08PM',
        notes: " Descripción breve acerca de la reforma"
      },
      {
        what: 'Corte de cuentas',
        who: 'Ley reajuste fondos',
        when: '3:08PM',
        notes: " Descripción breve acerca de la reforma"
      },
      {
        what: 'Ministerio de exterior',
        who: 'Ley Transitoria',
        when: '3:08PM',
        notes: " Descripción breve acerca de la reforma"
      },
    ];







  console.log($scope);

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
