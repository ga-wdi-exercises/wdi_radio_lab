(function () {

  angular
    .module('wdiRadio')
    .factory('Song', [
      '$resource',
      Song
    ])

  function Song ($resource) {
    return $resource('http://localhost:3000/api/songs/:id', {}, {
      update: { method: 'PUT' }
    })
  }

})()
