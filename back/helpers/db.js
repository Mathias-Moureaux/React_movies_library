import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: '****',
  password: '****',
  database: 'my_cineclub',
});

module.exports = connection;
