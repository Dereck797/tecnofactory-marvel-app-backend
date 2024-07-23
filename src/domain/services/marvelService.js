const axios = require('axios');
const crypto = require('crypto');

class MarvelService {
  async getComics(limit, offset, noVariants = false) {
    const ts = new Date().getTime().toString();
    const hash = crypto.createHash('md5').update(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).digest('hex');
    const response = await axios.get('https://gateway.marvel.com/v1/public/comics', {
      params: {
        ts,
        apikey: process.env.MARVEL_PUBLIC_KEY,
        hash,
        limit,
        offset,
        noVariants
      }
    });
    return response.data.data.results;
  }

  async getComicById(id) {
    const ts = new Date().getTime().toString();
    const hash = crypto.createHash('md5').update(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY).digest('hex');
    const response = await axios.get(`https://gateway.marvel.com/v1/public/comics/${id}`, {
      params: {
        ts,
        apikey: process.env.MARVEL_PUBLIC_KEY,
        hash
      }
    });
    return response.data.data.results[0];
  }
}

module.exports = MarvelService;
