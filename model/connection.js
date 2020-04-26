const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'india@123',
    database: 'testing'
});
db.connect(err => {
    if (err) throw err;
    console.log('Connection setup');
});
module.exports = db;