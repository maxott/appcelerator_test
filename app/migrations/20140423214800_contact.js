var preload_data = ['Adam', 'Bob', 'Carmen', 'Dora', 'Emma', 'Frank', 'Gustaf', 'Henriette', 'Jane'];
 
migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
			"name": "TEXT",
			"address": "TEXT",
			"messages_sent": "INTEGER",
			"date_fetched": "TEXT"
        }
    });
    for (var i = 0; i < preload_data.length; i++) {
    	var c = {
    		name: preload_data[i],
    		address: '-',
    		message_sent: 0,
    		data_fetched: '-'
    	};
	    migrator.insertRow(c);
    }
};
 
migration.down = function(migrator)
{
    migrator.dropTable();
};