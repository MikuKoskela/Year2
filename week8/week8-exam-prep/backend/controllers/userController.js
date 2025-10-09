const User = require("../models/userModel")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcrypt")

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:'6h'})
}


const SignupUser = async(req, res) =>{
    try{
    const {     
    name, // Full name of the user
    username, // Unique username for login
    password, // Hashed password for authentication
    phone_number, // Contact phone number
    profilePicture, // URL of the user's profile picture
    gender, // Gender of the user
    date_of_birth, // User's birth date
    role, // User role
    address = {},
    
    } = req.body
    const { street, city, state, zipCode } = address;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    
    const newUser = await User.create({     
    name, // Full name of the user
    username, // Unique username for login
    password:hashedPassword, // Hashed password for authentication
    phone_number, // Contact phone number
    profilePicture, // URL of the user's profile picture
    gender, // Gender of the user
    date_of_birth, // User's birth date
    role, // User role
    address: {
      street, // Street address
      city, // City
      state, // State or region
      zipCode, }
    }) 
    
    const token = createToken(newUser._id)
    res.status(200).json({message: "token created:", token})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const LoginUser = async(req,res) => {
    const {username,password} = req.body

    const user = await User.findOne({username})
    if(!user){
        res.status(404).json({message:"Username not found"})
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        res.status(500).json({message: "Password does not match"})
   }
   res.status(200).json({message:user})
}

module.exports = {
    SignupUser,
    LoginUser
}