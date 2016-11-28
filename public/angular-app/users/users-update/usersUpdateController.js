angular.module("mean-atelier").controller("usersUpdate",usersUpdate);


function usersUpdate($route,usersFactory,$scope){
  var uu = this;
  var id = $route.params.userId;
  uu.user = null;

  usersFactory.usersDisplay(id).then(function(response){
    uu.user = response;
  });

  uu.submitForm = function(){
    var postData = {
      name : uu.users.name
    }
    if(uu.usersUpdateForm.$valid){
      usersFactory.usersUpdate(id,postData).then(function(response){
        uu.user = response;
      });
    } else {
      $.toastr("error","error gros con !!!!!");
    }
    $route.reload();
  }
}
