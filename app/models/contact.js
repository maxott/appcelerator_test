var moment = require('alloy/moment');

exports.definition = {
	config: {
		"columns": {
			"name":"text",
			"address":"text",
			"messages_sent":"integer",
			"date_fetched":"text"
		},
		"defaults": {
            "name":"-",
			"address":"-",
			"messages_sent":0,
			"date_fetched":"-"
        },
		"adapter": {
			"type": "sql",
			"collection_name": "contact"
		}
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {
			validate : function(attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					// if (value) {
						// if (key === "item") {
							// if (value.length <= 0) {
								// return 'Error: No item!';
							// }
						// }
						// if (key === "done") {
							// if (value.length <= 0) {
								// return 'Error: No completed flag!';
							// }
						// }
					// }
				}
			}
		});

		return Model;
	},

	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			comparator: function(contact) {
				return contact.get('address');
			}
		});

		return Collection;
	}
};