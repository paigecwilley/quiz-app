var app = angular.module('quizApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'components/home/homeView.html',
			controller: 'homeCtrl',
		resolve: {
			quizList: function(quizService){
				return quizService.getQuizNames();
			}
		}	
			
		})
		.state('quiz', {

		})
		.state('quiz.view', {

		})
		.state('results', {

		})

	$urlRouterProvider.otherwise('/');	
})