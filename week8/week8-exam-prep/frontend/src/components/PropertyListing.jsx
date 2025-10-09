import {useParams, useNavigate, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'


const PropertyListing = () => {
     const navigate = useNavigate();
    const {propertyId} = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null) 
      useEffect(() => {
    const getProperty = async(propertyId) => {
      try{ 
        const res = await fetch(`http://localhost:4000/api/property/${propertyId}`,
          {method:"GET",
            headers:{
              "content-type":"application/json"
            }
          }
        ) 
      if(!res.ok){
        console.log("Error at fetching property")
      }
      const data = await res.json()
      console.log("Success", data)
      setProperty(data)
      }catch(error){
        console.log(error)
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }
    getProperty(propertyId)
  },[propertyId])

    return(
        <div className="job-preview">
        {loading? (
            <p>Loading</p>
        ): error ?
        (<p>{error}</p>):(
            <div>
    <h2>Title: {property.title}</h2>
    <p>Type: {property.type}</p>
    <p>Description: {property.description}</p>
    <p>Price: {property.price}$</p>
    <p>Built: {property.yearBuilt}</p>
    <Link to={`/edit-property/${propertyId}`}>
    <button>Edit</button>
    </Link> 
            </div>
        ) }
    </div>
    );
};

export default PropertyListing;
