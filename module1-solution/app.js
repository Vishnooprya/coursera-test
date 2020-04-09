(function(){
  'use strict';
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",lunchChecker);
  lunchChecker.$inject=['$scope'];
  function lunchChecker($scope){
    $scope.lunchstring="";
    $scope.color="white";
    $scope.message="";
    $scope.displayMessage=function(){
      var message=createMessage($scope.lunchstring);
      $scope.message=message[0];
      $scope.color=message[1];
    };
  }
    function createMessage(string){
      var message="";
      if(string==""){
      return ["Please enter data first","red"];
    }
      else{
        var lunchlist=string.split(",");
        var filtered=lunchlist.filter(function(e1){return e1!="";});
        if(filtered.length<=3)
        {
          return ["Enjoy!","green"];
        }
        if(filtered.length>3)
        {
          return ["Too much!","green"]
        }

      }

  }





})();
