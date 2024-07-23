class FavoriteComic {
  constructor(id, userId, comicId, title, description, thumbnail) {
    this.id = id;
    this.userId = userId;
    this.comicId = comicId;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
  }

}

module.exports = FavoriteComic;
