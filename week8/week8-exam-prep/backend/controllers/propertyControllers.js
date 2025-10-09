const Property = require("../models/propertyModel");
const mongoose = require("mongoose");

//GET / property;
const getAllProperties = async (req, res) => {
  try{
  const jobs = await Property.find({}).sort({ createdAt: -1})
  res.status(200).json(jobs)
  }catch(error){
    res.status(404).json({message: error})
  }
};

// POST /property
const createProperty = async (req, res) => {
  try{
    const job = await Property.create({...req.body})
    res.status(200).json(job)
  }catch(error){
    res.status(404).json({message: error})
  }

};

// GET /property/:propertyId
const getPropertyById = async (req, res) => {
  const {propertyId} = req.params
  if (!mongoose.Types.ObjectId.isValid(propertyId)) {
    return res.status(400).json({ message: "Invalid property ID" });
  }
  try{
    const property = await Property.findById(propertyId)
    res.status(200).json(property)
  }catch(error){
    res.status(404).json({message, error})
  }
};

// PUT /property/:propertyId
const updateProperty = async (req, res) => {
  const { propertyId } = req.params
  if(!mongoose.Types.ObjectId.isValid(propertyId)){
    res.status(500).json({message: "Invalid Id"})
  }
  try{
  const updatedProperty = await Property.findByIdAndUpdate(
    { _id:propertyId },
    { ...req.body },
    { new:true }
  )
  if(updatedProperty){
  res.status(200).json({message:updatedProperty}) 
  }else{
    res.status(404).json({message: "Property not found"})
  }
}catch(error){
  res.status(500).json({message:"Failed to update property:",error})
}
};

// DELETE /property/:propertyId
const deleteProperty = async (req, res) => {
  const {propertyId} = req.params

  if(!mongoose.Types.ObjectId.isValid(propertyId)){
    res.status(500).json({message:"Invalid id"})
  }
  try{
  const deletedProperty = await Property.findByIdAndDelete({_id:propertyId})
  
  if(deletedProperty){
    res.status(200).json({message:"Property deleted successfully"})
  }
  else{
    res.stauts(404).json({message:"Property not found"})
  }
  }catch(error){
    res.status(500).json({message:error})
  }
};

module.exports = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
