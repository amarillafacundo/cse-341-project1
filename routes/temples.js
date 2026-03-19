const routes = require('express').Router();
const temples = require('../controllers/temples.js');

// #swagger.tags = ['Temples'];
//#swagger.summary = 'Get all temples'
routes.get('/', temples.findAll);

// #swagger.tags = ['Temples']
// #swagger.summary = 'Get temple by ID'
// #swagger.parameters['temple_id'] = {
//    in: 'path',
//    description: 'Temple ID',
//    required: true,
//    type: 'string'
// }
routes.get('/:temple_id', temples.findOne);

// #swagger.tags = ['Temples']
// #swagger.summary = 'Create a new temple'
routes.post('/', temples.create);

module.exports = routes;