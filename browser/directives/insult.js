insultme.directive('insult', [ '$http', '$timeout', function($http, $timeout) {

   return {
      templateUrl: '/templates/directives/insult',

      link: function($scope, elem) {
         $scope.loadNewInsult = function(ev) {
            $scope.showInsult = false;
            $timeout(function() { $scope.showInsult = true; }, 500);
            $http.get('/api/insult')
               .success(function(result) {
                  $scope.theInsult = result.toString();
               })
               .error(function(error) {
                  $scope.theInsult = "Something went wrong, dumbass.";
                  console.log(error);
               })
         }
      }
   }
}]);