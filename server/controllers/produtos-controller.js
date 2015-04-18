var Produto = require('../models/produto')

module.exports.create = function (req,res){
	var produto = new Produto(req.body);
	produto.save(function(err, result){
		res.json(result);
	});
}

module.exports.list = function(req, res){
	Produto.find({}, function (err, results) {
	    res.json(results);
	});
}