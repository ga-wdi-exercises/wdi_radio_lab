"use strict";

(function(){
  angular
  .module("wdiRadio", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url: "",
      template: "Welcome to the World's Best Song App"
    });
  }
}());
