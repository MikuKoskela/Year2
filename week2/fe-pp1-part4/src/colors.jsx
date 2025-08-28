

function hex(r,g,b){
    return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
}


const BoxColor = (props) => {
    const hexColor = hex(props.r,props.g,props.b)
    return(
        <div class="Card" style={{backgroundColor: hexColor }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{hexColor}</p>

        </div>
    )
}

export default BoxColor