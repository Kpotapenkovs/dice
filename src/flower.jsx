import { useState } from "react";
import "./flower.css";

function Flower() {
 
    const randomNumber = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
  const [flowerValue, setFlowerValue] = useState(randomNumber);

  const [milvainemil, setMilvainemil] = useState(""); 
  const [clickCount, setClickCount] = useState(0); 

  function rollFlower() {
    
    setFlowerValue(flowerValue - 1);
    setClickCount(clickCount + 1);

    
    if (clickCount % 2 === 0) {
      setMilvainemil("mīl");
    } else {
      setMilvainemil("nemīl");
    }

  }

if(flowerValue == 0){
    return (
<p>jums iznāca {milvainemil}!</p>
    );
}else{

  return (
    <article className="flower">
      
      <button onClick={rollFlower}>Noraut</button>
      <p>Atlikušais ziedu skaits: {flowerValue}</p>
      <p>{milvainemil}</p>
    </article>
  );
}
}

export default Flower;
