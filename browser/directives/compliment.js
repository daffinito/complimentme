complimentme.directive('compliment', [ '$http', '$timeout', function($http, $timeout) {

   return {
      templateUrl: '/templates/directives/compliment',

      link: function($scope, elem) {
         $scope.loadNewcompliment = function(ev) {
            $scope.showcompliment = false;
            $timeout(function() { $scope.showcompliment = true; }, 500);
            $http.get('/api/compliment')
               .then(function(result) {
                  $scope.thecompliment = result.data.toString();
               }, function(error) {
                  $scope.thecompliment = "Something went wrong, but I still love you.";
                  console.log(error);
               })
         }
      }
   }
}]);