const MarvelService = require('../../../domain/services/MarvelService');
const FavoriteComicRepositoryImpl = require('../../persistence/repositories/FavoriteComicRepositoryImpl');

class ComicController {
  constructor() {
    this.marvelService = new MarvelService();
    this.favoriteComicRepository = new FavoriteComicRepositoryImpl();
  }

  async getComics(req, res) {
    try {
      const comics = await this.marvelService.getComics(req.query.limit, req.query.offset, req.query.noVariants === 'true');
      res.json(comics);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getComicById(req, res) {
    try {
      const comic = await this.marvelService.getComicById(req.params.id);
      res.json(comic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addFavoriteComic(req, res) {
    const { comicId, title, description, thumbnail } = req.body;
    const userId = req.userId;
    try {
      const favoriteComic = await this.favoriteComicRepository.save({
        userId,
        comicId,
        title,
        description,
        thumbnail
      });
      res.json(favoriteComic);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFavoriteComics(req, res) {
    try {
      const favoriteComics = await this.favoriteComicRepository.findByUserId(req.userId);
      res.json(favoriteComics);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ComicController;
