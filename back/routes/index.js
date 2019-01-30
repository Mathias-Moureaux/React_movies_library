import express from 'express';
import connection from '../helpers/db';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.get('/cineclub/movies', (req, res) => {
  connection.query('SELECT * FROM movies ORDER BY name', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

router.get('/cineclub/movies/:id', (req, res) => {
  const idMovie = req.params.id;
  connection.query('SELECT * FROM movies WHERE id=?', idMovie, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du film');
    } else {
      res.json(results);
    }
  });
});

router.get('/cineclub/genre', (req, res) => {
  connection.query('SELECT * FROM genre', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des genres');
    } else {
      res.json(results);
    }
  });
});

router.get('/cineclub/genre/:id_genre', (req, res) => {
  const idGenre = req.params.id_genre;
  connection.query('SELECT * FROM genre WHERE id_genre=?', idGenre, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du genre');
    } else {
      res.json(results);
    }
  });
});

router.get('/cineclub/movies/genre/:id_genre', (req, res) => {
  const idGenre = req.params.id_genre;
  connection.query('SELECT * FROM movies WHERE id_genre=?', idGenre, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

router.get('/cineclub/movies/search/:search', (req, res) => {
  const search = req.params.search;
  connection.query(`SELECT * FROM movies WHERE name LIKE "%${search}%"`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des fiches de film');
    } else {
      res.json(results);
    }
  });
});

/* DELETE */

router.delete('/cineclub/movies/:id', (req, res) => {
  const idMovie = req.params.id;
  connection.query('DELETE FROM movies WHERE id=?', idMovie, (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
