import react from "react";
import image from './img.jpg';
import { React, useState, props } from "react";

export default function Love(props) {
    const [name, setname] = useState();
    const [crush, setcrush] = useState();
    const [randomm, setrandomm] = useState();
    const [loves, setloves] = useState('loves');
    const [per, setper] = useState('%');


    const namechange = (event) => {
        setname(event.target.value);
      };
      const crushchange = (event) => {
        setcrush(event.target.value);

      };
       const handleClick=()=>{
        const min = 1;
        const max = 100;
        const rand = Math.round(min + Math.random() * (max - min));
        
        setrandomm(Math.round(rand))
        console.log(rand)
      }
    return(
<div>
 
<img src={image} height={200} width={200} />
<h1 id="heading">love Calculator...</h1>

<label htmlFor="">Your Name</label>
      
      <input type="text" className="m-3"  placeholder="First name" value={name}  onChange={namechange}>
      </input>
      <label htmlFor="">Crush name: </label>
      
      <input type="text" className="m-3" placeholder="first name" value={crush} onChange={crushchange}>
      </input>
      <br></br>
      <button id='btn' className="m-5"  onClick={handleClick}>Calculate</button>

<h2 id='result'>{crush} loves {name} {randomm} % </h2>
</div>
    
    )
}
    