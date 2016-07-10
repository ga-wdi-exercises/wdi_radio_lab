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
            var songs = $firebaseArray(songsRef);
            songs.$add(scope.song)
          }
          scope.update = function(){
            scope.song.$update({id: scope.song.id}, function(response){
              console.log(response);
            })
          }
          scope.delete = function(){
            scope.song.$delete({id: scope.song.id}, function(){
              $state.go("songs", {}, {reload: true});
            })
          }
        }
      }
    }
}());
