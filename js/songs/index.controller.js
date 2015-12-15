"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
      "SongFactory",
      ControllerFunction
    ])

    function ControllerFunction(SongFactory){
      this.songs = SongFactory.query();
      this.newSong = new SongFactory();
    }
})();
