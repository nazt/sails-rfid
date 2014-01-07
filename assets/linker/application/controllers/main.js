// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var MainCtrl;

  MainCtrl = (function() {
    function MainCtrl() {
      Application.Controllers.controller("MainCtrl", [
        "$scope", "$socket", function($scope, $socket) {

          $socket.on('connectedUsers', function(data) {
            $scope.connectedUsers = data;
          })

          $socket.on('rfid', function (data) {
            $scope.card_id = data.card_id
          })
          
          $scope.foo = "booyah";
        }
      ]);
    }

    return MainCtrl;

  })();

  window.MainCtrl = new MainCtrl();

}).call(this);
