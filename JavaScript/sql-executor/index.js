var tables = require('../../SQL/tables.json');
var mysql = require('mysql');
var fs = require('fs');
var config = require('./config');

// Get mode
var mode = process.argv[2] || 'recreate';
if (mode != 'create' && mode != 'drop' && mode != 'recreate')
{
	console.log('Requires argument "create" or "drop" or "recreate"');
	process.exit(1);
}
var doCreate = mode == 'create' || mode == 'recreate';
var doDrop = mode == 'drop' || mode == 'recreate';

// Create MySQL client
var client = mysql.createConnection(config.config);

// Connect
client.connect();

// Drop tables if needed
if (doDrop)
{
	tables.reverse().forEach(function(table)
	{
		console.log('Dropping table "' + table + '"...');
		client.query('DROP TABLE IF EXISTS ' + table);
	});
}

// Execute table scripts
if (doCreate)
{
	tables.forEach(function(table)
	{
		console.log('Creating table "' + table + '"...');
		var tableContents = fs.readFileSync('../../SQL/Tables/' + table + '.SQL', 'utf8');
		client.query(tableContents);
	});
}

// Disconnect to terminate
client.end();
