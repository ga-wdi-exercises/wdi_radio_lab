(function() {
  angular
    .module('wdiRadio')
    .directive('songPlayer', [
      songPlayer
    ])

  function songPlayer () {
    return {
      templateUrl: 'js/directives/player.html',
      scope: {
        song: '='
      }
    }
  }

}());
