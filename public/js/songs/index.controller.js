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
      var vm = this;
      var ref = firebase.database().ref().child("songs");
      $firebaseArray(ref).$loaded().then(function(songs) {
        this.songs = songs;
      }.bind(this));
      this.newSong = {};
      this.play = function(song){
        this.playSong = song
        // workaround for ng-src not allowing expression {{song.audio_url}}
        this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
      }
    }
})();
