"use strict";

(function(){
  angular
    .module("wdiRadio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
        .state("Welcome", {
          url: "",
          templateUrl: "js/welcome.html"
        })
        .state("songs", {
          url: "/songs",
          templateUrl: "js/songs/index.html",
          controller: "SongsIndexController",
          controllerAs: "SongsIndexViewModel"
        })
        .state("signup", {
          url: "/signup",
          templateUrl: "js/users/new.html",
          controller: "SessionsController",
          controllerAs: "SessionsViewModel"
        })
    } // closes Router Function
}());
