var mysql = require('mysql');

var connection;

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting");
        return;
    }
});


module.exports = connection;