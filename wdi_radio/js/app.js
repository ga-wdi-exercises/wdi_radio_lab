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
      .state('songsNew', {
        url: '/songs/new',
        controller: 'SongsNew',
        controllerAs: 'vm',
        templateUrl: 'js/views/songs/new.html'
      })
      .state('songsEdit', {
        url: '/songs/:id/edit',
        controller: 'SongsEdit',
        controllerAs: 'vm',
        templateUrl: 'js/views/songs/edit.html'
      })
    $urlRouterProvider.otherwise('/songs')
  }

})()
