class FavoriteComicRepository {
  async save(favoriteComic) {
    throw new Error('Not implemented');
  }

  async findByUserId(userId) {
    throw new Error('Not implemented');
  }

  async deleteByUserIdAndComicId(userId, comicId) {
    throw new Error('Not implemented');
  }
}

module.exports = FavoriteComicRepository;
