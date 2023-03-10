const express = require('express');
const router = express.Router();
const scategorie=require("../models/scategorie")

// afficher la liste des categories. 
router.get('/', async (req, res, )=> {
      try {
        const scat = await scategorie.find().populate("categorieID"); 
         res.status(200).json(scat);
      }     
      catch (error) {
      } 
   });


// créer un nouvelle catégorie
router.post('/', async (req, res) => {
    const { nomscategorie, imagescat,categorieID} = req.body;
     const newscategorie = new scategorie({nomscategorie:nomscategorie,imagescat:imagescat,categorieID:categorieID })
    try {
        await newscategorie.save();
         res.status(200).json(newscategorie ); 
     } 
    catch (error) {
    res.status(404).json({ message: error.message }); 
    }
   });

// chercher une sous catégorie
router.get('/:scategorieId',async(req, res)=>{ 
     try {
          const scat = await
          scategorie.findById(req.params.scategorieId);
          res.status(200).json(scat); 
    } 
     catch (error) {
           res.status(404).json({ message: error.message }); 
        }
    });

// modifier une catégorie
router.put('/:scategorieId', async (req, res)=> {
    const { nomscategorie, imagescat,categorieID} = req.body; 
    const id = req.params.scategorieId;
    try {
    const scat1 = {
        nomscategorie:nomscategorie,imagescat:imagescat,categorieID:categorieID 
        , _id:id };
        await scategorie.findByIdAndUpdate(id, scat1); 
        res.json(scat1);
    } 
    catch (error) {
        res.status(404).json({ message: error.message }); 
    }
        
    });

// Supprimer une catégorie
    router.delete('/:scategorieId', async (req, res)=> { 
    const id  = req.params.scategorieId;
    await scategorie.findByIdAndDelete(id);
    res.json({ message: "sous categorie deleted successfully." }); 
    });

module.exports = router;