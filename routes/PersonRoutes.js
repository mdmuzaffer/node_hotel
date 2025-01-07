const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


router.post('/', async (req, res)=> {
 
    try {
      const data  = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log('Data saved in to database');
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
    }
  
  });

router.get('/', async (req, res)=>{

    try {
      const persons = await Person.find();
      console.log('Persons data found');
      res.status(200).json({
        message: 'Data fetched successfully',
        data: persons,
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server error'});
    }
})


router.get('/:workType', async(req,res)=>{
    try {
        const workType = req.params.workType;
        if(workType ==='cheif' || workType ==='waiter' || workType ==='manager'){
            const response = await Person.find({work:workType});
            res.status(200).json({
              message: 'Data fetched successfully',
              data: response,
            });
        }else{
          res.status(500).json({error: 'Invalide parameter'. workType});
        }
  
      } catch (error) {
        res.status(500).json({error: 'Internal server error'});
      }
  })


  router.put('/:id', async(req, res)=>{
    try {
      const personId = req.params.id;
      const updatedPersondata = req.body;
      const response = await Person.findByIdAndUpdate(personId, updatedPersondata, {
        new: true,
        runValidators: true,
      });

      if(!response){
        res.status(400).json({error: 'Person data not found'});
      }

      res.status(200).json({
        message: 'Data updated successfully',
        data: response,
      });
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  })

  router.delete('/:id', async(req, res)=>{

    try {

    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if(!response){
      res.status(400).json({error: 'Record not found of related id'});
    }
    res.status(200).json({
      message: 'Data deleted successfully',
      data: response,
    });

    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }

  })

  module.exports = router;