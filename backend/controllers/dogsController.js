const Dog = require('../models/dogsSchema')

const ErrorStatus = require('../utils/errorStatus')

const getAllDogs= async(req, res, next) =>{
    try{
        const ducks = await Duck.find()
         return res.json(ducks)
    } catch (error) {
        next(error)
    } 
}
const getDogsById=async(req, res, next) =>{
    try{
    const duckId=req.params.id
    const duck = await Duck.findById(duckId)
    return res.json(duck)
    } catch(error){
        next(error)
    }
}
const createDogs = async (req, res, next) => {
    const {name , owner, quote, imageUrl} = req.body
    try {
  
      const newDuck = new Duck(
        { name, owner, quote, imageUrl }
      );
  
      await newDuck.validate(); // Perform validation explicitly
  
      await newDuck.save();
      res.json({ message: 'Duck created successfully', duck: newDuck });
    } catch (error) {
        next(error)
    }
  };

  const updateDogs= async (req, res, next) => {
    try {
      const duckId = req.params.id;
      // Check if the properties exist in req.body before destructuring
      const { name, owner, quote, imageUrl } = req.body || {};
  
      // Additional validation or processing logic can be added here
   
    
      const updatedDuck = await Duck.findByIdAndUpdate(
        duckId,
        { name, owner, quote, imageUrl },
        { new: true }
      );
  
      
  
      res.json(updatedDuck);
    } catch (error) {
        next(error)
    }
  };
  
  
const deleteDogs=async(req, res, next) =>{
    try{

    
    const duckId = req.params.id
    const deletedDuck = await Duck.findByIdAndDelete(duckId, req.body , {delete : true})
    return res.json(deletedDuck)
} catch (error) {
    next(error)
}
}

module.exports ={
    getAllDogs, getDogsById, createDogs, updateDogs, deleteDogs
}