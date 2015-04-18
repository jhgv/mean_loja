lojaMaluca.controller('ProdutosCtrl', function($scope, Produto){
	$scope.produtos = [];

	Produto.getAll();

	$scope.$on("produtos-ready", function(event, produtos){
		$scope.produtos = produtos;
	});

});

lojaMaluca.controller('NovoProdutoCtrl', function($scope, Produto){

	$scope.novoProduto = {
		descricao : "",
		promocao: false,
		preco: "",
		foto: ""
	};

	$scope.setPromocao = function(){
		if($scope.novoProduto.promocao){
			$scope.novoProduto.promocao = false;
		}else{
			$scope.novoProduto.promocao = true;
		}
	};

	$scope.cadastrarProduto = function(){
		Produto.save($scope.novoProduto);
	}

	$scope.$on("cadastro-produto-ready", function(event, produtos){
		alert('produto cadastrado com sucesso');
		$scope.novoProduto = {
			descricao : "",
			promocao: false,
			preco: "",
			foto: ""
		};
	});


});