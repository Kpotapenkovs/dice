import { useState } from "react";

import "./coin.css";

import coin1 from "./assets/coin/coin1.jpg";
import coin2 from "./assets/coin/coin2.jpg";

const coinImages = [coin1, coin2];

function Coin() {

  const [coinValue, setCoinValue] = useState(1);

  function rollCoin() {

    const randomNumber = Math.floor(Math.random() * 2) + 1;

    setCoinValue(randomNumber);
  }

    return (
    
    <article className="coin">

      <h2>Metamā monēta</h2>

    <button onClick={rollCoin}>Mest</button>

    <img
  src={coinImages[coinValue - 1]}
  alt={"Metamā monēta " + coinValue}
/>
    
    </article>
    
    );

   
  }
  export default Coin;