import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"

const PropertyListings = () => {
  const [properties, setProperties] = useState([])
  
  useEffect(()=>{
  const getProperties = async() =>{
    try{
    const res = await fetch("http://localhost:4000/api/property",
      {method: "GET",
        headers:{
          "Content-Type":"application/json"
        }
      }
    )
    if (!res.ok){
      console.log("Fetch failed")
    }
    const data = await res.json()
    console.log(data)
    setProperties(data)
  } catch(error){
    console.log("Failed to fetch all properties:", error)
  }
  };
  getProperties()
},[])



  return (
    <div className="job-list">
      {properties.map((property)=>(
        <div className="job-preview" key={property._id}>
          <Link to ={`/property/${property._id}`}>
          <h2>Title: {property.title}</h2>
          </Link>
          <p>Type: {property.type}</p>
          <p>Description: {property.description}</p>
          <p>Price: {property.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;
