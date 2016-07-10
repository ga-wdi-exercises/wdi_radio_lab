"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
      "$sce",
      "$firebaseArray",
      "$firebaseObject",
      ControllerFunction
    ])

    function ControllerFunction($sce, $firebaseArray, $firebaseObject ){
      var ref = firebase.database().ref().child("songs");
      this.songs = $firebaseArray(ref);
      this.newSong = {};
      this.play = function(song){
        this.playSong = song
        // workaround for ng-src not allowing expression {{song.audio_url}}
        this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
      }
    }
})();
