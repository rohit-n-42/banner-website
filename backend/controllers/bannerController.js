// backend/controllers/bannerController.js
const Banner = require('../models/Banner');

const getBanner = (req, res) => {
  Banner.getBanner((err, banner) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(banner);
  });
};

const updateBanner = (req, res) => {
  Banner.updateBanner(req.body, (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.send('Banner updated successfully');
  });
};

module.exports = { getBanner, updateBanner };
