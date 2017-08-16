(function () {

  angular
    .module('wdiRadio')
    .controller('SongsIndex', [
      'Song',
      SongsIndex
    ])
    .controller('SongsShow', [
      '$stateParams',
      '$sce',
      'Song',
      SongsShow
    ])

  function SongsIndex (Song) {
    this.songs = Song.query()
  }

  function SongsShow($stateParams, $sce, Song) {
    this.song = Song.get({ id: $stateParams.id }, (song) => {
      song.preview_url = $sce.trustAsResourceUrl(song.preview_url)
      return song
    })
  }

})()
