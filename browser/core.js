require('angular')
require('angular-animate')
insultme = angular.module('insultme', [ 'ngAnimate' ])

require('./controllers/mainController')

require('./directives/insult')