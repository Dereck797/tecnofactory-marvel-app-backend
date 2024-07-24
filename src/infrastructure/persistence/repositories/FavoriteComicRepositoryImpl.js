const FavoriteComicRepository = require('../../../domain/repositories/FavoriteComicRepository');
const FavoriteComicEntity = require('../schemas/FavoriteComicSchema');

class FavoriteComicRepositoryImpl extends FavoriteComicRepository {
  async save(favoriteComic) {
    const existingFavorite = await FavoriteComicEntity.findOne({
      userId: mongoose.Types.ObjectId(favoriteComic.userId),
      comicId: favoriteComic.comicId
    });

    if (existingFavorite) {
      return existingFavorite; 
    }
    const newFavoriteComic = new FavoriteComicEntity({
      userId: mongoose.Types.ObjectId(favoriteComic.userId),
      comicId: favoriteComic.comicId,
      title: favoriteComic.title,
      description: favoriteComic.description,
      thumbnail: favoriteComic.thumbnail
    });
    await newFavoriteComic.save();
    return newFavoriteComic;
  }

  async findByUserId(userId) {
    return await FavoriteComicEntity.find({ userId });
  }

  async deleteByUserIdAndComicId(userId, comicId) {
    return await FavoriteComicEntity.findOneAndDelete({ userId, comicId });
  }
}

module.exports = FavoriteComicRepositoryImpl;
