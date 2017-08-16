(function () {

  angular
    .module('wdiRadio')
    .factory('Artist', [
      '$resource',
      Artist
    ])

  function Artist ($resource) {
    return $resource('http://localhost:3000/api/artists/:id', {}, {
      update: { method: 'PUT' }
    })
  }

}())
