"use strict";

(function(){
  angular
    .module("songs")
    .directive("songForm", [
      "$state",
      "$firebaseArray",
      "$firebaseObject",
      SongFormDirectiveFunction
    ])
    function SongFormDirectiveFunction($state, $firebaseArray, $firebaseObject){
      return {
        templateUrl: "js/songs/form.html",
        scope: {
          song: "="
        },
        link: function(scope){
          scope.create = function(){
            var songsRef = firebase.database().ref("songs");
            var songs = $firebaseArray(songsRef)
            songs.$add(scope.song).then(function () {
              console.log("added!");
              scope.song = {}
              $state.go("songs", {}, {reload: true});
            })
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
                console.log("updated!");
                $state.go("songs", {}, {reload: true});
              })
            }
          }
          scope.delete = function(){
            if (scope.song.$id) {
              var songChild = firebase.database().ref().child("songs/" + scope.song.$id);
              songChild.remove().then(function () {
                console.log("removed!");
                $state.go("songs", {}, {reload: true});
              })
            }
          }
        }
      }
    }
}());
