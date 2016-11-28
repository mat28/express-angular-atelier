var app = angular.module("mean-atelier",["ngRoute"]);


app.config(["$routeProvider",function($routeProvider){
  $routeProvider
                .when("/users", {
                  templateUrl:'users/users-list/users-list.html',
                  controller:'usersList',
                  controllerAs:'us'
                })
                .when("/users/update/:userId",{
                  templateUrl:'users/users-update/users-update.html',
                  controller:'usersUpdate',
                  controllerAs:'uu'
                })
                .when("/users/add",{

                })
                .when("/users/:userId",{

                })
                .when("/users/delete/:userId",{

                })
                .otherwise({redirectTo :'/'});
}]);
