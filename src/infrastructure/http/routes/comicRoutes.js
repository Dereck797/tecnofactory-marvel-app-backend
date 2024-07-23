const express = require('express');
const ComicController = require('../controllers/comicController');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = express.Router();
const comicController = new ComicController();

router.get('/comics', authMiddleware, (req, res) => comicController.getComics(req, res));
router.get('/comics/:id', authMiddleware, (req, res) => comicController.getComicById(req, res));
router.post('/favorites', authMiddleware, (req, res) => comicController.addFavoriteComic(req, res));
router.get('/favorites', authMiddleware, (req, res) => comicController.getFavoriteComics(req, res));

module.exports = router;
