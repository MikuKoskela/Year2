import React from 'react'


const IdCard = (props) => {

    return(
        
        <div className="idcard">
            <p><img alt="Image of a man" src ={props.picture}/></p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Height: {props.height}</p>
            <p>Gender: {props.gender}</p>
            <p>Birth: {props.birth.toDateString()}</p>
        </div>
    )
}
export default IdCard;