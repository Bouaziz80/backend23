const express=require("express")
const router=express.Router()
const categorie = require("../models/categorie")



    router.post("/",async(req,res)=>{
    const {nomcategorie,imagecategorie}=req.body
    const cat1=new categorie({ nomcategorie:nomcategorie, imagecategorie:imagecategorie})
    //const cat1=new categorie({nomcategorie:imagecategori})
    //const cat1=new categorie(req.body)
    try{
        await cat1.save();
        res.status(200).json(cat1)

    }
    catch(error){
        res.status(404).json({message:error.message})

    }
    })
     router.get("/", async (req, res, )=> {
    
       try {
    const cat = await categorie.find(); 
    res.status(200).json(cat);
          }
     catch (error) {
        res.status(404).json({ message: error.message })
              }
    });
    router.put('/:categorieId', async (req, res)=> { 
        const { nomcategorie, imagecategorie} = req.body; 
        const id = req.params.categorieId;

        try {
        const cat1 = {
        nomcategorie:nomcategorie,imagecategorie:imagecategorie, _id:id 
        }; 
        console.log(cat1)

        await categorie.findByIdAndUpdate(id, cat1); 
        res.json(cat1);
        } 
        catch (error) {
        res.status(404).json({ message: error.message }); 
        }
    });
    router.delete('/:categorieId', async (req, res)=> { 
        const id  = req.params.categorieId;
        await categorie.findByIdAndDelete(id);
        res.json({ message: "categorie deleted successfully."});
    });
    router.get('/:categorieId',async(req, res)=>{ 
         try {
        const cat = await categorie.findById(req.params.categorieId); 
        res.status(200).json(cat);
         } 
         catch (error) {
        res.status(404).json({ message: error.message }); 
         }
    });
    
module.exports = router;