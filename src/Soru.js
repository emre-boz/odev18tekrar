import { useState, useRef, useEffect } from "react";
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';

function Soru({item}){

    const [gosterinho,setGosterinho]=useState(false);

    return(<>
         <p>{item.title}</p>
     
     <button onClick={()=>setGosterinho(!gosterinho)}>
      {/* {gosterinho?<AiOutlineMinus/>:<AiOutlinePlus/>} */}butonorama
     </button>



     {gosterinho&&<p>{item.info}</p>}
    </>)
}

export default Soru;