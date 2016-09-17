.state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.friends', {
      url: '/friends',
      views: {
        'menuContent': {
          templateUrl: 'templates/friends.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  //app.js additions that may or may not cause error to the code.