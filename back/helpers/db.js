import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '****',
  database: 'my_cineclub',
});

module.exports = connection;
