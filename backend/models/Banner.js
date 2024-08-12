// backend/models/Banner.js
const db = require('../config/db');

const Banner = {
  getBanner: (callback) => {
    db.query('SELECT * FROM Banner WHERE id = 1', (err, result) => {
      if (err) callback(err, null);
      else callback(null, result[0]);
    });
  },

  updateBanner: (data, callback) => {
    const { description, timer, link, isVisible } = data;
    db.query(
      'UPDATE Banner SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1',
      [description, timer, link, isVisible],
      (err, result) => {
        if (err) callback(err, null);
        else callback(null, result);
      }
    );
  },
};

module.exports = Banner;
