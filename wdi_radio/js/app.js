(function () {

  angular
    .module('wdiRadio', [
      'ui.router',
      'ngResource'
    ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      Router
    ])

  function Router ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('songsIndex', {
        url: '/songs',
        controller: 'SongsIndex',
        controllerAs: 'vm',
        templateUrl: 'js/views/songs/index.html'
      })
      .state('songsShow', {
        url: '/songs/:id',
        controller: 'SongsShow',
        controllerAs: 'vm',
        templateUrl: 'js/views/songs/show.html'
      })
    $urlRouterProvider.otherwise('/songs')
  }

})()
