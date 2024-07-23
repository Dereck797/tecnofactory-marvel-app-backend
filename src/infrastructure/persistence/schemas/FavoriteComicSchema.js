const mongoose = require('mongoose');

const favoriteComicSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comicId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  thumbnail: {
    path: { type: String },
    extension: { type: String }
  }
});

module.exports = mongoose.model('FavoriteComic', favoriteComicSchema);
