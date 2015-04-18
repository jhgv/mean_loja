var lojaMaluca = angular.module('lojaMaluca', ['ngRoute', 'ngCookies']);

lojaMaluca.config(function($routeProvider, $sceDelegateProvider){

	$routeProvider.when('/',{
		templateUrl: '../views/produtos.html',
		controller: 'ProdutosCtrl'
	}).
	when('/novo',{
		templateUrl: '../views/novo-produto.html',
		controller: 'NovoProdutoCtrl'
	});

});