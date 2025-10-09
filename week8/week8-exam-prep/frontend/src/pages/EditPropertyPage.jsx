import {useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const EditPropertyPage = () => {
  const navigate = useNavigate()
    const {propertyId} = useParams();
    const [property,setProperty] = useState({})

  const [title, setTitle] = useState("")
  const [type, setType] = useState("Apartment")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [squareFeet, setSquareFeet] = useState("")
  const [yearBuilt, setYearBuilt] = useState("")
  const [updatedProperty, setUpdatedProperty] = useState("")

    const [loading, setLoading] = useState(true)
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
      
setTitle(data.title || "")
setType(data.type || "Apartment")
setDescription(data.description || "")
setPrice(data.price || "")
setAddress(data.location?.address || "")
setCity(data.location?.city || "")
setState(data.location?.state || "")
setZipCode(data.location?.zipCode || "")
setSquareFeet(data.squareFeet || "")
setYearBuilt(data.yearBuilt || "")

      }catch(error){
        console.log(error)
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }
    getProperty(propertyId)
  },[propertyId])

  const updateProperty = async(propertyId) => {
    try{
        const response = await fetch(`http://localhost:4000/api/property/${propertyId}`,{
          method:'PUT',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            title,
            type,
            description,
            price,
            location:{
              address,
              city,
              state,
              zipCode
            },
            squareFeet,
            yearBuilt
          })
        })
        if(!response.ok){
          console.error("The update failed")
        }
        const data = await response.json() 
        setUpdatedProperty(data)
        return data
    }catch(error){
        console.log(error)
    }
  }

  const submitForm = async(e) => {
    e.preventDefault()
    const updated = await updateProperty(propertyId)
    console.log(updated)
    if(updated){
      console.log("Updated successfully")
      navigate('/')
    }
    else{console.log("update did not go through")}
  }

  return (
    <div className='create'>
        <h2>Edit Property</h2>
        
      <form onSubmit={submitForm}>
        <label>Property title:</label>
        <input
          type="text"
          placeholder={property.title}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label>Property type:</label>
        <select placeholder={property.type} value={type} onChange={(e)=>setType(e.target.value)}>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>

        <label>Property Description:</label>
        <textarea
          placeholder={property.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}

        ></textarea>
        <label>Price:</label>
        <input
          type="number"
          placeholder={property.price}
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          placeholder={property?.location?.address}
          value={address}
          onChange={(e)=> setAddress(e.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          placeholder={property?.location?.city}
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <label>State:</label>
        <input
          type="text"
          placeholder={property?.location?.state}
          value={state}
          onChange={(e)=>setState(e.target.value)}
        />

          <label>Zip code:</label>
        <input
          type="text"
          placeholder={property?.location?.zipCode}
          value={zipCode}
          onChange={(e)=>setZipCode(e.target.value)}
        />

          <label>Square feet:</label>
        <input
          type="number"
          placeholder={property.squareFeet}
          value={squareFeet}
          onChange={(e)=>setSquareFeet(e.target.value)}
        />
            <label>Year Built:</label>
        <input
          type="number"
          placeholder={property.yearBuilt}
          value={yearBuilt}
          onChange={(e)=>setYearBuilt(e.target.value)}
        />
        
        <button type="submit">Save changes</button>
      </form>
    </div>
  )
}

export default EditPropertyPage