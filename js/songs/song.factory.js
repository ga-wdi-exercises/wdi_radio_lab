"use strict";

(function(){
  angular
    .module("songs")
    .factory("SongFactory", [
      SongFactoryFunction
    ])

    function SongFactoryFunction() {
      var factory = {};

      factory.query = function(){
        return [
          {title: "Song A"},
          {title: "Song B"}
        ];
      }

      return factory;
    }
})();
