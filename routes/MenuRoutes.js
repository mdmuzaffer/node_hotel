const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem')

router.post('/', async (req, res)=> {
    try {
      const data  = req.body;
      const newMenuItems = new MenuItem(data);
      const response = await newMenuItems.save();
      console.log('Menu data saved successfully');
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
  
      if (error.name === 'ValidationError') {
        // Extract and format validation error messages
        const errorMessages = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({
          error: 'Validation error',
          details: errorMessages,
        });
      }
      res.status(500).json({error: 'Internal server error' + error});
    }
  });
  
  
  router.get('/', async (req, res)=>{
  
    try {
      const menus = await MenuItem.find();
      console.log('Persons data found');
      res.status(200).json({
        message: 'Data fetched successfully',
        data: menus,
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
    }
  })


  router.get('/:menuType', async(req, res)=>{
        try {
            const menuType = req.params.menuType;
            if(menuType ==='spicy' || menuType ==='sweet' || menuType ==='sour'){
                const response = await MenuItem.find({test:menuType});
                res.status(200).json({
                  message: 'Data fetched successfully',
                  data: response,
                });
            }else{
                res.status(500).json({error: 'Invalide parameter'. menuType});
              }
        
            } catch (error) {
              res.status(500).json({error: 'Internal server error'});
            }
  });

module.exports = router;