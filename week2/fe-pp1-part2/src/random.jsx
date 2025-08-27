import React from 'react'

const Random = (props) => {
    
    const {min, max} = props;
    
    const randomValue = Math.floor(Math.random() * (max-min) + min)
    
    return(
        <div class="random">
            <p>Random value between {min} and {max} is: {randomValue}</p>
        </div>
    )
}

export default Random;






