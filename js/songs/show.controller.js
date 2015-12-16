"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsShowController", [
      "SongFactory",
      "$stateParams",
      ControllerFunction
    ])

    function ControllerFunction(SongFactory, $stateParams){
      this.song = SongFactory.get({id: $stateParams.id});
    }
})();
