(function () {

  angular
    .module('wdiRadio')
    .factory('Album', [
      '$resource',
      Album
    ])

  function Album ($resource) {
    return $resource('http://localhost:3000/api/albums/:id', {}, {
      update: { method: 'PUT' }
    })
  }
  
}())
