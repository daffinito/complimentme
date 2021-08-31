require('angular')
require('angular-animate')
complimentme = angular.module('complimentme', [ 'ngAnimate' ])

require('./controllers/mainController')

require('./directives/compliment')