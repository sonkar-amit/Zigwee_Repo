var mySql = require('mysql');

var connection = mySql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "zigwee_db"
});
connection.connect();

module.exports = connection;