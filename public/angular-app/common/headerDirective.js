angular.module("mean-atelier").directive("header",header);

function header(){
  return{
    restrict:"A",
    templateUrl:'partials/header.html'
  }
}
