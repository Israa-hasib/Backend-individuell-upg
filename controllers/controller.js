const router = require('express').Router();
const model = require('../models/model')
//CRUD - Create - Read - Update - Delete


//Create/Post
router.post('/', model.createNewProdukt);
//Read/Get
router.get('/', model.getProdukter);
//Get by id
router.get('/:id', model.getProduktById);
//Update PUT - PATCH
router.put('/:id', model.updateProdukt);
//Delete
router.delete('/:id', model.deleteProdukt);

module.exports = router;

// http://localhost:8888/api/uppgift/