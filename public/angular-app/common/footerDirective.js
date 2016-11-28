angular.module("mean-atelier").directive("footer",footer);

function footer(){
  return{
    restrict: "A",
    templateUrl:'partials/footer.html'
  }
}
