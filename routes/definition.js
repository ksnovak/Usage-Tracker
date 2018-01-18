
var Definition 		= require('../models/definition')

module.exports = function(router) {
	router.route('/definitions')

	//POST - Create a definition, with a name and description
	.post(function (req, res) {
		var definition = new Definition();

		definition.name = req.body.name;
		definition.description = req.body.description;

		definition.save(function(err) {
			if (err) res.send(err);

			res.json({ message: 'Definition created!' });
		});
	})

	//GET - Get a list of all definitions
	.get(function(req, res) {
		Definition.find(function(err, definitions) {
			if (err) res.send(err);

			res.json(definitions);
		});
	});

	//GET - Get details of a specified definition
	router.route('/definitions/:definition_id')
	.get(function(req, res) {
		Definition.findById(req.params.definition_id, function(err, definition) {
			if (err) res.send(err);

			res.json(definition);
		});
	})

	//PUT - Update details of a specified definition
	.put(function(req, res){
		Definition.findById(req.params.definition_id, function(err, definition) {
			if (err) res.send(err);

			definition.name = req.body.name;

			definition.save(function(err) {
				if (err) res.send(err);

				res.json({ message: 'Definition updated!' }); 
			})
		})
	})

	//DELETE - Delete a given definition
	.delete(function(req, res){
		Definition.remove({
			_id: req.params.definition_id
		}, function(err, definition) {
			if (err) res.send(err);

			res.json({ message: 'Successfully deleted!' });
		})
	})



}