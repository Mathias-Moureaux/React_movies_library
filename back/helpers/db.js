import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Astro271179',
  database: 'my_cineclub',
});

module.exports = connection;
