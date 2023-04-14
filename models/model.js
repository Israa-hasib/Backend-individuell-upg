const Produkt = require('../schemas/schema.js');


  //POST
  
  exports.createNewProdukt = (req, res) => {
    const { name, description, price, imageUrl } = req.body;
  
    if(!name || !description || !price || !imageUrl) {
      res.status(400).json({
        message: 'Du måste fylla i alla fält'
      })
      return
    }
  
  
    Produkt.create({ name, description, price, imageUrl })
      .then(data => res.status(201).json(data))
      .catch(() => res.status(500).json({ message: 'Något gick fel när du la till en produkt'}))
  }


  //GET ALL

exports.getProdukter = (req, res) => {

  Produkt.find()
    .then(produkter => {
      res.status(200).json(produkter)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Kunde inte hitta produkter'
      })
    })
}

//GET produkt by id

exports.getProduktById = (req, res) => {

  Produkt.findById(req.params.id)
    .then(produkt => {
      if(!produkt) {
        res.status(404).json({ message: 'Kunde inte hitta produkten'})
        return
      }

      res.status(200).json( produkt ) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Någonting gick fel'
      })
    })
  }


//PUT 

exports.updateProdukt = (req, res) => {

  Produkt.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(produkt => {
      if(!produkt) {
        res.status(404).json({ message: 'Kunde inte hitta produkten'})
        return
      }

      res.status(200).json(produkt)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Något gick fel när du ändrade produkten'
      })
    })

}


  //DELETE 

exports.deleteProdukt = (req, res) => {

  Produkt.findByIdAndDelete(req.params.id)
    .then(produkt => {
      if(!produkt) {
        res.status(404).json({ message: 'Kunde inte hitta produkten'})
        return
      }

      res.status(200).json({ id: produkt._id })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Något gick fel när du raderade produkten '
      })
    })

}
