lojaMaluca.factory('Produto', function($http, $rootScope){

	return {
		getAll : function(){
			$http.get('/api/produtos').success(function(data, status){
				$rootScope.$broadcast('produtos-ready', data);
			});
		},

		save: function(produto){
			$http.post('/api/produtos', produto).success(function(data, status){
				$rootScope.$broadcast('cadastro-produto-ready', data);
			});
		}
	}

});
