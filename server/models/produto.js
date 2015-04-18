var mongoose = require('mongoose');

module.exports = mongoose.model('Produto', {
	descricao: String,
	preco: Number,
	promocao: Boolean,
	foto: String
});