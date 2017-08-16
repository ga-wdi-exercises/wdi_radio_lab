(function () {

  angular
    .module('wdiRadio')
    .controller('SongsIndex', [
      'Song',
      SongsIndex
    ])
    .controller('SongsShow', [
      '$stateParams',
      'Song',
      SongsShow
    ])

  function SongsIndex (Song) {
    this.songs = Song.query()
  }

  function SongsShow($stateParams, Song) {
    this.song = Song.get({ id: $stateParams.id })
    console.log(this.song)
  }

})()
