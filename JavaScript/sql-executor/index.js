var tables = require('../../SQL/tables.json');
var mysql = require('mysql');
var fs = require('fs');

// Get mode
var mode = process.argv[2] || 'create';
if (mode != 'create' && mode != 'drop')
{
	console.log('Requires argument "create" or "drop"');
	process.exit(1);
}

// Create MySQL client
var client = mysql.createConnection(
{
	host: 'localhost',
	user: 'root',
	password: 'anton',
	port: '3306',
	database: 'slumpastrumpa_test'
});

// Connect
client.connect();
console.log('Connected...');

// Execute table scripts
tables.forEach(function(table)
{
	console.log('Executing Tables/' + table + '.SQL...');
	var tableContents = fs.readFileSync('../../SQL/Tables/' + table + '.SQL', 'utf8');
	client.query(tableContents);
});

// Disconnect to terminate
client.end();

