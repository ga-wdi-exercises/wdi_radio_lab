(function () {

  angular
    .module('wdiRadio')
    .controller('SongsIndex', [
      'Song',
      SongsIndex
    ])

  function SongsIndex (Song) {
    this.songs = Song.query()
  }

})()
