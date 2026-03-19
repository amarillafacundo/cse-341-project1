const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// GET all temples
const findAll = async (req, res) => {
  const result = await mongodb.getDatabase().collection('temples').find();
  result.toArray().then((temples) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(temples);
  });
};

// GET one temple
const findOne = async (req, res) => {
  const templeId = new ObjectId(req.params.temple_id);
  const result = await mongodb.getDatabase().collection('temples').find({ _id: templeId });
  result.toArray().then((temple) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(temple[0]);
  });
};

// POST (just for Swagger)
const create = async (req, res) => {
  res.status(200).json({ message: 'Temple created (not implemented yet)' });
};

module.exports = {
  findAll,
  findOne,
  create
};
