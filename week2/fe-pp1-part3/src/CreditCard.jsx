import visa from "./assets/images/visa.png"
import masterCard from "./assets/images/master-card.svg"

const amountNumLock = 12

function cardType(type){
    if (type === "Visa"){
        return visa
    }
    if (type === "Master Card"){
        return masterCard
    }        
    else {
      
    }
}

function numberConverter(nums,props){
        const dotArray = [...Array(amountNumLock)].map((_,i)=>
        (<div key={i} className="dot" 
            style={{backgroundColor: props.color}}/>));
        const numArray = nums.slice(amountNumLock);
        const convertedNumbers = [...dotArray, ...numArray];
        const formattedList = []
        convertedNumbers.forEach((item,index) =>{
            formattedList.push(item)
               
            if ((index + 1) % 4 === 0) {
                formattedList.push(<span key={`space-${index}`}>&nbsp;</span>);
    }

        })
        

return formattedList
       }
    




const CreditCard = (props) => {
    
  
    return (
    <div style={{ backgroundColor: props.bgColor, color: props.color }} className="Card">
      <p>
        <img className="Logo" src={cardType(props.type)} alt="Visa" />
      </p>

      <div className="numberContainer">
        <div> {
           
        }</div>
        <div className="numbers">{numberConverter(props.number,props)}</div>
      </div> 
      
      <div className="cardInfo">
        <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2)}</p>
        <p>{props.bank}</p>
    
        <p className="owner">{props.owner}</p>
    </div>
    </div>
  );
};

export default CreditCard;
