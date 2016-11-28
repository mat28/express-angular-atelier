angular.module("mean-atelier").controller("usersList", usersList);

function usersList($scope,usersFactory){
  var us = this;
  us.users = null;
  usersFactory.usersList().then(function(response){
    us.users = response;
  });

};
