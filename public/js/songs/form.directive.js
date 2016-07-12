"use strict";

(function(){
  angular
    .module("songs")
    .directive("songForm", [
      "SongFactory",
      "$state",
      "$firebaseArray",
      "$firebaseObject",
      SongFormDirectiveFunction
    ])
    function SongFormDirectiveFunction(SongFactory, $state, $firebaseArray, $firebaseObject){
      return {
        templateUrl: "js/songs/form.html",
        scope: {
          song: "="
        },
        link: function(scope){
          scope.create = function(){
            var songsRef = firebase.database().ref("songs");
            var songs = $firebaseArray(songsRef)
            songs.$add(scope.song)
            scope.song.visible = !scope.song.visible
          }
          scope.update = function(){
            if (scope.song.$id) {
              var update = {}
              angular.forEach(scope.song, function (value, key) {
                if (value && key == "title" || key == "audio_url" || key == "album_art" || key == "genre") {
                  update[key] = value
                }
              }, update)
              var songChild = firebase.database().ref().child("songs/" + scope.song.$id)
              songChild.set(update).then(function () {
                console.log("Sucess");
                console.log(songChild);
              })
            }
            scope.song.showEditForm = !scope.song.showEditForm
          }
          scope.delete = function(){
            console.log("deleting");
            var songsRef = firebase.database().ref("songs");
            var songs = $firebaseArray(songsRef)
            songs.$remove(scope.song).then(function (song) {
              $state.go("songs", {}, {reload: true});
            })
          }
        }
      }
    }
}());
