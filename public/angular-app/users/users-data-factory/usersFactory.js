angular.module("mean-atelier").factory("usersFactory", usersFactory);

function usersFactory($http){
  return {
    usersList : usersList,
    usersAdd : usersAdd,
    usersDelete : usersDelete,
    usersUpdate : usersUpdate,
    usersDisplay : usersDisplay
  }
}


function usersList(){
  return $http.get("/api/users").then(complete).catch(error);
}

function usersUpdate(id, user){
  return $http.put("/api/users/"+id,user).then(complete).catch(error);
}

function usersAdd(){
  return $http.post("/api/users").then(complete).catch(error);
}




function complete(response){
  return response;
}

function error(err){
  return err;
}
